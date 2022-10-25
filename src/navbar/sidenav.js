import React from "react";

//importing the icons
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

//this is all the data that will be used for the navbar
export const SideNav =[
{
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome></AiIcons.AiFillHome>,
    cName: "nav-text"
},
{
    title: "Account",
    path: "/account",
    icon: <AiIcons.AiFillAccountBook></AiIcons.AiFillAccountBook>,
    cName: "nav-text"
},
{
    title: "Tranactions",
    path: "/transactions",
    icon: <AiIcons.AiFillMoneyCollect></AiIcons.AiFillMoneyCollect>,
    cName: "nav-text"
},
{
    title: "Settings",
    path: "/settings",
    icon: <AiIcons.AiFillSetting></AiIcons.AiFillSetting>,
    cName: "nav-text"
}
]
