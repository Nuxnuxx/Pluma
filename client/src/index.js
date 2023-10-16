import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./siteVitrine/pages/Layout";
import Accueil from "./siteVitrine/pages/Accueil";
import QuiSommesNous from "./siteVitrine/pages/QuiSommesNous";
import PlumaPremium from "./siteVitrine/pages/PlumaPremium";
import ConnexionInscription from "./siteVitrine/pages/ConnexionInscription";
import MonEspace from "./siteOutil/components/Sidebar/sidebar"
import NoPage from "./NoPage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Accueil />} />
                    <Route path="qui-sommes-nous" element={<QuiSommesNous />} />
                    <Route path="premium" element={<PlumaPremium />} />
                    <Route path="inscription-connexion" element={<ConnexionInscription />} />
                    <Route path="mon-espace" element={<MonEspace />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
