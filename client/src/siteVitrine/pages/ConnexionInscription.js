import React, { useState } from 'react';
import "../styles/ConnexionInscription.scss";

const LoginForm = () => (
    <form id="login-form" action="" method="post" role="form" className="active-form">
        <div className="mb-4">
            <input type="text" name="username" id="username" tabIndex="1" className="form-input" placeholder="Pseudo / Adresse Mail" value="" />
        </div>
        <div className="mb-4">
            <input type="password" name="password" id="password" tabIndex="2" className="form-input" placeholder="Mot de passe" />
        </div>
        <div className="mb-4">
            <button type="submit" name="login-submit" id="login-submit" tabIndex="4" className="btn btn-login">
                Se connecter
            </button>
        </div>
    </form>
);
const RegisterForm = () => (
    <form id="register-form" action="" method="post" role="form" className="active-form">
        <div className="mb-4">
            <input type="text" name="username" id="username" tabIndex="1" className="form-input" placeholder="Pseudo" value="" />
        </div>
        <div className="mb-4">
            <input type="email" name="email" id="email" tabIndex="1" className="form-input" placeholder="Adresse Mail" value="" />
        </div>
        <div className="mb-4">
            <input type="password" name="password" id="password" tabIndex="2" className="form-input" placeholder="Mot de passe" />
        </div>
        <div className="mb-4">
            <input type="password" name="confirm-password" id="confirm-password" tabIndex="2" className="form-input" placeholder="Confirmation du mot de passe" />
        </div>
        <div className="mb-4">
            <button type="submit" name="register-submit" id="register-submit" tabIndex="4" className="btn btn-register">
                Nous rejoindre
            </button>
        </div>
    </form>
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
                            <div className="panel-heading flex justify-between items-center">
                                <a
                                    href="#"
                                    className={`text-lg ${isLoginActive ? 'text-green-500' : 'text-gray-500'}`}
                                    onClick={handleLoginClick}
                                >
                                    Connexion
                                </a>
                                <a
                                    href="#"
                                    className={`text-lg ${!isLoginActive ? 'text-green-500' : 'text-gray-500'}`}
                                    onClick={handleRegisterClick}
                                >
                                    Inscription
                                </a>
                            </div>
                            <hr className="my-2" />
                            <div className="panel-body">
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