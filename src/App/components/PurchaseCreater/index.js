import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { addPurchase } from "../../currencySlice";
import { useForm} from "react-hook-form";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';

const PurchaseCreater = ({ name }) => {
  const { register, reset, handleSubmit, formState: { errors } } = useForm();

  const [dateValue, setDateValue] = React.useState(dayjs(new Date()));

  const handleChange = (newValue) => {
    setDateValue(newValue);
  };

  const dispatch = useDispatch()

  const onSubmit = ({ price, quantity, date }) => {
    dispatch(addPurchase({name, price, quantity, date}));
    reset();
  };
  
  const numberValidationExp = /^[0-9]*[.,]?[0-9]+$/;

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <Box
        p='20px'
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            label="Date&Time picker"
            value={dateValue}
            onChange={handleChange}
            
            renderInput={(params) => (
              <TextField 
                size="small"
                sx={{ marginRight: '20px' }}
                {...params}
                {...register("date", {
                  required: "Required field",
                })}
              />
            )}
          />
        </LocalizationProvider>
        <TextField 
          id="standard-basic" 
          label="Price" 
          variant="standard" 
          sx={{ marginRight: '20px' }}
          {...register("price", {
            required: "Required field",
            min: 0.000000000001,
            pattern: {
              value: numberValidationExp,
              message: 'Invalid value'
            }
          })}
          error={!!errors?.price}
          helperText={errors?.price ? errors.price.message : null}
        />
        <TextField 
          sx={{
            marginRight: '20px'
          }}
          id="standard-basic" 
          label="Quantity" 
          variant="standard" 
          {...register("quantity", {
            required: "Required field",
            min: 0.000000000001,
            pattern: {
              value: numberValidationExp,
              message: 'Invalid value'
            }
          })}
          error={!!errors?.quantity}
          helperText={errors?.quantity ? errors.quantity.message : null}
        />
        <Button 
          size="small" 
          color="success" 
          type='submit'
          variant="contained"
          sx={{
            margin: '10px'
          }}
        >
          Save purchase
        </Button>
      </Box>
    </form>
    
  );
};

export default PurchaseCreater;