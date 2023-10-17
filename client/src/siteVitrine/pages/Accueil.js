import React from "react";
import "../styles/Accueil.scss"
import { Link, useLocation } from "react-router-dom";

export default function Accueil() {
    const url = useLocation();
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <div className="partie-principale-hero">
                    <img src="/assets/logo_clair_1.png" alt="logo pluma clair" className="logoaccueil mx-auto" />
                    <h1 className="plumaText">Pluma</h1>
                </div>
                <div className="slogan">Laissez votre créativité prendre son envol</div>
                <div className="mt-5">
                    <Link to="/inscription-connexion" className={url.pathname === '/inscription-connexion' ? 'active a-acces-espace' : 'a-acces-espace'}>
                        <button className="btnAccueil mr-4">S'inscrire</button>
                    </Link>
                    <Link to="/inscription-connexion" className={url.pathname === '/inscription-connexion' ? 'active a-acces-espace' : 'a-acces-espace'}>
                        <button className="btnAccueil">Se connecter</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}