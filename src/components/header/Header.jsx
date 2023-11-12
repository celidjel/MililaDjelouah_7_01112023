import logo from "../../assets/images/kasa_logo.svg";
import Nav from "../nav/Nav";
import '../../styles/header.css'

export default function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img className="logo_img" src={logo} alt="Kasa logo" />
            </div>
            <Nav className="nav-header" />
        </header>
    );
}