import CustomButton from "./CustomButton";
import FadeLeft from "./FadeLeft";
import FadeRight from "./FadeRight";
import Image from "next/image";

export default function Description() {
	return (
		<section id='description' className='mx-auto max-w-6xl px-6 py-12'>
			<div className='md:grid grid-cols-7 flex flex-col gap-8'>
				<FadeRight className='col-span-4'>
					<h3 className='text-2xl font-bold'>Tournament Format And Rules</h3>
					<h4 className='text-l font-semibold tracking-wide mt-4'>Tournaments Point System</h4>
					<p className='mt-2 text-muted tracking-wide text-sm'>Players who compete in our tournaments don't just play for the win — they also earn Tournament Points (TP) based on their placement. The higher you rank, the more points you earn.</p>
					<p className='mt-2 text-muted tracking-wide text-sm'>These points accumulate throughout the season and determine who qualifies for the GEL Major Tournament.</p>
					<p className='mt-2 text-muted tracking-wide text-sm'>(Players who compete in our tournaments don't just play for the win — they also earn Tournament Points (TP) based on their placement. These points accumulate throughout the season and determine who qualifies for the GEL Major Tournament.) if too long use this text.</p>
					<h4 className='text-l font-semibold tracking-wide mt-4'>Weekly Tournaments</h4>
					<p className='mt-2 text-muted tracking-wide text-sm'>At Gulf Esports League (GEL), competition never stops. We host weekly tournaments throughout each season, giving players constant opportunities to compete, earn points, and rise through the ranks.</p>
					<h4 className='text-l font-semibold tracking-wide mt-4'>Grand Finale</h4>
					<p className='mt-2 text-muted tracking-wide text-sm'>GEL Major Tournament — our flagship event where the region’s top players and teams battle for glory, prizes, and the ultimate title. Each game mode will have their own dedicated tournament.</p>

					<CustomButton href='/league' text='More Info' />
				</FadeRight>

				<FadeLeft className='flex items-center justify-center col-span-3'>
					<div className='w-full h-full rounded-md overflow-hidden'>
						<Image src='/images/infographic.png' alt='GEL Infographic' width={512} height={512} className='object-contain w-full h-full mx-auto' />
					</div>
				</FadeLeft>
			</div>
		</section>
	);
}
