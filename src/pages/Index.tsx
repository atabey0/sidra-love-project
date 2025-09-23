import React, { useState } from 'react';
import LoginPage from '@/components/LoginPage';
import MainPage from '@/components/MainPage';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <MainPage />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default Index;
