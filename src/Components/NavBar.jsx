import { Link, useLocation } from "react-router-dom";
import React, { useEffect } from 'react';

export default function NavBar(){
    const location = useLocation();

    useEffect(() => {
        var path = location.pathname;                // Obtenez l'URL de la page actuelle
        if(path) {
            console.log("path")
        }
        else {
            console.log("not found");
        }
        }, []);

    return (<>
        <header>
            <Link to="/">
                <img src="src/assets/images/LOGO.svg" height="50" width="155.15" />
            </Link>
            <nav className="navbar">
                <ul>
                    <li key="accueil">
                        <Link to="/">Accueil</Link>
                    </li>
                    <li key="about">
                        <Link to="/about">A propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </>)
}