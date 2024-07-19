import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import About from '../Components/About'
import Home from '../Components/Home'
import Services from '../Components/Services'
import Login from '../Components/Login'
import Contact from '../Components/Contact'



const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/About' element={<About />}></Route>
            <Route path='/Service' element={<Services />}></Route>
            <Route path='/Login' element={<Login/>}></Route>
            <Route path='/Contact' element={<Contact/>}></Route>
            
        </Routes>
    </BrowserRouter>
  )
}

export default Router