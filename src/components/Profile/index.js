import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection } from '../common';

class Profile extends Component {

  render() {
    return (
     <Card>
        <CardSection>
        <Text>Profile section</Text>
        </CardSection>
      </Card>
    );
  }
}

export default Profile

