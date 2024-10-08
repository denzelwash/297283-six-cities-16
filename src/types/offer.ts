import { CityName, Location } from './location'
import { UserShort } from './user'

export interface Offer {
	id: string
	title: string
	type: string
	price: number
	city: {
		name: CityName
		location: Location
	}
	location: Location
	isFavorite: boolean
	isPremium: boolean
	rating: number
	previewImage?: string
}

export interface OfferFull extends Offer {
	description: string
	bedrooms: number
	goods: string[]
	host: UserShort
	images: string[]
	maxAdults: number
}

export type OfferCard = Omit<Offer, 'city' | 'location'>
