import React, { Component } from 'react';
import { Grid, Cell } from 'react-md';
import ProductCard from './productCard';
import CategoriesPanel from './categoriesPanel';
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
        products: response.data.Products,
        showingProducts: response.data.ShowingProducts,
        hiddenProducts: response.data.HiddenProducts
      })
    });
  }

  render() {
    return (
      <div>
        <Grid className="products__container">
          <Cell size={3}>
            <CategoriesPanel />
          </Cell>
          <Cell size={9}>
            <span>Showing <b>{this.state.showingProducts}</b> products - Hidden: <b>{this.state.hiddenProducts}</b></span>
            {this.state.products.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  categories={product.categories}
                  brand={product.brand}
                  photo={product.photo}
                  description={product.description}
                  stock={product.stock}
                  price={product.price} />
              )
            })}
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Products;
