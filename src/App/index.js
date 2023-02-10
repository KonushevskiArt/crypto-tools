import CurrencyList from './components/CurrencyList';
import CurrencyCreater from './components/CurrencyCreater';
import Container from '@mui/material/Container';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Header from './components/Header';
import { Box } from '@mui/system';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
    error: {
      main: '#d32f2f',
    },
    success: {
      main: '#2e7d32',
    },
    custom: {
      bgMain: '#fcf2f2',
      bgSecond: '#fff7f7' 
    }
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh', backgroundColor: 'custom.bgMain', textAlign: 'center' }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Container maxWidth="lg">
              <Header />
              <CurrencyList />
              <CurrencyCreater />
            </Container>
        </LocalizationProvider>
      </Box>
    </ThemeProvider>
  );
}

export default App;
