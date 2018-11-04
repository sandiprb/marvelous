import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { Home } from './views/Home'
import Profile from './views/Profile'

const RootStack = createStackNavigator({
	Home: {
		screen: Home,
	},
	Profile: {
		screen: Profile,
	},
})

export default class App extends React.Component {
	render() {
		return <RootStack />
	}
}
