import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { addPurchase } from "../../currencySlice";
import { useForm} from "react-hook-form";

const PurchaseCreater = ({ name }) => {
  const { register, reset, handleSubmit, formState: { errors } } = useForm();

  const dispatch = useDispatch()

  const onSubmit = ({ price, quantity }) => {
    console.log(name, price, quantity)
    dispatch(addPurchase({name, price, quantity}));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} 
      sx={{
        p: "20px",
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'start',
      }}
    >
      <Box
        p='20px'
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <TextField 
          id="standard-basic" 
          label="Price" 
          variant="standard" 
          sx={{
            marginRight: '20px'
          }}
          {...register("price", {
            required: "Required field",
            min: 0.000000000001,
            pattern: {
              value: /^[0-9]+$/,
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
              value: /^[0-9]+$/,
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
        >
          Save purchase
        </Button>
      </Box>
    </form>
    
  );
};

export default PurchaseCreater;