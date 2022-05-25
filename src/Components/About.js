import React from 'react';

const About = () => {
    return (
        <div className='about'>
            <h1>
            <span>Movement</span> For <br></br> Brand <span>Digitization</span>
            </h1>
            <p >101 INFOTECH is an extension of your organization. You aren’t just another client. You are a partner, and you deserve an experience that is comfortable and tailored to your needs. We are the team you deserve. We don’t claim to be the best in Nepal or Kathmandu, but we do our best and deliver what you need.</p>
            <div className="about-card" id='about'>
                <div className="cards card1">
                    <img src=".\Images\calender.png" alt="" />
                    <div className="card-main">
                        <h3>A Timeline You Set</h3>
                        <p>Stop feeling stuck. We only use month-to-month contracts.</p>
                    </div>
                </div>

                <div className="cards card2">
                    <img src=".\Images\price.png" alt="" />
                    <div className="card-main">  
                        <h3>A Price That Fits You</h3>
                        <p>Hit goals with a customized strategy you can afford.</p>
                    </div>
                </div>
                <div className="cards card3">
                    <img src=".\Images\teams.png" alt="" />
                    <div className="card-main">
                        <h3>A Team You Know and Trust</h3>
                        <p>Collaborate with our in-house team. We don’t outsource.</p>
                    </div>
                </div>
                <div className="cards card4">
                    <img src=".\Images\grow.png" alt="" />
                    <div className="card-main">
                        <h3>A TimA Holistic Transformation of Your Businesseline You Set</h3>
                        <p>Enhance marketing, sales, and customer service efforts.</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default About;
