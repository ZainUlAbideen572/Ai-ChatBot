const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

const aiResponses = [
    "Sure, tell me more!",
    "That's interesting! Can you elaborate?",
    "I see. What else would you like to ask?",
    "Hmm... that's a good question!",
    "Let me think about that for a moment...",
];

app.get('/api/chat', (req, res) => {
    res.json(aiResponses)
});




app.post('/api/saveMessage', (req, res) => {
    const { chatId, rating, messages } = req.body;
  
    if (!chatId || rating === undefined || !messages) {
      return res.status(400).json({
        success: false,
        message: 'Missing required parameters (chatId, rating, messages).',
      });
    }
  
    console.log('Messages:', messages);
  
    res.json({
      success: true,
      message: 'Rating and messages received successfully.',
    });
});



app.post('/api/feedback', (req, res) => {
    res.json({ status: "success" });
});

app.listen(4000, () => console.log("Server running on port 4000"));
