import React from "react";

export default function ProductCard({ product }) {
    return (
        <article className="product-card">
            <div className="product-image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
                <h3>{product.name}</h3>
                <div className="product-meta">
                    <span className="product-size">{product.size}</span>
                    <span className="product-price">{product.price}</span>
                </div>
            </div>
        </article>
    );
}
