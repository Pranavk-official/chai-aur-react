// import React from 'react'

import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components/components";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
