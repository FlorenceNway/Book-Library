import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BookList from '../pages/book/BookList';
import BookNew from '../pages/book/BookNew';
import store from '../store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/books/new" component={BookNew} />
          <Route path="/" component={BookList} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
