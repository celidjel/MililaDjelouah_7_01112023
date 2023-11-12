import Header from "../../components/header/Header";
import '../../styles/error.css'
import { Link } from "react-router-dom";


export default function Error() {
    return (
        <><Header /><div className="error">
            <div className="error__code">404</div>
            <div className="error__text">Oups! La page que vous demandez n'existe pas.</div>
            <Link to="/" className="home__link">
            Retourner sur la page d'accueil
          </Link>
        </div></>
    );
}