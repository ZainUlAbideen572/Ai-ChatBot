import { configureStore } from '@reduxjs/toolkit';
import  chatReducer from './ChartSlice';
import feedbackReducer from './feedbackSlice'
export const store = configureStore({
  reducer: {
    chat: chatReducer,
    feedback: feedbackReducer,
  },
});

