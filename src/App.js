import React from 'react';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Copyright from './Components/Copyright/Copyright';

function App() {
    return (
        <div className="App font-readex-pro flex flex-col items-center">
            <div className="w-full pb-14">
                <Header />
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
            <div className="pb-5 w-medium flex items-center justify-center">
                <Copyright />
            </div>
        </div>
    )
}

export default App;
