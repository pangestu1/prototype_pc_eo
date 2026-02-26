import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section id="about" className="about" ref={ref}>
            <div className="container">
                <div className="about-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="about-image"
                    >
                        <div className="image-wrapper">
                            <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800" alt="About Elite Events" />
                            <div className="experience-badge">
                                <span className="years">12+</span>
                                <span className="text">Years Of Excellence</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="about-content"
                    >
                        <span className="section-subtitle">Our Story</span>
                        <h2 className="section-title">Beyond Ordinary <span className="accent">Experiences</span></h2>
                        <p className="about-text">
                            Founded in 2012, Elite Events has redefined the art of celebration. We don't just plan events; we orchestrate masterpieces of coordination and design.
                        </p>
                        <p className="about-text">
                            Our team of dedicated professionals brings a meticulous eye for detail and a passion for innovation to every project, ensuring that your vision is transformed into a breathtaking reality.
                        </p>

                        <div className="about-features">
                            <div className="feature">
                                <span className="feature-number">01.</span>
                                <div className="feature-info">
                                    <h3>Creative Design</h3>
                                    <p>Unique concepts tailored to your personal style.</p>
                                </div>
                            </div>
                            <div className="feature">
                                <span className="feature-number">02.</span>
                                <div className="feature-info">
                                    <h3>Seamless Planning</h3>
                                    <p>End-to-end management for a stress-free experience.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
