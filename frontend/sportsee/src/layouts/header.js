import { Outlet, Link } from "react-router-dom";

import logo from "../assets/images/logo.svg"

import "../assets/css/header.css"

const Header = () => {
    return (
        <>
            <header>
                <nav>
                    <img src={logo} alt="logo"></img>
                    <Link to="/">Accueil</Link>
                    <Link to="/">Profil</Link>
                    <Link to="/">Réglages</Link>
                    <Link to="/">Communauté</Link>
                </nav>
            </header>
            <Outlet />
        </>
    )
};

export default Header;