import { Link } from "react-router-dom";

export default function NavBar(){
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