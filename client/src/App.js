import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

//add these two library import statements 
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Home from './pages/Home';

//connection to Graphql using apollo
const client = new ApolloClient({
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div className='flex-column justify-flex-start min-100-vh'>
      <Header />
      <div className='container'>
        <Home />
      </div>
      <Footer />
    </div>
  </ApolloProvider>
  );
}

export default App;
