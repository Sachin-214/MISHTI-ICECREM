import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/HeroAnimation.css";

gsap.registerPlugin(ScrollTrigger);

export default function HeroAnimation() {

    const heroRef = useRef(null);
    const coneAnimRef = useRef(null);

    useEffect(() => {

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "+=1500",
                scrub: true,
                pin: true
            }
        });

        // Simpler GSAP scale (CSS will handle floating)
        tl.fromTo(
            coneAnimRef.current,
            { scale: 0.9, y: 0 },
            { scale: 1.4, y: -50 }
        );

        tl.to(".hero-container", {
            backgroundColor: "#ff8da1"
        });

        tl.to(".hero-container", {
            backgroundColor: "#ffba3b"
        });

    }, []);

    return (

        <section className="hero-container" ref={heroRef}>

            <div className="hero-bg">

                <h1 className="hero-title">
                    A Scoop of Happiness
                </h1>

                {/* Added floating ingredients */}
                <img className="floating-ing mango-float" src="/assets/images/mango.png" alt="Mango" />
                <img className="floating-ing strawberry-float" src="/assets/images/strawberry.png" alt="Strawberry" />

                <div className="hero-cone-wrapper" ref={coneAnimRef}>
                    <img
                        className="hero-cone"
                        src="/assets/images/icecream-cone.png"
                        alt="Mishti Icecream Cone"
                    />
                </div>

                <div className="sprinkles">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>

        </section>

    )

}