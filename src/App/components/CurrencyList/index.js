import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CurrencyItem from '../CurrencyItem';
import { useSelector } from 'react-redux';
import { removeCurrency, toggleAccardion } from '../../currencySlice';
import { useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import CurrencyNameEditor from '../CurrencyNameEditor';

const CurrencyList = () => {

  const dispatch = useDispatch()

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
            
            <Box sx={{"display": 'flex', 'alignItems': 'center', 'justifyContent': 'space-between', 'width': '100%'}}>
              <CurrencyNameEditor currencyName={currencyName} /> 
              <Tooltip title="Delete">
                <IconButton 
                  type='button'
                  color="error"
                  size="small"
                  sx={{marginRight: '30px'}}
                  onClick={() => handleRemoveCurrency(currencyName)} 
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
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