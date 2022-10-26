import React, {useState} from 'react';
import './App.css';
// We use Route in order to define the different routes of our application
import { BrowserRouter, Routes, Route } from "react-router-dom";

//importing all the components need for the app
import Account from './components/account';
import Settings from './components/settings';
import Transactions from './components/transactions';

function App() {

  return (
    <BrowserRouter>
    <div className='app'>
      <Routes>
        <Route path="/account" element={<Account />}>Account</Route>
        <Route path="/settings" element={<Settings />}>Settings</Route>
        <Route path="/transactions" element={<Transactions />}>Tranactions</Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
