import React from 'react';
import { Provider } from 'react-redux';
import store from './store.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Login from './components/Login/Login.js';
import Main from './components/Main/Main.js';
import SingUp from './components/SingUp/SingUp.js';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const App = () => (
  <Provider store={store}>
    <Router history={Router}>
      <Header />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" exact component={Login} />
        <Route path="/sing-up" component={SingUp} />
        <PrivateRoute path="/main" component={Main} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
