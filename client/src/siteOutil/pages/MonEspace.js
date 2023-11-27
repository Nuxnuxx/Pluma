import ElementListeProjets from "../components/elementListeProjets/elementListeProjets";
import "../styles/StyleMonEspace.scss"
import {useState} from "react";

const MonEspace = () => {
    const listeProjet = [
        { id: 1, nom:"projet1" },
        { id: 2, nom:"projet2" },
        { id: 3, nom:"projet3" },
        { id: 4, nom:"projet4" },
        { id: 5, nom:"projet5" },
        { id: 6, nom:"projet6" },
        { id: 7, nom:"projet7" },
        { id: 8, nom:"projet8" }
    ];

    const listeRecents = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 }
    ];

    const listeFavoris = [
        { id: 1 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 7 },
        { id: 8 },
        { id: 5 },
        { id: 7 },
        { id: 8 },
        { id: 5 },
        { id: 7 },
        { id: 8 }
    ];

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
        let result = `calc(calc(10vw + calc((100% - 50vw) / 4)) * ${index})`
        console.log(result)
        return result;
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
                    {listeRecents.map((projet) => (
                        <ElementListeProjets
                            key={projet.id}
                            id={projet.id}
                        />
                    ))}
                </div>
            </div>
            <h2 className="titre-section">Favoris</h2>
            <div className="section">
                <button onClick={handlePrev} className="arrow-button left-arrow">←</button>
                <div className="liste-favoris" style={{ transform: `translateX(${calcWidth(-activeIndex)})` }}>
                    {listeFavoris.map((projet, index) => (
                        <div className={`element ${index < activeIndex || index >= activeIndex + 5 ? 'element-hidden' : ''}`}>
                            <ElementListeProjets
                                key={projet.id}
                                id={projet.id}
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
                            key={projet.id}
                            id={projet.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MonEspace;