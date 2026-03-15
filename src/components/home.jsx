import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/home.css";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray(".reveal-on-scroll").forEach((element) => {
                gsap.fromTo(
                    element,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 85%",
                            once: true
                        }
                    }
                );
            });

            gsap.utils.toArray(".pop-on-scroll").forEach((element, index) => {
                gsap.fromTo(
                    element,
                    { opacity: 0, y: 20, scale: 0.92 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.7,
                        ease: "back.out(1.4)",
                        delay: index * 0.06,
                        scrollTrigger: {
                            trigger: element,
                            start: "top 85%",
                            once: true
                        }
                    }
                );
            });

            gsap.fromTo(
                ".hero-title span",
                { y: 28, opacity: 0, scale: 0.9, clipPath: "inset(0% 0% 100% 0%)" },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    clipPath: "inset(0% 0% 0% 0%)",
                    duration: 0.95,
                    ease: "back.out(1.8)",
                    stagger: 0.08,
                    delay: 0.1
                }
            );


            gsap.utils.toArray("[data-float]").forEach((element) => {
                const intensity = Number(element.dataset.float) || 0.3;
                gsap.fromTo(
                    element,
                    { y: 30 },
                    {
                        y: -30,
                        ease: "none",
                        scrollTrigger: {
                            trigger: element,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: intensity
                        }
                    }
                );
            });

            gsap.utils.toArray(".exotic-badge").forEach((badge, index) => {
                gsap.fromTo(
                    badge,
                    { y: 30, rotate: -2, opacity: 0 },
                    {
                        y: 0,
                        rotate: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power3.out",
                        delay: index * 0.05,
                        scrollTrigger: {
                            trigger: badge,
                            start: "top 85%",
                            once: true
                        }
                    }
                );
            });

            gsap.fromTo(
                ".exotic-stamp",
                { rotate: -12, scale: 0.9, opacity: 0 },
                {
                    rotate: 0,
                    scale: 1,
                    opacity: 1,
                    duration: 0.8,
                    ease: "back.out(1.6)",
                    scrollTrigger: {
                        trigger: ".exotic-section",
                        start: "top 80%",
                        once: true
                    }
                }
            );

            gsap.utils.toArray(".sweet-row img").forEach((img, index) => {
                gsap.fromTo(
                    img,
                    { y: 30, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.7,
                        ease: "power3.out",
                        delay: index * 0.08,
                        scrollTrigger: {
                            trigger: ".sweet-section",
                            start: "top 80%",
                            once: true
                        }
                    }
                );
            });
        });

        return () => ctx.revert();
    }, []);

    return (

        <div className="home">

            {/* HEADER WITH LOGO */}
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
                    <a className="header-link" href="#/about">
                        About Us
                    </a>
                    <a className="header-link" href="#/contact">
                        Contact Us
                    </a>
                </div>
            </header>

            <div className="promo-strip">
                <span>Free Shipping on Orders Over ₹500!</span>
                <span className="promo-dot" />
                <span>Cold, Creamy & Fresh Daily</span>
                <span className="promo-dot" />
                <span>Mishti Ice Cream Specials</span>
            </div>

            <section className="marco-hero reveal-on-scroll">
                <div className="hero-card">
                    <div className="hero-bg-glass left" aria-hidden="true">
                        <img src="/assets/products/sample-icecream.png" alt="" />
                    </div>
                    <div className="hero-bg-glass right" aria-hidden="true">
                        <img src="/assets/products/RAJBHOG.jpeg" alt="" />
                    </div>
                    <div className="hero-rays" aria-hidden="true" />
                    <div className="hero-wave" aria-hidden="true" />
                    <div className="hero-sprinkles" aria-hidden="true">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                    <div className="hero-copy">
                        <span className="hero-kicker">Since 2004</span>
                        <h1 className="hero-title">
                            <span>Making</span>
                            <span>Your</span>
                            <span>Sweet</span>
                            <span>Dreams</span>
                            <span>Come</span>
                            <span>True.</span>
                        </h1>
                        <p>
                            Dive into a frozen paradise and let our ice cream
                            take you to a land of pure ecstasy.
                        </p>
                        <div className="hero-actions">
                            <button className="hero-btn primary magnetic-btn">
                                <span className="btn-text">Scoop It Up</span>
                                <span className="btn-icon" aria-hidden="true">→</span>
                            </button>
                            <button className="hero-btn ghost">
                                View Flavors
                            </button>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="hero-frame" data-float="0.2">
                            <img
                                className="hero-stack hero-stack-float"
                                src="/assets/products/stack.png"
                                alt="Mishti ice cream stack"
                            />
                        </div>
                        <div className="hero-floor-shadow" aria-hidden="true" />
                    </div>
                </div>
            </section>

            <section className="popular-section reveal-on-scroll">
                <div className="section-head">
                    <h2>
                        <span>Popular Scoop Flavors</span>
                    </h2>
                    <button className="hero-btn ghost">View Flavors</button>
                </div>
                <div className="popular-grid">
                    {[
                        { name: "Dulce de Cookies", image: "/assets/products/sample-icecream.png" },
                        { name: "Turkish Mocha", image: "/assets/products/twix.jpg.jpeg" },
                        { name: "Spicy PB Caramel", image: "/assets/RAJABAR.png" },
                        { name: "Thai Coco-Lime", image: "/assets/TWIXCHOCOBAR.png" },
                        { name: "Moroccan Honey", image: "/assets/products/RAJBHOG.jpeg" }
                    ].map((flavor) => (
                        <article className="popular-card pop-on-scroll" key={flavor.name}>
                            <div className="popular-image">
                                <img src={flavor.image} alt={flavor.name} />
                            </div>
                            <h3>{flavor.name}</h3>
                        </article>
                    ))}
                </div>
            </section>

            <section className="flavor-strip reveal-on-scroll">
                <div className="strip-item strip-title">
                    <h3>Types of Raw Flavor</h3>
                </div>
                <div className="strip-item strip-highlight">
                    <p>
                        We improve flavor consistency, boost and balance taste
                        profiles, and increase the perception of creamy
                        mouthfeel!
                    </p>
                </div>
                <div className="strip-item strip-reviews">
                    <div className="review-avatars" aria-hidden="true">
                        <img src="/assets/images/avatar-1.png" alt="" />
                        <img src="/assets/images/avatar-2.png" alt="" />
                        <img src="/assets/images/avatar-3.png" alt="" />
                    </div>
                    <div className="review-copy">
                        <span className="reviews-number">1800+</span>
                        <span>Customer Reviews</span>
                    </div>
                </div>
                <div className="strip-strawberries" aria-hidden="true">
                    <img
                        src="/assets/images/strawberries.png"
                        alt=""
                    />
                </div>
            </section>

            <section className="feature-flavor reveal-on-scroll">
                <div className="feature-copy">
                    <span className="feature-tag">Moroccan Honey Nut</span>
                    <h2>With Vanilla Essence</h2>
                    <p>
                        A sweet, nutty scoop with honeyed warmth and silky
                        vanilla. Crafted to melt like memories.
                    </p>
                    <div className="hero-actions">
                        <button className="hero-btn primary">View Flavors</button>
                        <button className="hero-btn ghost">Find Shops</button>
                    </div>
                </div>
                <div className="feature-visual">
                    <div className="feature-card orange" data-float="0.4">
                        <img src="/assets/products/twix.jpg.jpeg" alt="Honey nut cup" />
                    </div>
                    <div className="feature-card cream" data-float="0.3">
                        <img src="/assets/products/sample.png" alt="Vanilla cups" />
                    </div>
                    <div className="feature-card sky" data-float="0.5">
                        <img src="/assets/TWIXCHOCOBAR.png" alt="Coco lime bar" />
                    </div>
                </div>
            </section>

            <section className="exotic-section reveal-on-scroll">
                <div className="section-head">
                    <h2>Exoteric Flavors</h2>
                    <div className="exotic-nav">
                        <button className="circle-btn" aria-label="Previous">
                            ←
                        </button>
                        <button className="circle-btn" aria-label="Next">
                            →
                        </button>
                    </div>
                </div>
                <div className="exotic-doodles" aria-hidden="true">
                    <span className="doodle dot" />
                    <span className="doodle swirl" />
                    <span className="doodle sprinkle" />
                </div>
                <div className="exotic-row">
                    {[
                        { name: "Spicy PB", image: "/assets/RAJABAR.png", tone: "violet" },
                        { name: "Honey Nut", image: "/assets/products/RAJBHOG.jpeg", tone: "pink" },
                        { name: "Vanilla Chai", image: "/assets/products/sample.png", tone: "orange" },
                        { name: "Turkish Mocha", image: "/assets/products/twix.jpg.jpeg", tone: "yellow" }
                    ].map((item) => (
                        <div className={`exotic-badge pop-on-scroll ${item.tone}`} key={item.name}>
                            <div className="exotic-shape">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <span>{item.name}</span>
                        </div>
                    ))}
                    <div className="exotic-stamp">No.1</div>
                </div>
            </section>

            <section className="memories-section reveal-on-scroll">
                <div className="memories-visual" data-float="0.3">
                    <img src="/assets/products/sample-icecream.png" alt="Ice cream lover" />
                </div>
                <div className="memories-copy">
                    <h2>We Offer Ice Cream That Evoke Memories.</h2>
                    <p>
                        Delight in exquisite ice cream from elegant desserts
                        that reflect quality, craft, and fun.
                    </p>
                    <div className="hero-actions">
                        <button className="hero-btn primary">View Flavors</button>
                        <button className="hero-btn ghost">Find Shops</button>
                    </div>
                </div>
            </section>

            <section className="sweet-section reveal-on-scroll">
                <h2>Sweet Cold Creamy</h2>
                <div className="sweet-doodles" aria-hidden="true">
                    <span className="sweet-sprinkle" />
                    <span className="sweet-sprinkle" />
                    <span className="sweet-sprinkle" />
                </div>
                <div className="sweet-row">
                    {[
                        "/assets/products/sample.png",
                        "/assets/products/RAJBHOG.jpeg",
                        "/assets/RAJABAR.png",
                        "/assets/TWIXCHOCOBAR.png"
                    ].map((src, index) => (
                        <img key={src + index} src={src} alt="Sweet scoop" />
                    ))}
                </div>
            </section>

            <Footer />

        </div>

    );

}
