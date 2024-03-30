import React from "react";
import img4 from "../Image/sadak.png"
import Button from "./Btn";
const About = () => {
    return(
       <div className="about">
        <h1 className="title">About Me</h1>
        <div className="row">
            <div className="col1">
            
                    <img src={img4} alt="" />
                

            </div>
            <div className="col2">
                <h1>Hello I'M Junior Eng</h1>
                <p>Hello! Welcome to my personal portfolio website. My name is [Sadak Abdullahi ], and I'm excited to share with you some of the things I love to do! Here, you'll find a collection of my work, including projects I've completed, artwork I've created, and experiences I've had. Whether it's designing websites, crafting beautiful illustrations, or writing engaging stories,I pour my passion into everything I do. Feel free to explore my portfolio to learn more about me and my journey. here! I created this portfolio to not only showcase my work but also to document my journey and progress. It's a way for me to share my experiences with others and demonstrate what I'm capable of achieving.
                I've always had a passion for creating things, whether it's writing stories, designing websites, or making art I hope that by exploring my portfolio, you'll get a glimpse into my skills, creativity, and dedication to my craft. </p> <br></br>
                <p> This website showcases some of the projects I've worked on and the skills I've developed along the way. I've had the opportunity to work on various projects that have allowed me to grow and learn. From [JavaScript] to [React ], each endeavor has taught me valuable skills in [Front end development, some times i`m graphic designer]. I believe that every project, whether big or small, contributes to my growth as a professional.Thank you for visiting, and I hope you enjoy your time </p>

            <div className="aboutBtn">
                <Button/>
            </div>

            </div>
        </div>
       </div>
    )
}
export default About;