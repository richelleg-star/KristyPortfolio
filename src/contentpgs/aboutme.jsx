import React from "react";
import {SocialIcon} from 'react-social-icons'

export function AboutMe(){
    return(
        <>
        <div className="aboutmeContent">
            <img src='/public/Kristy Logo.png'></img>
            <p>
                Hi! I'm Kristy Le, a student at the Univeristy of Washington <br/>
                <br/>
                Resume avaliable upon request! Contact me at: kristyleart897@gmail.com
            </p>
            
        </div>
        <div className="socialicon">
        <SocialIcon url="https://www.linkedin.com/in/kristy-le-5719982a5/" className="mediaicon"></SocialIcon>
        <SocialIcon url='https://www.instagram.com/crispghy/' className="mediaicon"></SocialIcon>
        <SocialIcon href="mailto:kristyleart897@gmail.com" network="email" className="mediaicon"></SocialIcon>
        </div>
        </>
    )
}