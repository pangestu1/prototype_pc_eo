import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Stats.css';

const stats = [
    { value: '500+', label: 'Events Managed' },
    { value: '250+', label: 'Happy Couples' },
    { value: '150+', label: 'Corporate Clients' },
    { value: '12+', label: 'Years Experience' },
];

const Stats = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section className="stats" ref={ref}>
            <div className="container stats-container">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="stat-item"
                    >
                        <span className="stat-value">{stat.value}</span>
                        <span className="stat-label">{stat.label}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Stats;
