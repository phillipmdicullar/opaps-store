import React from 'react';
import "./Login.css";
import logo from "./logo.png";
function Login() {
  return (
    <div className="login-form">
      <div className="form-left">
        <header>
          <img src={logo} alt=""/>
        </header>
        <div className="body-section">
          <h2>Welcome Back!</h2>
          <p>Get access to your account by Loging in to your account. We are glad to have you in our website.</p>
        </div>
      </div>
      <div className="form-right">
        <div className="top-header">
          <img src={logo} alt="logo"/>
          <h3>Login to your account</h3>
          <p>Enter your login details to login to your account.</p>
        </div>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="login-buttons">Login</button>
        </form>
        <div className="signup-prompt">
          <p>Don't have an account? <a href="/signup">Sign Up</a></p>
        </div>
      </div>
    </div>
  )
}

export default Login