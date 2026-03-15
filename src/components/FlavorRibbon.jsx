import React from "react";

const ribbonText = [
    { label: "Mango Magic", tone: "mango" },
    { label: "Chocolate Bliss", tone: "chocolate" },
    { label: "Strawberry Love", tone: "strawberry" },
    { label: "Pista Delight", tone: "pista" },
    { label: "Real Milk", tone: "milk" },
    { label: "Pure Happiness", tone: "happiness" },
    { label: "Mishti Moments", tone: "mishti" }
];

export default function FlavorRibbon() {
    return (
        <section className="flavor-ribbon">
            <div className="ribbon-track">
                {[0, 1].map((copy) => (
                    <div className="ribbon-row" aria-hidden={copy === 1} key={copy}>
                        {ribbonText.map((item, index) => (
                            <span className={`ribbon-item ${item.tone}`} key={`${copy}-${item.label}`}>
                                <span className="ribbon-outline" aria-hidden="true">
                                    {item.label}
                                </span>
                                <span className="ribbon-fill">{item.label}</span>
                                {index < ribbonText.length - 1 && (
                                    <span className="ribbon-emoji" aria-hidden="true">🍦</span>
                                )}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}
