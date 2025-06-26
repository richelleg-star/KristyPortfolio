import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './index.css'
import Sidebar from './navbar/sidebar'
import { VisualDev } from './contentpgs/visualdev'
import { Routes, Route, Outlet, Navigate, Link} from 'react-router';
import { Scapegoat } from './contentpgsProject/scapegoats'
import { AboutMe } from './contentpgs/aboutme'
import { CharaDev } from './contentpgs/charadev'
import { Propdesign } from './contentpgs/propdesign'
import { BgDesign } from './contentpgs/bgdev'
import { PenguinDreams } from './contentpgsProject/penguindreams'

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
          <Route path='bg-design' element={<BgDesign/>}/>
          <Route path='bg-design' element={<CharaDev/>}/>
          <Route path='bg-design' element={<Propdesign/>}/>
          <Route path='penguin-dreams' element={<PenguinDreams/>}/>
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
