import React, { Component } from 'react';
import List from '../List'
import ListCreate from '../ListCreate'
import Settings from '../Settings'
import { Image } from 'react-native';
import { TabNavigator } from 'react-navigation'



const Tabs = TabNavigator({
    List: {
        screen: List,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Image style={{color: '#4B0082'}} source={require('../../resources/images/settings.png')} />
        }
      },
      ListCreate: {
        screen: ListCreate,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Image style={{color: '#4B0082'}} source={require('../../resources/images/settings.png')} />
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Image style={{color: '#4B0082'}} source={require('../../resources/images/settings.png')} />
        }
    }
  }, {
    tabBarOptions: {
      activeTintColor: '#4B0082',
      style: {
        height: 56,
        backgroundColor: '#fff',
      }
    }
  })

export default Tabs

