import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import image1  from "../Image/f2.png";
import image2 from "../Image/t2.png"
import image3 from "../Image/i2.png";
import image4 from "../Image/L.png"

const Contac = () => {
    return(
        <div className="formContainer">
            <div className="row">
                <div className="text">
                    <h1>Contact Me</h1>
                    <h3>Let's Work Togather</h3>
                    <p>I'd love to hear from you! Whether you have questions about my work, want to collaborate on a project, or just want to say hello, feel free to reach out. You can contact me through the form below or send me an email at
                    [SadakAbd015@gmail.com]. I'll do my best to get back to you as soon as possible. Thank you for your interest, and I look forward to connecting with you!!</p>
                    <div className="icons">
                    {/* <i> <FontAwesomeIcon icon={faEnvelope} /></i> */}
                        <span>SadakAbd015@gmail.com</span>
                    </div>
                    <div className="icons">
                    {/* <i> <FontAwesomeIcon icon={faPhone} /></i> */}
                        <span>Tell: 252618375234</span>
                    </div>
                    <div className="social">
                    <img src={image1} alt="" />
                       <img src={image2} alt="" />
                       <img src={image3} alt="" />
                       <img src={image4} alt="" />
                    </div>

                </div>
                
                <form className="form">
                        <input type="text" id="name" placeholder="Enter Your Name" />
                        <input type="number" id="number"  placeholder="Enter Your Phone"/>
                        <input type="Email" id="Email"  placeholder="Enter Your Email"/>
                        <textarea id="comment" cols="30" rows="10" placeholder="Enter Your Message"></textarea>
                </form>
            </div>
        </div>

    )
}

export default Contac;