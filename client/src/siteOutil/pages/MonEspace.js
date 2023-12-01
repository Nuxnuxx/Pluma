import ElementListeProjets from "../components/elementListeProjets/elementListeProjets";
import "../styles/StyleMonEspace.scss"
import React, {useEffect, useState} from "react";
import UseFetchData from "../components/operationsDonnees";
import {useNavigate} from "react-router-dom";
import apiUrl from "../../config";
import Chargement from "../components/Chargement/chargement";
import PopupCreationProjet from "../components/PopupCreationProjet/PopupCreationProjet";
import anime from "animejs";

const MonEspace = () => {
    const navigate = useNavigate();

    let { data: donneesProjet, loading:loadingProjet, error: errorProjet } = UseFetchData(`${apiUrl}/readTable/projet`);

    const { data: listeRecents, loading:loadingRecents, error: errorRecents  } = UseFetchData(`${apiUrl}/read-projets-recents`);

    const [activeIndex, setActiveIndex] = useState(0);

    const [isPopupVisible, setPopupVisibility] = useState(false);


    const [listeProjet, setListeProjet] = useState([]);

    const [listeFavoris, setListeFavoris] = useState([]);

    const [idFavoris, setIdFavoris] = useState({});

    const [listeFavorisPrev, setListeFavorisPrev] = useState([]);



    useEffect(() => {
        if (donneesProjet) {
            setListeProjet(donneesProjet);
        }
    }, [donneesProjet]);

    useEffect(() => {
        if (listeProjet) {
            const favoris = listeProjet.filter(projet => projet.favori === 1);
            setListeFavorisPrev(listeFavoris);
            setListeFavoris(favoris);

            // Initialiser idFavoris avec l'état de chaque projet au départ
            const initialIdFavoris = listeProjet.reduce((acc, projet) => {
                acc[projet.id_projet] = projet.favori === 1;
                return acc;
            }, {});

            setIdFavoris(initialIdFavoris);
        }
    }, [listeProjet]);

    useEffect(() => {
        if (listeFavoris) {
            if (listeFavoris.length < listeFavorisPrev.length){
                handlePrev()
            }
        }

        const favorisContainer = document.querySelector('.liste-favoris');

        if (favorisContainer) {
            const addedElement = [...listeFavoris].find(newProjet => !listeFavorisPrev.some(oldProjet => oldProjet.id_projet === newProjet.id_projet));

            if (addedElement) {
                const addedElementNode = favorisContainer.querySelector(`.element-${addedElement.id_projet}`);

                if (addedElementNode) {
                    anime({
                        targets: addedElementNode,
                        translateY: [-40, 0],
                        easing: 'easeInOutQuad',
                        duration: 500,
                    });
                }
            }
        }
    }, [listeFavoris]);

    const toggleFavori = (id) => {
        setIdFavoris((prevFavoris) => {
            const newFavoris = { ...prevFavoris, [id]: !prevFavoris[id] };
            mettreAJourFavoris(id, newFavoris[id]);
            return newFavoris;
        });
    };

    const mettreAJourFavoris = (id, etat) => {
        const listeTemporaire = [...listeProjet];

        const index = listeTemporaire.findIndex(projet => projet.id_projet === id);

        const nouvelleValeurFavori = etat ? 1 : 0;

        if (index !== -1) {
            listeTemporaire[index] = { ...listeTemporaire[index], favori: nouvelleValeurFavori };
        }

        setListeProjet(listeTemporaire);
    };

    const FlecheTriangle = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-left"
        >
            <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
    );


    const handleButtonClick = () => {
        setPopupVisibility(true);
    };

    const fermerPopup = () => {
        setPopupVisibility(false);
    };

    const creerProjet = (nomProjet) => {
        console.log("Projet " + nomProjet + " créé.")
    };



    const handlePrev = () => {
        setActiveIndex(Math.max(activeIndex - 1, 0));
    };

    const handleNext = () => {
        const nextIndex = activeIndex + 1;
        const maxIndex = Math.floor((listeFavoris.length - 5)) + 1;

        if (nextIndex < maxIndex) {
            setActiveIndex(nextIndex);
        }
    };



    const calcWidth = (index) => {
        return`calc(calc(10vw + calc((100% - 50vw) / 4)) * ${index})`
    };

    if (loadingProjet || loadingRecents) {
        return <Chargement/>;
    }

    if (errorProjet || errorRecents) {
        navigate('/404', { replace: true });
        return null;
    }

    return (
        <div className="mon-espace">
            <h1 className="titre-general">Mon Espace de Travail</h1>
            <button type="button" className="button" onClick={handleButtonClick}>
                <span className="button__text">Nouveau Projet</span>
                <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24"
                                                    strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"
                                                    stroke="currentColor" height="24" fill="none" className="svg"><line
                    y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
            </button>
            {isPopupVisible && (
                <div className="popup">
                    <PopupCreationProjet onClose={fermerPopup} onCreateProject={creerProjet}/>
                </div>
            )}
            <h2 className="titre-section">Consultés récemment</h2>
            <div className="section">
                <div className="liste-recents" style={{ transform: `translateX(${calcWidth(0)})` }}>
                    {listeRecents.map((projet, index) => (
                        <div key={index} className={`element ${index >= 5 ? 'element-hidden' : ''}`}>
                        <ElementListeProjets
                            key={index}
                            id={`${projet.id_projet}`}
                            titre={projet.titre}
                            statut={projet.id_statut}
                            favori={idFavoris[projet.id_projet] || false}
                            toggleFavori={() => toggleFavori(projet.id_projet)}
                        />
                        </div>
                    ))}
                </div>
            </div>
            <h2 className="titre-section">Favoris</h2>
            <div className="section">
                <button onClick={handlePrev} className="arrow-button left-arrow" style={{ visibility: listeFavoris.length > 5 ? 'visible' : 'hidden' }}><FlecheTriangle /></button>
                <div className="liste-favoris" style={{ transform:`translateX(${calcWidth(-activeIndex)})` }}>
                    {listeFavoris.map((projet, index) => (
                        <div key={index} className={`element element-${projet.id_projet} ${index < activeIndex || index >= activeIndex + 5 ? 'element-hidden' : ''}`}>
                            <ElementListeProjets
                                key={index}
                                id={`${projet.id_projet}`}
                                titre={projet.titre}
                                statut={projet.id_statut}
                                favori={idFavoris[projet.id_projet] || false}
                                toggleFavori={() => toggleFavori(projet.id_projet)}
                            />
                        </div>
                    ))}
                </div>
                <button onClick={handleNext} className="arrow-button right-arrow" style={{ visibility: listeFavoris.length > 5 ? 'visible' : 'hidden'}}><FlecheTriangle /></button>
            </div>
            <h2 className="titre-section">Projets</h2>
            <div className="section">
                <div className="liste-globale" style={{ transform: `translateX(${calcWidth(0)})` }}>
                    {listeProjet.map((projet, index) => (
                        <ElementListeProjets
                            key={index}
                            id={`${projet.id_projet}`}
                            titre={projet.titre}
                            statut={projet.id_statut}
                            favori={idFavoris[projet.id_projet] || false}
                            toggleFavori={() => toggleFavori(projet.id_projet)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MonEspace;