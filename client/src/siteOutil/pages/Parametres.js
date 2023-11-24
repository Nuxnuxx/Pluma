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
        <div className="parametresSupp">
            <div className="parametres">
                <h1 className="titre">Profil</h1>
                <div className="content-box" onClick={() => document.getElementById('file-input').click()}>
                    <input
                        type="file"
                        id="file-input"
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                        accept="image/*"
                    />
                    <div className="img-box">
                        <img src={image} className="image-avatar" alt="avatar" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Parametres;