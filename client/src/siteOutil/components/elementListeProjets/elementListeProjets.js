import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './elementListeProjets.scss';

const ElementListeProjets = ({ id, titre, statut, favori, toggleFavori }) => {
    const [isChecked, setChecked] = useState(favori);

    const extractNumericId = (idString) => {
        const match = idString.match(/\d+/);
        return match ? parseInt(match[0], 10) : null;
    };

    const stopPropagation = (event) => {
        if (!event.target.matches('.Fav-checkbox')) {
            event.preventDefault();
        }

        event.stopPropagation();
        toggleFavori();
        setChecked(!isChecked);
    }

    const couleurStatut = (idStatut) => {
        switch (idStatut) {
            case 1:
                return 'en-cours';
            case 2:
                return 'en-pause';
            case 3:
                return 'termine';
            case 4:
                return 'archive';
            default:
                return '';
        }
    };

    return (
        <div className="element-liste-projet-general" onClick={stopPropagation}>
            <div className={`Fav ${favori ? 'favorited' : ''}`}>
                <div className="Fav-bloom"></div>
                <svg className="Fav-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                    <title>Star Icon</title>
                    <path
                        d="M36.14,3.09l5.42,17.78H59.66a4.39,4.39,0,0,1,2.62,7.87L47.48,40.14,53,58.3a4.34,4.34,0,0,1-6.77,4.78L32,52l-14.26,11A4.34,4.34,0,0,1,11,58.27l5.55-18.13L1.72,28.75a4.39,4.39,0,0,1,2.62-7.87h18.1L27.86,3.09A4.32,4.32,0,0,1,36.14,3.09Z"/>
                </svg>
            </div>
            <Link to={`/mon-espace/projet/${extractNumericId(id)}`} className={`element-liste-projet cursor-pointer`}>
                <div className="rectangle">
                    <div className="couverture">{titre}</div>
                </div>
                <div className={`affichage-statut ${couleurStatut(statut)}`}></div>
            </Link>
        </div>
    );
};

export default ElementListeProjets;
