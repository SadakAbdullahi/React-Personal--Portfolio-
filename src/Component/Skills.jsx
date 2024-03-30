import React from "react";
import Button from "./Btn";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCode , faPen ,faApple } from '@fortawesome/free-solid-svg-icons'
 const Skills = ()=>{
    return (
      <div className="skills">
        <h1>My Skills</h1>
        <div className="cards">
        
            <div className="card">
                    {/* <i><FontAwesomeIcon icon={faCode} /></i> */}
                    <h2>React Js</h2>
                    <p>I chose to specialize in React because of its efficiency and versatility in building modern web applications. Its component-based architecture allows for modular and reusable code, making development faster and more scalable. Plus, its virtual DOM feature ensures optimal performance, enhancing the overall user experience I'm committed to honing my skills and becoming a proficient React developer.</p>
                    <div className="btn">
                      <Button/>
                </div>
            </div>
            <div className="card">
                    {/* <i><FontAwesomeIcon icon={faPen} /></i> */}
                    <h2>HTML&CSS</h2>
                    <p>I chose to specialize in HTML&CSS because of its efficiency and versatility in building modern web applications. Its component-based architecture allows for modular and reusable code, making development faster and more scalable. Plus, its virtual DOM feature ensures optimal performance, enhancing the overall user experience I'm committed to honing my skills and becoming a proficient web developer.</p>
                    <div className="btn">
                      <Button/>
                </div>
            </div>
            <div className="card">
                    {/* <i><FontAwesomeIcon icon={faApple} /></i> */}
                    <h2>JavaScript</h2>
                    <p>I chose to specialize in JavaScript because of its efficiency and versatility in building modern web applications. Its component-based architecture allows for modular and reusable code, making development faster and more scalable. Plus, its virtual DOM feature ensures optimal performance, enhancing the overall user experience I'm committed to honing my skills and becoming a proficient web developer.</p>
                    <div className="btn">
                      <Button/>
                </div>
            </div>
        </div>
      </div>
    )
 }

 export default Skills;