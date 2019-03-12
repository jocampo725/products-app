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
      <div className="list">
        <div className="list__container">
          <List className="list__container-filters md-paper md-paper--1">
            <Subheader primary primaryText="Categories" />
            <Link to={routes.PRODUCTS} className="list__container--link">
              <ListItem primaryText="All" leftAvatar={<Avatar icon={<FontIcon iconClassName="fa fa-list-ul" />} />} />
            </Link>
            <Divider />
            <Link to={`${routes.PRODUCTS}/Tech`} className="list__container--link">
              <ListItem primaryText="Tech" leftAvatar={<Avatar icon={<FontIcon iconClassName="fa fa-laptop" />} />} />
            </Link>
            <Link to={`${routes.PRODUCTS}/Services`} className="list__container--link">
              <ListItem primaryText="Services" leftAvatar={<Avatar icon={<FontIcon iconClassName="fa fa-wrench" />} />} />
            </Link>
            <Link to={`${routes.PRODUCTS}/Office`} className="list__container--link">
              <ListItem primaryText="Office" leftAvatar={<Avatar icon={<FontIcon iconClassName="fa fa-folder" />} />} />
            </Link>
          </List>
        </div>
      </div>
    )
  }
}

export default CategoriesPanel;
