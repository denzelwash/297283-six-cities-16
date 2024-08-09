import Header from '../../components/header/header'
import Gallery from '../../components/offer/gallery/gallery'
import Map from '../../components/map/map'
import Info from '../../components/offer/info/info'
import Host from '../../components/offer/host/host'
import NearOffers from '../../components/near-offers/near-offers'
import Reviews from '../../components/offer/review/section/section'
import REVIEWS from '../../mocks/reviews'
import OFFERS from '../../mocks/offers'
import OFFER from '../../mocks/offer'
import POINTS from '../../mocks/points'
import { useEffect } from 'react'
import { setActiveOfferId, setCity } from '../../store/slices/offers'
import { useAppDispatch } from '../../hooks/hooks'

export default function Favorites(): JSX.Element {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(setCity('Amsterdam'))
		dispatch(setActiveOfferId(POINTS[0].id))
		return () => {
			dispatch(setActiveOfferId(''))
		}
	}, [dispatch])

	return (
		<div className="page">
			<Header />
			<main className="page__main page__main--offer">
				<section className="offer">
					<Gallery images={OFFER.images.slice(0, 6)} />
					<div className="offer__container container">
						<div className="offer__wrapper">
							<Info offer={OFFER} />
							<Host host={OFFER.host} description={OFFER.description} />
							<Reviews isLoggedIn reviews={REVIEWS} />
						</div>
					</div>
					<Map points={POINTS.slice(0, 4)} extraClassName="offer" />
				</section>
				<div className="container">
					<NearOffers offers={OFFERS.slice(0, 3)} />
				</div>
			</main>
		</div>
	)
}
