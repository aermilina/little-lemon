import React from "react";
import {Header,Footer} from "../../components";
import "./Layout.css";

export const Layout=({children})=>{
    console.log(children)
    return (
        <div className="appWrapper">
        <Header/>
            <main>
                {children}
            </main>
        <Footer/>
        </div>
        
    )
}