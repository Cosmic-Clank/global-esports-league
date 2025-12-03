import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import FadeRight from "@/components/FadeRight";
import FadeLeft from "@/components/FadeLeft";
import FadeUp from "@/components/FadeUp";
import Image from "next/image";

export const metadata: Metadata = {
	title: "League Structure — Gulf Esports League",
};

export default function LeaguePage() {
	return (
		<main className='min-h-screen text-white'>
			<Navbar />

			<section className='mx-auto max-w-6xl px-6 py-12'>
				<h1 className='text-3xl md:text-4xl font-extrabold tracking-tight text-center'>League Structure: Standard & Variant Leagues</h1>

				<p className='mt-6 text-lg text-muted max-w-3xl mx-auto text-center'>At Gulf Esports League (GEL), we host two main types of competitions — the Standard League and the Variant Leagues — designed to give every type of gamer a place to compete, grow, and showcase their skills.</p>
			</section>

			<section className='mx-auto max-w-6xl px-6 py-8'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
					<FadeLeft>
						<h2 className='text-2xl font-bold'>Standard League</h2>
						<p className='mt-4 text-muted tracking-wide'>The Standard League features our core competitive titles and structured seasonal tournaments. Players compete across multiple events throughout the season, earning Tournament Points based on their performance. These points contribute to the overall rankings and determine who qualifies for the Major Tournament — the ultimate stage of the season.</p>

						<p className='mt-4 text-muted tracking-wide'>This league is built for consistency, skill development, and long-term competition — the foundation of GEL’s esports ecosystem.</p>
					</FadeLeft>

					<FadeRight className='flex items-center justify-center'>
						<div className='w-full max-w-md rounded-md overflow-hidden shadow-lg bg-(--color-secondary-bg)'>
							<Image src='/images/standard-league.png' alt='Standard League' width={800} height={500} className='object-cover w-full h-full' />
						</div>
					</FadeRight>
				</div>
			</section>

			<section className='mx-auto max-w-6xl px-6 py-8'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
					<FadeRight className='flex items-center justify-center'>
						<div className='w-full max-w-md rounded-md overflow-hidden shadow-lg bg-(--color-secondary-bg)'>
							<Image src='/images/variant-league.png' alt='Variant Leagues' width={800} height={500} className='object-cover w-full h-full' />
						</div>
					</FadeRight>

					<FadeLeft>
						<h2 className='text-2xl font-bold'>Variant Leagues</h2>
						<p className='mt-4 text-muted tracking-wide'>The Variant Leagues focus on special editions, themed events, and community-driven competitions. These leagues may include rotating game titles, experimental formats, or one-off collaborations designed to keep the scene fresh and exciting.</p>

						<p className='mt-4 text-muted tracking-wide'>Variant Leagues allow players to explore new experiences, showcase their versatility, and engage with the wider gaming community in a more casual but still competitive environment.</p>
					</FadeLeft>
				</div>
			</section>

			<section className='mx-auto max-w-6xl px-6 py-12'>
				<FadeUp>
					{/* <h3 className='text-xl font-bold'>Want to participate?</h3> */}
					<p className='mt-3 text-muted'>Check the registration page for upcoming seasons, formats, and how to earn Tournament Points. If you have a community idea for a Variant League, reach out — we love collabs that grow the scene.</p>
				</FadeUp>
			</section>

			<Footer />
		</main>
	);
}
