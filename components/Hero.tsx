import CustomButton from "./CustomButton";
import { motion } from "motion/react";
import FadeUp from "./FadeUp";

export default function Hero() {
	return (
		<section className='w-full relative'>
			<div className='h-[60vh] md:h-[72vh] w-full relative overflow-hidden'>
				{/* Background video (from public/videos/bg-video.mp4) */}
				<video className='absolute inset-0 w-full h-full object-cover' src='/videos/bg-video.mp4' autoPlay muted loop playsInline aria-hidden='true' />

				{/* Gradient overlay */}
				<div className='absolute inset-0 hero-gradient' />

				<FadeUp stagger className='relative z-10 mx-auto max-w-6xl px-6 h-full flex flex-col items-center justify-center text-center'>
					<h1 className='text-5xl md:text-7xl font-extrabold uppercase leading-tight'>Gulf Esports League</h1>

					<p className='mt-6 text-xl md:text-2xl uppercase tracking-wide'>Join the battle. Compete for glory and huge prizes.</p>

					{/* CTAs */}
					<CustomButton href='#cups' text='Join A Cup' />
				</FadeUp>
			</div>
		</section>
	);
}
