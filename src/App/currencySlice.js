import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  currencies: { }
}

const storage = JSON.parse(localStorage.getItem('currencies'));

export const currenciesSlice = createSlice({
  name: 'currencies',
  initialState: storage === null ? initialState : ({ currencies: storage }),
  reducers: {
    addCurrency: (state, action) => {
      const { name } = action.payload;
      state.currencies[name] = []
      console.log()
      const newState = JSON.stringify({ ...state.currencies });

      localStorage.setItem('currencies', newState);
    },
    addPurchase: (state, action) => {
      const { name, price, quantity } = action.payload;
      const currentDate = new Date().toLocaleDateString();

      state.currencies[name].push(
        {
          date: currentDate,
          price: price,
          quantity: quantity,
          id: uuidv4(),
        }
      );
      const newState = JSON.stringify({ ...state.currencies });

      localStorage.setItem('currencies', newState);
    },
    removePurchase: (state, action) => {
      const {name, id} = action.payload;

      const purchaseList = state.currencies[name];

      const idx = purchaseList.findIndex(
        (purchase) => id === purchase.id 
      );

      const newPurchaseList = [...purchaseList.slice(0, idx), ...purchaseList.slice(idx + 1)];

      state.currencies[name] = newPurchaseList;

      const newState = JSON.stringify({ ...state.currencies });

      localStorage.setItem('currencies', newState);
    },
    removeCurrency: (state, action) => {
      delete state.currencies[action.payload.name];

      const newState = JSON.stringify({ ...state.currencies });

      localStorage.setItem('currencies', newState);
    },
  },
})

export const { addCurrency, addPurchase, removeCurrency, removePurchase } = currenciesSlice.actions

export default currenciesSlice.reducer