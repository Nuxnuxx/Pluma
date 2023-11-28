import React from 'react';
import "./elementListeProjets.scss"
import {Link} from "react-router-dom";

const ElementListeProjets = ({ id, titre, statut }) => {
    return (
        <Link to={`/mon-espace/projet/${id}`}>
            <div
                className={`element-liste-projet cursor-pointer`}
            >
                <div className="rectangle">
                    <div className="nom-projet">{titre}</div>
                </div>
                <div className="affichage-statut">{statut}</div>
            </div>
        </Link>
    );
};

export default ElementListeProjets;
