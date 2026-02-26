import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import heroBg from '../assets/hero_bg.png';
import heroFeature from '../assets/hero_feature.png';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-bg">
                <img src={heroBg} alt="Background" />
            </div>

            <div className="container hero-container">
                <div className="hero-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="hero-text"
                    >
                        <span className="subtitle">Crafting Unforgettable Moments</span>
                        <h1 className="hero-title">
                            Where Your <span className="accent">Dreams</span> Meet Our <span className="accent">Execution</span>
                        </h1>
                        <p className="hero-description">
                            We are a premium event management agency dedicated to creating extraordinary experiences. From luxury weddings to high-profile corporate events.
                        </p>
                        <div className="hero-btns">
                            <a href="#portfolio" className="btn btn-accent large">Our Portfolio</a>
                            <a href="#contact" className="btn btn-link">Contact Us</a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="hero-image-feature"
                    >
                        <div className="feature-img-wrapper">
                            <img src={heroFeature} alt="Elite Event Feature" />
                            <div className="img-accent-border"></div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
                className="scroll-indicator"
            >
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <span>Explore More</span>
            </motion.div>
        </section>
    );
};

export default Hero;
