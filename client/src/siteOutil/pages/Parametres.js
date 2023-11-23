import React, { useState } from 'react';
import "../styles/Parametres.scss";

const Parametres = () => {
    const [image, setImage] = useState("../assets/profil.png");

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="parametres">
            <h1 className="titre">Profil</h1>
            <div>
                <img src={image} alt="Profil" />
                <input type="file" onChange={handleImageChange} accept="image/*" />
            </div>
        </div>
    );
};

export default Parametres;