import React from "react";
import { CssBaseline, Container, Box, Typography } from "@mui/material";
import NotificationPage from "./pages/NotificationPage";
import { Log } from "../../logging_middleware/src";

const App: React.FC = () => {
  React.useEffect(() => {
    Log("info", "page", "Notification app shell mounted");
  }, []);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Notification Center
          </Typography>
          <NotificationPage />
        </Box>
      </Container>
    </>
  );
};

export default App;