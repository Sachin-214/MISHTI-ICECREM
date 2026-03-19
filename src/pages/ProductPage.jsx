import React, { useMemo } from "react";
import "../styles/product-page.css";
import products from "../data/products";
import ProductSection from "../components/ProductSection";
import DistributorCTA from "../components/DistributorCTA";

export default function ProductPage() {
    const categoryOrder = [
        "POPULAR SCOOP FLAVORS",
        "Jumbo Cups (100 ML)",
        "Ripple Sundae (125 ML)",
        "Premium Cup (110 ML)",
        "Novelties",
        "Mishti Cone",
        "Ice Candy",
        "Chocolate World",
        "Special Mishti Bar",
        "Mishti Special Kulfi",
        "Combi Pack",
        "Gallon Pack"
    ];

    const sectionColors = {
        "POPULAR SCOOP FLAVORS": "#FFE4EC",
        "Jumbo Cups (100 ML)": "#FFF4C4",
        "Ripple Sundae (125 ML)": "#F3F9FF",
        "Premium Cup (110 ML)": "#F5E3D7",
        Novelties: "#F3F9FF",
        "Mishti Cone": "#E6F6E6",
        "Ice Candy": "#FFF4C4",
        "Chocolate World": "#F5E3D7",
        "Special Mishti Bar": "#FFE4EC",
        "Mishti Special Kulfi": "#E6F6E6",
        "Combi Pack": "#FFF8E7",
        "Gallon Pack": "#FFE4EC"
    };

    const [searchQuery, setSearchQuery] = React.useState("");
    const [activeCategory, setActiveCategory] = React.useState("All");
    const [activeFlavor, setActiveFlavor] = React.useState("All");
    const [priceRange, setPriceRange] = React.useState("All");

    const categories = ["All", "Cups", "Cones", "Kulfi", "Ice Candy", "Combi Pack", "Gallon Pack"];
    const flavors = ["All", "Vanilla", "Strawberry", "Mango", "Chocolate", "Pista", "Butterscotch", "Dry Fruit"];

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
            
            const categoryMap = {
                "Cups": ["Large Cups", "Jumbo Cups", "Premium Cup"],
                "Cones": ["Mishti Cone"],
                "Kulfi": ["Matka Kulfi", "Special Mishti Bar", "Mishti Special Kulfi"],
                "Ice Candy": ["Ice Candy"],
                "Combi Pack": ["Combi Pack"],
                "Gallon Pack": ["Gallon Pack"]
            };

            let matchesCategory = activeCategory === "All";
            if (!matchesCategory) {
                matchesCategory = categoryMap[activeCategory].some(kw => product.category.includes(kw));
            }

            let matchesFlavor = activeFlavor === "All";
            if (!matchesFlavor) {
                matchesFlavor = product.name.toLowerCase().includes(activeFlavor.toLowerCase()) || 
                                product.category.toLowerCase().includes(activeFlavor.toLowerCase());
            }

            const numericPrice = parseInt(product.price.replace(/[^\d]/g, ""));
            let matchesPrice = true;
            if (priceRange === "Under ₹300") matchesPrice = numericPrice < 300;
            else if (priceRange === "₹300–₹600") matchesPrice = numericPrice >= 300 && numericPrice <= 600;
            else if (priceRange === "Above ₹600") matchesPrice = numericPrice > 600;

            return matchesSearch && matchesCategory && matchesFlavor && matchesPrice;
        });
    }, [searchQuery, activeCategory, activeFlavor, priceRange]);

    const displayedGroups = useMemo(() => {
        const groups = {};
        categoryOrder.forEach(cat => groups[cat] = []);
        
        filteredProducts.forEach((product) => {
            if (groups[product.category]) {
                groups[product.category].push(product);
            }
        });
        return groups;
    }, [filteredProducts]);

    const [showScrollTop, setShowScrollTop] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="product-page">
            <header className="main-header">
                <div className="header-center">
                    <a className="header-link" href="#/about">
                        About Us
                    </a>
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
                </div>
                <button
                    className="floating-cart"
                    aria-label="View shopping cart"
                    onClick={() => { window.location.href = "/cart.html"; }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    <span className="cart-badge">0</span>
                </button>
            </header>

            {showScrollTop && (
                <button
                    className="back-to-top"
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                </button>
            )}

            <section className="product-hero">
                <p className="hero-eyebrow">Mishti Ice Cream</p>
                <h1>Our Products</h1>
                <p className="hero-subtitle">
                    Discover our delicious range of ice creams and kulfis.
                </p>
                
                <div className="ultra-compact-bar">
                    <div className="search-box-wrapper">
                        <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                        <input 
                            type="text" 
                            className="search-input" 
                            placeholder="Search..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="category-scroller">
                        <div className="category-pills">
                            {categories.map(cat => (
                                <button 
                                    key={cat} 
                                    className={`category-pill ${activeCategory === cat ? "active" : ""}`}
                                    onClick={() => setActiveCategory(cat)}
                                >{cat}</button>
                            ))}
                        </div>
                    </div>

                    <div className="filter-select-group">
                        <select className="filter-select" value={activeFlavor} onChange={(e) => setActiveFlavor(e.target.value)}>
                            <option value="All">Flavor</option>
                            {flavors.slice(1).map(f => <option key={f} value={f}>{f}</option>)}
                        </select>
                        <select className="filter-select" value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
                            <option value="All">Price</option>
                            <option value="Under ₹300">Under ₹300</option>
                            <option value="₹300–₹600">₹300–₹600</option>
                            <option value="Above ₹600">Above ₹600</option>
                        </select>
                    </div>
                </div>
            </section>

            <div className="product-sections">
                {categoryOrder.map((category) => (
                    displayedGroups[category] && displayedGroups[category].length > 0 && (
                        <ProductSection
                            key={category}
                            title={category}
                            products={displayedGroups[category]}
                            accentColor={sectionColors[category]}
                        />
                    )
                ))}
                {filteredProducts.length === 0 && (
                    <div className="no-results">
                        <h3>No products found matching your search.</h3>
                        <p>Try different keywords or reset your filters.</p>
                        <button className="reset-btn" onClick={() => {
                            setSearchQuery("");
                            setActiveCategory("All");
                            setActiveFlavor("All");
                            setPriceRange("All");
                        }}>View All Products</button>
                    </div>
                )}
            </div>

            <DistributorCTA />
        </div>
    );
}
