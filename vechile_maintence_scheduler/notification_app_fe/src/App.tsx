import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { NotificationPage } from './pages/NotificationPage';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    background: { default: '#f8f9fa' }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NotificationPage />
    </ThemeProvider>
  );
}

export default App;