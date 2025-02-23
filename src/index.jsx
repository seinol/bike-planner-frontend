import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import * as serviceWorker from './serviceWorker';
import App from './App';

const client = new ApolloClient({
  request: (operation) => {
    const tokenId = localStorage.getItem('tokenId');
    operation.setContext({
      uri: 'http://localhost:4110/graphql',
      headers: {
        authorization: tokenId ? `Bearer ${tokenId}` : '',
      },
    });
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
