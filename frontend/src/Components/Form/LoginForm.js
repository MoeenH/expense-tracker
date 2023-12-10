import React, { useState } from 'react';
import styled from 'styled-components';
import backgroundImage from '../../img/Login BACK.jpg';

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin-left: 750px;
  margin-top: 250px;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  
  /* Add background image styling */
  background-image: url(${backgroundImage});
  background-size: cover; /* Adjust as needed */
`;

const Input = styled.input`
  margin-bottom: 15px; /* Increased margin-bottom */
  padding: 12px; /* Increased padding */
  border: 1px solid #ccc;
  border-radius: 6px; /* Increased border-radius */
  font-size: 18px; /* Increased font-size */
`;

const Button = styled.button`
  background-color: #355e68;
  color: white;
  padding: 12px; /* Increased padding */
  border: none;
  border-radius: 6px; /* Increased border-radius */
  cursor: pointer;
  font-size: 18px; /* Increased font-size */

  &:hover {
    background-color: #45a049;
  }
`;

const SignInLabel = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const ForgotPasswordLink = styled.a`
  margin-top: 10px;
  text-align: center;
  color: #355e68;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

const SignUpContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NewUserLink = styled.a`
  color: #355e68;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

const SignUpButton = styled(Button)`
  background-color: #355e68;
  margin-left: 10px;
`;

const LoginForm = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        console.log('Login successful');
        setIsLoggedIn(true);
        // history.push('/dashboard'); // Redirect to the dashboard route after successful login
      } else {
        console.error('Login failed');
        // Handle login failure (e.g., display error message)
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle network errors or other exceptions
    }
  };

  return (
    <FormStyled onSubmit={handleLogin}>
      <SignInLabel>Sign In</SignInLabel>

      <label htmlFor="username">Username:</label>
      <Input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <label htmlFor="password">Password:</label>
      <Input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <Button type="submit">Login</Button>

      <ForgotPasswordLink href="#">Forgot Password?</ForgotPasswordLink>

      <SignUpContainer>
        <NewUserLink href="#">New User</NewUserLink>
        <SignUpButton type="button">Sign Up</SignUpButton>
      </SignUpContainer>
    </FormStyled>
  );
};

export default LoginForm;