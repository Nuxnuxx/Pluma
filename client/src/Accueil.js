import './styles/App.css';
import Header from "./components/Header/Header";
import './styles/Accueil.scss';
import React from "react";

export default function Home() {
    return (
        <div>
            <Header />
            <div className="flex flex-wrap flex-col justify-center items-center">
                <img src="/assets/logo_clair_1.png" alt="logo clair 1" className="logoaccueil" />
                <h1 className="plumaText">Pluma</h1>
                <div className="slogan">Laissez votre créativité prendre son envol</div>
                <div>
                    <button className="btnAccueil">S'inscrire</button>
                    <button className="btnAccueil">Se connecter</button>
                </div>
            </div>
        </div>
    );
}