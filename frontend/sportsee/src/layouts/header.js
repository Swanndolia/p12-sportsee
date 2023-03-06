import { Outlet, Link } from "react-router-dom";

import logo from "../assets/images/logo.svg"

import "../assets/css/header.css"

/**
 * Header component that displays the logo and navigation links.
 *
 * @returns {JSX.Element} Header JSX element.
 */
const Header = () => {
    return (
        <>
            <header>
                <nav>
                    <img src={logo} alt="logo"></img>
                    <Link to="/Acceuil">Accueil</Link>
                    <Link to="/Profil">Profil</Link>
                    <Link to="/Reglages">Réglages</Link>
                    <Link to="/Communaute">Communauté</Link>
                </nav>
            </header>
            <Outlet />
        </>
    )
};

export default Header;