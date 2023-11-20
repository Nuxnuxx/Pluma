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
            <div className="flex justify-center mt-4">
                <img src="/assets/pile-de-livre.png" alt="pile de livre" className="pile-de-livre"/>
                <div className="sous-titre mt-56">
                    <p>Soyez Organisé et créatif pour seulement 7,99€ par mois</p>
                </div>
            </div>
            <div className="w-1/2 mx-auto mt-10">
                <table className="table-auto custom-table">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Standard Gratuit</th>
                        <th className="border px-4 py-2">Étudiant Gratuit</th>
                        <th className="border px-4 py-2">Premium 7,99€/mois</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">Nombre de blocs illimités<br />
                                Limitation à 5 projets<br />
                                Personnalisation des lieux et personnages<br />
                                10 générations hebdomadaire de nom pour personnage<br />
                                Sauvegarde automatique<br />
                                Accès à 3 designs pour l’espace de travail<br />
                                Exportation des histoires<br />
                                Correcteur d’orthographe et de grammaire<br />
                                Possibilité de varier entre une unique police serif et sans-serif<br />
                                Panel d’image prédéfni pour les avatars des personnages et les lieux</td>
                            <td className="border px-4 py-2">Nombre de blocs illimités<br />
                                Limitation à 10 projets<br />
                                Personnalisation des lieux et personnages<br />
                                Génération de nom pour personnage illimité<br />
                                Sauvegarde automatique<br />
                                Accès à plus de 20 designs pour l’espace de travail<br />
                                Exportation des histoires<br />
                                Correcteur d’orthographe et de grammaire<br />
                                Accès au résumé par IA<br />
                                10 polices d’écritures différentes<br />
                                Panel d’image prédéfini pour les avatars des personnages et les lieux</td>
                            <td className="border px-4 py-2">Plus de publicité<br />
                                Nombre de blocs illimités<br />
                                Création de projets en illimités<br />
                                Personnalisation des lieux et personnages<br />
                                Génération de nom pour personnage illimité<br />
                                Sauvegarde automatique<br />
                                Accès à plus de 20 designs pour l’espace de travail<br />
                                Exportation des histoires<br />
                                Correcteur d’orthographe et de grammaire<br />
                                Accès au résumé par IA<br />
                                Plus de 50 polices d’écritures différentes<br />
                                Générateur d’image par IA pour les avatars des personnages et les lieux</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center  mt-10">
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
            <div className="text-center mt-4">
                <button className="btnEssaisPremium mx-auto">Essayez PlumaPremium</button>
            </div>
            <ComposantPremiumEffect />
        </div>
    );
};

export default PlumaPremium;
