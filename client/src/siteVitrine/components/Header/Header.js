import React from 'react';
import './Header.scss';
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="header-container">
            <div className="logo-and-text">
                <img src="/assets/plume-doie.png" alt="logo clair" className="logo" />
                <h5>Pluma</h5>
            </div>
            <div className="menu">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Accueil</Link>
                        </li>
                        <li>
                            <Link to="/qui-sommes-nous">Qui sommes nous</Link>
                        </li>
                        <li>
                            <Link to="/premium">PlumaPremium</Link>
                        </li>
                        <li>
                            <Link to="/inscription-connexion">Accéder à votre espace</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;