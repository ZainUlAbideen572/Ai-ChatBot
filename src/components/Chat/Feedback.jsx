import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { rateConversation } from "../../redux/feedbackSlice";
import { Rating, TextField, Button, Typography } from "@mui/material";
const ChatFeedback = ({ onClose }) => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(null);
  const [feedback, setFeedback] = useState("");
  const id=Math.random()
  const handleSubmit = () => {
    if (rating) {
      dispatch(rateConversation({ id, value: rating, feedback }));
      onClose();

    }
  };

  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      <Typography variant="h6">Rate Your Conversation</Typography>
      
      <Rating
        name="chat-rating"
        value={rating}
        onChange={(event, newValue) => setRating(newValue)}
      />
      
      <TextField
        label="Additional Feedback (Optional)"
        multiline
        rows={3}
        fullWidth
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        style={{ marginTop: "10px" }}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        style={{ marginTop: "10px" }}
      >
        Submit Feedback
      </Button>

    </div>
  );
};

export default ChatFeedback;
