import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const flavorWords = [
    { text: "Mango Magic", color: "#FFC107" },
    { text: "Chocolate Bliss", color: "#5D4037" },
    { text: "Strawberry Love", color: "#FF4F81" },
    { text: "Pista Delight", color: "#7CB342" },
    { text: "Vanilla Dream", color: "#F5E6CA" },
    { text: "Creamy Joy", color: "#FFD1DC" }
];

const sprinkles = [
    { top: "12%", left: "8%", size: 8, color: "#FFB3C7" },
    { top: "24%", left: "22%", size: 6, color: "#FFE680" },
    { top: "18%", left: "70%", size: 7, color: "#A7F3D0" },
    { top: "40%", left: "86%", size: 5, color: "#A7D8FF" },
    { top: "62%", left: "12%", size: 6, color: "#FFE680" },
    { top: "70%", left: "35%", size: 8, color: "#FFB3C7" },
    { top: "28%", left: "46%", size: 5, color: "#A7D8FF" },
    { top: "52%", left: "60%", size: 7, color: "#A7F3D0" },
    { top: "78%", left: "78%", size: 6, color: "#FFB3C7" },
    { top: "82%", left: "20%", size: 5, color: "#A7F3D0" },
    { top: "10%", left: "90%", size: 7, color: "#FFE680" },
    { top: "55%", left: "5%", size: 6, color: "#A7D8FF" }
];

export default function TypographyShowcase() {
    const sectionRef = useRef(null);
    const outlineTrackRef = useRef(null);
    const wordsRef = useRef([]);
    const sprinkleRefs = useRef([]);
    const turbulenceRef = useRef(null);
    const displacementRef = useRef(null);
    const charsRef = useRef([]);

    const message = "PURE SWEET HAPPINESS";

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return undefined;

        const ctx = gsap.context(() => {
            if (outlineTrackRef.current) {
                gsap.to(outlineTrackRef.current, {
                    x: "-50%",
                    duration: 18,
                    ease: "linear",
                    repeat: -1
                });

                ScrollTrigger.create({
                    trigger: section,
                    start: "top bottom",
                    end: "bottom top",
                    onUpdate: (self) => {
                        const velocity = self.getVelocity();
                        const skew = gsap.utils.clamp(-12, 12, velocity / 200);
                        gsap.to(outlineTrackRef.current, {
                            skewX: skew,
                            duration: 0.2,
                            ease: "power2.out",
                            transformOrigin: "50% 50%"
                        });
                    }
                });
            }

            gsap.fromTo(
                charsRef.current,
                { opacity: 0, scale: 0 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.04,
                    ease: "back.out(2)",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 70%"
                    }
                }
            );

            gsap.fromTo(
                wordsRef.current,
                { opacity: 0, y: 18 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.12,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 65%"
                    }
                }
            );

            wordsRef.current.forEach((word, index) => {
                gsap.to(word, {
                    rotateX: gsap.utils.random(-12, 12),
                    rotateY: gsap.utils.random(-12, 12),
                    duration: 6 + index * 0.4,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });

                gsap.to(word, {
                    x: gsap.utils.random(-20, 20),
                    y: gsap.utils.random(-18, 18),
                    duration: 5 + index * 0.3,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            });

            if (turbulenceRef.current && displacementRef.current) {
                gsap.to(turbulenceRef.current, {
                    attr: { baseFrequency: "0.008 0.02" },
                    duration: 6,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });

                ScrollTrigger.create({
                    trigger: section,
                    start: "top 70%",
                    onEnter: () =>
                        gsap.to(displacementRef.current, {
                            attr: { scale: 18 },
                            duration: 1,
                            ease: "power2.out"
                        })
                });
            }
        }, sectionRef);

        const handleMouseMove = (event) => {
            const bounds = section.getBoundingClientRect();
            const mouseX = event.clientX - bounds.left;
            const mouseY = event.clientY - bounds.top;

            wordsRef.current.forEach((word) => {
                if (!word) return;
                const rect = word.getBoundingClientRect();
                const wordX = rect.left - bounds.left + rect.width / 2;
                const wordY = rect.top - bounds.top + rect.height / 2;
                const dx = mouseX - wordX;
                const dy = mouseY - wordY;
                const distance = Math.hypot(dx, dy);

                if (distance < 100) {
                    const pull = (100 - distance) / 100;
                    gsap.to(word, {
                        x: dx * 0.25 * pull,
                        y: dy * 0.25 * pull,
                        duration: 0.6,
                        ease: "elastic.out(1, 0.4)"
                    });
                } else {
                    gsap.to(word, {
                        x: 0,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out"
                    });
                }
            });

            sprinkleRefs.current.forEach((sprinkle) => {
                if (!sprinkle) return;
                const rect = sprinkle.getBoundingClientRect();
                const sprinkleX = rect.left - bounds.left + rect.width / 2;
                const sprinkleY = rect.top - bounds.top + rect.height / 2;
                const dx = sprinkleX - mouseX;
                const dy = sprinkleY - mouseY;
                const distance = Math.hypot(dx, dy);
                const radius = 120;

                if (distance < radius && distance > 0) {
                    const push = (radius - distance) / radius;
                    gsap.to(sprinkle, {
                        x: (dx / distance) * 18 * push,
                        y: (dy / distance) * 18 * push,
                        duration: 0.6,
                        ease: "power3.out"
                    });
                } else {
                    gsap.to(sprinkle, {
                        x: 0,
                        y: 0,
                        duration: 1.4,
                        ease: "sine.out"
                    });
                }
            });
        };

        const handleMouseLeave = () => {
            wordsRef.current.forEach((word) => {
                if (!word) return;
                gsap.to(word, {
                    x: 0,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out"
                });
            });

            sprinkleRefs.current.forEach((sprinkle) => {
                if (!sprinkle) return;
                gsap.to(sprinkle, {
                    x: 0,
                    y: 0,
                    duration: 1.2,
                    ease: "sine.out"
                });
            });
        };

        const handleHover = (isEnter) => {
            if (!displacementRef.current) return;
            gsap.to(displacementRef.current, {
                attr: { scale: isEnter ? 28 : 14 },
                duration: 0.6,
                ease: "power2.out"
            });
        };

        section.addEventListener("mousemove", handleMouseMove);
        section.addEventListener("mouseleave", handleMouseLeave);

        const messageEl = section.querySelector(".brand-message");
        const handleEnter = () => handleHover(true);
        const handleExit = () => handleHover(false);
        if (messageEl) {
            messageEl.addEventListener("mouseenter", handleEnter);
            messageEl.addEventListener("mouseleave", handleExit);
        }

        ScrollTrigger.refresh();

        return () => {
            section.removeEventListener("mousemove", handleMouseMove);
            section.removeEventListener("mouseleave", handleMouseLeave);
            if (messageEl) {
                messageEl.removeEventListener("mouseenter", handleEnter);
                messageEl.removeEventListener("mouseleave", handleExit);
            }
            ctx.revert();
        };
    }, []);

    const renderChars = (withRefs) =>
        message.split("").map((char, index) => (
            <span
                key={`${char}-${index}-${withRefs ? "base" : "liquid"}`}
                className="brand-char"
                ref={
                    withRefs
                        ? (el) => {
                              charsRef.current[index] = el;
                          }
                        : undefined
                }
            >
                {char === " " ? "\u00A0" : char}
            </span>
        ));

    return (
        <section className="typography-section" ref={sectionRef}>
            <svg className="liquid-filter" aria-hidden="true">
                <filter id="liquid">
                    <feTurbulence
                        ref={turbulenceRef}
                        type="fractalNoise"
                        baseFrequency="0.01 0.02"
                        numOctaves="2"
                        seed="2"
                        result="noise"
                    />
                    <feDisplacementMap
                        ref={displacementRef}
                        in="SourceGraphic"
                        in2="noise"
                        scale="14"
                        xChannelSelector="R"
                        yChannelSelector="G"
                    />
                </filter>
            </svg>
            <div className="sprinkles" aria-hidden="true">
                {sprinkles.map((sprinkle, index) => (
                    <span
                        key={index}
                        className="sprinkle"
                        ref={(el) => {
                            sprinkleRefs.current[index] = el;
                        }}
                        style={{
                            top: sprinkle.top,
                            left: sprinkle.left,
                            width: sprinkle.size,
                            height: sprinkle.size,
                            backgroundColor: sprinkle.color,
                            animationDelay: `${index * 0.4}s`
                        }}
                    />
                ))}
            </div>
            <div className="outline-ticker">
                <div className="outline-track" ref={outlineTrackRef}>
                    <span>MISHTI</span>
                    <span>MISHTI</span>
                    <span>MISHTI</span>
                    <span>MISHTI</span>
                </div>
            </div>
            <div className="brand-message" aria-label={message}>
                <span className="brand-message-layer brand-message-base">
                    {renderChars(true)}
                </span>
                <span
                    className="brand-message-layer brand-message-liquid"
                    aria-hidden="true"
                >
                    {renderChars(false)}
                </span>
            </div>
            <div className="flavor-cloud">
                {flavorWords.map((word, index) => (
                    <span
                        key={word.text}
                        ref={(el) => {
                            wordsRef.current[index] = el;
                        }}
                        className="flavor-word"
                        style={{ color: word.color }}
                    >
                        {word.text}
                    </span>
                ))}
            </div>
        </section>
    );
}
