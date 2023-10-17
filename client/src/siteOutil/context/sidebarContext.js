import React, { createContext, useState } from 'react';

const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
    const [isProjectsOpen, setIsProjectsOpen] = useState(true);

    const toggleProjects = () => {
        setIsProjectsOpen(!isProjectsOpen);
    };

    return (
        <SidebarContext.Provider value={{ isProjectsOpen, toggleProjects }}>
            {children}
        </SidebarContext.Provider>
    );
};

export { SidebarContext, SidebarProvider };