import React from 'react';

const Login = () => {
  return (
    <form aria-label="form">
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        id="username"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
      />
      <button>Login</button>
    </form>
  );
};

export default Login;
