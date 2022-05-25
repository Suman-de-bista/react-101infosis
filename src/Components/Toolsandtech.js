import React from 'react';
import {FaHtml5,FaReact,FaSass} from 'react-icons/fa'
import {DiCss3, DiJavascript1,DiPhp} from 'react-icons/di'

const Toolsandtech = () => {
    return (
        <div className="tools">
            <div className="tools-and-tech">
                <div className="tools-title">
                    <h1 className="tools-title-main">Tools & <span>Technologies</span> <br /> That We Use</h1>
                    <div className="heading">
                        <div className='line'></div>
                        <h4>
                            WE MAKE <span>IT </span>HAPPEN
                        </h4>
                    </div>
                    <p className="tools-main">
                    101 Infotech utilizes high-quality technical tools such as
                    WordPress, Laravel, CSS, Javascript, HTML My SQL, etc. in order to
                    provide you better business solutions.
                    </p>
                </div>
                <div className="tools-logo">
                    <div className="tools-logo-main">
                        <div className="tat-logo">
                            <FaHtml5 className='tlogo' data-aos="zoom-in-up"/>
                        </div>
                        <div className="tat-logo">
                            <DiCss3 className='tlogo'data-aos="zoom-in-up"/>
                        </div>
                        <div className="tat-logo">
                            <DiJavascript1 className='tlogo'data-aos="zoom-in-up"/>
                        </div>
                        <div className="tat-logo">
                            <FaReact className='tlogo'data-aos="zoom-in-up"/>
                        </div>
                        <div className="tat-logo">
                            <FaSass className='tlogo'data-aos="zoom-in-up"/>
                        </div>
                        <div className="tat-logo">
                            <DiPhp className='tlogo'data-aos="zoom-in-up"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fcard-bottom">
                <img src=".\Images\left.png" alt="" />
                <img src=".\Images\middle.png" alt="" />
                <img src=".\Images\right.png" alt="" />
            </div>
        </div>
    );
}

export default Toolsandtech;
