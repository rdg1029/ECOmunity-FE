import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Notice from './pages/Notice';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/notice' element={<Notice />} />
            </Routes>
        </div>
    );
}

export default App;
