import React, { Component } from 'react';
import { Button } from 'react-native';
import { Card, CardSection } from '../common';
import { NavigationActions } from 'react-navigation'

class Settings extends Component {


  goBackk() {
    const { state } = this.props.navigation;
    console.log(this.props.navigation)
    this.props.navigation.goBack(state.key)
  }
  render() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Auth'})
      ]
    })
    
    
    
    return (
     <Card>
        <CardSection>
        <Button title='Profile' onPress={() => this.props.navigation.navigate('Profile')}></Button>
        </CardSection>
        <CardSection>
        <Button title='Logout' onPress={() => this.goBackk()}></Button>
        </CardSection>
      </Card>
    );
  }
}

export default Settings

