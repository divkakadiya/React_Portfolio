import React from 'react'
import './style.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <React.Fragment>
            <div className='navbar'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/tec'>Technology</Link>
                <Link to='/pro'>Project</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </React.Fragment>
    )
}

export default Navbar