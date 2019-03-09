import React, { Component } from 'react';
import {
  Subheader,
  Divider,
  List,
  ListItem,
} from 'react-md';

class CategoriesPanel extends Component {
  render() {
    <List className="md-cell md-paper md-paper--1">
      <Subheader primary primaryText="Categories" />
      <ListItem primaryText="All" leftAvatar={<Avatar icon={<FontIcon iconClassName="fas fa-list-ul" />} />} />
      <Divider />
      <ListItem primaryText="Tech" leftAvatar={<Avatar icon={<FontIcon iconClassName="fas fa-laptop" />} />} />
      <ListItem primaryText="Services" leftAvatar={<Avatar icon={<FontIcon iconClassName="fas fa-wrench" />} />} />
      <ListItem primaryText="Office" leftAvatar={<Avatar icon={<FontIcon iconClassName="fas fa-folder" />} />} />
    </List>
  }
}

export default CategoriesPanel;
