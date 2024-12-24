import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from "../config";

const Login: React.FC = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        try {
            const response = await axios.post(`${API_BASE_URL}/auth`, formData, {
                headers: { 'Content-Type': 'application/json' },
            });
            console.log('Login successful', response.data);
            // Здесь можно добавить логику для сохранения токена и перенаправления пользователя
        } catch (error) {
            console.error('Login failed', error);
            setError('Login failed. Please check your credentials and try again.');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <h2 className="mb-4">Login</h2>
                        {error && <div className="alert alert-danger">{error}</div>}
                        <div className="mb-3">
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={formData.username}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;