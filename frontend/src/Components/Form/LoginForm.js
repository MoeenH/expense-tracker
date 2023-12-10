import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const FormStyled = styled.form`
  /* Add your form styles here */
`;

const Input = styled.input`
  /* Add your input styles here */
`;

const Button = styled.button`
  /* Add your button styles here */
`;

const LoginForm = ({setIsLoggedIn}) => {
  //const history = useNavigate(); // Create a history object using useHistory
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
        setIsLoggedIn(true)
       //history.push('/dashboard'); // Redirect to the dashboard route after successful login
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
      <Input
        type="text"
        placeholder="Username or Email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit">Login</Button>
    </FormStyled>
  );
};

export default LoginForm;
