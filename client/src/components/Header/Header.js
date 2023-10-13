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
                <h5>Qui sommes nous</h5>
                <h5>Accueil</h5>
                <h5>Accéder à votre espace</h5>
            </div>
        </div>
    );
}

export default Header;