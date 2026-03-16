import React, { useState } from "react";

export default function ProductCard({ product }) {
    const [quantity, setQuantity] = useState(10);
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <article className="product-card wholesale-card">
            {product.badge && <div className="product-badge">{product.badge}</div>}
            <div className="product-image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
                <div className="product-details">
                    <span className="product-name">{product.name}</span>
                    <span className="product-size">{product.size}</span>
                    <span className="product-price">{product.price}</span>
                </div>

                <div className="wholesale-row">
                    <div className="qty-input-wrapper">
                        <input
                            type="number"
                            className="qty-input"
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
                            min="1"
                        />
                    </div>
                    <button
                        className={`add-to-cart-bulk ${isAdded ? "added" : ""}`}
                        onClick={handleAddToCart}
                        disabled={isAdded}
                    >
                        {isAdded ? (
                            <>
                                <svg className="check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                <span>Added!</span>
                            </>
                        ) : (
                            "Add to Cart"
                        )}
                    </button>
                </div>
            </div>
        </article>
    );
}
