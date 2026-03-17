import React, { useEffect, useRef } from "react";
import "../styles/contact-page.css";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function ContactPage() {
    const pageRef = useRef(null);

    useEffect(() => {
        const root = pageRef.current;
        if (!root) return undefined;

        const items = root.querySelectorAll(".reveal");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("reveal-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        items.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="contact-page" ref={pageRef}>
            <header className="main-header">
                <div className="header-center">
                    <a className="header-link" href="#/about">
                        About Us
                    </a>
                    <a href="#/home" aria-label="Mishti Icecream Home">
                        <img
                            src="/assets/images/logo.png"
                            alt="Mishti Icecream Logo"
                            className="logo"
                        />
                    </a>
                    <a className="header-link" href="#/products">
                        Products
                    </a>
                    <a className="header-link" href="#/contact">
                        Contact Us
                    </a>
                </div>
            </header>

            <section className="contact-hero">
                <div className="hero-shape hero-shape-one" />
                <div className="hero-shape hero-shape-two" />
                <div className="hero-shape hero-shape-three" />
                <div className="hero-content reveal">
                    <p className="hero-eyebrow">Mishti Ice Cream</p>
                    <h1>Contact Mishti Ice Cream</h1>
                    <p className="hero-subtitle">We’d love to hear from you</p>
                </div>
            </section>

            <section className="contact-info-section">
                <div className="section-title reveal">
                    <h2>Get In Touch</h2>
                    <p>Reach out to our team for orders, partnerships, or feedback.</p>
                </div>
                <ContactInfo />
            </section>

            <section className="contact-form-section reveal">
                <div className="form-copy">
                    <h2>Send Us a Message</h2>
                    <p>
                        Tell us how we can help and our team will get back to you
                        shortly.
                    </p>
                </div>
                <ContactForm />
            </section>

            <section className="contact-map-section reveal">
                <h2>Find Us Here</h2>
                <div className="map-placeholder">
                    <p>Map embed placeholder</p>
                </div>
            </section>

            <Footer />
        </div>
    );
}
