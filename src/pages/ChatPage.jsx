import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import {Logs,Window} from '../components/Chat';

const ChatPage = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        AI Chat
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper elevation={3} style={{ padding: '1rem', height: '100%' }}>
            <Typography variant="h6">Past Conversations</Typography>
            <Logs/>  
          </Paper>
        </Grid>

        <Grid item xs={9}>
          <Paper elevation={3} style={{ padding: '1rem', height: '100%' }}>
            <Window />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ChatPage;
