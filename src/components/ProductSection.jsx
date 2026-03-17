import React, { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductSection({ title, products, accentColor }) {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = sectionRef.current;
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
            { threshold: 0.2 }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className={
                isVisible
                    ? "product-section-block section-visible"
                    : "product-section-block"
            }
            style={{ backgroundColor: accentColor }}
        >
            <div className={`section-header ${title === "POPULAR SCOOP FLAVORS" ? "popular-header" : ""}`}>
                {title === "POPULAR SCOOP FLAVORS" && (
                    <img src="/assets/images/popular-heart.png" alt="" className="popular-heart" />
                )}
                <h2>{title}</h2>
                {title === "POPULAR SCOOP FLAVORS" && <span className="title-dash">-</span>}
                <div className="section-divider" />
            </div>
            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}
