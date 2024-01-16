import SearchIcon from "@/app/components/icons/searchIcon";
import HomeIcon from "@/app/components/icons/homeIcon";
import MovieIcon from "@/app/components/icons/movieIcon";
import TvIcon from "@/app/components/icons/tvIcon";
import FavoriteIcon from "@/app/components/icons/favoriteIcon";
import PersonIcon from "@/app/components/icons/personIcon";
import style from "./sidebar.module.scss"
import Link from "next/link";
import LogoIcon from "@/app/components/icons/logoIcon";
import ArrowIcon from "@/app/components/icons/arrowIcon";

export default function Sidebar() {
	return (
		<nav className={style.sidebar}>
			<Link className={style.sidebarLogo} href="/"><LogoIcon/></Link>
			<Link className={style.sidebarLink} href="/"><SearchIcon/></Link>
			<Link className={style.sidebarLink} href="/"><HomeIcon/></Link>
			<Link className={style.sidebarLink} href="/"><MovieIcon/></Link>
			<Link className={style.sidebarLink} href="/"><TvIcon/></Link>
			<Link className={style.sidebarLink} href="/"><FavoriteIcon/></Link>
			<Link className={style.sidebarLink} href="/"><PersonIcon/></Link>
			<div className={style.sidebarTop}>
				<ArrowIcon/>
			</div>
		</nav>
	)
}