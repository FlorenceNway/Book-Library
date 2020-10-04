import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BookDetails from '../pages/book/BookDetails';
import BookList from '../pages/book/BookList';
import BookNew from '../pages/book/BookNew';
import Order from '../pages/order/Order';
import store from '../store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/orders" component={Order} />
          <Route path="/books/new" component={BookNew} />
          <Route path="/books/:id" component={BookDetails} />
          <Route path="/" component={BookList} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
