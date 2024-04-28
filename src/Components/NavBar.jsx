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
            <img src="src/assets/images/LOGO.svg" height="50" width="155.15" />
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/about">A propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </>)
}