import React from "react";
import {SocialIcon} from 'react-social-icons'

export function AboutMe(){
    return(
        <>
        <div className="aboutmeContent">
            <img src='/public/Kristy Logo.png'></img>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            
        </div>
        <SocialIcon url="https://www.linkedin.com/in/kristy-le-5719982a5/"></SocialIcon>
        <SocialIcon url='https://www.instagram.com/crispghy/'></SocialIcon>
        </>
    )
}