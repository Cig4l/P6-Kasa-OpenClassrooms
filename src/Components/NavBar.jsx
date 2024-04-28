import { Link, useLocation } from "react-router-dom";
import React, { useEffect } from 'react';

export default function NavBar(){
    const location = useLocation();
    var currentPage = location.pathname;                // Obtenez l'URL de la page actuelle

    return (<>
        <header>
            <Link to="/" className={currentPage === '/' ? 'active' : ''}>
                <img src="src/assets/images/LOGO.svg" height="50" width="155.15" />
            </Link>
            <nav className="navbar">
                <ul>
                    <li key="accueil">
                        <Link to="/" className={currentPage === '/' ? 'active' : ''}>Accueil</Link>
                    </li>
                    <li key="about">
                        <Link to="/about" className={currentPage === '/about' ? 'active' : ''}>A propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </>)
}