import React from "react";
import Logo from "../../assets/Logo.svg";
import {BurgerMenu} from "./components";
import './Header.css';
import {Nav} from "../Nav";
import { useResponsive } from "../../ui/media";

export const Header=()=> {

  const {isMobile} = useResponsive();

  return (
      <header>
        <img src={Logo} alt="Little Lemon"/>
          {isMobile && <BurgerMenu/>}
          {!isMobile && <Nav/>}
      </header>
  );
}


