import React, { useEffect, useRef, useState } from "react";

export default function DistributorCTA() {
    const ctaRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = ctaRef.current;
        if (!node) {
            return undefined;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.25 }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={ctaRef}
            className={
                isVisible ? "distributor-cta cta-visible" : "distributor-cta"
            }
        >
            <div className="cta-shape cta-shape-one" />
            <div className="cta-shape cta-shape-two" />
            <div className="cta-shape cta-shape-three" />

            <div className="cta-content">
                <p className="cta-eyebrow">Partner With Mishti Ice Cream</p>
                <h2>Become a Mishti Ice Cream Distributor</h2>
                <p className="cta-subtitle">
                    Join our growing distribution network and bring Mishti Ice
                    Cream to your city.
                </p>
                <a className="cta-button" href="#/distributor">
                    Apply for Distributorship
                </a>
            </div>
        </section>
    );
}
