import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CommissionCalculator from './pages/CommissionCalculatorPage';
import ErrorPage from './pages/ErrorPage';
import ListOfCurrenciesPage from './pages/ListOfCurrenciesPage';
import Root from './components/Root';

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "commission-calculator",
        element: <CommissionCalculator />,
      },
      {
        path: "list-of-currencies",
        element: <ListOfCurrenciesPage />,
      },
    ],
  },
]);

const AppRouter = () => {
  return (
    <RouterProvider router={routes} />
  );
};

export default AppRouter;