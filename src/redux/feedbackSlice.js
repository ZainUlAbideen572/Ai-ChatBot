import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  feedbacks: [],
};

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    rateConversation: (state, action) => {
      const { id, value ,feedback} = action.payload;
      if (!state.feedbacks[id]) {
        state.feedbacks[id] = []; 
      }
      state.feedbacks[id].push({ id, value, feedback });
    }
  },
});

export const { rateConversation } = feedbackSlice.actions;
export default feedbackSlice.reducer;
