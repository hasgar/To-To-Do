import React, { Component } from 'react';
import { ListView, View, TouchableOpacity, Text, Dimensions, ScrollView, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from '../common';
import { taskUpdate, taskCreate } from './actions';
import { formUpdate } from '../Lists/actions';

class List extends Component {
  
  componentWillMount() {
    this.createDataSource(this.props.lists[this.props.navigation.state.params.selectedRowId]);
  }

  // componentWillReceiveProps(nextProps) {
  //   this.createDataSource(nextProps);
  // }

  createDataSource({ items }) {

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(items);
  
  }

  pressRow(selectedTaskId)  {

    this.props.taskUpdate(this.props.lists, this.props.navigation.state.params.selectedRowId, selectedTaskId)

  }

  renderRow(task, sectionID, rowID) {
    
    return (
      <TouchableOpacity style={styles.row} onPress={() => this.pressRow(rowID)} underlayColor='rgba(0,0,0,0)'>
          <Text style={[styles.text, task.isFinished ? {textDecorationLine: 'line-through'} : {}]} >
              {task.name}
          </Text>
      </TouchableOpacity>
    )
  }

  onAddPress(name, listId) {

    if (name)
      this.props.taskCreate(name, listId)
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <ListView 
          contentContainerStyle={styles.task}
          enableEmptySections
          removeClippedSubviews={false}
          dataSource={this.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
        </ScrollView>
        <View style={[styles.footer]}>
        <TextInput
          maxLength = {40}
          style={styles.textInput}
          onChangeText={value => this.props.formUpdate({ prop: 'taskName', value })}
          value={this.props.taskName}
        />
        <Button onPress={() => this.onAddPress(this.props.taskName, this.props.navigation.state.params.selectedRowId)}>Add</Button>
        </View>
      </View>

      
      
    );
  }
} 

const mapStateToProps = (state) => {

  const { lists, taskName } = state.list;
  console.log(lists)
  if (lists) {
    return { lists: lists, taskName: taskName }
  } 
  return { lists: [], taskName: taskName }

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
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  footer: {
    margin: 5,
    height: 40,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
  },
  textInput: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    height: 40,
    width: width - 80,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC',
  },
}

export default connect(mapStateToProps, { taskUpdate, taskCreate, formUpdate })(List);


