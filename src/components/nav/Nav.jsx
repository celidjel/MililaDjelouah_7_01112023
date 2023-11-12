import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import '../../styles/nav.css'

export default function Nav() {
  const [homeLink, setHomeLink] = useState(false);
  const [aboutLink, setAboutLink] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setHomeLink(true)
    };
    if (location.pathname === '/about') {
      setAboutLink(true)
    };
  }, [location.pathname])

  return (
    <nav className="header__nav">
      <Link to="/" className={homeLink ? "header__nav__item item__underline" : "header__nav__item"}>
        Accueil
      </Link>
      <Link to="/about" className={aboutLink ? "header__nav__item item__underline" : "header__nav__item"}>
        A Propos
      </Link>
    </nav>
  );

}