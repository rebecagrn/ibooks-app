import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <>
      <GlobalProvider>
        <Routes />
        <GlobalStyle />
      </GlobalProvider>
    </>
  );
}

export default App;
