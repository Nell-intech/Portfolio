import React from "react";
import { Link } from 'react-router-dom'


export default function Hero(){
    return(
        <div className="hero-wrapper "> 
            <div className="main-info">
                <h1 >Full-stack Software Engineer</h1>
                <span>With a passion for problem solving and design</span>
                {/* <span>instagram Github link</span> */}
                <Link className="links" to={`/resume`}> <button className="main-button">Resume</button> </Link>  
                
                <div className="tech-stack">Teck Stack | ( HTML CSS JS REACT BOOTSTRAP MONGODB FIGMA ICONS) </div>
            </div>
        </div>
    );
}