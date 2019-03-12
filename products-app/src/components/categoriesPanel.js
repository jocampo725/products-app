import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';
import {
  Subheader,
  Divider,
  List,
  ListItem,
  Avatar,
  FontIcon
} from 'react-md';

class CategoriesPanel extends Component {
  render() {
    return (
      <div className="md-grid">
        <List className="md-cell-12">
          <Subheader primary primaryText="Categories" />
          <Link to={routes.PRODUCTS}>
            <ListItem primaryText="All" leftAvatar={<Avatar icon={<FontIcon iconClassName="fa fa-list-ul" />} />} />
          </Link>
          <Divider />
          <Link to={`${routes.PRODUCTS}/Tech`}>
            <ListItem primaryText="Tech" leftAvatar={<Avatar icon={<FontIcon iconClassName="fa fa-laptop" />} />} />
          </Link>
          <Link to={`${routes.PRODUCTS}/Services`}>
            <ListItem primaryText="Services" leftAvatar={<Avatar icon={<FontIcon iconClassName="fa fa-wrench" />} />} />
          </Link>
          <Link to={`${routes.PRODUCTS}/Office`}>
            <ListItem primaryText="Office" leftAvatar={<Avatar icon={<FontIcon iconClassName="fa fa-folder" />} />} />
          </Link>
        </List>
      </div>
    )
  }
}

export default CategoriesPanel;
