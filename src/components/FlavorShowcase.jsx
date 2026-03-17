import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/FlavorShowcase.css";

gsap.registerPlugin(ScrollTrigger);

export default function FlavorShowcase() {

    const containerRef = useRef(null);

    useEffect(() => {

        let sections = gsap.utils.toArray(".flavor-panel");

        // The horizontal scroll timeline
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 1,
                end: "+=3000"
            }
        });

        // Floating animation for main ice creams
        gsap.to(".floating-flavor", {
            y: 20,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            duration: 2.5
        });

        // Unique floating for ingredients
        gsap.to(".flavor-ingredient", {
            y: -15,
            rotation: 10,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            duration: 3
        });

    }, []);

    return (

        <section className="flavor-showcase-container" ref={containerRef}>
            
            {/* MANGO PANEL */}
            <div className="flavor-panel mango-bg">
                <div className="flavor-content">
                    <div className="flavor-text">
                        <h2>Mango Magic</h2>
                        <p>Experience the tropical burst of fresh, golden Alphonso mangoes in every creamy bite.</p>
                        <button className="flavor-btn">Taste the Magic</button>
                    </div>
                    <div className="flavor-visuals">
                        <img className="flavor-ingredient ing-1" src="/assets/images/mango.png" alt="Mango Detail" />
                        <img className="floating-flavor" src="/assets/images/mango.png" alt="Mango Icecream" />
                    </div>
                </div>
            </div>

            {/* STRAWBERRY PANEL */}
            <div className="flavor-panel strawberry-bg">
                <div className="flavor-content flex-reverse">
                    <div className="flavor-text">
                        <h2>Strawberry Bliss</h2>
                        <p>Crafted exclusively with hand-picked strawberries to deliver a luxurious berry delight.</p>
                        <button className="flavor-btn">Taste the Bliss</button>
                    </div>
                    <div className="flavor-visuals">
                        <img className="flavor-ingredient ing-2" src="/assets/images/strawberry.png" alt="Strawberry Detail" />
                        <img className="floating-flavor" src="/assets/images/strawberry.png" alt="Strawberry Icecream" />
                    </div>
                </div>
            </div>

            {/* CHOCOLATE PANEL */}
            <div className="flavor-panel chocolate-bg">
                <div className="flavor-content">
                    <div className="flavor-text">
                        <h2>Chocolate Heaven</h2>
                        <p>Rich, dark, imported Belgian chocolate meticulously crafted into a velvety masterpiece.</p>
                        <button className="flavor-btn">Taste Heaven</button>
                    </div>
                    <div className="flavor-visuals">
                        {/* Using TWIXCHOCOBAR.jpeg as an ingredient to show off chocolate chunks */}
                        <img className="flavor-ingredient ing-3" src="/assets/TWIXCHOCOBAR.jpeg" alt="Chocolate Chunks" />
                        {/* As seen previously, mishti has a chocolate.png in /assets/images/ */}
                        <img className="floating-flavor" src="/assets/images/chocolate.png" alt="Chocolate Icecream" />
                    </div>
                </div>
            </div>

        </section>

    )

}