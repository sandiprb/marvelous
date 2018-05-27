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

interface ICharacterItemProps {
	character: ICharacter
}

const CharacterItem = ({ character }: ICharacterItemProps) => {
	const thumnailURI = `${character.thumbnail.path}.${
		character.thumbnail.extension
	}`
	return (
		<View style={styles.characterItem}>
			<Image
				source={{ uri: thumnailURI }}
				style={{ width: 100, height: 100 }}
			/>
			<Text style={styles.textCenter} key={character.id}>
				{character.name}
			</Text>
		</View>
	)
}

export class Home extends React.Component<{}> {
	render() {
		return (
			<ScrollView style={{ backgroundColor: '#fff' }}>
				<Text style={styles.logo}>Marvel'ous</Text>
				<View style={styles.container}>
					{characters.map((character: ICharacter) => (
						<CharacterItem key={character.id} character={character} />
					))}
				</View>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	textCenter: {
		textAlign: 'center',
	},
	logo: {
		height: 40,
		color: 'red',
		fontWeight: 'bold',
		textAlign: 'center',
		lineHeight: 40,
		fontSize: 24,
	},
	container: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		// alignItems: '',
		justifyContent: 'space-around',
	},
	characterItem: {
		marginBottom: 16,
		width: '33%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
})
