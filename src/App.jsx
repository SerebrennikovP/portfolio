import './CSS/app.css';
import React from 'react';
import Homepage from './pages/Homepage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
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
                    <Route path={routes.skills} element={<SkillsPage />} />
                    <Route path={routes.about} element={<AboutPage />} />
                </Routes>
            </div>
        </PageContext>
    );
}

export default App;
