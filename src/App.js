/*
    CS 3354.005 Fall 2022
    Group 5: Dean Greenberg, Noel Johnson, Oscar Mata-Galvan, Vaughan McInerney, Ruchi Patel, Naod Tesfay
    Professor Srimathi Srinivasan

    This file created by Noel Johnson (nxj190008).

    This project (files, organization of folders, github) was set-up by Noel Johnson (nxj190008).

    This is the main file of the React application.
*/

import React, {useState} from 'react';
import './App.css';
// We use Route in order to define the different routes of our application
import { BrowserRouter, Routes, Route } from "react-router-dom";

//importing all the pages need for the app
import AccountPage from './components/screens/accountpage';
import SettingsPage from './components/screens/settingspage';
import TransactionsListPage from './components/screens/transactionslistpage';
import LoginPage from './components/screens/loginpage';
import LandingPage from './components/screens/LandingPage';
import Notifications from './components/screens/NotificationPage';
import SecuritySettings from './components/screens/SecuritySettingPage';
import UserInfo from './components/screens/UserInfoPage';
//import Registration from './components/screens/registration';

//importing the components needed for the app
import Navbar from './navbar/Navbar';

function App() {

  //checking login detials
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  //useState for checking stae
  const [user, setUser] = useState({name:"", email:""})
  //if there is an error
  const [error, setError] = useState("")

  const LoginController = details =>{
    console.log(details);
  }

  const Logout = () =>{
    console.log("Logout")
  }

  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <div className='app'>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login/account" element={<AccountPage />}></Route>
        <Route path="/settings" element={<SettingsPage />}></Route>
        <Route path="/transactions" element={<TransactionsListPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/userinfo" element={<UserInfo />}></Route>
        <Route path="/securitysettings" element={<SecuritySettings />}></Route>
        <Route path="/notificationsettings" element={<Notifications />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
