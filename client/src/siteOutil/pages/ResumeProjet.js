import React, {useEffect, useRef, useState} from 'react';
import ElementListeProjets from "../components/elementListeProjets/elementListeProjets";
import {Link, useParams, useNavigate} from "react-router-dom"
import "../styles/StyleMonEspace.scss"
import "../styles/StyleResumeProjet.scss"

const ResumeProjet = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const projet = {
        id: id,
        titre: 'Nom du Projet',
        dateCreation: '01/01/2023',
        genre: 'Genre',
        etat: 'en_cours',
        description: '\n' +
            '\n' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed lorem nulla. Vestibulum iaculis nulla vel ipsum vestibulum ullamcorper. Fusce euismod purus eget nisi placerat vulputate. Nullam imperdiet ac dui ac mollis. Pellentesque nec tempus lectus, ullamcorper commodo mi. Nulla sollicitudin a purus ac scelerisque. Fusce feugiat non nisi nec rhoncus. Mauris a molestie sem. Sed ultrices semper tincidunt. Donec mollis quam tortor. Proin et velit id nulla hendrerit tincidunt et feugiat sem. Suspendisse vehicula sollicitudin sodales. Vivamus velit magna, posuere nec nunc consectetur, sollicitudin scelerisque sapien. Fusce sed nisl nec nulla rutrum dapibus.\n' +
            '\n' +
            'Nam sit amet laoreet dolor. Quisque pellentesque, ex vel gravida mattis, urna ante tempor lorem, nec maximus lectus nibh at elit. Cras iaculis metus ipsum. Quisque tempus tempus nibh. Sed fringilla elit sed libero tincidunt gravida. Vestibulum posuere semper metus nec tempor. Donec eu blandit purus. Ut id interdum lacus, id lobortis est. Donec dictum ex eget lacinia viverra. Suspendisse potenti. Maecenas nec dui suscipit, dictum arcu et, porttitor augue. Sed eget mollis nisl, non varius enim. Cras blandit justo nec neque cursus congue. Nulla quis tempor leo, in aliquam libero. Nam in semper justo, eu pharetra dolor. Fusce vehicula sem nec ligula mollis, vitae iaculis. ',
    };

    const [editable, setEditable] = useState(false);
    const [valeurTextAffiche, setValeurText] = useState(projet.titre);
    const [etatProjet, setEtatProjet] = useState(projet.etat);

    const inputRef = useRef(null);

    useEffect(() => {
        // Vérifier si l'ID est un nombre entier valide
        const isValidId = /^\d+$/.test(id);

        if (!isValidId) {
            navigate('/404');
        }

        if (editable) {
            inputRef.current.focus();
        }
    }, [id, navigate, editable]);

    const handleEtatChange = (nouvelEtat) => {
        setEtatProjet(nouvelEtat);
    };

    const handleTextClick = () => {
        setEditable(true);
    };

    const handleTextChange = (e) => {
        setValeurText(e.target.value);
    };

    const handleTextBlur = () => {
        setValeurText(valeurTextAffiche);
        setEditable(false);
    };

    return (
        <div className="mon-espace">
            <div className="resume-projet">
                <ElementListeProjets id={projet.id} color="blue" onClick={() => {}} />

                <div className="info-projet">
                    <div className="titre">
                        {editable ? (
                            <input
                                type="text"
                                value={valeurTextAffiche}
                                onChange={handleTextChange}
                                onBlur={handleTextBlur}
                                ref={inputRef}
                            />
                        ) : (
                            <h2 onClick={handleTextClick}>{valeurTextAffiche}</h2>
                        )}
                    </div>
                    <p>Date de création: {projet.dateCreation}</p>
                    <p>Genre: {projet.genre}</p>

                    <label>État du projet:</label>
                    <select value={etatProjet} onChange={(e) => handleEtatChange(e.target.value)}>
                        <option value="en_cours">En cours</option>
                        <option value="termine">Terminé</option>
                    </select>
                </div>
            </div>
            <div className="paragraphe-resume">
                <p className="description">{projet.description}</p>
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