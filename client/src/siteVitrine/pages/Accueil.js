import React from "react";
import "../styles/Accueil.scss"

export default function Accueil() {
    return (
        <div>
            <div className="flex flex-wrap flex-col justify-center items-center">
                <img src="/assets/logo_clair_1.png" alt="logo pluma clair" className="logoaccueil" />
                <h1 className="plumaText">Pluma</h1>
                <div className="slogan">Laissez votre créativité prendre son envol</div>
                <div className="mt-5">
                    <button className="btnAccueil mr-56">S'inscrire</button>
                    <button className="btnAccueil">Se connecter</button>
                </div>
            </div>
        </div>
    );
}