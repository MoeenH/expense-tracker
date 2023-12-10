// MainComponent.js
import React, { useState } from 'react';
import LoginForm from '../Form/LoginForm'; // Correct import path
import Navigation from './Navigation';

function MainComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <Navigation />
      ) : (
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default MainComponent;
