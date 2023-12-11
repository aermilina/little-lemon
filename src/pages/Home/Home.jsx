import React from "react";
import {Hero,Specials,Testimonials,About} from "./components";



export const Home = () =>{
    return(
        <>
            <Hero/>
            <Specials/>
            <Testimonials/>
            <About/>
        </>
    )
}