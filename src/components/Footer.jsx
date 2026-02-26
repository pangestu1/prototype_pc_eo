import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <span className="logo-text">ELITE<span className="accent">EVENTS</span></span>
                        <p className="footer-motto">
                            Turning visions into iconic reality since 2012. We are the architects of your most cherished memories.
                        </p>
                        <div className="social-links">
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaFacebook /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaLinkedin /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#services">Our Services</a></li>
                            <li><a href="#portfolio">Our Work</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#services">Weddings</a></li>
                            <li><a href="#services">Corporate</a></li>
                            <li><a href="#services">Private Parties</a></li>
                            <li><a href="#services">Creative Styling</a></li>
                        </ul>
                    </div>

                    <div className="footer-newsletter">
                        <h3>Newsletter</h3>
                        <p>Subscribe to get the latest updates and inspirations.</p>
                        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Email Address" />
                            <button type="submit">Join</button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Elite Events Organizer. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
