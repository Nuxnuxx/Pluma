import './styles/App.css';
import Header from "./components/Header/Header";
import './styles/Accueil.scss';


export default function Home() {
    return (
        <div>
            <Header />
            <h1>Pluma</h1>
            <h3>Laissez votre créativité prendre son envol.</h3>
            <button>S'inscrire</button>
            <button>Se connecter</button>
        </div>

    );
}