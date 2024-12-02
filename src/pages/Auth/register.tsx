import React, { useState } from "react";
import "./register.css";
import '@fortawesome/fontawesome-free/css/all.css';

const Register: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Registering with:', { name, email, password });
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <h1 className="register-header">Register</h1>
                <p className='register-text-top'>Welcome to LendLIB</p>
                <p className='register-text-bottom'>Please register to create your credentials</p>
                <form onSubmit={handleRegister}>
                    <div className="form-group-register">
                        <label className="label-name-register" htmlFor="name">Username</label>
                        <input
                            className="input-name-register"
                            type="text"
                            id="name"
                            placeholder="Enter your name..."
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group-register">
                        <label className="label-email-register" htmlFor="email">E-mail</label>
                        <input
                            className="input-email-register"
                            type="email"
                            id="email"
                            placeholder="Enter your e-mail..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group-register">
                        <label className="label-password-register" htmlFor="password">Password</label>
                        <div className="password-input-register">
                            <input
                                className="input-password-register"
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                placeholder="Enter your password..."
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                className="password-toggle-register"
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                            </button>
                        </div>
                    </div>
                    <button className="button-register" type="submit">REGISTER</button>
                </form>
                <p className='register-link'>
                    Have an account? <a href="/login" className="register-link-text"> <em>sign in</em> <i className="fa fa-arrow-right"></i></a>
                </p>
            </div>
        </div>
    );
}

export default Register;