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
                    <li><Link to='bg-design'>BG Design</Link></li>
                    <li><Link to='prop-design'>Prop Design</Link></li>
                    <li><Link to='chara-design'>Character Design</Link></li>
                </ul>
            </div>
            <h2>By Project</h2>
            <div className="link">
                <ul>
                    <li><Link to='scapegoats'>Scapegoats</Link></li>
                    <li><Link to='penguin-dreams'>Penguin Dreams</Link></li>
                </ul>
            </div>
        </div>
    )
}