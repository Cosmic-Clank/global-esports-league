import FadeUp from "./FadeUp";
import Image from "next/image";

export default function GamingCups() {
	const games = [
		{ name: "Standard League", tag: "LoL", img: "/images/standard-league.png" },
		{ name: "Variant League", tag: "VALO", img: "/images/variant-league.png" },
	];

	return (
		<section id='cups' className='mx-auto max-w-6xl px-6 py-12'>
			<h3 className='text-xl font-bold mb-6'>Tournament Leagues</h3>
			<FadeUp stagger className='flex flex-wrap gap-6 justify-center'>
				{games.map((g) => (
					<div key={g.tag} className='bg-(--color-secondary-bg) rounded-lg p-6 flex flex-col items-center'>
						<div className='w-full h-40 rounded-md flex items-center justify-center mb-4 overflow-hidden'>
							{/* image placeholder from public/images/games */}
							<Image src={g.img} alt={`${g.name} cover`} width={240} height={240} className='object-cover w-full h-full' />
						</div>
						<h4 className='font-semibold text-lg'>{g.name}</h4>
						{/* <p className='text-muted text-sm mt-2'>Short description about the cup.</p> */}
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
