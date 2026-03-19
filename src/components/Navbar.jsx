import React from "react";
import "../styles/navbar.css";

export default function Navbar() {
    const [cartCount, setCartCount] = React.useState(0);

    React.useEffect(() => {
        const updateCartCount = () => {
            const stored = localStorage.getItem("mishti_cart");
            if (stored) {
                try {
                    const parsed = JSON.parse(stored);
                    const count = parsed.reduce((sum, item) => sum + item.quantity, 0);
                    setCartCount(count);
                } catch (e) {
                    setCartCount(0);
                }
            }
        };

        updateCartCount();
        const interval = setInterval(updateCartCount, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* Global Header (Drip Background + Logo) */}
            <header className="main-header">
                <div className="header-center">
                    {/* These links only show on Desktop */}
                    <a className="header-link desktop-only-text" href="#/about">
                        About Us
                    </a>
                    
                    {/* Logo is always visible */}
                    <a href="#/home" aria-label="Mishti Icecream Home" className="logo-wrapper">
                        <img
                            src="/assets/images/logo.png"
                            alt="Mishti Icecream Logo"
                            className="logo"
                        />
                    </a>
                    
                    {/* These links only show on Desktop */}
                    <a className="header-link desktop-only-text" href="#/products">
                        Products
                    </a>
                    <a className="header-link desktop-only-text" href="#/contact">
                        Contact Us
                    </a>
                    <a className="header-link desktop-only-text" href="#/distributor">
                        Become a Distributor
                    </a>
                </div>

                {/* Desktop Cart Icon */}
                <button
                    className="floating-cart desktop-only-flex"
                    onClick={() => { window.location.href = "/cart.html"; }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    <span className="cart-badge">{cartCount}</span>
                </button>
            </header>

            {/* Mobile Bottom Tab Bar - Only visible on Mobile */}
            <nav className="mobile-tab-bar mobile-only-flex">
                <a href="#/home" className="tab-item">
                    <span className="tab-icon">🏠</span>
                    <span className="tab-label">Home</span>
                </a>
                <a href="#/products" className="tab-item">
                    <span className="tab-icon">🍦</span>
                    <span className="tab-label">Scoops</span>
                </a>
                <a href="/cart.html" className="tab-item cart-tab">
                    <span className="tab-icon">🛒</span>
                    <span className="tab-label">Cart</span>
                    {cartCount > 0 && <span className="tab-badge">{cartCount}</span>}
                </a>
                <a href="#/about" className="tab-item">
                    <span className="tab-icon">✨</span>
                    <span className="tab-label">About</span>
                </a>
                <a href="#/contact" className="tab-item">
                    <span className="tab-icon">📞</span>
                    <span className="tab-label">Contact</span>
                </a>
            </nav>
        </>
    );
}
