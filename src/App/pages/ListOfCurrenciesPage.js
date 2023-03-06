import React from 'react';
import CurrencyList from '../components/currencyPurchaseList/CurrencyList';
import CurrencyCreater from '../components/currencyPurchaseList/CurrencyCreater';

const ListOfCurrenciesPage = () => {
  return (
    <>
      <CurrencyList />
      <CurrencyCreater />
    </>
  );
};

export default ListOfCurrenciesPage;