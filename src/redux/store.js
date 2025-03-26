import { configureStore } from '@reduxjs/toolkit';
import  chatReducer from './ChatSlice';
import feedbackReducer from './feedbackSlice'
export const store = configureStore({
  reducer: {
    chat: chatReducer,
    feedback: feedbackReducer,
  },
});

