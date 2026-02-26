import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const whatsappNumber = "6281234567890";
    const whatsappMessage = "Halo Elite Events, saya tertarik dengan layanan event organizer Anda. Bisa kita diskusikan lebih lanjut?";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <section id="contact" className="contact" ref={ref}>
            <div className="container">
                <div className="contact-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="contact-info"
                    >
                        <span className="section-subtitle">Contact Us</span>
                        <h2 className="section-title">Let's Create Something <span className="accent">Extraordinary</span></h2>
                        <p className="contact-desc">
                            Ready to plan your next event? Reach out to us and let our experts guide you through the journey of creating unforgettable moments.
                        </p>

                        <div className="info-list">
                            <div className="info-item">
                                <div className="icon"><FaMapMarkerAlt /></div>
                                <div className="text">
                                    <h3>Our Office</h3>
                                    <p>Grand Elite Plaza, Suite 405, Jakarta Pusat</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="icon"><FaPhone /></div>
                                <div className="text">
                                    <h3>Call Us</h3>
                                    <p>+62 21 555 0123</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="icon"><FaEnvelope /></div>
                                <div className="text">
                                    <h3>Email Us</h3>
                                    <p>hello@eliteevents.co.id</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="contact-action"
                    >
                        <div className="action-card">
                            <h3>Direct Consultation</h3>
                            <p>Skip the forms and chat directly with our event specialists on WhatsApp.</p>
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-wa">
                                <FaWhatsapp /> Chat via WhatsApp
                            </a>
                            <div className="or-divider">
                                <span>OR</span>
                            </div>
                            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                                <div className="form-group">
                                    <input type="text" placeholder="Your Name" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" placeholder="Your Email" required />
                                </div>
                                <div className="form-group">
                                    <textarea placeholder="Tell us about your event" rows="4" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-accent full-width">Send Message</button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
