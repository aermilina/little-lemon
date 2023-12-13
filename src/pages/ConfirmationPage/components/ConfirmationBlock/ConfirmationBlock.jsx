import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import "./ConfirmationBlock.css";



export const ConfirmationBlock = () =>{
 
    return(
        <div className="confirmation">
            <FontAwesomeIcon icon={faCircleCheck} style={{color: "#2d6731",}} size={"2xl"} />
            <h3 className="congrats">Congratulations</h3>
            <p>You order has been succesfully recieved!</p>
        </div>
    )
}