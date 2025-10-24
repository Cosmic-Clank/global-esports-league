import FadeUp from "./FadeUp";
import Image from "next/image";

export default function GamingCups() {
	const games = [
		{ name: "League of Legends", tag: "LoL", img: "/images/league-of-legends-cover.jpg" },
		{ name: "Valorant", tag: "VALO", img: "/images/valorant-cover.jpg" },
		{ name: "TBD", tag: "TBD", img: "/images/placeholder.png" },
	];

	return (
		<section id='cups' className='mx-auto max-w-6xl px-6 py-12'>
			<h3 className='text-xl font-bold mb-6'>Gaming Cups</h3>
			<FadeUp stagger className='grid grid-cols-1 md:grid-cols-3 gap-6'>
				{games.map((g) => (
					<div key={g.tag} className='bg-(--color-secondary-bg) rounded-lg p-6 flex flex-col items-center'>
						<div className='w-full h-40 rounded-md flex items-center justify-center mb-4 overflow-hidden'>
							{/* image placeholder from public/images/games */}
							<Image src={g.img} alt={`${g.name} cover`} width={520} height={240} className='object-cover w-full h-full' />
						</div>
						<h4 className='font-semibold text-lg'>{g.name}</h4>
						<p className='text-muted text-sm mt-2'>Short description about the cup.</p>
						<div className='mt-4'>
							<a href='/register' className='px-4 py-2 rounded-md text-white' style={{ backgroundColor: "var(--color-accent-red)" }}>
								Join
							</a>
						</div>
					</div>
				))}
			</FadeUp>
		</section>
	);
}
