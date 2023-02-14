import React from 'react';
import ColorThemeContext from './colorContext';
import CurrencyList from './components/CurrencyList';
import CurrencyCreater from './components/CurrencyCreater';
import Container from '@mui/material/Container';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Header from './components/Header';
import { Box } from '@mui/system';


function App() {
  return (
      <ColorThemeContext> 
        <Box sx={{ minHeight: '100vh', backgroundColor: 'custom.background', textAlign: 'center' }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Container maxWidth="lg">
                <Header />
                <CurrencyList />
                <CurrencyCreater />
              </Container>
          </LocalizationProvider>
        </Box>
      </ColorThemeContext>
  );
}

export default App;
