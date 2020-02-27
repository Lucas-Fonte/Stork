import React from 'react';
import { Router } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Routes from './routes';

import history from './services/history';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './graphqlClient';

function App() {
  return (
    <ApolloProvider client={client}>
        <Router history={history}>
        <Routes />
            <GlobalStyle />
        </Router>
    </ApolloProvider>
  );
}

export default App;
