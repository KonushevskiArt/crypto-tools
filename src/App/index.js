import './App.css';
import CurrencyList from './components/CurrencyList';
import CurrencyCreater from './components/CurrencyCreater';
import Container from '@mui/material/Container';

function App() {
  return (
    <div className="App">
       <Container maxWidth="lg">
        <h2>Currency list</h2>
        <CurrencyList />
        <CurrencyCreater />
      </Container>
    </div>
  );
}

export default App;
