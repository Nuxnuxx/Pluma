import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/sidebar";

const LayoutMonEspace = () => {
    return (
        <>
            <Sidebar />
            <Outlet />
        </>
    )
};

export default LayoutMonEspace;