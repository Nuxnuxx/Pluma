import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/sidebar";
import "../styles/styleLayoutMonEspace.scss"

const LayoutMonEspace = () => {
    return (
        <>
            <div className="div-principale">
                <Sidebar />
                <Outlet />
            </div>
        </>
    )
};

export default LayoutMonEspace;