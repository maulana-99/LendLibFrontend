import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './login.css';

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
      <div className="login-box">
        <h1 className="header-login">Login</h1>
        <p className="login-text-top">Welcome to LendLIB</p>
        <p className="login-text-bottom">Please login using your credentials</p>
        <form onSubmit={handleLogin}>
          <div className="form-group-login">
            <label className="label-email-login" htmlFor="email">E-mail</label>
            <input className="input-email-login"
              type="email"
              id="email"
              placeholder="Enter your e-mail..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group-login">
            <label className="label-password-login" htmlFor="password">Password</label>
            <div className="password-input-login">
              <input
                className="input-password-login"
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Enter your password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button" className="password-toggle-login"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </button>
            </div>
          </div>
          <button className="button-login" type="submit">LOGIN</button>
        </form>
        <p className="register-link">
          Don't have an account? <a className="register-link-right" href="/register"> <em>Create an account</em> <i className="fa fa-arrow-right"></i></a>
        </p>
      </div>
    </div>
  );
};

export default Login;
