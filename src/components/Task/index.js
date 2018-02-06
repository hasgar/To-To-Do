import React, { Component } from 'react';
import { Button, ListView, View, TouchableOpacity, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from '../common';
import { taskFetch } from './actions';

class Task extends Component {
  
  componentWillMount() {
   this.createDataSource(this.props.lists[this.props.navigation.state.params.selectedRowId]);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ items }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
  });

    this.dataSource = ds.cloneWithRows(items);
  }

  pressRow(rowID)  {
        
    

  }

  taskStatusStyle(status) {
    if(status) {
      return 'line-through'
    }
    return '';
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <TouchableOpacity style={styles.row} onPress={() => this.pressRow(rowID)} underlayColor='rgba(0,0,0,0)'>
          <Text style={[styles.text, rowData.isCompleted ? {textDecorationLine: 'line-through'} : {}]} >
              {rowData.name}
          </Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <ListView 
        contentContainerStyle={styles.task}
        enableEmptySections
        removeClippedSubviews={false}
        dataSource={this.dataSource}
        renderRow={this.renderRow.bind(this)}
      />
    );
  }
} 

const mapStateToProps = (state) => {
  const { lists } = state.list;

  return { lists: lists }

};
const { width } = Dimensions.get('window')

var styles = {
  task: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  row: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    margin: 10,
    height: 30,
    width: width - 20,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC',
  },
  text: {
    flex: 1,
    fontWeight: 'bold',
  }
}

export default connect(mapStateToProps, { taskFetch })(Task);


