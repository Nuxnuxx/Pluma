import React, { useState } from 'react';
import "../styles/StyleMonEspace.scss"
import "../styles/StyleCorbeille.scss"
import UseFetchData from "../components/operationsDonnees";
import apiUrl from "../../config";
import {useNavigate} from "react-router-dom";

const Corbeille = () => {
    const { data: projetsDansCorbeille, loading, error } = UseFetchData(`${apiUrl}/readTable/projet`);

    const navigate = useNavigate();

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

    if (loading) {
        return <div className="chargement">Chargement en cours...</div>;
    }

    if (error) {
        navigate('/404', { replace: true });
        return null;
    }

    return (
        <div className="mon-espace">
            <div className="corbeille">
                <h1 className="titre-general">Corbeille</h1>
                {projetsDansCorbeille.length === 0 ? (
                    <p>Aucun élément dans la corbeille.</p>
                ) : (
                    <ul>
                        {projetsDansCorbeille.map((projet, index) => (
                            <li key={index} className={expandedItems.includes(projet.id_projet) ? 'expanded' : ''}
                                onClick={() => toggleExpansion(projet.id_projet)}>
                                <div className="header-element" >
                                    <span>{projet.titre}</span>
                                    <div className="boutons">
                                        <button className="bouton bouton-restaurer" onClick={() => onRestore(projet.id_projet)}>Restaurer</button>
                                        <button className="bouton bouton-supprimer" onClick={() => onDelete(projet.id_projet)}>Supprimer</button>
                                    </div>
                                </div>
                                <div className="details-element">
                                    <div>{projet.couverture}</div>
                                    <p>{projet.description}</p>
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