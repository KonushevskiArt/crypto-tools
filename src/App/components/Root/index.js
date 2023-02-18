import React from 'react';
import { Outlet } from "react-router-dom";
import Header from '../Header';
import { redirect } from "react-router-dom";


const Root = () => {
  redirect("/list-of-currencies");

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Root;