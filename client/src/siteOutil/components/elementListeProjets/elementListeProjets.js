import React from 'react';
import "./elementListeProjets.scss"
const ElementListeProjets = ({ id, color, onClick }) => {
    return (
        <div
            className={`element-liste-projet cursor-pointer`}
            onClick={() => onClick(id)}
        >
            <div className="rectangle">
                <div className="nom-projet">Projet {id}</div>
                <div className="affichage-statut">Statut</div>
            </div>
        </div>
    );
};

export default ElementListeProjets;
