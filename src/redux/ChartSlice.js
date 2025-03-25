import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  conversations: {},
  pastConversations:[],
  rating:0
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      const { id,message } = action.payload;
      // const {id}=message
      if (!state.conversations[id]) {
        state.conversations[id] = [];
      }
      state.conversations[id].push({...message});
    },
    setMessageFeedback: (state, action) => {
      const { chatId, messageId, feedback } = action.payload;
      const messages = state.conversations[chatId] || [];
      const message = messages.find((msg) => msg.id === messageId);
      if (message) {
        message.feedback = feedback;
      }
    },  

    endChat: (state) => {
      Object.keys(state.conversations).forEach((id) => {
        state.pastConversations.push({
          id,
          messages: state.conversations[id],
          timestamp: Date.now(),
        });
      });
    
      state.conversations = {};
    },
    rateConversation: (state, action) => {
      console.log(action.payload, 'payload');
      const { chatId, value ,feedback} = action.payload;
      const { newValue } = value; 
      console.log(action.payload, 'new');
    
      if (state.conversations[chatId]) {
        state.conversations[chatId].rating = newValue; 
        state.conversations[chatId].feedback=feedback
      }
    }
    
  }
  
  })


export const { addMessage ,endChat,setMessageFeedback,rateConversation} = chatSlice.actions;
export default chatSlice.reducer;
