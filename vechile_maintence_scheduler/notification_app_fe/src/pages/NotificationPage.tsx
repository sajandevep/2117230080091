import React, { useEffect } from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { NotificationForm } from '../components/Notification';
import { NotificationList } from '../components/NotificationList';
import { useNotificationStore } from '../state/notificationStore';
import { Log } from '../../../src/client';

export const NotificationPage = () => {
  const { notifications, addNotification } = useNotificationStore();

  useEffect(() => {
    Log("frontend", "info", "page", "Notification page loaded");
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Notification Manager
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <NotificationForm onCreated={addNotification} />
        </Grid>
        <Grid item xs={12} md={7}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6">Recent Notifications</Typography>
          </Box>
          <NotificationList items={notifications} />
        </Grid>
      </Grid>
    </Container>
  );
};