import React, { Component } from 'react';
import { Text, Button } from 'react-native';
import { Card, CardSection } from '../common';

class Profile extends Component {

  render() {
      
    return (
     <Card>
        <CardSection>
        <Button title='Go back' onPress={() => this.props.navigation.goBack(null)}></Button>
        </CardSection>
      </Card>
    );
  }
}

export default Profile

