import OfferCard from '../../offer-card/offer-card'
import { OfferCard as OfferCardType } from '../../../types/offer'
import { OFFERS_NUMBER } from '../../../const'

type OffersProps = {
	cards: OfferCardType[]
	setActiveOfferId: (id: string) => void
}

export default function Offers({ cards, setActiveOfferId }: OffersProps): JSX.Element {
	return (
		<section className="cities__places places">
			<h2 className="visually-hidden">Offers</h2>
			<b className="places__found">312 places to stay in Amsterdam</b>
			<form className="places__sorting" action="#" method="get">
				<span className="places__sorting-caption">Sort by</span>
				<span className="places__sorting-type" tabIndex={0}>
					Popular
					<svg className="places__sorting-arrow" width={7} height={4}>
						<use xlinkHref="#icon-arrow-select" />
					</svg>
				</span>
				<ul className="places__options places__options--custom places__options--opened">
					<li className="places__option places__option--active" tabIndex={0}>
						Popular
					</li>
					<li className="places__option" tabIndex={0}>
						Price: low to high
					</li>
					<li className="places__option" tabIndex={0}>
						Price: high to low
					</li>
					<li className="places__option" tabIndex={0}>
						Top rated first
					</li>
				</ul>
			</form>
			<div className="cities__places-list places__list tabs__content">
				{cards
					.filter((_, i) => i < OFFERS_NUMBER)
					.map((card) => (
						<OfferCard key={card.id} offer={card} setActiveOfferId={() => setActiveOfferId(card.id)} />
					))}
			</div>
		</section>
	)
}
