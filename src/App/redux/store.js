import { configureStore } from "@reduxjs/toolkit";
import currenciesReducer from "./currencySlice";

export const store = configureStore({
  reducer: {
    currencies: currenciesReducer,
  },
});
