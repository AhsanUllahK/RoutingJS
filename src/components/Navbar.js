import React from 'react'
import { NavLink } from 'react-router-dom'


export const Navbar = () => {
    return (
        <div>          
            <ul className='navbar'>
                <li><NavLink className="nav-bar-link" style={{text:"yellow"}} to="/about">About</NavLink></li>
                <li><NavLink className="nav-bar-link" to="/" >Home </NavLink></li>
            </ul>
        </div>
    )
}
