import React from 'react';
import CurrencyList from '../components/CurrencyList';
import CurrencyCreater from '../components/CurrencyCreater';

const ListOfCurrenciesPage = () => {
  return (
    <>
      <CurrencyList />
      <CurrencyCreater />
    </>
  );
};

export default ListOfCurrenciesPage;