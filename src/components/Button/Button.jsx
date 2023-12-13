import React from "react";
import './Button.css';


export const Button = ({onClick, name,background,width, color,children})=>{

  return (
      <button onClick={onClick} title={name} role="button" style={{ color: color, backgroundColor: background, width: width?`${width}px`:"auto" }}>{children || name}</button>
  );
}

