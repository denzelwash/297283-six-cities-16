import { CityName } from '../../../types/location'

type EmptyOffersProps = {
	city: CityName
}

export default function EmptyOffers({ city }: EmptyOffersProps): JSX.Element {
	return (
		<section className="cities__no-places">
			<div className="cities__status-wrapper tabs__content">
				<b className="cities__status">No places to stay available</b>
				<p className="cities__status-description">We could not find any property available at the moment in {city}</p>
			</div>
		</section>
	)
}
