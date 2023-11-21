import React from "react";
import "../styles/PlumaPremium.scss";
import "../components/AnimationEtoiles/PremiumEffect";
import ComposantPremiumEffect from "../components/AnimationEtoiles/PremiumEffect";

const PlumaPremium = () => {
    return (
        <div>
            <div className="premium mx-auto">
                <div className="anime-container">
                    <div className="element-premium ">
                        <strong>Avec Pluma Premium, tous vos projets seront des succès.</strong>
                        <div id="container-stars">
                            <div id="stars"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pricingTable mx-auto mt-10">
                <h2 className="pricingTable-title">Trouve la plume qui te convient.</h2>
                <h3 className="pricingTable-subtitle">Soyez Organisé et créatif pour seulement 7,99€ par mois.</h3>

                <ul className="pricingTable-firstTable">
                    <li className="pricingTable-firstTable_table">
                        <h1 className="pricingTable-firstTable_table__header">Standard</h1>
                        <p className="pricingTable-firstTable_table__pricing">
                            <span>€</span><span>0</span><span>par mois</span></p>
                        <ul className="pricingTable-firstTable_table__options first_table">
                            <li>Nombre de blocs illimités</li>
                            <li>Limitation à 5 projets</li>
                            <li>Personnalisation des lieux et personnages</li>
                            <li>10 générations hebdomadaire de nom pour personnage</li>
                            <li>Sauvegarde automatique</li>
                            <li>Accès à 3 designs pour l’espace de travail</li>
                            <li>Exportation des histoires</li>
                            <li>Correcteur d’orthographe et de grammaire</li>
                            <li>Possibilité de varier entre une unique police serif et sans-serif</li>
                            <li>Panel d’image prédéfni pour les avatars des personnages et les lieux</li>
                        </ul>
                    </li>
                    <li className="pricingTable-firstTable_table">
                        <h1 className="pricingTable-firstTable_table__header">Premium</h1>
                        <p className="pricingTable-firstTable_table__pricing">
                            <span>€</span><span>7,99</span><span>par mois</span></p>
                        <ul className="pricingTable-firstTable_table__options second_table">
                            <li>Nombre de blocs illimités</li>
                            <li>Création de projets en illimités</li>
                            <li>Personnalisation des lieux et personnages</li>
                            <li>Génération de nom pour personnage illimité</li>
                            <li>Sauvegarde automatique</li>
                            <li>Accès à plus de 20 designs pour l’espace de travail</li>
                            <li>Exportation des histoires</li>
                            <li>Correcteur d’orthographe et de grammaire</li>
                            <li>Plus de 50 polices d’écritures différentes</li>
                            <li>Panel d’image prédéfni pour les avatars des personnages et les lieux</li>
                            <li>Accès au résumé par IA</li>
                            <li>Génération d'image par IA pour les avatars des personnages et les lieux</li>
                        </ul>
                        <button className="pricingTable-firstTable_table__getstart">Essayez Maintenant !</button>
                    </li>
                    <li className="pricingTable-firstTable_table">
                        <h1 className="pricingTable-firstTable_table__header">Étudiant</h1>
                        <p className="pricingTable-firstTable_table__pricing">
                            <span>€</span><span>0</span><span>par mois</span></p>
                        <ul className="pricingTable-firstTable_table__options third_table">
                            <li>Nombre de blocs illimités</li>
                            <li>Limitation à 10 projets</li>
                            <li>Personnalisation des lieux et personnages</li>
                            <li>Génération de nom pour personnage illimité</li>
                            <li>Sauvegarde automatique</li>
                            <li>Accès à plus de 20 designs pour l’espace de travail</li>
                            <li>Exportation des histoires</li>
                            <li>Correcteur d’orthographe et de grammaire</li>
                            <li>10 polices d’écritures différentes</li>
                            <li>Panel d’image prédéfni pour les avatars des personnages et les lieux</li>
                            <li>Accès au résumé par IA</li>
                        </ul>
                        <button className="pricingTable-firstTable_table__getstart">Essayez Maintenant !</button>
                    </li>
                </ul>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center  m-16">
                <div className="text-center">
                    <strong>Faite 37% d'économie sur l'année en prenant l'abbonnement PlumaPremium Annuel pour seulement 59,99€ par an</strong>
                </div>
                <div className="text-center">
                    <strong>Profiter d'une expérience sans publicité pour que vous ne soyez plus intérompu</strong>
                </div>
                <div className="text-center">
                    <strong>Vos notes sont partout et vos écrits sont baclés ? Rejoignez PlumaPremium afin de profiter de toute les fonctionnalités possible.</strong>
                </div>
            </div>
            <div className="text-center">
                <button className="btnEssaisPremium mx-auto">Essayez PlumaPremium</button>
            </div>
            <div className="rectangleBasdePagePP mt-10">
                <div className="TextBasdePage">
                    <p>Explorez de nouveaux sommets littéraires avec PlumaPremium, où chaque mot devient une invitation à l'excellence créative.</p>
                </div>

            </div>

            <ComposantPremiumEffect />
        </div>
    );
};

export default PlumaPremium;
