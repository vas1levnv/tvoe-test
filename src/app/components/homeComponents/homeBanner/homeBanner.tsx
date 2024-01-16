import style from './homeBanner.module.scss'
import Image from 'next/image'
import banner from "@/app/assets/img/banner.png"
import bannerName from "@/app/assets/img/banner-name.png"
import CustomButton from "@/app/components/UI/CustomButton/CustomButton";

export default function HomeBanner() {
	return (
		<div className={style.banner}>
			<Image src={banner} className={style.bannerImage} alt="banner"/>
			<div className={style.bannerContent}>
				<Image src={bannerName} alt="bannerName"/>
				<h2 className={style.bannerText}>
					Неувядающий авантюрист и пытливый археолог-исследователь по‑прежнему в седле.
				</h2>
				<div className={style.bannerBtns}>
					<CustomButton background={'linear-gradient(90deg, #6A11CB 0%, #2575FC 100%)'}
					>Смотреть</CustomButton>
					<CustomButton background={'linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.13) 50%, rgba(255, 255, 255, 0.10) 100%)'}
								  filter={'blur(10px)'}
					>О фильме</CustomButton>
				</div>
			</div>
		</div>
	)
}