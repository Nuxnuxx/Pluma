import React from 'react';
import './Header.scss'; // Assurez-vous d'importer votre fichier SCSS

function Header() {
    return (
        <div className="header-container">
            <div className="logo-and-text">
                <img src="/assets/plume-doie.png" alt="logo clair" className="logo" />
                <h5>Pluma</h5>
            </div>
            <div className="menu">
                <p>Accueil</p>
                <p>Qui sommes nous</p>
                <p>Accéder à votre espace</p>
            </div>
        </div>
    );
}

export default Header;