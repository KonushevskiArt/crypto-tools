import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  currencies: {
    "BTC": [
      {
        date: '01.02.03',
        price: '23',
        quantity: '0.2',
        id: uuidv4(),
      },
      {
        date: '01.02.03',
        price: '23',
        quantity: '0.2',
        id: uuidv4(),
      }
    ]
  }
}

const storage = JSON.parse(localStorage.getItem('currencies'));
console.log(storage)

export const currenciesSlice = createSlice({
  name: 'currencies',
  initialState: storage === null ? initialState : (storage),
  reducers: {
    addCurrency: (state, action) => {
      const { name } = action.payload;
      state[name] = []

      const newState = JSON.stringify({ ...state });

      localStorage.setItem('currencies', newState);
    },
    addPurchase: (state, action) => {
      const { name, price, quantity } = action.payload;
      const currentDate = new Date().toLocaleDateString();

      state[name].push(
        {
          date: currentDate,
          price: price,
          quantity: quantity,
          id: uuidv4(),
        }
      );
      const newState = JSON.stringify({ ...state });

      localStorage.setItem('currencies', newState);
      console.log(state);
    },
    removePurchase: (state, action) => {
      const {name, id} = action.payload;

      const purchaseList = state[name];

      const idx = purchaseList.findIndex(
        (purchase) => id === purchase.id 
      );

      const newPurchaseList = [...purchaseList.slice(0, idx), ...purchaseList.slice(idx + 1)];

      state[name] = newPurchaseList;

      const newState = JSON.stringify({ ...state });

      localStorage.setItem('currencies', newState);
    },
    removeCurrency: (state, action) => {
      delete state[action.payload.name];

      const newState = JSON.stringify({ ...state });

      localStorage.setItem('currencies', newState);
    },
  },
})

export const { addCurrency, addPurchase, removeCurrency, removePurchase } = currenciesSlice.actions

export default currenciesSlice.reducer