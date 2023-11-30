import React from 'react';
import "./elementListeProjets.scss"
import {Link} from "react-router-dom";

const ElementListeProjets = ({ id, titre, statut }) => {
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
        <Link to={`/mon-espace/projet/${id}`}>
            <div
                className={`element-liste-projet cursor-pointer`}
            >
                <div className="rectangle">
                    <div className="nom-projet">{titre}</div>
                </div>
                <div className={`affichage-statut ${couleurStatut(statut)}`}></div>
            </div>
        </Link>
    );
};

export default ElementListeProjets;
