import ReactDOM from "react-dom/client";
import './styles/index.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./siteVitrine/pages/Layout";
import Accueil from "./siteVitrine/pages/Accueil";
import QuiSommesNous from "./siteVitrine/pages/QuiSommesNous";
import PlumaPremium from "./siteVitrine/pages/PlumaPremium";
import ConnexionInscription from "./siteVitrine/pages/ConnexionInscription";
import MonEspace from "./siteOutil/components/Sidebar/sidebar"
import Page404 from "./404";
import LayoutMonEspace from "./siteOutil/pages/LayoutMonEspace";
import Corbeille from "./siteOutil/pages/Corbeille";
import PartageAvecMoi from "./siteOutil/pages/PartageAvecMoi";
import ResumeProjet from "./siteOutil/pages/ResumeProjet";
import EditionProjet from "./siteOutil/pages/EditionProjet";
import EditionChapitre from "./siteOutil/pages/EditionChapitre";
import EcritureChapitre from "./siteOutil/pages/EcritureChapitre";
import Elements from "./siteOutil/pages/Elements";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Accueil />} />
                    <Route path="qui-sommes-nous" element={<QuiSommesNous />} />
                    <Route path="premium" element={<PlumaPremium />} />
                    <Route path="inscription-connexion" element={<ConnexionInscription />} />
                    <Route path="*" element={<Page404 />} />
                </Route>
                <Route path="mon-espace" element={<LayoutMonEspace />}>
                    <Route index element={<MonEspace />} />
                    <Route path="partage-avec-moi" element={<PartageAvecMoi />} />
                    <Route path="corbeille" element={<Corbeille />} />
                    <Route path="numProjet" element={<ResumeProjet />} >
                        <Route path="edition" element={<EditionProjet />} >
                            <Route path="numChapitre" element={<EditionChapitre />} >
                                <Route path="write" element={<EcritureChapitre />} />
                            </Route>
                            <Route path="elements" element={<Elements />} />
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
