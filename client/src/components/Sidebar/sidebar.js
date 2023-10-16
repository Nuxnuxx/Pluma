import React from 'react';
import './sidebar.scss';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <div className="titre">
                    <img src="/assets/logo_clair_1.png" alt="logo" className="logo" />
                    <h2>Pluma</h2>
                </div>
                <div className="barre-de-recherche">
                    <input type="text" placeholder="Rechercher" />
                    <div className="icone-de-recherche">
                        <img src="/search-icon.png" alt="Rechercher" />
                    </div>
                </div>
                <ul>
                    <li>Accueil</li>
                    <li>> Projets</li>
                    <li>Partagés avec moi</li>
                    <li>Corbeille</li>
                </ul>
            </div>
            <div className="premium">
                <h2>Coucou</h2>
            </div>
        </div>
    );
};

export default Sidebar;
