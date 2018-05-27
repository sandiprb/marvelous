type IUrl = {
	type?: string
	url?: string
}

type IThumbnail = {
	path?: string
	extension?: string //'jpg' | 'png' | 'gif'
}

export interface ICharacter {
	id?: number
	name?: string
	describe?: string
	modified?: string
	resourceURI?: string
	urls?: IUrl[]
	thumbnail: IThumbnail
}
