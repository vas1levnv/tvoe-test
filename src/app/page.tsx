import Link from "next/link";
import HomeBanner from "@/app/components/homeComponents/homeBanner/homeBanner";
import HomeNew from "@/app/components/homeComponents/homeNew/homeNew";

export default function Home() {
	return (
		<main>
			<HomeBanner/>
			<HomeNew/>
		</main>
	)
}
