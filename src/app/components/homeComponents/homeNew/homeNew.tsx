"use client"

import style from './homeNew.module.scss'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import movie1 from '@/app/assets/img/movie1.png'
import movie2 from '@/app/assets/img/movie2.png'
import movie3 from '@/app/assets/img/movie3.png'
import movie4 from '@/app/assets/img/movie4.png'
import Image, {StaticImageData} from "next/image";
import Link from "next/link";


export default function HomeNew() {

	interface Movies {
		id: number,
		name: string,
		rating: number,
		image: StaticImageData,
	}

	const movies: Array<Movies> = [
		{
			id: 1,
			name: 'Синий жук',
			rating: 10,
			image: movie1
		},
		{
			id: 2,
			name: 'Домашняя игра',
			rating: 6.9,
			image: movie2
		},
		{
			id: 3,
			name: 'Салют 7',
			rating: 5.8,
			image: movie3
		},
		{
			id: 4,
			name: 'Поймай меня, если сможешь',
			rating: 7.0,
			image: movie4
		},
		{
			id: 5,
			name: 'Поймай меня, если сможешь',
			rating: 7.0,
			image: movie4
		},
		{
			id: 6,
			name: 'Поймай меня, если сможешь',
			rating: 7.0,
			image: movie4
		},
		{
			id: 7,
			name: 'Поймай меня, если сможешь',
			rating: 7.0,
			image: movie4
		},
		{
			id: 8,
			name: 'Поймай меня, если сможешь',
			rating: 7.0,
			image: movie4
		},
		{
			id: 9,
			name: 'Поймай меня, если сможешь',
			rating: 7.0,
			image: movie4
		},
	]

	return (
		<div className={style.new}>
			<h2>Новинки</h2>
			<Swiper className={style.newSwiper}
					spaceBetween={44}
					slidesPerView={3.9}
			>
				{movies.map((item) => <SwiperSlide
					className={style.newSwiperSlide}
					key={item.id}>
					<Link href={`/movie/${item.id}`}>
						<div className={style.newSwiperRaiting}>{item.rating}</div>
						<div className={style.newSwiperImage}><Image src={item.image} alt={item.name}/></div>
						<div>{item.name}</div>
					</Link>
				</SwiperSlide>)}
			</Swiper>
		</div>
	)
}