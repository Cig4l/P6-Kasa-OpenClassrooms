import Layout from "../Layout.jsx"
import { Link } from "react-router-dom";

export default function PageNotFound(){
    const children = (<>
        <div className="not-found-container">
            <img src="src/assets/images/404.svg" alt="Erreur 404" />
            <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="redirection">Retourner sur la page d’accueil</Link>
        </div>
    </>);
    
    return (<>
        <Layout children={children} />
    </>);
}