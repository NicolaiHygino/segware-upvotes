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
    </form>
  );
};

export default Login;
