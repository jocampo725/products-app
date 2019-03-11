import React, { Component } from 'react';
import ProductCard from './productCard';
import api from '../utils/api';

class ProductsByCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      showingProducts: 0,
      hiddenProducts: 0
    }
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    api.getProductsByCategory(params.category).then(response => {
      this.setState({
        products: response.data
      })
    });
  }

  render() {
    return (
      <div>
        <span>Showing <b>{this.state.showingProducts}</b> products - Hidden: <b>{this.state.hiddenProducts}</b></span>
        {this.state.products.map(product => {
          return (
            <ProductCard
              title={product.title}
              categories={product.categories}
              img_url={product.img_url}
              description={product.description}
              stock={product.stock}
              price={product.price} />
          )
        })}
      </div>
    )
  }
}

export default ProductsByCategory;
