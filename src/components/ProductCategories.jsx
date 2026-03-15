import React from "react";

const categories = [
    {
        name: "Cups",
        image: "/assets/products/sample-icecream.png",
        tone: "vanilla"
    },
    {
        name: "Cones",
        image: "/assets/cone.avif",
        tone: "strawberry"
    },
    {
        name: "Kulfi",
        image: "/assets/RAJABAR.png",
        tone: "pistachio"
    },
    {
        name: "Sundae",
        image: "/assets/products/sample-icecream.png",
        tone: "blueberry"
    },
    {
        name: "Ice Candy",
        image: "/assets/TWIXCHOCOBAR.png",
        tone: "mango"
    }
];

export default function ProductCategories() {
    return (
        <section className="categories-section">
            <div className="section-title">
                <h2>Product Categories</h2>
                <p>Explore our range of delicious ice cream favorites.</p>
            </div>
            <div className="categories-grid">
                {categories.map((category) => (
                    <a
                        className={`category-card ${category.tone}`}
                        href="#/products"
                        key={category.name}
                    >
                        <div className="category-image">
                            <img src={category.image} alt={category.name} />
                        </div>
                        <h3>{category.name}</h3>
                    </a>
                ))}
            </div>
        </section>
    );
}
