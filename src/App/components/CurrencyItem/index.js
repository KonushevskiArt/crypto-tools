import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import PurchaseCreater from '../PurchaseCreater';
import { useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { removePurchase } from '../../currencySlice';
import { useDispatch } from "react-redux";
import { TableFooter } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const CurrencyItem = ({ name }) => {
  const dispatch = useDispatch()

  const currencyData = useSelector((state) => {
    return state.currencies.currencies[name]
  });

  const averagePrice = () => {
    const sum = currencyData.reduce((acc, currency) => (acc + Number(currency.price)), 0);
    return parseFloat((sum / currencyData.length).toFixed(4));
  };

  const totalQuantity = () => {
    return currencyData.reduce((acc, currency) => (acc + Number(currency.quantity)), 0);
  }

  const totalCosts = () => {
    const arrOfCosts = currencyData
    .map((currency) => currency.price * currency.quantity)
    .reduce((acc, cost) => (acc + cost), 0);
    return parseFloat(arrOfCosts.toFixed(4));
  }

  const handleRemovePurchase = (e, id) => {
    e.preventDefault();
    dispatch(removePurchase({name, id}));
  }

  const purchasesComparison = (purchase1, purchase2) => {
    const date1 = Number(purchase1.date);
    const date2 = Number(purchase2.date);
    // console.log(purchase1.date)
    if (date1 < date2) {
      return -1;
    } 
    return 1;
  }

  // console.log(currencyData)
  // console.log( Array.from(currencyData).sort(purchasesComparison))
  
  return (
    <TableContainer sx={{ background: '#fff2eb'}}  component={Paper}> 
      <Table sx={{ minWidth: 650,}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Costs</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currencyData ? 
            Array.from(currencyData).sort(purchasesComparison).map(({date, price, quantity, id}) => (
              <StyledTableRow
                key={id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {/* make view of date */}
                <TableCell component="th" scope="row">{new Date(date).toLocaleDateString('ru-RU')}</TableCell>
                <TableCell align="center">{price}</TableCell>
                <TableCell align="center">{quantity}</TableCell>
                <TableCell align="center">{parseFloat((price * quantity).toFixed(4))}</TableCell>
                
                <TableCell align="center">
                  <Tooltip title="Delete">
                    <IconButton 
                      color="error"
                      size="small"
                      onClick={(e) => handleRemovePurchase(e, id)} 
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
                
              </StyledTableRow>
            )) : null
          } 
        </TableBody>
        <TableFooter >
          <TableRow>
            <TableCell 
              sx={{fontSize: '1rem', fontWeight: '700', textDecoration: 'underline', color: 'rgba(0, 0, 0, 0.9)'}}>
              Outcome
            </TableCell>
            <TableCell 
              sx={{fontSize: '1rem', fontWeight: '700', textDecoration: 'underline', color: 'rgba(0, 0, 0, 0.9)'}} 
              align="center">{averagePrice() || 0}
            </TableCell>
            <TableCell 
              sx={{fontSize: '1rem', fontWeight: '700', textDecoration: 'underline', color: 'rgba(0, 0, 0, 0.9)'}} 
              align="center">{totalQuantity() || 0}
            </TableCell>
            <TableCell 
              sx={{fontSize: '1rem', fontWeight: '700', textDecoration: 'underline', color: 'rgba(0, 0, 0, 0.9)'}} 
              align="center">{totalCosts() || 0}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <PurchaseCreater name={name} />
    </TableContainer>
  );
};

export default CurrencyItem;