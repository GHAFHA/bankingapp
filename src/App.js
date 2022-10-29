import React, {useState} from 'react';
import './App.css';
// We use Route in order to define the different routes of our application
import { BrowserRouter, Routes, Route } from "react-router-dom";

//importing all the components need for the app
import AccountPage from './components/accountpage';
import SettingsPage from './components/settingspage';
import TransactionsListPage from './components/transactionslistpage';
import LoginPage from './components/loginpage';
import Navbar from './navbar/Navbar';

function App() {

  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <div className='app'>
      <Routes>
        <Route path="/account" element={<AccountPage />}></Route>
        <Route path="/settings" element={<SettingsPage />}></Route>
        <Route path="/transactions" element={<TransactionsListPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
