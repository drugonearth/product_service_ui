import React, { useState } from 'react';

const Login: React.FC = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Здесь будет логика для отправки данных на сервер
        console.log('Login attempt', formData);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <h2 className="mb-4">Login</h2>
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