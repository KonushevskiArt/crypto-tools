import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const CommissionCalculatorPage = () => {
  const { t } = useTranslation();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ price, quantity }) => {
    
    reset();
  };

  const numberValidationExp = /^[0-9]*[.]?[0-9]+$/;

  const fieldsInfoArr = [
    {
      translationName: 'CreditLeverage',
      registerName: 'creditLeverage'
    },
    {
      translationName: 'Amount',
      registerName: 'amount'
    },
    {
      translationName: 'EntryPrice',
      registerName: 'entryPrice'
    },
    {
      translationName: 'ClosingPrice',
      registerName: 'closingPrice'
    },
  ];

  return (
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          p="20px"
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: 'column',
            flexWrap: "wrap",
          }}
        >
          {fieldsInfoArr.map(({ registerName, translationName }) => 
            <TextField
              id="standard-basic"
              label={t(translationName)}
              variant="outlined"
              sx={{ marginBottom: "20px" }}
              {...register(registerName, {
                required: t("Required_field"),
                min: 0.000000000001,
                pattern: {
                  value: numberValidationExp,
                  message: t("Invalid_value"),
                },
              })}
              error={errors & !!errors[registerName]}
              helperText={errors & errors[registerName] ? errors[registerName].message : null}
            />
          )}

           <TextField
            id="standard-basic"
            label={t("Quantity")}
            variant="outlined"
            disabled
            sx={{ marginBottom: "20px" }}
            // {...register("quantity", {
            //   required: t("Required_field"),
            //   min: 0.000000000001,
            //   pattern: {
            //     value: numberValidationExp,
            //     message: t("Invalid_value"),
            //   },
            // })}
            // error={!!errors?.quantity}
            // helperText={errors?.quantity ? errors.quantity.message : null}
          />
          <Button
            size="small"
            color="success"
            type="submit"
            variant="contained"
            sx={{
              margin: "10px",
            }}
          >
            {t("Calculate")}
          </Button>
        </Box>
      </form>
      <Box>
        Results
      </Box>
    </Box>
  );
};

export default CommissionCalculatorPage;