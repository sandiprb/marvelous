import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Home } from "./views/Home";

const RootStack = createStackNavigator({
  Home: {
    screen: Home
  },
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}