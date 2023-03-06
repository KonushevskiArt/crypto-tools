import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CalculatorsPage from './pages/CalculatorsPage';
import ErrorPage from './pages/ErrorPage';
import ListOfCurrenciesPage from './pages/ListOfCurrenciesPage';
import Root from './components/Root';
import Authorization from './pages/Authorization';

export const router = createBrowserRouter([
  {
    path: "/aa",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "calculators",
        element: <CalculatorsPage />,
      },
      {
        index: true,
        element: <ListOfCurrenciesPage />,
      },
    ],
  },
  {
    path: "/",
    element: <Authorization />,
    errorElement: <ErrorPage />,
  }
]);

const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default AppRouter;