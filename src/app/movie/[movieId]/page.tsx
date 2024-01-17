import style from './MoviePage.module.scss'
import MovieBanner from "@/app/components/movieComponents/movieBanner/movieBanner";
import movieBanner from "@/app/assets/img/movie-banner.png";
import Image from "next/image";
import MovieSeries from "@/app/components/movieComponents/movieSeries/movieSeries";
import MovieText from "@/app/components/movieComponents/movieText/movieText";
import HomeNew from "@/app/components/homeComponents/homeNew/homeNew";
import MovieDescription from "@/app/components/movieComponents/movieDescription/movieDescription";

export default function Movie({params}: {
	params: { movieId: string }
}) {
	return (<div className={style.moviePage}>
		<Image className={style.moviePageBanner} src={movieBanner} alt="movie-banner"/>
		<MovieBanner/>
		<MovieSeries/>
		<MovieText/>
		<HomeNew name={'Похожее'}/>
		<MovieDescription/>
	</div>)
}