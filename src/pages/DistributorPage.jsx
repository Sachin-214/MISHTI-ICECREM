import React from "react";
import "../styles/distributor-page.css";
import DistributorForm from "../components/DistributorForm";

export default function DistributorPage() {
    return (
        <div className="distributor-page">
            <header className="main-header">
                <div className="header-center">
                    <a href="#/home" aria-label="Mishti Icecream Home">
                        <img
                            src="/assets/images/logo.png"
                            alt="Mishti Icecream Logo"
                            className="logo"
                        />
                    </a>
                    <a className="header-link" href="#/products">
                        Products
                    </a>
                    <a className="header-link" href="#/contact">
                        Contact Us
                    </a>
                    <a className="header-link" href="#/about">
                        About Us
                    </a>
                </div>
            </header>

            <section className="distributor-hero">
                <p className="hero-eyebrow">Mishti Ice Cream</p>
                <h1>Become a Mishti Ice Cream Distributor</h1>
                <p className="hero-subtitle">
                    Join our growing distribution network.
                </p>
            </section>

            <section className="distributor-form-section">
                <div className="form-card">
                    <h2>Distributor Application Form</h2>
                    <p className="form-intro">
                        Share your details and our team will reach out with the
                        next steps.
                    </p>
                    <DistributorForm />
                </div>
            </section>
        </div>
    );
}
