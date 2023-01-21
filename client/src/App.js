import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Account from './pages/Account';
import SingleListing from './pages/SingleListing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';

const httpLink = createHttpLink({
  uri: '/graphql',
});

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/account" component={Account} />
            <Route component={NoMatch} />
          </Switch>
          <Switch>
            <Route exact path="/account" component={Account}>
              <Route exact path=":username" component={Account} />
              <Route exact path="" component={Account} />
            </Route>
            <Route path="/listing/:id" component={SingleListing} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
