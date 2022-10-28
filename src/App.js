import React, {useState} from 'react';
import './App.css';
// We use Route in order to define the different routes of our application
import { BrowserRouter, Routes, Route } from "react-router-dom";

//importing all the components need for the app
import Account from './components/accountpage';
import Settings from './components/settingspage';
import Transactions from './components/transactionslistpage';
import Login from './components/loginpage';

function App() {

  return (
    <BrowserRouter>
    <div className='app'>
      <Routes>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/transactions" element={<Transactions />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
