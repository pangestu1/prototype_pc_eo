import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import './Testimonials.css';

const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'Bride',
        text: 'Elite Events made our wedding day absolutely perfect. Their attention to detail and creative vision surpassed all our expectations. We couldn\'t have asked for a better team!',
        rating: 5,
    },
    {
        name: 'Michael Chen',
        role: 'Marketing Director, TechCorp',
        text: 'For our annual summit, we needed a partner who could handle complex logistics while maintaining a premium feel. Elite Events delivered flawlessly. Highly recommended!',
        rating: 5,
    },
    {
        name: 'Emma Williams',
        role: 'Socialite',
        text: 'The most creative event organizers I have ever worked with. They transformed a simple venue into a magical wonderland for my birthday gala.',
        rating: 5,
    },
];

const Testimonials = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className="testimonials" ref={ref}>
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">Testimonials</span>
                    <h2 className="section-title">What Our <span className="accent">Clients Say</span></h2>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="testimonial-card"
                        >
                            <div className="quote-icon">
                                <FaQuoteLeft />
                            </div>
                            <div className="stars">
                                {[...Array(t.rating)].map((_, i) => <FaStar key={i} />)}
                            </div>
                            <p className="testimonial-text">"{t.text}"</p>
                            <div className="testimonial-author">
                                <h4 className="author-name">{t.name}</h4>
                                <p className="author-role">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
