import React from "react";
import './Button.css';


export const Button = ({action, name,background, color})=>{
  return (
      <button onClick={action} style={{ color: color, backgroundColor: background }}>{name}</button>
  );
}

