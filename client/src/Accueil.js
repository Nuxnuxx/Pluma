import './styles/App.css';
import Header from "./components/Header/Header";
import './styles/Accueil.scss';

export default function Home() {
    return (
        <div>
            <Header />
            <div className="w-screen h-screen flex flex-wrap flex-col justify-center items-center">
                <h1>Pluma</h1>
                <h3>Laissez votre créativité prendre son envol.</h3>
                <div>
                    <button className="btnAccueil">S'inscrire</button>
                    <button className="btnAccueil">Se connecter</button>
                </div>
            </div>
        </div>
    );
}