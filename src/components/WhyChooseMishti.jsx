import React from "react";

const features = [
    {
        title: "Premium Ingredients",
        description: "Real dairy, rich flavors, and thoughtfully sourced ingredients.",
        icon: "PI",
        tone: "vanilla"
    },
    {
        title: "Wide Product Range",
        description: "Cups, cones, kulfis, bars, and combo packs for every mood.",
        icon: "WR",
        tone: "strawberry"
    },
    {
        title: "Affordable Pricing",
        description: "Premium quality without premium pricing for every customer.",
        icon: "AP",
        tone: "pistachio"
    },
    {
        title: "Trusted by Retailers",
        description: "Reliable supply and consistent quality across markets.",
        icon: "TR",
        tone: "blueberry"
    }
];

export default function WhyChooseMishti() {
    return (
        <section className="why-section">
            <div className="section-title">
                <h2>Why Choose Mishti Ice Cream</h2>
            </div>
            <div className="why-grid">
                {features.map((feature) => (
                    <div
                        className={`why-card ${feature.tone}`}
                        key={feature.title}
                    >
                        <div className="why-icon">{feature.icon}</div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
