import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addCurrency } from "../../currencySlice";
import { useForm} from "react-hook-form";
import { TextField } from "@mui/material";

const CurrencyCreater = () => {
  const { register, reset, handleSubmit, formState: { errors } } = useForm();

  const dispatch = useDispatch()

  const onSubmit = ({ name }) => {
    console.log(name);
    dispatch(addCurrency({name}));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        component="div"
        sx={{
          p: "20px",
          display: "flex",
          alignItems: 'center'
        }}
      >
        <TextField   
          id="standard-basic" 
          label="Name" 
          variant="standard" 
          {...register("name", {required: "Required field", maxLength: 20})}
          error={!!errors?.name}
          helperText={errors?.name ? errors.name.message : null}
        />
        <Button 
          size="small" 
          type="submit" 
          variant="contained" 
          color="success"
          sx={{ marginLeft: "20px"}} 
        >
          Save currency
        </Button>
      </Box>
    </form>

  );
};

export default CurrencyCreater;
