import React, {useState} from 'react';
import './sidebar.scss';
import {Link} from "react-router-dom"

const Sidebar = () => {
    const [isProjectsOpen, setIsProjectsOpen] = useState(false);

    const toggleProjects = () => {
        setIsProjectsOpen(!isProjectsOpen);
    };

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
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px">
                            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
                        </svg>
                    </div>
                </div>
                <ul>
                    <Link to="/mon-espace">
                        <li>Accueil</li>
                    </Link>
                    <li className="menu" onClick={toggleProjects}>
                        <div className={`icone-depli ${isProjectsOpen ? 'rotate' : ''}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                                <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                            </svg>
                        </div>
                        <div className="titre-menu">
                            Projets
                        </div>
                    </li>
                    <div className={`liste-projets ${isProjectsOpen ? 'open' : ''}`}>
                        <li>Projet 1</li>
                        <li>Projet 2</li>
                        <li>Projet 2</li>
                        <li>Projet 2</li>
                        <li>Projet 2</li>
                        <li>Projet 2</li>
                        <li>Projet 2</li>
                        <li>Projet 2</li>
                        <li>Projet 2</li>
                        <li>Projet 2</li>
                    </div>
                    <Link to="/mon-espace/partage-avec-moi">
                        <li>Partagés avec moi</li>
                    </Link>
                    <Link to="/mon-espace/corbeille">
                        <li>Corbeille</li>
                    </Link>
                </ul>
            </div>
            <div className="premium">
                <Link to="/premium">
                    <button className="btn-premium" type="button">
                        <strong>PlumaPremium</strong>
                        <div id="container-stars">
                            <div id="stars"></div>
                        </div>

                        <div id="glow">
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </div>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
