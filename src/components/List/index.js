import React, { Component } from 'react';
import { Button } from 'react-native';
import { Card, CardSection } from '../common';

class List extends Component {
  
  render() {
    console.log(this.props.navigation)
    return (
     <Card>
        <CardSection>
          <Button title='Create List' onPress={() => this.props.navigation.navigate('ListCreate')}></Button>
        </CardSection>
      </Card>
    );
  }
}

export default List

