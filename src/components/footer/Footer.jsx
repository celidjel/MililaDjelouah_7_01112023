import logo from "../../assets/images/logo_footer.svg"
import '../../styles/footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <img src={logo} alt="Kasa footer logo" className="footer__logo" />
            <p className="footer__copyright">
                © 2020 Kasa. All rights reserved
            </p>
        </footer>
    );
}