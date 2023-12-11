import React from "react";
import './Footer.css';
import Logo from "../../assets/Logo.svg";
import {NavList} from "../NavList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faVideo} from '@fortawesome/free-solid-svg-icons';


export const Footer =()=>{
  return (
      <footer>
        <img  className="footerLogo" src={Logo} alt="Little Lemon"/>
        <div className="footerContent">
          <div className="footerSection">
            <p className="footerHeading">Doormat Navigation</p>
            <NavList/>
          </div>
          <div className="footerSection">
          <p className="footerHeading">Contact</p>
          <ul>
            <li>
              Phone:&nbsp;
              <a target="_blank" href="tel:123456">123456789</a>
            </li>
            <li>
              E-mail:&nbsp;
              <a target="_blank" href="mailto:little-lemon@domain.com">little-lemon@domain.com</a>
            </li>
            <li>
              Address:&nbsp;
              <span>Chicago</span>
            </li>
          </ul>
          </div>
          <div className="footerSection">
          <p className="footerHeading">Social MediaLinks</p>
          <ul>
          <li>
          <FontAwesomeIcon icon={faVideo} />&nbsp;
          <a href="https://youtube.com" target="_blank">Youtube</a>
          </li>
          </ul>
          </div>
        </div>

      </footer>
  )
}

