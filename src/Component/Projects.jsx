import React from "react";
import Button from "./Btn";
import image from "../Image/Computer.jpg"
const Projects = () => {
    return(
        <div className="projects">
        <h1>My Projects</h1>
        <div className="cards2">
        
            <div className="card">
                   
                    <h2>Web designing</h2>
                    <div className="image">
                    <img src={image} alt="" />
                    </div>
                    <div className="btn">
                      <Button/>
                </div>
            </div>
            <div className="card">
                   
                    <h2>Graphic Design</h2>
                    <div className="image">
                    <img src={image} alt="" />
                    </div>
                    <div className="btn">
                      <Button/>
                </div>
            </div>
            <div className="card">
                    
                    <h2>UI/UX Design</h2>
                    <div className="image">
                    <img src={image} alt="" />
                    </div>
                    <div className="btn">
                      <Button/>
                </div>
            </div>
        </div>
      </div>
    )
    
}
export default Projects;