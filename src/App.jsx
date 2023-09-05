import './CSS/app.css';
import React from 'react';
import Homepage from './pages/Homepage';
import ProjectsPage from './pages/ProjectsPage';
import PageContext from './context/PageContext';
import { Routes, Route } from 'react-router-dom';
import { routes } from "./data/constData"

function App() {


    return (
        <PageContext>
            <div className="App">
                <Routes>
                    <Route path={routes.home} element={<Homepage />} />
                    <Route path={routes.projects} element={<ProjectsPage />} />
                </Routes>
            </div>
        </PageContext>
    );
}

export default App;
