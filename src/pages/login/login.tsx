import { Link } from 'react-router-dom'
import Header from '../../components/header/header'
import { FormEvent, useRef } from 'react'
import { useAppDispatch } from '../../hooks/hooks'
import { login } from '../../store/thunks/auth'

export default function Login(): JSX.Element {
	const dispatch = useAppDispatch()
	const formRef = useRef<HTMLFormElement>(null)

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!formRef.current) {
			return
		}
		const formData = new FormData(formRef.current)
		const email = formData.get('email') as string
		const password = formData.get('password') as string
		dispatch(login({ email, password }))
	}

	return (
		<div className="page page--gray page--login">
			<Header showNav={false} />
			<main className="page__main page__main--login">
				<div className="page__login-container container">
					<section className="login">
						<h1 className="login__title">Sign in</h1>
						<form ref={formRef} onSubmit={handleSubmit} className="login__form form" action="#" method="post">
							<div className="login__input-wrapper form__input-wrapper">
								<label className="visually-hidden">E-mail</label>
								<input className="login__input form__input" type="email" name="email" placeholder="Email" required />
							</div>
							<div className="login__input-wrapper form__input-wrapper">
								<label className="visually-hidden">Password</label>
								<input className="login__input form__input" type="password" name="password" placeholder="Password" required />
							</div>
							<button className="login__submit form__submit button" type="submit">
								Sign in
							</button>
						</form>
					</section>
					<section className="locations locations--login locations--current">
						<div className="locations__item">
							<Link to="" className="locations__item-link">
								<span>Amsterdam</span>
							</Link>
						</div>
					</section>
				</div>
			</main>
		</div>
	)
}
