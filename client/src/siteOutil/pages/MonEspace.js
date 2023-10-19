import "../styles/StyleMonEspace.scss"
import ElementListeProjets from "../components/elementListeProjets/elementListeProjets";
const MonEspace = () => {
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

    const listeRecents = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 }
    ];

    const listeFavoris = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 }
    ];

    const handleRectangleClick = (id) => {
        console.log(`Projet ${id} cliqué`);
        // Gestion du clic
    };

    function handleScroll() {
        console.log("clic")
    }

    return (
        <div className="mon-espace">
            <h1 className="titre">Mon Espace de Travail</h1>

            <h2 className="titre-section">Consultés récemment</h2>
            <div className="section">
                <div className="liste-recents">
                    {listeRecents.map((projet) => (
                        <ElementListeProjets
                            key={projet.id}
                            id={projet.id}
                            onClick={handleRectangleClick}
                        />
                    ))}
                </div>
            </div>
            <h2 className="titre-section">Favoris</h2>
            <div className="section">
                <button onClick={() => handleScroll(-1)} className="arrow-button left-arrow">←</button>
                <div className="liste-favoris">
                    {listeFavoris.map((projet) => (
                        <ElementListeProjets
                            key={projet.id}
                            id={projet.id}
                            onClick={handleRectangleClick}
                        />
                    ))}
                </div>
                <button onClick={() => handleScroll(1)} className="arrow-button right-arrow">→</button>
            </div>
            <h2 className="titre-section">Projets</h2>
            <div className="section">
                <div className="liste-globale">
                    {listeProjet.map((projet) => (
                        <ElementListeProjets
                            key={projet.id}
                            id={projet.id}
                            onClick={handleRectangleClick}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MonEspace;