import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as routes from './constants/routes';
import {
  Subheader,
  Divider,
  List,
  ListItem,
} from 'react-md';

class CategoriesPanel extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <List className="md-cell md-paper md-paper--1">
        <Subheader primary primaryText="Categories" />
        <Link to={routes.PRODUCTS}>
          <ListItem primaryText="All" leftAvatar={<Avatar icon={<FontIcon iconClassName="fas fa-list-ul" />} />} />
        </Link>
        <Divider />
        <Link to={`${routes.PRODUCTS}/Tech`}>
          <ListItem primaryText="Tech" leftAvatar={<Avatar icon={<FontIcon iconClassName="fas fa-laptop" />} />} />
        </Link>
        <Link to={`${routes.PRODUCTS}/Services`}>
          <ListItem primaryText="Services" leftAvatar={<Avatar icon={<FontIcon iconClassName="fas fa-wrench" />} />} />
        </Link>
        <Link to={`${routes.PRODUCTS}/Office`}>
          <ListItem primaryText="Office" leftAvatar={<Avatar icon={<FontIcon iconClassName="fas fa-folder" />} />} />
        </Link>
      </List>
    )
  }
}

export default CategoriesPanel;
