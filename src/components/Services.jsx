import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRing, FaBriefcase, FaMusic, FaMicrophone, FaInfinity, FaMagic } from 'react-icons/fa';
import './Services.css';

const services = [
    {
        icon: <FaRing />,
        title: 'Luxury Weddings',
        description: 'We create fairy-tale weddings that reflect your unique love story with elegance and sophistication.',
    },
    {
        icon: <FaBriefcase />,
        title: 'Corporate Events',
        description: 'Professional event management for conferences, product launches, and gala dinners.',
    },
    {
        icon: <FaMusic />,
        title: 'Live Concerts',
        description: 'High-energy production and management for music festivals and intimate live performances.',
    },
    {
        icon: <FaMicrophone />,
        title: 'Private Parties',
        description: 'Bespoke celebrations for birthdays, anniversaries, and exclusive social gatherings.',
    },
    {
        icon: <FaInfinity />,
        title: 'Full Planning',
        description: 'Comprehensive planning from concept to execution, managing every single detail.',
    },
    {
        icon: <FaMagic />,
        title: 'Creative Styling',
        description: 'Thematic decoration and lighting design that transforms any venue into a magical space.',
    },
];

const Services = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="services" className="services" ref={ref}>
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">What We Do</span>
                    <h2 className="section-title">Our Exclusive <span className="accent">Services</span></h2>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="service-card"
                        >
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                            <a href="#contact" className="service-link">Learn More</a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
