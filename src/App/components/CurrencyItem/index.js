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
import Button from '@mui/material/Button';
import { removePurchase } from '../../currencySlice';
import { useDispatch } from "react-redux";

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

  const currencyData = useSelector((state) => state.currencies[name]);

  const handleRemovePurchase = (e, id) => {
    e.preventDefault();
    dispatch(removePurchase({name, id}));
  }
  
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
          {currencyData.map(({date, price, quantity, id}) => (
            <StyledTableRow
              key={id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{date}</TableCell>
              <TableCell align="center">{price}</TableCell>
              <TableCell align="center">{quantity}</TableCell>
              <TableCell align="center">{parseFloat((price * quantity).toFixed(4))}</TableCell>
              
              <TableCell align="center">
                <Button 
                  variant="outlined" 
                  endIcon={<DeleteIcon />}
                  onClick={(e) => handleRemovePurchase(e, id)} 
                  color="error"
                  size="small"
                > 
                  Delete
                </Button>
              </TableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <PurchaseCreater name={name} />
    </TableContainer>
  );
};

export default CurrencyItem;