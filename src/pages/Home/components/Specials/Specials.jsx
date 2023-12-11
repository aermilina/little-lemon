import React from "react";
import {Button} from "../../../../components";
import "./Specials.css";
import GreekSalad from "../../../../assets/greek salad.jpg";
import Bruchetta from "../../../../assets/bruchetta.svg";
import LemonDessert from "../../../../assets/lemon dessert.jpg";
import {Link} from "react-router-dom";

const meals = [
    {
        "name": "Greek Salad",
        "price": 12.99,
        "link": "/order/salad",
        "picture": `${GreekSalad}`,
        "description": "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
    },
    {
        "name": "Bruchetta",
        "price": 5.99,
        "link": "/order/bruchetta",
        "picture": `${Bruchetta}`,
        "description": "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
    },
    {
        "name": "Lemon Dessert",
        "price": 5.00,
        "link": "/order/dessert",
        "picture": `${LemonDessert}`,
        "description": "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
    }
]

export const Specials = () =>{
    return (
        <section className="specials" id="menu">
        <div className="contentSpecials">
          <div className="specialsHeader">
            <h2 style={{color:"#000"}}>This week specials!</h2>
            <Button background="#F4CE14"name="Online menu" width={200} onClick={()=>window.open("/menu")}/>
          </div>
            <div className="meals">
                {meals.map((item)=>{
                    const {name,price,picture,description,link} = item;
                    return (<article className="meal">
                        <img className="mealImage" src={picture} alt={name}/>
                        <div className="mealHeading">
                            <h3 className="mealTitle">{name}</h3>
                            <span className="mealPrice">$ {price.toFixed(2)}</span>
                        </div>
                        <p className="mealDescription">{description}</p>
                        <Link to={link} className="orderMeal">Order a delivery</Link>
                    </article>);
                })}
            </div>
        </div>
      </section>
    );
}