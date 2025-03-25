import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import FeedbackPage from './pages/FeedbackPage';

const App = () => {
  return (
    <div className='bg-blue-400'>
    <Router>
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes>
    </Router>
    </div>

  );
};

export default App;
