import React, { useState } from "react";

const CART_KEY = "mishti_cart";
const WHOLESALE_MIN = 10;

const readCart = () => {
    try {
        const stored = localStorage.getItem(CART_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch {
        return [];
    }
};

const writeCart = (items) => {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
};

const normalizePrice = (price) => {
    if (typeof price === "number") return price;
    const parsed = parseInt(String(price).replace(/[^\d]/g, ""), 10);
    return Number.isFinite(parsed) ? parsed : 0;
};

const updateCartBadge = () => {
    const cart = readCart();
    const count = cart.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0);
    document.querySelectorAll(".cart-badge").forEach((el) => {
        el.textContent = String(count);
    });
    document.querySelectorAll(".tab-badge").forEach((el) => {
        el.textContent = String(count);
        el.style.display = count > 0 ? "" : "none";
    });
};

const addToCart = (product) => {
    const cart = readCart();
    const id = String(product.id);
    const unitPrice = normalizePrice(product.price);
    const existing = cart.find((item) => String(item.id) === id);
    if (existing) {
        existing.quantity = (Number(existing.quantity) || 0) + WHOLESALE_MIN;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: unitPrice,
            unitPrice,
            image: product.image,
            category: product.category,
            quantity: WHOLESALE_MIN
        });
    }
    writeCart(cart);
    updateCartBadge();
};

export default function ProductCard({ product }) {
    const [quantity, setQuantity] = useState(10);
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        addToCart(product);
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
                            onChange={(e) => {
                                const next = parseInt(e.target.value, 10);
                                setQuantity(Number.isFinite(next) ? Math.max(next, WHOLESALE_MIN) : WHOLESALE_MIN);
                            }}
                            min="10"
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
