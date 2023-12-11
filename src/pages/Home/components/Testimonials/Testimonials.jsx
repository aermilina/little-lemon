import React from "react";
import "./Testimonials.css";

const reviews = [
    {
        "name": "John Doe",
        "rating": 4,
        "review": "Good restaurant!",
        "photo": "https://img.freepik.com/premium-vector/portrait-of-a-young-man-with-beard-and-hair-style-male-avatar-vector-illustration_266660-423.jpg"
    },
    {
        "name": "Jina Medow",
        "rating": 5,
        "review": "Excellent",
        "photo": "https://cdn.icon-icons.com/icons2/582/PNG/512/girl_icon-icons.com_55043.png"
    },
    {
        "name": "Mr Bin",
        "rating": 5,
        "review": "Perfect",
        "photo":"https://img.freepik.com/premium-vector/portrait-of-a-young-man-with-beard-and-hair-style-male-avatar-vector-illustration_266660-423.jpg"
    },
    {
        "name": "Mrs Green",
        "rating": 5,
        "review": "Perfect",
        "photo": "https://cdn.icon-icons.com/icons2/582/PNG/512/girl_icon-icons.com_55043.png"
    }
]

export const Testimonials = () =>{
    return (
        <section className="testimonials">
        <div className="contentTestimonials">
            <h2 style={{color:"#000"}}>Testimonials</h2>
            <div className="reviews">
                {reviews.map((item)=>{
                    const {name,rating,photo,review} = item;
                    return (<article className="review">
                        <p className="reviewRating">{rating}/5</p>
                       <div className="reviewAuthor">
                            <img className="reviewPhoto" src={photo} width="47px" height="46px" alt={name}/>
                            <p className="authorName">{name}</p>
                        </div>
                        <p className="reviewText">{review}</p>
                    </article>);
                })}
            </div>
        </div>
      </section>
    );
}