import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './Accueil';
import Sidebar from "./components/Sidebar/sidebar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Sidebar />
  </React.StrictMode>
);
