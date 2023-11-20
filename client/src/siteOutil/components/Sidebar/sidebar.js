import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom"
import './sidebar.scss';

const Sidebar = () => {
    const listeProjet = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 }
    ];

    const [isProjectsOpen, setIsProjectsOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleProjects = () => {
        setIsProjectsOpen(!isProjectsOpen);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(prevState => !prevState);
    };

    useEffect(() => {
        const handleResize = () => {
            const sidebarElement = document.querySelector('.sidebar');
            const isSidebarClose = sidebarElement.classList.contains('close');

            if (window.innerWidth < 768 && !isSidebarClose) {
                toggleSidebar();
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`sidebar ${isSidebarOpen ? 'close' : ''}`}>
            <div className={`sidebar-content ${isSidebarOpen ? 'close' : ''}`}>
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
                            {listeProjet.map((projet) => (
                                <Link to={`/mon-espace/projet${projet.id}`}>
                                    <li>Projet {projet.id}</li>
                                </Link>
                            ))}
                    </div>
                    <Link to="/mon-espace/partage-avec-moi">
                        <li>Partagés avec moi</li>
                    </Link>
                    <Link to="/mon-espace/corbeille">
                        <li>Corbeille</li>
                    </Link>
                </ul>
            </div>
            <div className={`premium ${isSidebarOpen ? 'close' : ''}`}>
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
            <div className={`toggle-button ${isSidebarOpen ? 'close' : ''}`} onClick={toggleSidebar}>
                <svg id="eQXyaThE5gd1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 500" shapeRendering="geometricPrecision" textRendering="geometricPrecision" width="100%" height="100%">
                    <ellipse rx="237.58581" ry="214.427627" transform="matrix(.711193 0 0 1.000001 178.909992 250)" fill="#ffafa5" strokeWidth="0"/>
                    <polygon points="0,-98.25934 93.450185,-30.363806 57.755391,79.493476 -57.755391,79.493476 -93.450185,-30.363806 0,-98.25934" transform="matrix(1.138413 1.360925-1.539158 1.287505 56.492851 165.484719)" fill="#ffafa5" strokeWidth="0"/>
                    <polygon points="0,-98.25934 93.450185,-30.363806 57.755391,79.493476 -57.755391,79.493476 -93.450185,-30.363806 0,-98.25934" transform="matrix(.786197 1.590596-1.798908 0.889161 80.24744 339.908492)" fill="#ffafa5" strokeWidth="0"/>
                    <path d="M20.972,95.594L78.577,49.643c.951-.76.951-2.367,0-3.127L20.968,0.56c-.689-.547-1.716-.709-2.61-.414-.186.061-.33.129-.436.186-.65.35-1.056,1.025-1.056,1.764v91.967c0,.736.405,1.414,1.056,1.762.109.06.253.127.426.185.903.295,1.933.134,2.624-.416Z" transform={isSidebarOpen ? "matrix(1.93752 0 0 1.93752 114.577189 156.84779)" : "matrix(-1.93752 0 0 -1.93752 300.881839 343.15225)"} fill="#fff" style={{ transition: 'transform 0.2s ease' }}/>
                </svg>
            </div>
        </div>
    );
};

export default Sidebar;
