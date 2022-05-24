import React from 'react';
import {FaTwitter} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'

const Teams = () => {
    return (
        <div className='team'>
            <div className="team-container">
                <div className="team-1">
                <img src=".\Images\cpic1.png" alt="" />
                </div>
                <div className="team-2">
                <img src=".\Images\cpic2.png" alt="" />
                </div>
                <div className="team-3">
                    <div className="our-team">
                        <div className="line"></div>
                        <h6>Our <span>Team</span></h6>
                    </div>
                    <h1>Our <span>Core</span> member</h1>
                    <div className="team-photos">
                        <img src=".\Images\c-leftarrow.png" alt="" />
                        <div className="team-photo-main">
                        <img src=".\Images\cpic3.png" alt="" />
                        <RiInstagramFill className='icon icon1'/>
                        <FaTwitter className='icon icon2'/>
                        </div>
                        <img src=".\Images\c-rightarrow.png" alt="" />
                    </div>
                    <h4>Sagar Chhetri <br />
                    <span>Full stack developer</span></h4>
                    <p>"The greatest leader is not necessarily the one who does the greatest things. He is the one that gets people to do the greatest things.”</p>
                    <button>Join Our Team</button>
                </div>
                <div className="team-4">
                <img src=".\Images\cpic4.png" alt="" />

                </div>
                <div className="team-5">
                <img src=".\Images\cpic5.png" alt="" />

                </div>
            </div>
        </div>
    );
}

export default Teams;
