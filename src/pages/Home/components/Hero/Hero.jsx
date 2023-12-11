import React from "react";
import {Button} from "../../../../components";
import MainPhoto from "../../../../assets/restauranfood.jpg";
import "./Hero.css";

export const Hero = () =>{
    return (
        <section className="hero">
        <div className="content">
          <div className="leftHero">
            <h1 className="mainTitle" style={{color:"#F4CE14"}}>Little Lemon</h1>
            <h2 style={{color:"#FFF"}}>Chicago</h2>
            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Button background="#F4CE14"name="Reserve a Table" width={200} onClick={()=>window.open("/booking")}/>
          </div>
          <div className="rightHero">
            <img src={MainPhoto} alt="Little Lemon"/>
          </div>
        </div>
      </section>
    );
}