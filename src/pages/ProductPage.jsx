import React, { useMemo } from "react";
import "../styles/product-page.css";
import products from "../data/products";
import ProductSection from "../components/ProductSection";
import DistributorCTA from "../components/DistributorCTA";

export default function ProductPage() {
    const categoryOrder = [
        "Small Cups (35 ML)",
        "Large Cups (60 ML)",
        "Jumbo Cups (100 ML)",
        "Ripple Sundae (125 ML)",
        "Premium Cup (110 ML)",
        "Novelties",
        "Mishti Cone",
        "Ice Candy",
        "Chocolate World",
        "Special Mishti Bar",
        "Mishti Special Kulfi",
        "Combi Pack"
    ];

    const sectionColors = {
        "Small Cups (35 ML)": "#FFF8E7",
        "Large Cups (60 ML)": "#FFE4EC",
        "Jumbo Cups (100 ML)": "#FFF4C4",
        "Ripple Sundae (125 ML)": "#F3F9FF",
        "Premium Cup (110 ML)": "#F5E3D7",
        Novelties: "#F3F9FF",
        "Mishti Cone": "#E6F6E6",
        "Ice Candy": "#FFF4C4",
        "Chocolate World": "#F5E3D7",
        "Special Mishti Bar": "#FFE4EC",
        "Mishti Special Kulfi": "#E6F6E6",
        "Combi Pack": "#FFF8E7"
    };

    const groupedProducts = useMemo(() => {
        const groups = {};
        products.forEach((product) => {
            if (!groups[product.category]) {
                groups[product.category] = [];
            }
            groups[product.category].push(product);
        });
        return groups;
    }, []);

    return (
        <div className="product-page">
            <header className="main-header">
                <div className="header-center">
                    <a href="#/home" aria-label="Mishti Icecream Home">
                        <img
                            src="/assets/images/logo.png"
                            alt="Mishti Icecream Logo"
                            className="logo"
                        />
                    </a>
                    <a className="header-link" href="#/contact">
                        Contact Us
                    </a>
                    <a className="header-link" href="#/about">
                        About Us
                    </a>
                </div>
            </header>
            <section className="product-hero">
                <p className="hero-eyebrow">Mishti Ice Cream</p>
                <h1>Our Products</h1>
                <p className="hero-subtitle">
                    Discover our delicious range of ice creams and kulfis.
                </p>
            </section>

            <div className="product-sections">
                {categoryOrder.map((category) => (
                    <ProductSection
                        key={category}
                        title={category}
                        products={groupedProducts[category] || []}
                        accentColor={sectionColors[category]}
                    />
                ))}
            </div>

            <DistributorCTA />
        </div>
    );
}
