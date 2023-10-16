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
                    <div className="liste-projets">
                        <li>Projet 1</li>
                        <li>Projet 2</li>
                    </div>
                    <li>Partagés avec moi</li>
                    <li>Corbeille</li>
                </ul>
            </div>
            <div className="premium">
                <button className="btn-premium" type="button">
                    <strong>WAOUH !</strong>
                    <div id="container-stars">
                        <div id="stars"></div>
                    </div>

                    <div id="glow">
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
