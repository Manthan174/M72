import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import Navbar from './navigation/Navbar.jsx'
import FullScreenNav from './navigation/FullScreenNav.jsx'

const App = () => { 

  return (
    
      <div className='overflow-x-hidden'>
        {/* <Link className='text-blue-600 mr-5 text-sm' to='/'>Home</Link>
        <Link className='text-blue-600 mr-5 text-sm' to='/projects'>Projects</Link>
        <Link className='text-blue-600 mr-5 text-sm' to='/agence'>Agence</Link> */}
        <Navbar/>
        <FullScreenNav/>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/agence' element={<Agence />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </div>
    
  )
}

export default App
