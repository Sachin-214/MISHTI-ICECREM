import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const products = [
    {
        name: "Mango Jumbo",
        image: "/assets/products/sample-icecream.png"
    },
    {
        name: "Choco Chips Premium",
        image: "/assets/products/sample-icecream.png"
    },
    {
        name: "Cassata",
        image: "/assets/products/sample-icecream.png"
    },
    {
        name: "Mishti Matka Kulfi",
        image: "/assets/products/sample-icecream.png"
    }
];

export default function FloatingShowcase() {
    const cardsRef = useRef([]);

    useEffect(() => {
        const cards = cardsRef.current.filter(Boolean);

        const floats = cards.map((card, index) =>
            gsap.to(card, {
                y: 12,
                duration: 2.4 + index * 0.2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            })
        );

        const handleMove = (event) => {
            const card = event.currentTarget;
            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const rotateX = ((y / rect.height) * 2 - 1) * -6;
            const rotateY = ((x / rect.width) * 2 - 1) * 6;

            gsap.to(card, {
                rotateX,
                rotateY,
                duration: 0.3,
                ease: "power3.out"
            });
        };

        const handleLeave = (event) => {
            gsap.to(event.currentTarget, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.4,
                ease: "power3.out"
            });
        };

        cards.forEach((card) => {
            card.addEventListener("mousemove", handleMove);
            card.addEventListener("mouseleave", handleLeave);
        });

        return () => {
            floats.forEach((tween) => tween.kill());
            cards.forEach((card) => {
                card.removeEventListener("mousemove", handleMove);
                card.removeEventListener("mouseleave", handleLeave);
            });
        };
    }, []);

    return (
        <section className="floating-section">
            <div className="section-title">
                <h2>Floating Favorites</h2>
                <p>Playful scoops that dance with every breeze.</p>
            </div>
            <div className="floating-grid">
                {products.map((product, index) => (
                    <div
                        className="floating-card"
                        key={product.name}
                        ref={(el) => {
                            cardsRef.current[index] = el;
                        }}
                    >
                        <div className="floating-shine" aria-hidden="true" />
                        <div className="floating-image">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <h3>{product.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
