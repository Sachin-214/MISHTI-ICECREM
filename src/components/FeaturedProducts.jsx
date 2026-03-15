import React from "react";

const featuredProducts = [
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

export default function FeaturedProducts() {
    return (
        <section className="featured-section">
            <div className="section-title">
                <h2>Featured Flavors</h2>
                <p>Our most loved ice cream treats.</p>
            </div>
            <div className="featured-grid">
                {featuredProducts.map((product) => (
                    <div className="featured-card" key={product.name}>
                        <div className="featured-image">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <h3>{product.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
