import "../styles/StyleMonEspace.scss"
import ElementListeProjets from "../components/elementListeProjets/elementListeProjets";
import UseFetchData from "../components/operationsDonnees";
import apiUrl from "../../config";
import React from "react";
import {useNavigate} from "react-router-dom";

const PartageAvecMoi = () => {
    const { data: projetsPartages, loading: loading, error: error } = UseFetchData(`${apiUrl}/readTable/projet`);

    const navigate = useNavigate();


    if (loading) {
        return <div className="chargement">Chargement en cours...</div>;
    }

    if (error) {
        navigate('/404', { replace: true });
        return null;
    }

    return (
        <div className="mon-espace">
            <h1 className="titre-general">Partagés avec moi</h1>
            <h2 className="titre-section">Projets</h2>
            <div className="section">
                <div className="liste-globale">
                    {projetsPartages.map((projet, index) => (
                        <ElementListeProjets
                            key={index}
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

export default PartageAvecMoi;