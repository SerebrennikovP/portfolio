import './CSS/app.css';
import React from 'react';
import Homepage from './pages/Homepage';
import PageContext from './context/PageContext';

function App() {


    return (
        <PageContext>
            <div className="App">
                <Homepage />
            </div>
        </PageContext>
    );
}

export default App;
