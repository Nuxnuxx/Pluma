import React from 'react';
import ElementListeProjets from "../components/elementListeProjets/elementListeProjets";
import {useOutletContext} from "react-router-dom";

const ResultatRecherche = () => {
    const [recherche, setRecherche] = useOutletContext();
    const listeProjet = [
        { id: 1, nom: "projet1" },
        { id: 2, nom: "projet2" },
        { id: 3, nom: "projet3" },
        { id: 4, nom: "projet4" },
        { id: 5, nom: "projet5" },
        { id: 6, nom: "projet6" },
        { id: 7, nom: "projet7" },
        { id: 8, nom: "projet8" }
    ];

    // Vérifiez si recherche est défini avant de filtrer la liste
    const resultatsFiltres = recherche
        ? listeProjet.filter(item =>
            item.nom.toLowerCase().includes(recherche.toLowerCase())
        )
        : [];

    return (
        <div className="mon-espace">
            <h1 className="titre-general">Projets</h1>
            <h2 className="titre-section">Projets</h2>
            <div className="section">
                <div className="liste-globale">
                    {resultatsFiltres.length > 0 ? (
                        resultatsFiltres.map(projet => (
                            <ElementListeProjets key={projet.id} id={projet.id} />
                        ))
                    ) : (
                        <p>Aucun résultat trouvé.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ResultatRecherche;
