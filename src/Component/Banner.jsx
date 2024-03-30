import React from "react";
import img1 from "../Image/sadaq.png";
import Button from "./Btn";
 const Banner = () => {
    return (
        <div className="banContainer">
            <div className="info">
          
            <div className="text">
                <h1>I`m Sadak, </h1>
                <h1>front end developer </h1>
                <p>
                Hello! Welcome to my personal portfolio website. My name is [Sadak Abdullahi ],
                <br></br> and  I'm excited to share with you some of the things I love to do! Here ........................,
                <br></br> you'll find a collection of my work, 
                including projects I've completed, artwork I've created, and experiences I've had. 
                Whether it's designing websites, crafting beautiful illustrations.
                </p>
                <Button/>
            </div>
            <div className="img">
                <img src={img1} alt="" />
        
            </div>
         </div>
           
            
        </div>
    )
    }  
    export default Banner;