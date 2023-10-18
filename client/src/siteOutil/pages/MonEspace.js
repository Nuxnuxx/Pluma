import "../styles/StyleMonEspace.scss"
import ElementListeProjets from "../components/elementListeProjets/elementListeProjets";
const MonEspace = () => {
    const rectangles = [
        { id: 1, color: 'bg-blue-500' },
        { id: 2, color: 'bg-green-500' },
        { id: 3, color: 'bg-yellow-500' },
        { id: 4, color: 'bg-red-500' },
        { id: 5, color: 'bg-blue-500' },
        { id: 6, color: 'bg-green-500' },
        { id: 7, color: 'bg-yellow-500' },
        { id: 8, color: 'bg-red-500' }
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
                    {rectangles.map((rectangle) => (
                        <ElementListeProjets
                            key={rectangle.id}
                            id={rectangle.id}
                            color={rectangle.color}
                            onClick={handleRectangleClick}
                        />
                    ))}
                </div>
            </div>
            <h2 className="titre-section">Favoris</h2>
            <div className="section">
                <button onClick={() => handleScroll()} className="arrow-button left-arrow">←</button>
                <div className="liste-favoris">
                    {rectangles.map((rectangle) => (
                        <ElementListeProjets
                            key={rectangle.id}
                            id={rectangle.id}
                            color={rectangle.color}
                            onClick={handleRectangleClick}
                        />
                    ))}
                </div>
                <button onClick={() => handleScroll()} className="arrow-button right-arrow">→</button>
            </div>
            <h2 className="titre-section">Projets</h2>
            <div className="liste-globale">
                {rectangles.map((rectangle) => (
                    <ElementListeProjets
                        key={rectangle.id}
                        id={rectangle.id}
                        color={rectangle.color}
                        onClick={handleRectangleClick}
                    />
                ))}
            </div>
        </div>
    );
};

export default MonEspace;