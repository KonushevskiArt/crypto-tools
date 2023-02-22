import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Typography } from '@mui/material';

const CommissionCalculatorPage = () => {
  const { t } = useTranslation();

  const [quantity, setQuantity] = React.useState(0);
  const [initialMargin, setInitialMargin] = React.useState(0);
  const [profitAndLoss, setProfitAndLoss] = React.useState(0);
  const [profitAndLossPercentages, setProfitAndLossPercentages] = React.useState(0);
  const [ROI, setROI] = React.useState(0);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ creditLeverage, amount, entryPrice, closingPrice }) => {

    const currentQuantity = parseFloat(((amount * creditLeverage) / entryPrice).toFixed());
    const currentProfitAndLoss = parseFloat(currentQuantity * (closingPrice - entryPrice).toFixed());
    const currentProfitAndLossPercentages = parseFloat(currentProfitAndLoss / (amount / 100)).toFixed();
    const currentInitialMargin = parseFloat((currentQuantity * entryPrice) / creditLeverage).toFixed();

    setQuantity(currentQuantity);
    setInitialMargin(currentInitialMargin);
    setProfitAndLoss(currentProfitAndLoss);
    setProfitAndLossPercentages(currentProfitAndLossPercentages);
    setROI(0);
  };

  const handleReset = () => {
    reset();
  }

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
    <Box 
      sx={{
        display: 'flex', 
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex', 
          justifyContent: 'center',
          backgroundColor: "custom.foreground",
          width: '700px',
          borderRadius: '10px', 
          marginTop: '30px'
        }}
      >
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
                key={registerName}
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
                error={errors && !!errors[registerName]}
                helperText={errors && errors[registerName] ? errors[registerName].message : null}
              />
            )}

            <TextField
              id="standard-basic"
              label={t("Quantity")}
              value={quantity}
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
            <Box>
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
              <Button
                size="small"
                color="error"
                type="button"
                variant="contained"
                sx={{
                  margin: "10px",
                }}
                onClick={handleReset}
              >
                {t("Reset")}
              </Button>
            </Box>
            
          </Box>
        </form>
        <Box sx={{ pt: '20px' }}>
          <Typography 
            sx={{ padding: '12px', borderRadius: '5px', width: '100%'}}
            paragraph={true}
          >
            Начальная маржа: {initialMargin}
          </Typography>
          <Typography 
            sx={{ padding: '12px', borderRadius: '5px', width: '100%'}}
            paragraph={true}
          >
            Прибыль / убыток: {profitAndLoss}
          </Typography>
          <Typography
            sx={{ padding: '12px', borderRadius: '5px', width: '100%'}}
            paragraph={true}
          >
            Прибыль / убыток(%): {profitAndLossPercentages}
          </Typography>
          <Typography
            sx={{ padding: '12px', borderRadius: '5px', width: '100%'}} 
            paragraph={true}
          >
            ROI: {ROI}
          </Typography>
          
        </Box>
      </Box>
    </Box>
  );
};

export default CommissionCalculatorPage;