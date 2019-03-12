import React, { Component } from 'react';
import { Card, CardTitle, CardText, Grid, Cell } from 'react-md';

class ProductCard extends Component {
  render() {
    return (
      <Card className="md-block card__product">
        <CardTitle title={this.props.name} subtitle={this.props.categories.join(" - ") + " - " + this.props.brand} />
        <CardText>
          <Grid className="grid-example">
            <Cell size={4}>
              <img src={this.props.photo} width="160px" alt={this.props.name} />
            </Cell>
            <Cell size={8}>
              <p>{this.props.description}</p>
              <div><span><b>Stock:</b> {this.props.stock}</span></div>
              <div><span><b>Price:</b> {this.props.price}</span></div>
            </Cell>
          </Grid>
        </CardText>
      </Card>
    )
  }
}

export default ProductCard;
