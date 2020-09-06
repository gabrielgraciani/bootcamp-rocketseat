import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/Signin';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <SignIn />
      </AuthProvider>
    </>
  );
};

export default App;
