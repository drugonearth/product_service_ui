import React, { useState } from 'react';
import axios from 'axios';
import {API_BASE_URL} from "../config";

const Register: React.FC = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        first_name: '',
        last_name: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_BASE_URL}/users`, formData, {
                headers: { 'Content-Type': 'application/json' },
            });
            console.log('Registration successful', response.data);
            // Здесь можно добавить перенаправление на страницу входа или другую логику
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <h2 className="mb-4">Register</h2>
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
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
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
                        <div className="mb-3">
                            <input
                                type="text"
                                name="first_name"
                                placeholder="First Name"
                                value={formData.first_name}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="last_name"
                                placeholder="Last Name"
                                value={formData.last_name}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;