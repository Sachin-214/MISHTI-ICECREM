import React from "react";
import "../styles/Footer.css";

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-inner">
                <div className="footer-brand">
                    <img
                        src="/assets/images/logo.png"
                        alt="Mishti Icecream Logo"
                        className="footer-logo"
                    />
                    <p>
                        Crafting delicious frozen happiness with every scoop and
                        smile.
                    </p>
                </div>

                <div className="footer-column">
                    <h3>Quick Links</h3>
                    <a href="#/home">Home</a>
                    <a href="#/about">About Us</a>
                    <a href="#/products">Products</a>
                    <a href="#/contact">Contact Us</a>
                </div>

                <div className="footer-column">
                    <h3>Products</h3>
                    <span>Cups</span>
                    <span>Cones</span>
                    <span>Kulfi</span>
                    <span>Sundae</span>
                    <span>Ice Candy</span>
                </div>

                <div className="footer-column">
                    <h3>Contact Info</h3>
                    <span>Sanawad Rd, Khargone, MP 451001</span>
                    <span>+91 98765 43210</span>
                    <span>hello@mishtiicecream.com</span>
                    <div className="footer-social">
                        <a href="#" aria-label="Instagram">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7zm5 3.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 12 8.5zm0 2A2.5 2.5 0 1 0 14.5 13 2.5 2.5 0 0 0 12 10.5zm4.8-3.6a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                        <a href="#" aria-label="Facebook">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    d="M13.5 9.5V8a1.5 1.5 0 0 1 1.5-1.5H17V4h-2a4 4 0 0 0-4 4v1.5H9v3h2v7h3v-7h2.2l.6-3z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                        <a href="#" aria-label="YouTube">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.9 4.8 12 4.8 12 4.8s-5.9 0-7.6.4a2.8 2.8 0 0 0-2 2A29.2 29.2 0 0 0 2 12a29.2 29.2 0 0 0 .4 4.8 2.8 2.8 0 0 0 2 2c1.7.4 7.6.4 7.6.4s5.9 0 7.6-.4a2.8 2.8 0 0 0 2-2A29.2 29.2 0 0 0 22 12a29.2 29.2 0 0 0-.4-4.8zM10 15.5V8.5l6 3.5z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <span>© 2026 Mishti Ice Cream. All rights reserved.</span>
            </div>
        </footer>
    );
}
