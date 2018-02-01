import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation'
import Tabs from './Tabs'
import { AuthStack, SettingsOverTabStack } from './Stacks';
import Profile from '../Profile'

const MainStack = StackNavigator({
    Auth: { screen: AuthStack, 
        navigationOptions: {
            header: null
        } },
    Home: { screen: Tabs, 
        navigationOptions: {
            header: null
        } },
     Profile: { screen: Profile }  
  }, {
    initialRouteName: 'Auth'
})

export default MainStack
