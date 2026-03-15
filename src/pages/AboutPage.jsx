import React, { useEffect, useRef } from "react";
import "../styles/about-page.css";

export default function AboutPage() {
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
        <div className="about-page" ref={pageRef}>
            <header className="main-header">
                <div className="header-center">
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
                    <a className="header-link" href="#/about">
                        About Us
                    </a>
                </div>
            </header>

            <section className="about-hero">
                <div className="hero-shape hero-shape-one" />
                <div className="hero-shape hero-shape-two" />
                <div className="hero-shape hero-shape-three" />
                <div className="hero-content reveal">
                    <p className="hero-eyebrow">Mishti Ice Cream</p>
                    <h1>About Mishti Ice Cream</h1>
                    <p className="hero-subtitle">
                        Crafting delicious frozen happiness
                    </p>
                </div>
            </section>

            <section className="story-section reveal">
                <div className="story-text">
                    <h2>Our Story</h2>
                    <p>
                        Mishti Ice Cream began with a simple promise: to craft
                        honest, joyful ice cream that brings families together.
                        From classic kulfis to playful novelties, every batch is
                        made with care, consistency, and a focus on flavor.
                    </p>
                    <p>
                        We blend trusted ingredients with modern processes to
                        create desserts that feel familiar yet exciting, keeping
                        the Mishti taste unforgettable in every city we serve.
                    </p>
                </div>
                <div className="story-image">
                    <img src="/assets/icecream-cone.png" alt="Ice cream cone" />
                </div>
            </section>

            <section className="features-section">
                <div className="section-title reveal">
                    <h2>Why Choose Mishti</h2>
                    <p>Quality, consistency, and flavor in every scoop.</p>
                </div>
                <div className="feature-grid">
                    <div className="feature-card reveal">
                        <div className="feature-icon">PI</div>
                        <h3>Premium Ingredients</h3>
                        <p>Real dairy, rich flavors, and thoughtfully sourced components.</p>
                    </div>
                    <div className="feature-card reveal">
                        <div className="feature-icon">WR</div>
                        <h3>Wide Product Range</h3>
                        <p>Cups, cones, kulfis, bars, and combo packs for every mood.</p>
                    </div>
                    <div className="feature-card reveal">
                        <div className="feature-icon">AP</div>
                        <h3>Affordable Pricing</h3>
                        <p>Premium quality without premium pricing for every customer.</p>
                    </div>
                    <div className="feature-card reveal">
                        <div className="feature-icon">TR</div>
                        <h3>Trusted by Retailers</h3>
                        <p>Reliable supply and consistent quality trusted across markets.</p>
                    </div>
                </div>
            </section>

            <section className="quality-section reveal">
                <div className="quality-content">
                    <h2>Manufacturing Quality</h2>
                    <p>
                        Our production follows strict hygiene protocols and quality
                        checks at every step. From chilled storage to sealed packaging,
                        Mishti Ice Cream is crafted to retain freshness, texture, and
                        taste while meeting modern food safety standards.
                    </p>
                </div>
            </section>

            <section className="about-cta reveal">
                <div className="cta-shape cta-shape-one" />
                <div className="cta-shape cta-shape-two" />
                <div className="cta-shape cta-shape-three" />
                <div className="cta-content">
                    <p className="cta-eyebrow">Partner With Mishti Ice Cream</p>
                    <h2>Grow With Our Distribution Network</h2>
                    <p className="cta-text">
                        Become a trusted distributor and bring Mishti Ice Cream to
                        more families in your region.
                    </p>
                    <a className="cta-button" href="#/distributor">
                        Become a Distributor
                    </a>
                </div>
            </section>
        </div>
    );
}
