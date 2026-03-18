import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, Draggable } from "gsap/all";
import "../styles/home.css";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger, Draggable);

export default function Home() {
    const rowRef = useRef(null);
    const popularRef = useRef(null);

    const handleScroll = (direction) => {
        const verticalShift = 500; // Amount of vertical scroll to move cards horizontally
        window.scrollBy({
            top: direction === "next" ? verticalShift : -verticalShift,
            behavior: "smooth"
        });
    };

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

            // Pop-up animation on scroll for cards
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

            // Hover pop effect for popular cards
            gsap.utils.toArray(".popular-card").forEach((card) => {
                const img = card.querySelector("img");
                card.addEventListener("mouseenter", () => {
                    gsap.to(img, { scale: 1.1, duration: 0.3, ease: "power3.out" });
                });
                card.addEventListener("mouseleave", () => {
                    gsap.to(img, { scale: 1, duration: 0.3, ease: "power3.out" });
                });
            });

            // Infinite horizontal scroll for popular section
            const track = popularRef.current;
            if (track) {
                const originalCards = Array.from(track.children);

                // duplicate enough times for seamless loop (3x total)
                for (let i = 0; i < 2; i++) {
                    originalCards.forEach(card => track.appendChild(card.cloneNode(true)));
                }

                const allCards = Array.from(track.children);

                // calculate total width of original set
                let loopWidth = 0;
                originalCards.forEach(card => {
                    loopWidth += card.offsetWidth + 20; // include gap
                });

                // GSAP loop animation: right → left
                gsap.to(track, {
                    x: `-=${loopWidth}`,
                    duration: 80,
                    ease: "none",
                    repeat: -1,
                    modifiers: {
                        x: (x) => {
                            let val = parseFloat(x);
                            if (val <= -loopWidth) val += loopWidth;
                            return `${val}px`;
                        }
                    }
                });

                // Draggable setup
                Draggable.create(track, {
                    type: "x",
                    onPress() {
                        gsap.killTweensOf(track);
                    },
                    onDrag() {
                        gsap.set(track, { x: this.x });
                    },
                    onRelease() {
                        gsap.to(track, {
                            x: `-=${loopWidth}`,
                            duration: 50,
                            ease: "none",
                            repeat: -1,
                            modifiers: {
                                x: (x) => {
                                    let val = parseFloat(x);
                                    if (val <= -loopWidth) val += loopWidth;
                                    return `${val}px`;
                                }
                            }
                        });
                    }
                });
            }

            gsap.utils.toArray(".hero-title span").forEach((letter) => {

                function shake() {
                    gsap.to(letter, {
                        x: gsap.utils.random(-2, 2),      // small horizontal shake
                        y: gsap.utils.random(-2, 2),      // small vertical shake
                        rotate: gsap.utils.random(-2, 2), // slight rotation
                        duration: gsap.utils.random(0.3, 0.6),
                        ease: "sine.inOut",
                        onComplete: shake                  // repeat endlessly
                    });
                }

                shake(); // start the animation
            });

            // RANDOM FLOAT FOR IMAGES & DOODLES
            gsap.utils.toArray(".art-img, .art-title-group, .art-footer-detail, .squiggle, .sprinkle").forEach((el) => {

                function randomMove() {
                    let intensity = 1;
                    if (el.classList.contains("img-spread")) intensity = 0.6;
                    if (el.classList.contains("art-title-group")) intensity = 0.4;
                    if (el.classList.contains("squiggle") || el.classList.contains("sprinkle")) intensity = 1.4;

                    gsap.to(el, {
                        x: gsap.utils.random(-8, 8) * intensity,
                        y: gsap.utils.random(-8, 8) * intensity,
                        rotate: gsap.utils.random(-2, 2),
                        duration: gsap.utils.random(2.5, 4),
                        ease: "sine.inOut",
                        onComplete: randomMove
                    });
                }

                gsap.delayedCall(gsap.utils.random(0, 2), randomMove);
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

            gsap.utils.toArray(".letter").forEach((letter, index) => {
                gsap.to(letter, {
                    y: index % 2 === 0 ? -12 : 12,
                    duration: 1,
                    ease: "sine.inOut",
                    yoyo: true,
                    repeat: -1,
                    delay: index * 0.05
                });
            });

            gsap.utils.toArray(".sweet-row img").forEach((img, index) => {

                // Reveal
                gsap.fromTo(
                    img,
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power3.out",
                        delay: index * 0.1,
                        scrollTrigger: {
                            trigger: ".sweet-section",
                            start: "top 80%",
                            once: true
                        }
                    }
                );

                // Continuous bounce
                gsap.to(img, {
                    y: index % 2 === 0 ? -20 : 20,
                    rotate: index % 2 === 0 ? -2 : 2,
                    duration: 1.2,
                    ease: "sine.inOut",
                    yoyo: true,
                    repeat: -1,
                    delay: index * 0.15
                });
            });

            // Horizontal pinning effect for Exotic Flavors
            const exoticRow = rowRef.current;
            if (exoticRow) {
                const totalCardsWidth = exoticRow.scrollWidth;
                const windowWidth = window.innerWidth;
                const skipAmount = totalCardsWidth - windowWidth + 200; // Extra buffer to unveil all

                gsap.to(exoticRow, {
                    x: -skipAmount,
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".exotic-section",
                        pin: true,
                        start: "top top",
                        end: () => `+=${skipAmount + 400}`, // Duration of the pin
                        scrub: 1.2,
                        invalidateOnRefresh: true,
                        anticipatePin: 1
                    }
                });
            }

            // Speedy Caramel Droplets Motion
            gsap.utils.toArray(".shaving").forEach((shaving, i) => {
                const speed = 1.2 + (i % 3);

                gsap.fromTo(shaving,
                    { y: 0 },
                    {
                        y: 120, // moves downward into images
                        ease: "none",
                        scrollTrigger: {
                            trigger: ".sweet-section",
                            start: "top bottom",
                            end: "bottom top",
                            scrub: speed
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

            <div className="promo-strip">
                <span>Free Shipping on Orders Over ₹500!</span>
                <span className="promo-dot" />
                <span>Cold, Creamy & Fresh Daily</span>
                <span className="promo-dot" />
                <span>Mishti Ice Cream Specials</span>
            </div>

            <section className="marco-hero reveal-on-scroll">
                <div className="hero-card">

                    <div className="hero-rays" aria-hidden="true" />

                    {/* HERO WAVE */}
                    <svg
                        className="hero-wave"
                        viewBox="0 0 1200 140"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,60 
       C200,90 350,30 550,55 
       C750,80 900,40 1200,60
       L1200,140 
       L0,140 
       Z"
                            fill="#E2B347"
                            stroke="#2a1810"
                            strokeWidth="1"
                        />
                    </svg>

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

                        <h1 className="hero-title random-bounce">
                            {"MAKING YOUR SWEET DREAMS COME TRUE.".split("").map((letter, i) => (
                                <span key={i} className="bounce-letter">
                                    {letter === " " ? "\u00A0" : letter}
                                </span>
                            ))}
                        </h1>

                        <p>
                            Dive into a frozen paradise and let our ice cream
                            take you to a land of pure ecstasy.
                        </p>

                        <div className="hero-actions">

                            <button className="hero-btn primary">
                                SCOOP IT UP →
                            </button>

                            <button className="hero-btn ghost">
                                VIEW FLAVORS
                            </button>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="hero-frame">
                            <img
                                className="hero-stack hero-stack-float"
                                src="/assets/products/stack1.png"
                                alt="Ice cream stack"
                            />
                        </div>

                        <div className="hero-floor-shadow" />
                    </div>

                </div>
            </section>

            <section className="popular-section reveal-on-scroll">
                <div className="section-head popular-scoop-head">
                    <div className="popular-title-wrapper">
                        <img src="/assets/images/popular-heart.png" alt="" className="popular-heart" />
                        <h2>Popular Scoop Flavors</h2>
                        <span className="title-dash">-</span>
                    </div>

                    <a href="#/products" className="hero-btn ghost">View Flavors</a>
                </div>

                <div className="popular-wrapper">
                    <div className="popular-track" ref={popularRef}>
                        {[
                            { name: "Dulce de Cookies", image: "/assets/products/sample-icecream.png" },
                            { name: "Turkish Mocha", image: "/assets/products/twix.jpg.jpeg" },
                            { name: "Spicy PB Caramel", image: "/assets/RAJABAR.png" },
                            { name: "Thai Coco-Lime", image: "/assets/TWIXCHOCOBAR.png" },
                            { name: "Moroccan Honey", image: "/assets/products/RAJBHOG.jpeg" }
                        ].map((flavor, index) => (
                            <div className="popular-item" key={index}>

                                <article className="popular-card pop-on-scroll">
                                    <div className="popular-image">
                                        <img src={flavor.image} alt={flavor.name} />
                                    </div>
                                </article>

                                {/* TEXT OUTSIDE */}
                                <h3 className="popular-name">{flavor.name}</h3>

                            </div>
                        ))}
                    </div>
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
                        <span className="reviews-text">Customer Reviews</span>
                    </div>

                </div>

                <div className="strip-strawberries" aria-hidden="true">
                    <img src="/assets/strawberry.png" alt="" />
                </div>

            </section>

            <section className="feature-art-section reveal-on-scroll">
                <div className="art-collage-container">
                    {/* Floating Images */}
                    <div className="art-img img-peanuts" data-float="0.4">
                        <img src="/assets/images/collage-1.png" alt="Honey Nut" />
                    </div>
                    <div className="art-img img-lime" data-float="0.6">
                        <img src="/assets/images/collage-3.png" alt="Lime & Chili" />
                    </div>
                    <div className="art-img img-spread" data-float="0.2">
                        <img src="/assets/images/collage-2.png" alt="Ice Cream Spread" />
                    </div>

                    {/* Central Title Group */}
                    <div className="art-title-group">
                        <div className="title-row-upper">
                            <h1 className="hero-title">
                                {"MISHTI".split("").map((char, i) => <span key={i}>{char}</span>)}
                            </h1>
                            <img src="/assets/images/cone-doodle.png" alt="" className="cone-doodle" />
                        </div>
                        <div className="title-row-lower">
                            <img src="/assets/images/pink-heart.png" alt="" className="pink-heart-doodle" />
                            <h1 className="hero-title">
                                {"HONEY NUT".split("").map((char, i) => <span key={i}>{char === " " ? "\u00A0" : char}</span>)}
                            </h1>

                        </div>
                    </div>

                    {/* Bottom Left Detail */}
                    <div className="art-footer-detail">
                        <img src="/assets/images/pink-scoop.png" alt="" className="mini-scoop" />
                        <div className="detail-text">
                            <span className="with-text">WITH</span>
                            <span className="essence-text">VANILLA ESSENCE</span>
                        </div>
                    </div>

                    {/* Decorative Doodles */}
                    <div className="art-doodles">
                        <div className="squiggle sq-1"></div>
                        <div className="squiggle sq-2"></div>
                        <div className="sprinkle sp-1"></div>
                        <div className="sprinkle sp-2"></div>
                        <div className="sprinkle sp-3"></div>
                        <div className="sprinkle sp-4"></div>
                    </div>
                </div>
            </section>

            <section className="exotic-section">
                <div className="section-head">
                    <h2>Exoteric Flavors</h2>
                    <div className="exotic-nav">
                        <button className="circle-btn" aria-label="Previous" onClick={() => handleScroll("prev")}>
                            ←
                        </button>
                        <button className="circle-btn" aria-label="Next" onClick={() => handleScroll("next")}>
                            →
                        </button>
                    </div>
                </div>
                <div className="exotic-row" ref={rowRef}>
                    {[
                        { name: "American Nut", tone: "violet" },
                        { name: "Raj Bhog", tone: "pink" },
                        { name: "Kesar Pista", tone: "orange" },
                        { name: "Yellow Grid", tone: "olive" },
                        { name: "Geometric Grove", tone: "teal" }
                    ].map((item) => (
                        <div className={`exotic-badge-container pop-on-scroll ${item.tone}`} key={item.name}>
                            <span className="exotic-label">{item.name}</span>
                            <div className={`exotic-badge ${item.tone}`}>
                                {item.tone === 'pink' ? (
                                    <div className="exotic-rotator">
                                        <div className="exotic-shape" />
                                    </div>
                                ) : (
                                    <div className="exotic-shape" />
                                )}
                            </div>
                        </div>
                    ))}
                    <div className="exotic-stamp-wrapper">
                        <div className="exotic-stamp">
                            <svg viewBox="0 0 200 200" className="stamp-svg">
                                <path id="curve" d="M 40, 100 A 60,60 0 1,1 160,100 A 60,60 0 1,1 40,100" fill="transparent" />
                                <text className="stamp-text">
                                    <textPath href="#curve" startOffset="0%">
                                        HIGHEST SELLING ICE CREAM • HIGHEST SELLING ICE CREAM •
                                    </textPath>
                                </text>
                            </svg>
                            <div className="stamp-center">
                                <span className="no-1">NO<br />.1</span>
                            </div>
                            <div className="stamp-sparkles">
                                <span className="sparkle s1">✦</span>
                                <span className="sparkle s2">✦</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="memories-section reveal-on-scroll">

                {/* Sprinkles */}
                <div className="memories-sprinkles">
                    {[...Array(12)].map((_, i) => (
                        <span key={i} className={`memories-sprinkle s${i + 1}`}></span>
                    ))}
                </div>

                {/* LEFT VISUAL */}
                <div className="memories-visual-container">
                    <div className="memories-visual-frame">

                        {/* 🔥 NEW SUNBURST */}
                        <div className="memories-sunburst"></div>

                        <img
                            src="/assets/images/happy-man-icecream.png"
                            alt="Happy person with ice cream"
                            className="memories-hero-img"
                        />
                    </div>

                    <img
                        src="/assets/images/pink-heart-3d.png"
                        alt="Love icon"
                        className="floating-heart"
                    />
                </div>

                {/* RIGHT CONTENT */}
                <div className="memories-copy">

                    <div className="heading-with-icon">
                        <h2 className="memories-heading">
                            WE
                            <span className="offer-wrap">
                                OFFER
                                <img
                                    src="/assets/images/chocolate-truffle.png"
                                    className="offer-choco"
                                    alt=""
                                />
                            </span>
                            <br />
                            ICECREAM THAT <br />
                            EVOKE MEMORIES.
                        </h2>
                    </div>

                    <p className="memories-description">
                        You will have a great time with our delicious desserts.
                        Delight in exquisite ice-cream, from elegant desserts,
                        which reflect quality.
                    </p>

                    <div className="memories-actions">
                        <a href="#/products" className="memories-btn-primary">
                            VIEW FLAVORS <span>&gt;</span>
                        </a>

                        <a href="#/contact" className="memories-btn-ghost">
                            <div className="map-marker-container">
                                <div className="map-folded"></div>
                                <div className="map-pin">
                                    <span className="pin-head"></span>
                                </div>
                            </div>
                            FIND SHOPS
                        </a>
                    </div>
                </div>
            </section>


            <section className="sweet-section reveal-on-scroll">
                <div className="sweet-heading-wrapper">

                    <h2 className="sweet-title">
                        {"SWEET COLD CREAMY".split("").map((char, i) => (
                            <span key={i} className="letter">
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </h2>

                    <div className="shaving-splatter">
                        {[...Array(60)].map((_, i) => {
                            const size = Math.floor(Math.random() * 8) + 4;
                            const left = Math.floor(Math.random() * 110) - 5;
                            const top = Math.floor(Math.random() * 130) - 15;
                            const opacity = Math.random() * 0.4 + 0.6;
                            const rotate = Math.floor(Math.random() * 360);

                            return (
                                <div
                                    key={i}
                                    className="shaving"
                                    style={{
                                        width: `${size}px`,
                                        height: `${size * 1.2}px`,
                                        left: `${left}%`,
                                        top: `${top}%`,
                                        opacity: opacity,
                                        transform: `rotate(${rotate}deg)`
                                    }}
                                />
                            );
                        })}
                    </div>
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

