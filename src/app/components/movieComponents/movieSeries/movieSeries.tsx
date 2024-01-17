"use client"

import style from './MovieSeries.module.scss'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import movie1 from '@/app/assets/img/movie-swiper1.png'
import movie2 from '@/app/assets/img/movie-swiper2.png'
import movie3 from '@/app/assets/img/movie-swiper3.png'
import movie4 from '@/app/assets/img/movie-swiper4.png'
import Image, {StaticImageData} from "next/image";
import Link from "next/link";


export default function MovieSeries() {

	interface Series {
		id: number,
		name: string,
		time: string,
		image: StaticImageData,
	}

	const movies: Array<Series> = [
		{
			id: 1,
			name: '1 серия',
			time: '43 минуты',
			image: movie1
		},
		{
			id: 2,
			name: ' 2 серия',
			time: '41 минуту',
			image: movie2
		},
		{
			id: 3,
			name: '3 серия',
			time: '38 минут',
			image: movie3
		},
		{
			id: 4,
			name: '4 серия',
			time: '43 минуты',
			image: movie4
		},

	]

	return (
		<div className={style.new}>
			<h2>Сезоны</h2>
			<Swiper className={style.newSwiper}
					spaceBetween={20}
					slidesPerView={3.1}
			>
				{movies.map((item) => <SwiperSlide
					className={style.newSwiperSlide}
					key={item.id}>
					<Link href={`/movie/${item.id}`}>
						<div className={style.newSwiperImage}><Image src={item.image} alt={item.name}/></div>
						<div>{item.name}</div>
						<div className={style.newSwiperTime}>{item.time}</div>
					</Link>
				</SwiperSlide>)}
			</Swiper>
		</div>
	)
}