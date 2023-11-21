import React, { useEffect, useRef, useState } from 'react';
import "./texteEditable.scss";
import diviserEnLignes from "../utils";

const EditableText = ({ initialValeur, onSave, inputType = 'input'}) => {

    const [editable, setEditable] = useState(false);
    const [valeur, setValeur] = useState(initialValeur);
    const inputRef = useRef(null);

    useEffect(() => {
        if (editable) {
            inputRef.current.focus();
        }
    }, [editable]);

    const handleTextClick = () => {
        setEditable(true);
    };

    const handleTextChange = (e) => {
        setValeur(e.target.value);
    };

    const handleTextBlur = () => {
        let nouvelleValeur = valeur.trim() === '' ? 'Projet sans titre' : valeur; //Si on vide le texte, il est mis à une valeur par défaut
        onSave(nouvelleValeur)
        setValeur(nouvelleValeur);
        setEditable(false);
    };

    return (
        <>
            {inputType === 'textarea' ? (
                editable ? (
                    <textarea
                        value={valeur}
                        onChange={handleTextChange}
                        onBlur={handleTextBlur}
                        ref={inputRef}
                    />
                ) : (
                    <div className="text" onClick={handleTextClick}>
                        {diviserEnLignes(valeur)}
                    </div>
                )
            ) : (
                editable ? (
                    <input
                        type={inputType}
                        value={valeur}
                        onChange={handleTextChange}
                        onBlur={handleTextBlur}
                        ref={inputRef}
                    />
                ) : (
                    <div className="text" onClick={handleTextClick}>
                        <span>{valeur}</span>
                    </div>
                )
            )}
        </>
    );
};

export default EditableText;