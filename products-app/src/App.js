import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import * as routes from './constants/routes';

import './App.css';
import Home from './components/home';
import Contact from './components/contact';
import Clients from './components/clients';
import Products from './components/products';
import ProductDetails from './components/productsByCategory';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0
    };

    this.handleNavChange = this.handleNavChange.bind(this);
  }

  handleNavChange(activeIndex) {
    this.setState({ activeIndex });
  };

  render() {
    return (
      <Router>
        <div>
          <div className="topnav">
            <Link to={routes.HOME}>HOME</Link>
            <Link to={routes.PRODUCTS}>PRODUCTS</Link>
            <Link to={routes.CLIENTS}>CLIENTS</Link>
            <Link to={routes.CONTACT}>CONTACT</Link>
          </div>
          <Route exact path={routes.HOME} component={Home} />
          <Route exact path={routes.PRODUCTS} component={Products} />
          <Route exact path={routes.PRODUCT_DETAILS} component={ProductDetails} />
          <Route exact path={routes.CLIENTS} component={Clients} />
          <Route exact path={routes.CONTACT} component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
