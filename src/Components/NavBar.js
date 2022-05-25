import React from 'react';


const NavBar = () => {
    let anchorSelector = 'a[href^="#"]';
     
        let anchorList =
            document.querySelectorAll(anchorSelector);
         
        anchorList.forEach(link => {
            link.onclick = function (e) {
                e.preventDefault();
                let destination =
                    document.querySelector(this.hash);
                destination.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    return (
        <div className='nav-bar'>
            <div className="nav-logo">
                <img src=".\Images\Info tech logo web 1.png" alt="logo" />
            </div>
            <div className="nav-btn">
            <ul>
                <li><a href="#home">Home</a>
                <div className="line"></div></li>
                <li><a href="#about">About</a></li>
                <li><a href="#service">Services <img src=".\Images\Chevron Down.png" alt="" /></a></li>
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
