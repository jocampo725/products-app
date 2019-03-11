import React, { Component } from 'react';
import { Card, CardTitle, CardText, Grid, Cell } from 'react-md';

class ProductCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Card className="md-block">
        <CardTitle title={this.props.title} subtitle={this.props.categories} />
        <CardText>
          <Grid className="grid-example">
            <Cell size={4}>
              <img src={this.props.img_url} alt={this.props.title} />
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
