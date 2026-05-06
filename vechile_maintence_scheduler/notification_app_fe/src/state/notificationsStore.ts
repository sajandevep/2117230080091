import { useState } from 'react';
// This file is in src/state, so it needs to go up 3 levels to the root src
import { Log } from "../../../../src/client";

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