import React, { useState } from 'react';
import "../styles/StyleMonEspace.scss"
import "../styles/StyleCorbeille.scss"
import ElementListeProjets from "../components/elementListeProjets/elementListeProjets";

const Corbeille = () => {
    const elementsDansCorbeille= [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 }
    ];

    const onDelete = (elementId) => {
        console.log("Suppresion de l'élément " + elementId);
    };

    const onRestore = (elementId) => {
        console.log("Restauration de l'élément " + elementId);
    };

    const [expandedItems, setExpandedItems] = useState([]);

    const toggleExpansion = (itemId) => {
        setExpandedItems((prevExpandedItems) =>
            prevExpandedItems.includes(itemId)
                ? prevExpandedItems.filter((id) => id !== itemId)
                : [...prevExpandedItems, itemId]
        );
    };

    return (
        <div className="mon-espace">
            <div className="corbeille">
                <h1 className="titre-general">Corbeille</h1>
                {elementsDansCorbeille.length === 0 ? (
                    <p>Aucun élément dans la corbeille.</p>
                ) : (
                    <ul>
                        {elementsDansCorbeille.map((element) => (
                            <li key={element.id} className={expandedItems.includes(element.id) ? 'expanded' : ''}
                                onClick={() => toggleExpansion(element.id)}>
                                <div className="header-element" >
                                    <span>Projet {element.id}</span>
                                    <div className="boutons">
                                        <button className="bouton bouton-restaurer" onClick={() => onRestore(element.id)}>Restaurer</button>
                                        <button className="bouton bouton-supprimer" onClick={() => onDelete(element.id)}>Supprimer</button>
                                    </div>
                                </div>
                                <div className="details-element">
                                    <ElementListeProjets id={element.id} color="blue" onClick={() => {}} />
                                    <p>Informations supplémentaires...</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Corbeille;