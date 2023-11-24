import React, { useState } from 'react';
import "../styles/Parametres.scss";
import TexteEditable from "../components/texteEditable/texteEditable";

const Parametres = () => {
    const [image, setImage] = useState("../assets/profil.png");

    const user = {
        pseudo: 'User',
        email: 'user@exemple.com',
        avatar: '',
        abonnement: 'standard',
        description:
            "\"La vie, c'est le travail. Le travail, c'est la vie. Il faut donc aimer la vie autant qu'on aime le travail. Et aimer le travail autant qu'on aime la vie. C'est par le travail que la femme sauve son âme, et c'est par l'amour que l'homme sauve la sienne. Le travail, c'est la vertu. L'amour, c'est le génie. Le travail sans l'amour est stérile. L'amour sans le travail est éphémère. Le génie sans la vertu est immoral. La vertu sans le génie est triste. L'homme doit donc aimer le travail, car il est la force. Il doit aimer l'amour, car il est la grâce. Il doit aimer la vertu, car elle est la loi. Il doit aimer le génie, car il est la lumière. Ainsi, par le travail, l'amour, la vertu, et le génie, l'homme s'élève et s'accomplit. Il devient ce qu'il doit être : un être complet, un être parfait.\" - Victor Hugo",
    };

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

    const [setDesc] = useState(user.desc);

    const handleDescSave = (newDesc) => {
        setDesc(newDesc);
    };

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    const [selectedFont, setSelectedFont] = useState('Arial, sans-serif');

    const handleFontChange = (e) => {
        setSelectedFont(e.target.value);
    };

    return (
        <div className="parametres-container h-full">
            <div className="parametres h-full">
                <h1 className="titre">Profil</h1>

                <div className="lg:flex mt-8 lg:ms-6">
                    <div className="avatar flex justify-center">
                        <div className="content-box" onClick={() => document.getElementById('file-input').click()}>
                            <input
                                type="file"
                                id="file-input"
                                style={{ display: 'none' }}
                                onChange={handleImageChange}
                                accept="image/*"
                            />

                            <div className="img-box">
                                <div className="icon-overlay">
                                    <i className="fas fa-image"></i>
                                </div>
                                <img src={image} className="image-avatar" alt="avatar" />
                            </div>
                        </div>
                    </div>

                    <div className="info-account flex-col my-auto lg:ms-16 mb-4 lg:mb-0 mt-6">
                        <div className="flex justify-center">
                            <div className="text-end">
                                <p>Pseudo :</p>
                                <p>Adresse Mail :</p>
                            </div>
                            <div className="ms-10">
                                <p>{user.pseudo}</p>
                                <p>{user.email}</p>
                            </div>
                        </div>
                        <button className="change-pwd mt-6 flex mx-auto">
                            Modifier le mot de passe
                        </button>
                    </div>

                    <div className="blazon lg:ms-52">
                        <img className="mx-auto" src={`/assets/Blazon/Blazon${user.abonnement}.png`}  alt={`blazon ${user.abonnement}`}/>
                        <p className="text-center capitalize">{user.abonnement}</p>
                    </div>
                </div>

                <div className="desc-account mt-8 space-y-3">
                    <p>Description :</p>
                    <TexteEditable initialValeur={user.description} onSave={handleDescSave} inputType="textarea" placeholder={"Décrivez-vous, partagez votre citation préférée ou autre information."} />
                </div>

                <div className="parameters mt-12 h-full">
                    <h3 className="titre">Paramètres généraux</h3>

                        <div className="ms-8 flex items-center mt-4">
                            <div className="text-end h-max space-y-5">
                                <p className="">Dark / Light mode</p>
                                <p className="">Police</p>
                            </div>
                            <div className="ms-10 space-y-3">
                                <div>
                                    <label className="switch">
                                        <input type="checkbox" checked={!isDarkMode} onChange={toggleDarkMode}/>
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                                <div>
                                    <select value={selectedFont} onChange={handleFontChange}>
                                        <option value="Arial, sans-serif">Arial</option>
                                        <option value="Helvetica, sans-serif">Helvetica</option>
                                        <option value="Georgia, serif">Georgia</option>
                                        <option value="Times New Roman, serif">Times New Roman</option>
                                    </select>
                                </div>
                            </div>
                    </div>
                </div>

                <div className="danger-zone space-y-2 ms-8 mb-6">
                    <button className="flex">
                        <svg id="logout" width="24" height="24" fill="none" stroke="#ff564f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 12v.01"></path>
                            <path d="M3 21h18"></path>
                            <path d="M17 13.5V21"></path>
                            <path d="M5 21V5a2 2 0 0 1 2-2h7.5"></path>
                            <path d="M21 7h-7"></path>
                            <path d="m18 4 3 3-3 3"></path>
                        </svg>
                        <p className="ms-4">Se déconnecter</p>
                    </button>

                    <button className="flex">
                        <svg id="delete-account" width="24" height="24" fill="#ff564f" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2ZM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9A7.902 7.902 0 0 1 4 12Zm3.1 6.31A7.902 7.902 0 0 0 12 20c4.42 0 8-3.58 8-8 0-1.85-.63-3.55-1.69-4.9L7.1 18.31Z" clipRule="evenodd"></path>
                        </svg>
                        <p className="ms-4">Désactiver mon compte</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Parametres;
