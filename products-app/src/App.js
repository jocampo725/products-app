import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { NavigationDrawer } from 'react-md';
import * as routes from './constants/routes';

import './App.css';
import Home from './components/home';
import Contact from './components/contact';
import Clients from './components/clients';

class App extends Component {
  render() {
    return (
      <NavigationDrawer drawerTitle="react-md with CRA" toolbarTitle="Welcome to react-md">
        <Router>
            <Route exact path={routes.HOME} component={() => <Home />} />
            <Route exact path={routes.PRODUCTS} component={() => <Products />} />
            <Route exact path={routes.PRODUCT_DETAILS} component={() => <ProductDetails />} />
            <Route exact path={routes.CLIENTS} component={() => <Clients />} />
            <Route exact path={routes.CONTACT} component={() => <Contact />} />
        </Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </NavigationDrawer>
    );
  }
}

export default App;
