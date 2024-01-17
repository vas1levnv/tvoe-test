import style from './MoviePage.module.scss'
import MovieBanner from "@/app/components/movieComponents/movieBanner/movieBanner";
import movieBanner from "@/app/assets/img/movie-banner.png";
import Image from "next/image";
import MovieSeries from "@/app/components/movieComponents/movieSeries/movieSeries";

export default function Movie({params}: {
	params: { movieId: string }
}) {
	return (<div className={style.moviePage}>
		<Image className={style.moviePageBanner} src={movieBanner} alt="movie-banner"/>
		<MovieBanner/>
		<MovieSeries/>
	</div>)
}