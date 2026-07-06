import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import Navbar from './navigation/Navbar.jsx'
import FullScreenNav from './navigation/FullScreenNav.jsx'
import Contact from './component/contact/Contact.jsx'
import Stair from './component/common/Stair.jsx'

const App = () => { 

  return (
    
      <div className='overflow-x-hidden '>
        <Navbar/>
        <FullScreenNav/>
        
        <Stair>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/agence' element={<Agence />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
        </Stair>
      </div>
    
  )
}

export default App

