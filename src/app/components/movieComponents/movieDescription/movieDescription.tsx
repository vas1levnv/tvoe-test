import style from './MovieDescription.module.scss'

export default function MovieDescription() {
	return (
		<div className={style.movieDescription}>
			<h2>Информация</h2>
			<div className={style.movieDescriptionGrid}>
				<div>
					<div className={style.movieDescriptionGridTitle}>Премьера в мире</div>
					<div>31 октября 2022</div>
				</div>
				<div>
					<div className={style.movieDescriptionGridTitle}>Страна</div>
					<div>США</div>
				</div>
				<div>
					<div className={style.movieDescriptionGridTitle}>Язык аудиодорожки</div>
					<div>Rus, Eng</div>
				</div>
				<div>
					<div className={style.movieDescriptionGridTitle}>Оригинальное название</div>
					<div>Wednesday</div>
				</div>
				<div>
					<div className={style.movieDescriptionGridTitle}>Жанры</div>
					<div>Фентези, Комедия, Криминал, Детектив</div>
				</div>
				<div>
					<div className={style.movieDescriptionGridTitle}>Качество</div>
					<div className={style.movieDescriptionQuality}>Full HD</div>
				</div>
			</div>
		</div>
	)
}