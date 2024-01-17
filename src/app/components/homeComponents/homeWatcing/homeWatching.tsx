"use client"

import style from './homeWatching.module.scss'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import movie1 from '@/app/assets/img/movie1.png'
import movie2 from '@/app/assets/img/movie2.png'
import movie3 from '@/app/assets/img/movie3.png'
import movie4 from '@/app/assets/img/movie4.png'
import Image, {StaticImageData} from "next/image";
import Link from "next/link";


export default function HomeWatching() {

	interface MoviesWatching {
		id: number,
		rating: number,
		image: StaticImageData,
	}

	const movies: Array<MoviesWatching> = [
		{
			id: 1,
			rating: 1,
			image: movie1
		},
		{
			id: 2,
			rating: 2,
			image: movie2
		},
		{
			id: 3,
			rating: 3,
			image: movie3
		},
		{
			id: 4,
			rating: 4,
			image: movie4
		},
		{
			id: 5,
			rating: 5,
			image: movie4
		},
		{
			id: 6,
			rating: 6,
			image: movie4
		},
		{
			id: 7,
			rating: 7,
			image: movie4
		},
		{
			id: 8,
			rating: 8,
			image: movie4
		},
		{
			id: 9,
			rating: 9,
			image: movie4
		},
	]

	return (
		<div className={style.new}>
			<h2><span className={style.newStroke}>Топ 10</span> просмотров за неделю</h2>
			<Swiper className={style.newSwiper}
					spaceBetween={100}
					slidesPerView={2.9}
			>
				{movies.map((item) => <SwiperSlide
					className={style.newSwiperSlide}
					key={item.id}>
					<Link className={style.newSwiperSlideLink} href={`/movie/${item.id}`}>
						<div className={`${style.newSwiperRaiting} ${style.newStroke}`}>{item.rating}</div>
						<div className={style.newSwiperImage}><Image src={item.image} alt="image"/></div>
					</Link>
				</SwiperSlide>)}
			</Swiper>
		</div>
	)
}