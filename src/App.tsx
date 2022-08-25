import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Notice from './pages/Notice';
import Post from './pages/Post';
import Profile from './pages/Profile';

import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/notice' element={<Notice />} />
                <Route path='/post' element={<Post />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
        </div>
    );
}

export default App;
