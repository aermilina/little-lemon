import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {Button} from "../../../components/Button";
import {NavList} from "../../NavList";
import "./BurgerMenu.css"

export const BurgerMenu = () =>{

    const [menuState, setMenuState] = useState(false); 

    function toogleMenu(){
        setMenuState(prev => !prev)
    };


    return(
        <>
            <Button  background="transparent" onClick={toogleMenu}>
                <FontAwesomeIcon icon={faBars}/>
            </Button>
            {menuState &&(
                <div className="menuContainer">
                    <nav>
                        <NavList/>
                    </nav>
                </div>
                
            )}
        </>
    )
}