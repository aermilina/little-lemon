import React from "react";
import Logo from "../../assets/Logo.svg";
import {Nav} from "../Nav";
import './Header.css';

export const Header=()=> {
  return (
      <header>
        <img src={Logo} alt="Little Lemon"/>
        <Nav/>
      </header>
  );
}


