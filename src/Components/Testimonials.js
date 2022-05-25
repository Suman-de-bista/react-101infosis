import React from 'react';

const Testimonials = () => {
    return (
        <div className='testimonial'>
            <div className="our-testimonial">
                <div className="line"></div>
                <h6>Our <span>TESTIMONIALS</span></h6>
            </div>
            <h1>What our <span>Trustworthy</span> clients say</h1>
            <div className="testimonial-photos">
                <img src=".\Images\leftarrow.png" alt="" />
                <img src=".\Images\tpic1.png" alt="" data-aos="zoom-in"/>
                <img src=".\Images\tpic2.png" alt="" data-aos="zoom-in"/>
                <img src=".\Images\tpic3.png" alt="" data-aos="zoom-in"/>
                <img src=".\Images\tpic4.png" alt="" data-aos="zoom-in"/>
                <img src=".\Images\tpic5.png" alt="" data-aos="zoom-in"/>
                <img src=".\Images\rightarrow.png" alt="" data-aos="zoom-in"/>
            </div>
            <p>“I will admit - originally the thought of outsourcing scared the hell out of me. As a business owner, I am used to controlling and always having my finger on the pulse of my employees and contractors. 101infotech has delivered great results and has convinced me of the value of outsourcing. There were times when it was difficult to communicate but after some time or so everything starts to come together.”</p>
            <h4><span>Rahul Kalwar <br />CEO (Danira’s)</span></h4>
        </div>
    );
}

export default Testimonials;
