import React, {useEffect, useRef, useState} from 'react';
import ElementListeProjets from "../components/elementListeProjets/elementListeProjets";
import {Link} from "react-router-dom"
import "../styles/StyleMonEspace.scss"
import "../styles/StyleResumeProjet.scss"

const ResumeProjet = () => {
    // Exemple de données du projet
    const projet = {
        id: 1,
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

    const [etatProjet, setEtatProjet] = useState(projet.etat);
    const [titreEditable, setTitreEditable] = useState(false);
    const [nouveauTitre, setNouveauTitre] = useState(projet.titre);

    const inputRef = useRef(null);

    useEffect(() => {
        if (titreEditable) {
            inputRef.current.focus();
        }
    }, [titreEditable]);

    const handleEtatChange = (nouvelEtat) => {
        setEtatProjet(nouvelEtat);
    };

    const handleTitreClick = () => {
        setTitreEditable(true);
    };

    const handleTitreChange = (e) => {
        setNouveauTitre(e.target.value);
    };

    const handleTitreBlur = () => {
        console.log(nouveauTitre)
        setTitreEditable(false);
    };

    return (
        <div className="mon-espace">
            <div className="resume-projet">
                <ElementListeProjets id={projet.id} color="blue" onClick={() => {}} />

                <div className="info-projet">
                    {titreEditable ? (
                        <input
                            type="text"
                            value={nouveauTitre}
                            onChange={handleTitreChange}
                            onBlur={handleTitreBlur}
                            ref={inputRef}
                        />
                    ) : (
                        <h2 onClick={handleTitreClick}>{projet.titre}</h2>
                    )}
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