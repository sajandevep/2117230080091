import React, { useEffect } from 'react';
import { List, ListItem, ListItemText, Paper, Typography, Chip, Divider } from '@mui/material';
import { Log } from '../../../src/client';

export const NotificationList = ({ items }: { items: any[] }) => {
  useEffect(() => {
    Log("frontend", "info", "component", "Notification list mounted");
  }, []);

  if (items.length === 0) {
    return (
      <Paper sx={{ p: 4, textAlign: 'center', bgcolor: '#f5f5f5' }}>
        <Typography color="textSecondary">No notifications yet.</Typography>
      </Paper>
    );
  }

  return (
    <Paper elevation={3}>
      <List>
        {items.map((item, index) => (
          <React.Fragment key={item.id}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={item.title}
                secondary={item.message}
              />
              <Chip 
                label={item.enabled ? "Active" : "Disabled"} 
                color={item.enabled ? "success" : "default"} 
                size="small" 
              />
            </ListItem>
            {index < items.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};