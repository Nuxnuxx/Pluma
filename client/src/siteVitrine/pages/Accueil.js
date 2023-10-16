import '../../styles/App.css';
import '../styles/Accueil.scss';

export default function Accueil() {
    return (
        <div>
            <h1>Pluma</h1>
            <h3>Laissez votre créativité prendre son envol.</h3>
            <button className="btnAccueil">S'inscrire</button>
            <button className="btnAccueil">Se connecter</button>
        </div>
    );
}