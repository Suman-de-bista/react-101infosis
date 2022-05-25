import React from 'react';

const Service = () => {
    return (
        <div className='services' id='service'>
            <div className="service-headline">
                <div className="service-title">
                    <div className="our-services">
                        <div className="line"></div>
                        <div className="our-service-main">Our <span>Services</span></div>
                    </div>
                    <h1> Get <span>Exceptional</span> <br /> Service for Growth</h1>
                </div>
                <p >
                Our experienced team is here to help you grow your business to a new height. We guarantee to provide services at it’s best to help you convert your idea into a brand.
                </p>
            </div>
            <div className="service-cards">
                <div className="scards scard1" data-aos="zoom-in">
                    <div className="simage-container">
                        <img src=".\Images\webdev.png" alt="logo" />
                    </div>
                    <h3>Web Development</h3>
                    <p>Multi-Vendor E-commerce to Small Website, Payment Integration, API Integration, Domain Registration, Web Hosting, Website Maintenance, Website Redesign</p>
                    <a href="">Read More <img src=".\Images\arrow.png" alt="" /></a>
                </div>
                <div className="scards scard2" data-aos="zoom-in">
                    <div className="simage-container">
                        <img src=".\Images\appdev.png" alt="logo" />
                    </div>
                    <h3>Applcation Development</h3>
                    <p>IOS/Android Apps, Multi-vendor E-commerce to Small Apps</p>
                    <a href="">Read More <img src=".\Images\arrow.png" alt="" /></a>
                </div>
                <div className="scards scard3" data-aos="zoom-in">
                    <div className="simage-container">
                        <img src=".\Images\graphicd.png" alt="logo" />
                    </div>
                    <h3>Graphic Design</h3>
                    <p>Logo Concept/Design, 2D/3D Graphics Design, Vector/Illustration, 2D/3D Mockups , Social Media Designs, UX/UI, Animation Concept/Designs.</p>
                    <a href="">Read More <img src=".\Images\arrow.png" alt="" /></a>
                </div>
                <div className="scards scard4" data-aos="zoom-in">
                    <div className="simage-container">
                        <img src=".\Images\digitalm.png" alt="logo" />
                    </div>
                    <h3>Digital Maketing</h3>
                    <p>SEO, Social Media Marketing,  Pay-Per-Click, <br/> Content Marketing,  Email Marketing, <br/> Marketing Strategies</p>
                    <a href="">Read More <img src=".\Images\arrow.png" alt="" /></a>

                </div>
                <div className="scards scard5" data-aos="zoom-in">
                    <div className="simage-container">
                        <img src=".\Images\blogs.png" alt="logo" />
                    </div>
                    <h3>Blog</h3>
                    <p>Get updated with latest news on our blogs <br/> and if you want you can also contribute <br/> on our blog. Join Us by creating <br /> an account.</p>
                    <a href="">Read More <img src=".\Images\arrow.png" alt="" /></a>
                </div>
                <div className="scards scard6" data-aos="zoom-in">
                    <div className="simage-container">
                        <img src=".\Images\contactsup.png" alt="logo" />
                    </div>
                    <h3>Contact Support</h3>
                    <p>We are available 24/7 at your service. <br /> Contact Us if you have any kind of queries.</p>
                    <a href="">Read More <img src=".\Images\arrow.png" alt="" /></a>

                </div>

            </div>
        </div>
    );
}

export default Service;
