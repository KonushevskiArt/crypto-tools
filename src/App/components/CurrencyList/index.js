import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CurrencyItem from '../CurrencyItem';
import { useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { removeCurrency, toggleAccardion } from '../../currencySlice';
import { useDispatch } from "react-redux";
import Box from '@mui/material/Box';

const CurrencyList = () => {
  const dispatch = useDispatch();
  const currencies = useSelector((state) => state.currencies.currencies)
  const opendAccordions = useSelector((state) => state.currencies.opendAccordions) || {}

  const currenciesArr = Object.keys(currencies);

  const handleRemoveCurrency = (name) => {
    dispatch(removeCurrency({name}));
  }

  const handleAccordionChange = (name) => {
    dispatch(toggleAccardion({name}))
  }

  return (
    <div>
      {currenciesArr.map((currencyName) => 
        <Accordion 
          expanded={opendAccordions[currencyName] || false} 
          key={currencyName + Date.now()} 
          sx={{ background: '#fff7f7'}} 
          onChange={() => handleAccordionChange(currencyName)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box sx={{"display": 'flex', 'alignItems': 'center'}}>
              <Typography mr='40px' >{currencyName}</Typography>
              <Button 
                variant="outlined" 
                endIcon={<DeleteIcon />}
                color="error"
                size="small"
                onClick={(e) => handleRemoveCurrency(e, currencyName)} 
              > 
                Delete
              </Button>
            </Box>
          </AccordionSummary>
          <AccordionDetails  >
            <CurrencyItem name={currencyName} />
          </AccordionDetails>
        </Accordion>
      )}
    </div>
  );
};

export default CurrencyList;