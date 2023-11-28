import React, { useState } from 'react';
import "../styles/ConnexionInscription.scss";

const LoginForm = () => (
    <>
        <form id="login-form" action="" method="post" role="form" className="active-form">
            <div className="Paragraphe1 p-20">
                <p>Connecte-toi vite afin de reprendre ton chef-d'œuvre.</p>
            </div>
            <div className="pseudo mb-4">
                <input type="text" name="username" id="username" tabIndex="1" className="form-input" placeholder="Pseudo / Adresse Mail" />
            </div>
            <div className="motdepasse mb-4">
                <input type="password" name="password" id="password" tabIndex="2" className="form-input" placeholder="Mot de passe" />
            </div>
            <div className="btnconnexion m-16">
                <button type="submit" name="login-submit" id="login-submit" tabIndex="3" className="btn btn-login">
                    <b>Se connecter</b>
                </button>
            </div>
        </form>
        <div className="sloganconnexion bg-white w-full login-tips">
            <span><b>Laissez votre créativitez s’exprimer avec pluma</b></span>
        </div>
    </>
);
const RegisterForm = () => (
    <>
        <div className="sloganinscription bg-white w-full register-tips flex items-center">
            <span>
                <img className="imgtestinscription m-10" src="assets/ARemplacer/Test.png" alt="Image de test"/>
                <b>Laissez votre créativitez s’exprimer avec pluma</b>
            </span>
        </div>
        <form id="register-form" action="" method="post" role="form" className="active-form">
            <div className="Paragraphe1 p-14 ">
                <p>Laisse ta plume te guider en rejoignant Pluma. </p>
            </div>
            <div className="pseudo mb-4">
                <input type="text" name="username" id="username" tabIndex="1" className="form-input" placeholder="Pseudo" />
            </div>
            <div className="email mb-4">
                <input type="email" name="email" id="email" tabIndex="1" className="form-input" placeholder="Adresse Mail" />
            </div>
            <div className="motdepasse mb-4">
                <input type="password" name="password" id="password" tabIndex="2" className="form-input" placeholder="Mot de passe" />
            </div>
            <div className="motdepasse mb-4">
                <input type="password" name="confirm-password" id="confirm-password" tabIndex="2" className="form-input" placeholder="Confirmation du mot de passe" />
            </div>
            <div className="btninscription m-11">
                <button type="submit" name="register-submit" id="register-submit" tabIndex="4" className="btn btn-register">
                    <b>Nous rejoindre</b>
                </button>
            </div>
        </form>
    </>
);

const ConnexionInscription = () => {
    const [isLoginActive, setIsLoginActive] = useState(true);

    const handleLoginClick = (e) => {
        e.preventDefault();
        setIsLoginActive(true);
    };

    const handleRegisterClick = (e) => {
        e.preventDefault();
        setIsLoginActive(false);
    };

    return (
        <div className="login-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel panel-login">
                            <div className="panel-heading pb-1">
                                <a className={isLoginActive ? "z-20" : "z-0"} onClick={handleLoginClick}>
                                    Connexion
                                </a>
                                <a className={isLoginActive ? "z-0" : "z-20"} onClick={handleRegisterClick}>
                                    Inscription
                                </a>
                            </div>
                            <div className="panel-body flex">
                                {isLoginActive ? <LoginForm /> : <RegisterForm />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConnexionInscription;