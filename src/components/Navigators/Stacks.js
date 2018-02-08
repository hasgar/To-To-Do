import React, { Component } from 'react';

// Navigators
import { StackNavigator } from 'react-navigation'

// StackNavigator screens
import Login from '../Login'
import Signup from '../Signup'
import Lists from '../Lists'
import List from '../List'
import Settings from '../Settings'
import Profile from '../Profile'
import Tabs from './Tabs'

export const AuthStack = StackNavigator({
  Login: { screen: Login, navigationOptions: {
    title: 'Login', 
    header: null
  }  },
  Signup: { screen: Signup, navigationOptions: {
    title: 'Create Account'
  } }, 
}, {
  initialRouteName: 'Login',
})

export const ListStack = StackNavigator({
    Lists: { screen: Lists, navigationOptions: {
        title: 'Lists'
      } },
      List: { screen: List, navigationOptions: {
        title: 'List' 
      } }, 
  }, {
    initialRouteName: 'Lists',
})

export const SettingsStack = StackNavigator({
    Settings: { screen: Settings, navigationOptions: {
        title: 'Settings'
    } }, 
  }, {
    initialRouteName: 'Settings',
 })










