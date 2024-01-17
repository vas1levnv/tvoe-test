import style from './MovieBanner.module.scss'
import Image from "next/image";
import movieName from '@/app/assets/img/movie-name.svg'
import CustomButton from "@/app/components/UI/CustomButton/CustomButton";
import BookmarkIcon from "@/app/components/icons/bookmarkIcon";
import FavoriteIcon from "@/app/components/icons/favoriteIcon";

export default function MovieBanner() {
	return (<div className={style.movieBanner}>
		<Image src={movieName} alt="movie-name"/>
		<div className={style.movieBannerProperty}>
			<div className={style.movieBannerRating}>10</div>
			<div>2022 - ...</div>
			<div>1 сезон</div>
			<div>США</div>
			<div>Ужасы</div>
			<div>0+</div>
		</div>
		<div className={style.movieBannerText}>
			Уэнсдэй предстоит освоить экстрасенсорные cпособности, чтобы остановить местного серийного убийцу и раскрыть
			тайну родителей.
		</div>
		<div className={style.movieBannerBtns}>
			<CustomButton background={'linear-gradient(90deg, #6A11CB 0%, #2575FC 100%)'}
			>Смотреть</CustomButton>
			<CustomButton background={'linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.13) 50%, rgba(255, 255, 255, 0.10) 100%)'}
						  filter={'blur(10px)'}
			>Трейлер</CustomButton>
			<CustomButton background={'linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.13) 50%, rgba(255, 255, 255, 0.10) 100%)'}
						  filter={'blur(10px)'}
			><BookmarkIcon/></CustomButton>
			<CustomButton background={'linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.13) 50%, rgba(255, 255, 255, 0.10) 100%)'}
						  filter={'blur(10px)'}
			><FavoriteIcon/></CustomButton>
		</div>
	</div>)
}