import Link from "next/link";
import HomeBanner from "@/app/components/homeBanner/homeBanner";

export default function Home() {
	return (
		<main>
			<HomeBanner/>
			<div>
				<div><Link href="/movie/12">Movie</Link></div>
			</div>
		</main>
	)
}
