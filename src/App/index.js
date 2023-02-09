import './App.css';
import CurrencyList from './components/CurrencyList';
import CurrencyCreater from './components/CurrencyCreater';
import Container from '@mui/material/Container';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Container maxWidth="lg">
          <Header />
          <CurrencyList />
          <CurrencyCreater />
        </Container>
      </LocalizationProvider>
    </div>
  );
}

export default App;
