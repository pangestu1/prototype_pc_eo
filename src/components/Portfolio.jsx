import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Portfolio.css';

import wedding1Img from '../assets/portfolio_wedding1.png';
import wedding2Img from '../assets/portfolio_wedding2.png';
import corporateImg from '../assets/portfolio_corporate.png';
import concertImg from '../assets/portfolio_concert.png';

const projects = [
    { id: 1, category: 'Wedding', title: 'The Royal Gala', image: wedding1Img },
    { id: 2, category: 'Corporate', title: 'Tech Summit 2024', image: corporateImg },
    { id: 3, category: 'Wedding', title: 'Crystal Garden', image: wedding2Img },
    { id: 4, category: 'Concert', title: 'Midnight Melody', image: concertImg },
    { id: 5, category: 'Social', title: 'Golden Jubilee', image: 'https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=800' },
    { id: 6, category: 'Corporate', title: 'Elite Awards Night', image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80&w=800' },
];

const categories = ['All', 'Wedding', 'Corporate', 'Concert', 'Social'];

const Portfolio = () => {
    const [filter, setFilter] = useState('All');
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="portfolio" className="portfolio" ref={ref}>
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">Our Gallery</span>
                    <h2 className="section-title">Successful <span className="accent">Events</span></h2>
                </div>

                <div className="portfolio-filters">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div
                    layout
                    className="portfolio-grid"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="portfolio-item"
                            >
                                <div className="portfolio-img-container">
                                    <img src={project.image} alt={project.title} />
                                    <div className="portfolio-info">
                                        <span className="cat">{project.category}</span>
                                        <h3 className="title">{project.title}</h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;
