import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Chip,
  Stack as MuiStack,
} from "@mui/material";
import { Log } from "../../../logging_middleware/src";

interface Notification {
  id: string;
  title: string;
  message: string;
  enabled: boolean;
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    title: "Daily summary",
    message: "Your daily summary is ready",
    enabled: true,
  },
  {
    id: "2",
    title: "Promo",
    message: "Special offer ends today",
    enabled: false,
  },
];

const NotificationList: React.FC = () => {
  const [items, setItems] = React.useState<Notification[]>([]);

  React.useEffect(() => {
    Log("info", "component", "NotificationList mounted");
    setItems(mockNotifications);
    Log("debug", "state", "Notifications loaded into state");
  }, []);

  return (
    <List>
      {items.map((n) => (
        <ListItem key={n.id} disableGutters>
          <ListItemText primary={n.title} secondary={n.message} />
          <MuiStack direction="row" spacing={1}>
            <Chip
              label={n.enabled ? "Enabled" : "Disabled"}
              color={n.enabled ? "success" : "default"}
            />
          </MuiStack>
        </ListItem>
      ))}
    </List>
  );
};

export default NotificationList;