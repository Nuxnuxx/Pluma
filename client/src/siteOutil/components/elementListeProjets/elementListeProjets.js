import React from 'react';
import "./elementListeProjets.scss"
const ElementListeProjets = ({ id, color, onClick }) => {
    return (
        <div
            className={`rectangle cursor-pointer ${color}`}
            onClick={() => onClick(id)}
        >
            <div className="nom-projet">Projet {id}</div>
            <div className="affichage-statut">Statut</div>
        </div>
    );
};

export default ElementListeProjets;
