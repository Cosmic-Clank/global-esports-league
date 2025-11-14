import { Facebook, Instagram, Twitch, Twitter, Youtube } from "lucide-react";
import FadeUp from "./FadeUp";

export default function Socials() {
	return (
		<section id='socials' className='mx-auto max-w-6xl px-6 py-12'>
			<FadeUp stagger className='flex flex-row items-center justify-center gap-12'>
				<div className='hover:-translate-y-1.5 transition-transform duration-200'>
					<a href='https://www.instagram.com/'>
						<Instagram className='hover:text-pink-700 text-gray-500 transition-colors duration-200' />
					</a>
				</div>
				<div className='hover:-translate-y-1.5 transition-transform duration-200'>
					<a href='https://www.instagram.com/'>
						<Facebook className='hover:text-blue-700 text-gray-500 transition-colors duration-200' />
					</a>
				</div>
				<div className='hover:-translate-y-1.5 transition-transform duration-200'>
					<a href='https://www.instagram.com/'>
						<Twitter className='hover:text-blue-400 text-gray-500 transition-colors duration-200' />
					</a>
				</div>
				<div className='hover:-translate-y-1.5 transition-transform duration-200'>
					<a href='https://www.instagram.com/'>
						<Twitch className='hover:text-purple-700 text-gray-500 transition-colors duration-200' />
					</a>
				</div>
				<div className='hover:-translate-y-1.5 transition-transform duration-200'>
					<a href='https://www.instagram.com/'>
						<Youtube className='hover:text-red-700 text-gray-500 transition-colors duration-200' />
					</a>
				</div>
			</FadeUp>
		</section>
	);
}
