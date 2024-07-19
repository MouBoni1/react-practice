import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <ul>
            <li>
                <NavLink to='/' >Home</NavLink>
            </li>
            <li>
                <NavLink to='/about'>About</NavLink>
            </li>
            <li>
                <NavLink to='/service'>Services</NavLink>
            </li>
            <li>
                <NavLink to='/login'>Login</NavLink>
            </li>
           <li>
            <NavLink to='/Contact'>Contact</NavLink>
           </li>
        </ul>
    </div>
  )
}

export default Home