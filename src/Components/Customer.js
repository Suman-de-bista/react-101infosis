import React from 'react';

const Customer = () => {
    return (
        <div className='customer'>
            <div className="our-customer">
                <div className="line"></div>
                <div className="our-customer-main">Our <span>Customers</span></div>
            </div>
            <h1>Our <span>Clients</span> Love Our Work</h1>
            <div className="customer-text">But don’t just take our word for it...</div>
            <div className="customer-cards">
                <div className="ccard" data-aos="fade-right"><img src=".\Images\client1.png" alt="client" /></div>
                <div className="ccard" data-aos="fade-right"><img src=".\Images\client2.png" alt="client" /></div>
                <div className="ccard" data-aos="fade-left"><img src=".\Images\client3.png" alt="client" /></div>
                <div className="ccard" data-aos="fade-left"><img src=".\Images\client4.png" alt="client" /></div>
            </div>
        </div>
    );
}

export default Customer;
