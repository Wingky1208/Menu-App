import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Profile from './pages/Profile';
import LoginSignup from './pages/LoginSignup';
import { StoreProvider } from './utils/GlobalState';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <div>
        <StoreProvider>
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
            <Route 
              path="/profile" 
              element={<Profile />} 
            />
            <Route 
              path="/login-signup" 
              element={<LoginSignup />} 
            />
          </Routes>
        </StoreProvider>
      </div>
    </Router>
  </ApolloProvider>
  );
}

export default App;
