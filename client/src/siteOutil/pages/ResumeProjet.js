import React, {useEffect, useState} from 'react';
import {Link, useParams, useNavigate} from "react-router-dom"
import "../styles/StyleMonEspace.scss"
import "../styles/StyleResumeProjet.scss"
import TexteEditable from "../components/texteEditable/texteEditable";
import ListeGenres from "../components/ListeGenres/ListeGenres";

const ResumeProjet = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        const isValidId = /^\d+$/.test(id);

        if (!isValidId) {
            navigate('/404');
        }
    }, [id, navigate]);

    const projet = {
        id: id,
        titre: 'Nom du Projet',
        dateCreation: '01/01/2023',
        genre: 'Genre',
        etat: 'non_debute',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed lorem nulla. Vestibulum iaculis nulla vel ipsum vestibulum ullamcorper. Fusce euismod purus eget nisi placerat vulputate. Nullam imperdiet ac dui ac mollis. Pellentesque nec tempus lectus, ullamcorper commodo mi. Nulla sollicitudin a purus ac scelerisque. Fusce feugiat non nisi nec rhoncus. Mauris a molestie sem. Sed ultrices semper tincidunt. Donec mollis quam tortor. Proin et velit id nulla hendrerit tincidunt et feugiat sem. Suspendisse vehicula sollicitudin sodales. Vivamus velit magna, posuere nec nunc consectetur, sollicitudin scelerisque sapien. Fusce sed nisl nec nulla rutrum dapibus.\n' +
            '\n' +
            'Nam sit amet laoreet dolor. Quisque pellentesque, ex vel gravida mattis, urna ante tempor lorem, nec maximus lectus nibh at elit. Cras iaculis metus ipsum. Quisque tempus tempus nibh. Sed fringilla elit sed libero tincidunt gravida. Vestibulum posuere semper metus nec tempor. Donec eu blandit purus. Ut id interdum lacus, id lobortis est. Donec dictum ex eget lacinia viverra. Suspendisse potenti. Maecenas nec dui suscipit, dictum arcu et, porttitor augue. Sed eget mollis nisl, non varius enim. Cras blandit justo nec neque cursus congue. Nulla quis tempor leo, in aliquam libero. Nam in semper justo, eu pharetra dolor. Fusce vehicula sem nec ligula mollis, vitae iaculis. ',
    };

    const [etatProjet, setEtatProjet] = useState(projet.etat);
    const [titre, setTitre] = useState(projet.titre);



    const handleEtatChange = (nouvelEtat) => {
        setEtatProjet(nouvelEtat);
    };

    const handleTitreSave = (nouveauTitre, idInput) => {
        if (idInput == "titreProjet"){
            setTitre(nouveauTitre);
        }
    };

    return (
        <div className="mon-espace">
            <div className="resume-projet">
                <div className="couverture">{titre}</div>

                <div className="info-projet">
                    <div className="titre">
                        <TexteEditable initialValeur={projet.titre} onSave={handleTitreSave} idInput={"titreProjet"} valeurParDefaut={"Projet sans titre"} />
                    </div>
                    <p>Date de création: {projet.dateCreation}</p>
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
                <TexteEditable initialValeur={projet.description} onSave={handleTitreSave} inputType="textarea" valeurParDefaut={"Ajouter une description ici..."} />
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