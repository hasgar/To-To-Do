import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Tabs from '../Tabs'

class Home extends Component {

  render() {    
    return (
      <View style={{flex: 1}}>
        <Tabs />
      </View>
    );
  }
}

export default Home