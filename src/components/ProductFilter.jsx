import React from "react";

export default function ProductFilter({ categories, activeCategory, onChange }) {
    return (
        <div className="product-filter">
            {categories.map((category) => (
                <button
                    key={category}
                    type="button"
                    className={
                        category === activeCategory
                            ? "filter-btn filter-btn-active"
                            : "filter-btn"
                    }
                    onClick={() => onChange(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}
