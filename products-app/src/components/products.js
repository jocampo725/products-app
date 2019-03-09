import React, { Component } from 'react';
import ProductCard from './productCard';

class Products extends Component {
  render() {
    <div>
      <span>Showing <b>{this.state.showingProducts}</b> products - Hidden: <b>{this.state.hiddenProducts}</b></span>
      {this.state.products.map(product => {
        <ProductCard
          title={product.title}
          categories={product.categories}
          img_url={product.img_url}
          description={product.description}
          stock={product.stock}
          price={product.price}>
        </ProductCard>
      })}
    </div>
  }
}

export default Products;
