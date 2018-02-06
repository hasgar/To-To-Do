import React, { Component } from 'react';
import { Button, ListView, View, ListItem } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from '../common';
import { listFetch } from './actions';

class List extends Component {
  
  componentWillMount() {
   this.props.listFetch();
   this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ lists }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
  });

    this.dataSource = ds.cloneWithRows(lists);
  }

  renderRow(list) {
    return <ListItem list={list} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
} 

const mapStateToProps = (state) => {
  const { lists } = state.list;
  console.log(lists)
  return { lists };

};

export default connect(mapStateToProps, { listFetch })(List);


