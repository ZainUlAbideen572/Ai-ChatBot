import axios from 'axios'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, endChat, setMessageFeedback } from '../../redux/ChartSlice';
import { v4 as uuidv4 } from 'uuid';
import { Button, TextField, List, ListItem, Typography, IconButton } from '@mui/material';
import { ThumbUp, ThumbDown } from '@mui/icons-material';
import ChatFeedback from './Feedback';
import { useNavigate } from 'react-router-dom';
const ChatWindow = () => {
const navigate=useNavigate()
  const [input, setInput] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const chatId = 'default-chat'
  const messages = useSelector((state) => state.chat.conversations[chatId]) || [];
  const [isChatEnded, setIsChatEnded] = useState(false);
  const sendMessage = async () => {
    if (!input) return;
    const userMessage = { id: uuidv4(), text: input, sender: 'user' };
    dispatch(addMessage({ id: chatId, message: userMessage }));

    try {
      const res = await axios.get("http://localhost:4000/api/chat")
      const randomIndex = Math.floor(Math.random() * res.data.length);
      const aiMessage = { id: uuidv4(), text: res.data[randomIndex], sender: 'ai' };
      dispatch(addMessage({ id: chatId, message: aiMessage }))
      setInput('')
    } catch (err) {
      console.log(err)
    }
  };

  const handleFeedback = (messageId, feedback) => {
    dispatch(setMessageFeedback({ chatId, messageId, feedback }));
  };

  const clearChat = () => {
    dispatch(endChat());
    setIsChatEnded(true); 
  };


  const disableEndChat=messages?.length === 0

  return (
    <div>
      <List>
        {messages && messages.map((msg) => (
          <ListItem key={msg.id}>
            <Typography variant="body1">
            </Typography>
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ display: "flex", alignItems: "center", gap: "8px" }} 
            >
              <span>{msg.text}</span>
              {msg.sender === "ai" && (
                <div>
                  <IconButton
                    color={msg.feedback === "like" ? "primary" : "default"}
                    onClick={() => handleFeedback(msg.id, "like")}
                  >
                    <ThumbUp />
                  </IconButton>
                  <IconButton
                    color={msg.feedback === "dislike" ? "error" : "default"}
                    onClick={() => handleFeedback(msg.id, "dislike")}
                  >
                    <ThumbDown />
                  </IconButton>
                </div>
              )}
            </div>;
          </ListItem>
        ))}
      </List>
      <TextField value={input} onChange={(e) => setInput(e.target.value)} fullWidth />
      <Button onClick={sendMessage}>Send</Button>
      <Button onClick={clearChat} disabled={disableEndChat}>End Chat</Button>
      {isChatEnded && <ChatFeedback chatId={chatId} onClose={() => setIsChatEnded(false)} />}
      <Button onClick={()=>navigate('/feedback')}>Go to Listof FeedBacks</Button>
       


    </div>
  )

};

export default ChatWindow;
