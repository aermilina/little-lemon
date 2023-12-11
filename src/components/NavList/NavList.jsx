import React from "react";
import {HashLink as Link} from "react-router-hash-link";

export const NavList = () =>{
  return (
        <ul>
          <li><Link to="..">Home</Link></li>
            <li><Link to="..">About</Link></li>
            <li><Link to="/#menu">Menu</Link></li>
            <li><Link to="..">Reservations</Link></li>
            <li><Link to="..">Order online</Link></li>
            <li><Link to="..">Login</Link></li>
        </ul>
  );
}


