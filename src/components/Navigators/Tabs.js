import React, { Component } from 'react'
import { TabNavigator } from 'react-navigation'
import { ListStack, SettingsStack } from './Stacks'

const Tabs = TabNavigator({
    Tasks: { screen: ListStack,
        navigationOptions: {
        tabBarLabel: 'Tasks',
        //tabBarIcon: ({ tintColor }) => <Icon name='rocket' size={30} color={tintColor}/>
    }},
    Settings: { screen: SettingsStack ,
        navigationOptions: {
        tabBarLabel: 'Settings',
        //tabBarIcon: ({ tintColor }) => <Icon name='rocket' size={30} color={tintColor}/>
    }}
  }, {
    order: ['Tasks', 'Settings'],
    tabBarOptions: {
        activeTintColor: '#1a0000',
        style: {
        height: 56,
        backgroundColor: '#fff',
        },
        labelStyle: {
            fontSize: 12,
        } 
    },
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazy: true
})

export default Tabs
