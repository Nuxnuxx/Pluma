import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/sidebar";
import {SidebarProvider} from "../context/sidebarContext";

const LayoutMonEspace = () => {
    return (
        <>
            <SidebarProvider>
                <Sidebar />
                <Outlet />
            </SidebarProvider>
        </>
    )
};

export default LayoutMonEspace;