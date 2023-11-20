import React from 'react';
import "./elementListeProjets.scss"
import {Link} from "react-router-dom";

const ElementListeProjets = ({ id }) => {
    return (
        <Link to={`/mon-espace/projet${id}`}>
        <div
            className={`element-liste-projet cursor-pointer`}
        >
            <div className="rectangle">
                <div className="nom-projet">Projet {id}</div>
            </div>
            <div className="affichage-statut">Statut</div>
        </div>
        </Link>
    );
};

export default ElementListeProjets;
