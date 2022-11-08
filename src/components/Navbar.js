import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => {
    return (
        <div>          
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/" >Home </Link></li>
            </ul>
        </div>
    )
}
