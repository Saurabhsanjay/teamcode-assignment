// App.js

import React from "react";
import {  Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
 <>

      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/registration" element={<RegistrationPage/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
 </>
    
  );
};

export default App;
