import ElementListeProjets from "../components/elementListeProjets/elementListeProjets";
import "../styles/StyleMonEspace.scss"
import {useState} from "react";
import useFetchData from "../components/operationsDonnees";

const MonEspace = () => {
    const { data: listeProjet } = useFetchData('http://localhost:3001/api/readTable/projet');

    const { data: listeRecents } = useFetchData('http://localhost:3001/api/read-projets-recents');

    const { data: listeFavoris } = useFetchData('http://localhost:3001/api/read-projets-favoris');

    const [activeIndex, setActiveIndex] = useState(0);

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


    return (
        <div className="mon-espace">
            <h1 className="titre-general">Mon Espace de Travail</h1>
            <button type="button" className="button">
                <span className="button__text">Nouveau Projet</span>
                <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24"
                                                    strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"
                                                    stroke="currentColor" height="24" fill="none" className="svg"><line
                    y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
            </button>
            <h2 className="titre-section">Consultés récemment</h2>
            <div className="section">
                <div className="liste-recents">
                    {listeRecents.map((projet, index) => (
                        <ElementListeProjets
                            key={index}
                            id={projet.id_projet}
                            titre={projet.titre}
                            statut={projet.id_statut}
                        />
                    ))}
                </div>
            </div>
            <h2 className="titre-section">Favoris</h2>
            <div className="section">
                <button onClick={handlePrev} className="arrow-button left-arrow">←</button>
                <div className="liste-favoris" style={{ transform: `translateX(${calcWidth(-activeIndex)})` }}>
                    {listeFavoris.map((projet, index) => (
                        <div key={index} className={`element ${index < activeIndex || index >= activeIndex + 5 ? 'element-hidden' : ''}`}>
                            <ElementListeProjets
                                id={projet.id_projet}
                                titre={projet.titre}
                                statut={projet.id_statut}
                            />
                        </div>
                    ))}
                </div>
                <button onClick={handleNext} className="arrow-button right-arrow">→</button>
            </div>
            <h2 className="titre-section">Projets</h2>
            <div className="section">
                <div className="liste-globale">
                    {listeProjet.map((projet) => (
                        <ElementListeProjets
                            key={projet.id_projet}
                            id={projet.id_projet}
                            titre={projet.titre}
                            statut={projet.id_statut}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MonEspace;