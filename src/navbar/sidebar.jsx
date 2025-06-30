import React from "react";
import { Routes, Route, Outlet, Navigate, Link} from 'react-router';
import { useState } from "react";

export default function Sidebar(){
    
    return(
        <div className='sidebar'>
            <div className="ImageAndName">
                <img src='/Kristy Logo.png'/>
                <h1>Kristy Le</h1>
            </div>
            <Link to='about-me'>About Me</Link>
            <div className="links">
                <ul>
                    <li><Link to="*">Visual Development</Link></li>
                    <li><Link to='bg-design'>BG Design</Link></li>
                    <li><Link to='prop-design'>Prop Design</Link></li>
                    <li><Link to='chara-design'>Character Design</Link></li>
                </ul>
            </div>
            <div className='horizontallink'>
                <Link to="*">Visual Development</Link>
                <Link to='bg-design'>BG Design</Link>
                <Link to='prop-design'>Prop Design</Link>
                <Link to='chara-design'>Character Design</Link>
            </div>
            <h2>By Project</h2>
            <div className="link">
                <ul>
                    <li><Link to='scapegoats'>Scapegoats</Link></li>
                    <li><Link to='penguin-dreams'>Penguin Dreams</Link></li>
                </ul>
            </div>
            <div className='horizontalprojectlink'>
                <Link to='scapegoats'>Scapegoats</Link>
                <Link to='penguin-dreams'>Penguin Dreams</Link>
            </div>
        </div>
    )
}