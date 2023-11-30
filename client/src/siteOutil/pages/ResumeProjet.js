import React, {useEffect, useState} from 'react';
import {Link, useParams, useNavigate} from "react-router-dom"
import "../styles/StyleMonEspace.scss"
import "../styles/StyleResumeProjet.scss"
import TexteEditable from "../components/texteEditable/texteEditable";
import ListeGenres from "../components/ListeGenres/ListeGenres";
import UseFetchData from "../components/operationsDonnees";
import apiUrl from "../../config";

const ResumeProjet = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const { data: projet, loading: loading, error: error } = UseFetchData(`${apiUrl}/readElement/projet/${id}`, true);

    const { data: listeStatut, loading: loadingStatut, error: errorStatut } = UseFetchData(`${apiUrl}/readTable/statut`);

    const [etatProjet, setEtatProjet] = useState("Non débuté");

    const [titre, setTitre] = useState("Projet sans titre");

    useEffect(() => {
        if (projet) {
            setTitre(projet.titre)
        }
    }, [projet]);

    const handleTitreSave = (nouveauTitre, idInput) => {
        if (idInput === "titreProjet"){
            setTitre(nouveauTitre);
        }
    };

    const handleEtatChange = (nouvelEtat) => {
        setEtatProjet(nouvelEtat);
    };

    const recupererDate = () => {
        const dateCreation = new Date(projet.date_creation);

        const jour = dateCreation.getDate();
        const mois = dateCreation.getMonth() + 1;
        const annee = dateCreation.getFullYear();

        return `${jour}/${mois}/${annee}`;
    };



    if (error || errorStatut || !projet) {
        navigate('/404', { replace: true });
        return null;
    }

    if (loading || loadingStatut) {
        return <div className="chargement">Chargement en cours...</div>;
    }
    else {
        return (
            <div className="mon-espace">
                <div className="resume-projet">
                    <div className="couverture">{projet.titre}</div>

                    <div className="info-projet">
                        <div className="titre">
                            <TexteEditable initialValeur={titre} onSave={handleTitreSave} idInput={"titreProjet"} valeurParDefaut={"Projet sans titre"} />
                        </div>
                        <div className="date-creation">
                            <label>Date de création:</label>
                            <p>{recupererDate()}</p>
                        </div>

                        <ListeGenres />

                        <div className="etat-projet">
                            <label>État du projet:</label>
                            <select value={etatProjet} onChange={(e) => handleEtatChange(e.target.value)}>
                                {listeStatut.map((statut, index) => (
                                    <option
                                        key={index}
                                        value={statut.nom_statut}
                                    >
                                        {statut.nom_statut}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="paragraphe-resume">
                    <TexteEditable initialValeur={projet.description ? projet.description : ''} onSave={handleTitreSave} inputType="textarea" valeurParDefaut={""} />
                </div>

                <Link to={`./edition`}>
                    <button className="editer">
                        Éditer
                    </button>
                </Link>
            </div>
        );
    }
};

export default ResumeProjet;