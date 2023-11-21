import "../styles/StyleMonEspace.scss"
import ElementListeProjets from "../components/elementListeProjets/elementListeProjets";

const PartageAvecMoi = () => {
    const projetsPartages = [
        { id: 1 },
        { id: 2 },
        { id: 3 }
    ];

    return (
        <div className="mon-espace">
            <h1 className="titre-general">Partagés avec moi</h1>
            <h2 className="titre-section">Projets</h2>
            <div className="section">
                <div className="liste-globale">
                    {projetsPartages.map((projet) => (
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

export default PartageAvecMoi;