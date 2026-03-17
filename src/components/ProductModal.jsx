import React from "react";

export default function ProductModal({ product, onClose }) {
    if (!product) {
        return null;
    }

    return (
        <div className="product-modal-overlay" onClick={onClose}>
            <div
                className="product-modal"
                onClick={(event) => event.stopPropagation()}
                role="dialog"
                aria-modal="true"
            >
                <button
                    type="button"
                    className="modal-close"
                    onClick={onClose}
                    aria-label="Close"
                >
                    ×
                </button>
                <div className="modal-image">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="modal-content">
                    <p className="modal-category">{product.category}</p>
                    <h2>{product.name}</h2>
                    <p className="modal-size">{product.size}</p>
                    <p className="modal-description">{product.description}</p>
                    <button type="button" className="modal-cta">
                        Become a Distributor
                    </button>
                </div>
            </div>
        </div>
    );
}
