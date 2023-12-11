import React from "react";
import './Button.css';


export const Button = ({onClick, name,background,width, color,children})=>{
  console.log({ onClick })
  return (
      <button onClick={onClick} style={{ color: color, backgroundColor: background, width: width?`${width}px`:"auto" }}>{children || name}</button>
  );
}

