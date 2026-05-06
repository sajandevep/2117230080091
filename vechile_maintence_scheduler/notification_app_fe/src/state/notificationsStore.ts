import { useState } from 'react';
import { Log } from '../../../src/client';

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  enabled: boolean;
}

export const useNotificationStore = () => {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  const addNotification = (item: NotificationItem) => {
    Log("frontend", "info", "state", `Adding notification to state: ${item.title}`);
    setNotifications(prev => [item, ...prev]);
  };

  return { notifications, addNotification };
};