import React from 'react';
import ElementListeProjets from "../components/elementListeProjets/elementListeProjets";
import {useOutletContext} from "react-router-dom";
import UseFetchData from "../components/operationsDonnees";
import apiUrl from "../../config";

const ResultatRecherche = () => {
    const [recherche] = useOutletContext();

    const { data: listeProjet, loading:loading, error: error } = UseFetchData(`${apiUrl}/readTable/projet`);

    // Vérifiez si recherche est défini avant de filtrer la liste
    const resultatsFiltres = recherche
        ? listeProjet.filter(item =>
            item.titre.toLowerCase().includes(recherche.toLowerCase())
        )
        : listeProjet;

    return (
        <div className="mon-espace">
            <h1 className="titre-general">Projets</h1>
            <h2 className="titre-section">Projets</h2>
            <div className="section">
                <div className="liste-globale">
                    {resultatsFiltres.length > 0 ? (
                        resultatsFiltres.map((projet, index) => (
                            <ElementListeProjets
                                key={index}
                                id={projet.id_projet}
                                titre={projet.titre}
                                statut={projet.id_statut}
                            />
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
