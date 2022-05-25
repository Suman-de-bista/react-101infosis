import React from 'react';

const Features = () => {
    return (
        <div>
            <div className='features customer'>
            <div className="our-feature our-customer">
                <div className="line"></div>
                <div className="our-feature-main our-customer-main">Our <span>features</span></div>
            </div>
            <h1>Our <span>Solution</span> For All Your Basic Needs</h1>
            <div className="feature-text customer-text">Whatever your digital needs, We will provide you the best services to grow your business</div>
            <div className="features-cards">
            <div className=" fcard fcard1" data-aos="fade-right">
                    <img src=".\Images\features.png" alt="logo" />
                    <h3>Mobile Development</h3>
                    <p>We specialize in creating mobile apps for Windows, Android,  and ios. Our expertise is in developing data-driven, collaborative apps for consumers with insightful analytics.</p>
                    <button>Connect Now</button>
                </div>
                <div className=" fcard fcard2" data-aos="zoom-in">
                    <img src=".\Images\features.png" alt="logo" />
                    <h3>Graphic Designing</h3>
                    <p>Good design is all about making other designers jealous. We provide you with a uniqueness in every masterpiece designs. <br/>“You think, we design”</p>
                    <button>Connect Now</button>
                </div>
                <div className=" fcard fcard3" data-aos="fade-left">
                    <img src=".\Images\features.png" alt="logo" />
                    <h3>Digital Marketing</h3>
                    <p>Even a useless thing holds a different value in the market. Marketing is no longer about the stuff that you make, but about stories <br/>you tell.</p>
                    <button>Connect Now</button>
                </div>
                <div className="fcard-bottom">
                    <img src=".\Images\left.png" alt="logo" />
                    <img src=".\Images\middle.png" alt="logo" />
                    <img src=".\Images\right.png" alt="logo" />
                </div>
            </div>
        </div>
        </div>
    );
}

export default Features;
