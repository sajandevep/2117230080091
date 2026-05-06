import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel, Paper, Typography, Box, Alert } from '@mui/material';
import { Log } from '../../../src/client';
import { notificationApi } from '../api';

export const NotificationForm = ({ onCreated }: { onCreated: (n: any) => void }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ title: '', message: '', enabled: true });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    const val = type === 'checkbox' ? checked : value;
    Log("frontend", "debug", "component", `${name} field changed`);
    setForm(prev => ({ ...prev, [name]: val }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    Log("frontend", "info", "component", "Submit button clicked");

    try {
      const savedData = await notificationApi.saveNotification(form);
      onCreated(savedData);
      Log("frontend", "info", "component", "Notification created successfully");
      setForm({ title: '', message: '', enabled: true });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>New Notification</Typography>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="Title" name="title" fullWidth value={form.title} onChange={handleInputChange} required disabled={loading} />
        <TextField label="Message" name="message" fullWidth multiline rows={3} value={form.message} onChange={handleInputChange} required disabled={loading} />
        <FormControlLabel control={<Switch name="enabled" checked={form.enabled} onChange={handleInputChange} />} label="Enabled" />
        <Button type="submit" variant="contained" disabled={loading}>
          {loading ? "Saving..." : "Create Notification"}
        </Button>
      </Box>
    </Paper>
  );
};