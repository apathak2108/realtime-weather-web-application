import React from "react";
import HomeContainer from "./containers/home";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <HomeContainer />
      <ToastContainer />
    </>
  );
};

export default App;
