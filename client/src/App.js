import React from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

// components
import BookList from './components/BookList'
import AddBook from './components/AddBook'
import AddAuthor from './components/AddAuthor';

// apollo setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

const App = () => {
  return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Reading List</h1>
          <BookList />
          <AddBook />
          <AddAuthor />
        </div>
      </ApolloProvider>
  );
}

export default App;