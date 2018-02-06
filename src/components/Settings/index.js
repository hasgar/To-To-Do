import React, { Component } from 'react';
import { Button } from 'react-native';
import { Card, CardSection } from '../common';
import { NavigationActions } from 'react-navigation'

class Settings extends Component {

  render() {
    
    return (
     <Card>
        <CardSection>
        <Button title='Profile' onPress={() => this.props.navigation.navigate('Profile')}></Button>
        </CardSection>
        <CardSection>
        <Button title='Logout' onPress={() => this.props.navigation.goBack(null)}></Button>
        </CardSection>
      </Card>
    );
  }
}

export default Settings

