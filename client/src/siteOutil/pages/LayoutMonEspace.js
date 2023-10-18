import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/sidebar";
import "../styles/styleLayoutMonEspace.scss"

const LayoutMonEspace = () => {
    return (
        <div className="div-principale">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="contenu">
                <Outlet />
            </div>
        </div>
    );
};

export default LayoutMonEspace;