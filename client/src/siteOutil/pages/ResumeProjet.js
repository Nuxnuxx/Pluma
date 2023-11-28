import React, {useState} from 'react';
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

    const { data: projet, loading, error } = UseFetchData(`${apiUrl}/readElement/projet/${id}`, true);

    const [etatProjet, setEtatProjet] = useState("Non débuté");

    /*
    const [titre, setTitre] = useState(projet?.titre);

    const handleTitreSave = (nouveauTitre, idInput) => {
        if (idInput == "titreProjet"){
            setTitre(nouveauTitre);
        }
    };*/

    const handleEtatChange = (nouvelEtat) => {
        setEtatProjet(nouvelEtat);
    };

    if (loading) {
        return <div className="chargement">Chargement en cours...</div>;
    }

    if (error || !projet) {
        navigate('/404', { replace: true });
        return null;
    }

    return (
        <div className="mon-espace">
            <div className="resume-projet">
                <div className="couverture">{projet.titre}</div>

                <div className="info-projet">
                    <div className="titre">
                        {/*<TexteEditable initialValeur={projet.titre} onSave={handleTitreSave} idInput={"titreProjet"} valeurParDefaut={"Projet sans titre"} />*/}
                        <div className="titre">{projet.titre}</div>
                    </div>
                    <p>Date de création: {projet.date_creation}</p>
                    <ListeGenres />

                    <label>État du projet:</label>
                    <select value={etatProjet} onChange={(e) => handleEtatChange(e.target.value)}>
                        <option value="non_debute">Non débuté</option>
                        <option value="en_cours">En cours</option>
                        <option value="termine">Terminé</option>
                    </select>
                </div>
            </div>
            <div className="paragraphe-resume">
                {/*<TexteEditable initialValeur={projet.description} onSave={handleTitreSave} inputType="textarea" valeurParDefaut={"Ajouter une description ici..."} />*/}
                <div className="description">{projet.description}</div>
            </div>

            <Link to={`./edition`}>
                <button className="editer">
                    Éditer
                </button>
            </Link>
        </div>
    );
};

export default ResumeProjet;