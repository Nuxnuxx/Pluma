import {Outlet, useNavigate} from "react-router-dom";
import Sidebar from "../components/Sidebar/sidebar";
import "../styles/StyleLayoutMonEspace.scss"
import {useState} from "react";

const LayoutMonEspace = () => {
    const [recherche, setRecherche] = useState('');

    const handleRechercheChange = (nouvelleRecherche) => {
        setRecherche(nouvelleRecherche);
    };

    return (
        <div className="div-principale">
            <Sidebar onRechercheChange={handleRechercheChange}  />
            <div className="contenu">
                <Outlet context={[recherche, setRecherche]}/>
            </div>
        </div>
    );
};

export default LayoutMonEspace;