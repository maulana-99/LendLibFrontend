import React, { useState } from 'react';
import './login.css';
import '@fortawesome/fontawesome-free/css/all.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <p className='login-text-top'>Welcome to LendLIB</p>
      <p className='login-text-bottom'>Please login using your credentials</p>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your e-mail..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Enter your password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
            </button>
          </div>
        </div>
        <button type="submit">LOGIN</button>
      </form>
      <p className='register-link'>
        Don't have an account? <a href="/register"> <em>Create an account</em> <i className="fa fa-arrow-right"></i></a>
      </p>
    </div>
  );
};

export default Login;
