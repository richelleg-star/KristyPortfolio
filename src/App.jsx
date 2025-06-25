import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './index.css'
import Sidebar from './navbar/sidebar'
import { VisualDev } from './contentpgs/visualdev'
import { Routes, Route, Outlet, Navigate, Link} from 'react-router';
import { Scapegoat } from './contentpgsProject/scapegoats'
import { AboutMe } from './contentpgs/aboutme'

function App() {

  return (
    <>
    <div className="sidebarContent">
      <Sidebar/>
      <div className='content'>
        <Routes>
          <Route path='*' element={<VisualDev/>}/>
          <Route path='scapegoats' element={<Scapegoat/>}/>
          <Route path='about-me' element={<AboutMe/>}/>
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
