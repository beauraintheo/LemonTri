import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { renderComponent } from "./utils/utils";

// Pages components

import { Footer } from "./containers";
import { Logo, Lottie, Lsv } from "./components";

import LogoURL from "./assets/images/logo.png";

import './App.css';

const App = () => {
    const location = useLocation();

    const [ showLoader, setShowLoader ] = useState(true);

    // TODO : Set timer to 3000
    useEffect(() => {
        setTimeout(() => setShowLoader(false), 3000);
    }, [])

    if (showLoader) {
        return (
            <div className="app-loader">
                <div className="logo">
                    <Logo image={LogoURL} />
                </div>

                <span className="app-presentation">
                    Bienvenue sur LemonTri, une web app pour apprendre les différentes consignes sur le recyclage afin d'adopter un mode de vie plus durable.
                </span>

                <div className="app-lottie">
                    <Lottie show={showLoader} />
                </div>
            </div>
        );
    }

    return (
        <div className="app">
            <Lsv />

            { renderComponent(location && location.pathname) }

            <Footer />
        </div>
    );
}

export default App;
