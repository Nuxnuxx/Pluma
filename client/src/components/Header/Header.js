import React from 'react';
import './Header.scss'; // Importez le fichier SCSS

function Header() {
    return (
        <div className="header-container">
            <img src="/assets/plume-doie.png" alt="logo clair" className="logo" />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h5>Pluma</h5>
                <h5>Accueil</h5>
                <h5>Qui sommes nous</h5>
                <h5>Accéder à votre espace</h5>
            </div>
        </div>
    );
}

export default Header;