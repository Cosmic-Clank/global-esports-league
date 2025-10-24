import { Facebook, Instagram, Twitch, Twitter, Youtube } from "lucide-react";
import FadeUp from "./FadeUp";

export default function Socials() {
	return (
		<section id='socials' className='mx-auto max-w-6xl px-6 py-12'>
			<FadeUp stagger className='flex flex-row items-center justify-center gap-12'>
				<a href='https://www.instagram.com/'>
					<Instagram color='gray' />
				</a>
				<a href='https://www.instagram.com/'>
					<Facebook color='gray' />
				</a>
				<a href='https://www.instagram.com/'>
					<Twitter color='gray' />
				</a>
				<a href='https://www.instagram.com/'>
					<Twitch color='gray' />
				</a>
				<a href='https://www.instagram.com/'>
					<Youtube color='gray' />
				</a>
			</FadeUp>
		</section>
	);
}
