import React from 'react';

const Home = () => {
    return (
        <div className='home' id='home'>
            <div className="home-main">
                <h1>WE HEAR <br></br>WE MAKE IT HAPPEN</h1>
                <h3>Website Development and Graphic Designing</h3>
                <p>We provide a complete web and app solution by providing you the esential services including branding, graphic design, UX/UI design, web development, content, social media integration, SEO, and online marketing.</p>
                <div className="connect-btn">
                    <button>Connect Now <img src=".\Images\Connect.png" alt="" /></button>
                    </div>
            </div>
            <div className="home-logo">
                <img src=".\Images\vector landing page 2 2.png" alt="" />
            </div>
        </div>
    );
}

export default Home;
