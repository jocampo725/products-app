import React, { Component } from 'react';
import ProductCard from './productCard';
import api from '../utils/api';

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      showingProducts: 0,
      hiddenProducts: 0
    }
  }

  componentDidMount() {
    api.getProducts().then(response => {
      this.setState({
        products: response.data
      })
    });
  }

  render() {
    return (
      <div>
        <span>Showing <b>{this.state.showingProducts}</b> products - Hidden: <b>{this.state.hiddenProducts}</b></span>
        {this.state.products.map((product) => {
          return (
            <ProductCard
              name={product.name}
              categories={product.categories}
              brand={product.brand}
              photo={product.photo}
              description={product.description}
              stock={product.stock}
              price={product.price} />
          )
        })}
      </div>
    )
  }
}

export default Products;
