import React, { Component } from 'react';
import { ListView, ScrollView, View, TouchableOpacity, Text, Dimensions, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from '../common';
import { listFetch, listCreate, formUpdate } from './actions';

class Lists extends Component {
  
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

  renderRow(list, sectionID, rowID) {
    return (
      <TouchableOpacity style={styles.row} onPress={() => this.props.navigation.navigate('List',{selectedRowId: rowID})} underlayColor='rgba(0,0,0,0)'>
          <Text> {list.name} </Text>
      </TouchableOpacity>
    )
  }

  onAddPress(name) {
    if (name)
      this.props.listCreate(name)
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <ListView 
            contentContainerStyle={styles.list}
            enableEmptySections
            dataSource={this.dataSource}
            removeClippedSubviews={false}
            renderRow={this.renderRow.bind(this)}
          />
        </ScrollView>
        <View style={[styles.footer]}>
        <TextInput
          maxLength = {40}
          style={styles.textInput}
          onChangeText={value => this.props.formUpdate({ prop: 'name', value })}
          value={this.props.name}
        />
        <Button onPress={() => this.onAddPress(this.props.name)}>Add</Button>
        </View>
      </View>

    );
  }
} 

const mapStateToProps = (state) => {
  const { lists, name } = state.list;
  if (lists) {
    return { lists: lists, name: name }
  } 
  return { lists: [], name: name }

};

export default connect(mapStateToProps, { listFetch, listCreate, formUpdate })(Lists);

const { width } = Dimensions.get('window')

var styles = {
  list: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  row: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    margin: 10,
    height: 100,
    width: width/2.4,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC',
  },
  addListContainer: {
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
}

