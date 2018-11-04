import * as React from 'react'
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Image,
	Dimensions,
} from 'react-native'
import { characters } from './data'
import { ICharacter } from '../interface/index'

interface IProfileProps {
	id: number
	navigation: any
}

interface IProfileState {
	comics: Array<T>
}

export default class Profile extends React.Component<
	IProfileProps,
	IProfileState
> {
	constructor(props: IProfileProps) {
		super(props)
		this.state = {
			comics: [],
		}
	}

	render() {
		const { id } = this.props.navigation.state.params as any
		const c = characters.filter(c => c.id === id)[0]
		console.log(c)

		if (!c) {
			return this.props.navigation.goBack()
		}

		return (
			<ScrollView style={{ backgroundColor: '#fff' }}>
				<View>
					<Text>{c.name}</Text>
					<Text>Comics</Text>
					{c.comics.items.map(comic => (
						<View key={comic.name}>
							<Image
								source={{ uri: comic.resourceURI }}
								style={{ width: 100, height: 100 }}
							/>
							<Text>{comic.name}</Text>
						</View>
					))}
				</View>
			</ScrollView>
		)
	}
}
