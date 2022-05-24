import React from 'react';

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <div className="nav-logo">
                <img src=".\Images\Info tech logo web 1.png" alt="logo" />
            </div>
            <div className="nav-btn">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#blogs">Blogs</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            </div>
            <div className="nav-login">
                <button>Login</button>
                
            </div>        
        </div>
    );
}

export default NavBar;
