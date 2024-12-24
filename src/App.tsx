import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';

const App: React.FC = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">My App</Link>
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to="/">Home</Link>
                        <Link className="nav-item nav-link" to="/register">Register</Link>
                        <Link className="nav-item nav-link" to="/login">Login</Link>
                    </div>
                </div>
            </nav>
            <div className="container mt-4">
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<h2>Welcome to our app!</h2>} />
                </Routes>
            </div>
        </div>
    );
};

export default App;