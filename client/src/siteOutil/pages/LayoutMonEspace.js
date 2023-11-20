import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/sidebar";
import "../styles/StyleLayoutMonEspace.scss"

const LayoutMonEspace = () => {
    return (
        <div className="div-principale">
            <Sidebar />
            <div className="contenu">
                <Outlet />
            </div>
        </div>
    );
};

export default LayoutMonEspace;