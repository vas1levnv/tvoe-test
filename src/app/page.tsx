import Link from "next/link";
import HomeBanner from "@/app/components/homeComponents/homeBanner/homeBanner";
import HomeNew from "@/app/components/homeComponents/homeNew/homeNew";

import style from './page.module.scss'
import HomeWatching from "@/app/components/homeComponents/homeWatcing/homeWatching";

export default function Home() {
	return (
		<main className={style.homePage}>
			<HomeBanner/>
			<div className={style.homePageContent}>
				<HomeNew name={'Новинки'}/>
				<HomeWatching/>
			</div>
		</main>
	)
}
