import React from 'react';
import UserForm from '../components/UserForm';

const Login = () => {
  const handleSubmit = () => {

  };

  return (
    <div>
      <h2>Login</h2>
      <UserForm handleSubmit={handleSubmit} btnName="LogIn" />
    </div>
  );
};

export default Login;
