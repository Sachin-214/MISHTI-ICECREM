import React, { useEffect, useState } from "react";
import Home from "./components/home";
import ProductPage from "./pages/ProductPage";
import DistributorPage from "./pages/DistributorPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import BackgroundPattern from "./components/BackgroundPattern";
import "./styles/app.css";

function App() {
    const [route, setRoute] = useState(window.location.hash || "#/home");

    useEffect(() => {
        const handleHashChange = () => {
            setRoute(window.location.hash || "#/home");
        };
        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    let page = <Home />;

    if (route === "#/products") {
        page = <ProductPage />;
    } else if (route === "#/distributor") {
        page = <DistributorPage />;
    } else if (route === "#/about") {
        page = <AboutPage />;
    } else if (route === "#/contact") {
        page = <ContactPage />;
    }

    return (
        <div className="app-shell">
            <BackgroundPattern />
            {page}
        </div>
    );
}

export default App;
