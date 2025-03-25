import React, { useState } from "react";
import { ThumbUp, ThumbDown } from "@mui/icons-material";
import { Button, Modal, Box, Typography } from '@mui/material';
import { useSelector } from "react-redux";

const ConversationHistory = () => {
  const pastMessages = useSelector((state) => state.chat.pastConversations);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShare = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const getShareText = () => {
    return pastMessages.map((conversation) => {
      const messages = conversation.messages.map(
        (message) => `${message.sender}: ${message.text}`
      ).join('\n');
      return messages;
    }).join('\n\n');
  }

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(getShareText());
      alert('Copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy:', error);
      alert('Failed to copy.');
    }
  };

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(getShareText())}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;

  return (
    <div className="p-3 my-2 rounded-lg bg-gray-200 text-black">
      <div className="flex flex-col space-y-4">
        {pastMessages.map((m) => (
          <div key={m.id} className="flex flex-col gap-2">
            {m.messages.map((message, index) => (
              <div key={index} className="flex flex-row items-center gap-2">
                <span className="font-bold">{message.sender}:</span>
                <span>{message.text}</span>
                <span>
                  {message?.feedback === "like" ? (
                    <ThumbUp style={{ color: "green" }} />
                  ) : message?.feedback === "dislike" ? (
                    <ThumbDown style={{ color: "red" }} />
                  ) : null}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
      {pastMessages.length > 0 && <Button onClick={handleShare}>Share Conversation</Button>}

      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
          <Typography variant="h6" component="h2">Share Conversation</Typography>
          <textarea value={getShareText()} readOnly style={{ width: '100%', height: '150px', marginBottom: '10px' }} />
          <Button onClick={handleCopyToClipboard}>Copy to Clipboard</Button>
          <a href={twitterUrl} target="_blank" rel="noopener noreferrer"><Button>Share on Twitter</Button></a>
          <a href={facebookUrl} target="_blank" rel="noopener noreferrer"><Button>Share on Facebook</Button></a>
          <Button onClick={handleCloseModal}>Close</Button>
        </Box>
      </Modal>


    </div>
  );
};

export default ConversationHistory;