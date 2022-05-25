import React from "react";

function Footer() {
  return (
    <div className="footer">
        <div className="footer-secton">
            <div className="footer-top">
                <div className="footer-top-1">
                    <p className="footer-newsletter">Join our newsletter</p>
                    <p className="footer-nl-main">
                    Sign up to stay updated with the latest insights, news, and more.
                    </p>
                </div>
                <div className="footer-top-2">
                    <input name="email" type="email" placeholder="Your Email Address"
                    />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
        <footer className="footer-section-2">
            <div className="footer-mid">
                <div className="footer-mid-main">
                    <div className="footer-column">
                        <h4>Company</h4>
                        <ul>
                        <li>
                            <a href="#">About us</a>
                        </li>
                        <li>
                            <a href="#">What We Do</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Services</h4>
                        <ul>
                        <li>
                            <a href="#">Web Design</a>
                        </li>
                        <li>
                            <a href="#">App Development</a>
                        </li>
                        <li>
                            <a href="#">Graphic Designing</a>
                        </li>
                        <li>
                            <a href="#">Digital Marketing</a>
                        </li>
                        <li>
                            <a href="#">SEO Optimization</a>
                        </li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Join</h4>
                        <ul>
                        <li>
                            <a href="#">Careers at 101Infotech</a>
                        </li>
                        <li>
                            <a href="#">Internships</a>
                        </li>
                        <li>
                        
                        </li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Connect With Us</h4>
                        <ul>
                        <li>
                            <a href="#">Facebook</a>
                        </li>
                        <li>
                            <a href="#">Instagram</a>
                        </li>
                        <li>
                            <a href="#">Twitter</a>
                        </li>
                        <li>
                            <a href="#">Linkedin</a>
                        </li>
                        <li>
                            <a href="#">Youtube</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-section-3">
                <div className="footer-copyright">
                    <div className="footer-3-main">
                        <p className="copyright">
                        Copyright 2022 101InfoTech. All rights reserved.
                        </p>
                        <p className="privacy-policy">Privacy Policy</p>
                    </div>
                    <img src=".\Images\footerimg.png" alt="" />
                </div>
            </div>
        </footer>
    </div>
  );
}

export default Footer;