import React from "react";
import { Routes, Route, Outlet, Navigate, Link} from 'react-router';
import { useState } from "react";

export default function Sidebar(){
    
    return(
        <div className='sidebar'>
            <img src='/Kristy Logo.png'/>
            <h1>Kristy Le</h1>
            <Link to='about-me'>About Me</Link>
            <div className="links">
                <ul>
                    <li><Link to="*">Visual Development</Link></li>
                    <li>BG Design</li>
                    <li>Prop Design</li>
                    <li>Character Design</li>
                </ul>
            </div>
            <h2>By Project</h2>
            <div className="link">
                <ul>
                    <li><Link to='scapegoats'>Scapegoats</Link></li>
                </ul>
            </div>
        </div>
    )
}