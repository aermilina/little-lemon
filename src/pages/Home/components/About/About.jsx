import React from "react";
import MainPhoto from "../../../../assets/restauranfood.jpg";
import "./About.css";

export const About = () =>{
    return (
        <section className="about">
        <div className="contentAbout">
          <div className="leftAbout">
            <h2 className="aboutTitle" style={{color:"#000"}}>Little Lemon</h2>
            <h3 style={{color:"#000"}}>Chicago</h3>
            <p className="aboutDesc">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
          </div>
          <div className="rightAbout">
            <img src={MainPhoto} alt="Little Lemon"/>
          </div>
        </div>
      </section>
    );
}