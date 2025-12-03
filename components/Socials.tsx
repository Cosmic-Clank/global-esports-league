import { BsInstagram, BsTwitch } from "react-icons/bs";
import FadeUp from "./FadeUp";
import { RiDiscordLine } from "react-icons/ri";
import { FiTwitter, FiYoutube } from "react-icons/fi";
import { FaX, FaXTwitter } from "react-icons/fa6";

export default function Socials() {
	return (
		<section id='socials' className='mx-auto max-w-6xl px-6 py-12'>
			<FadeUp stagger className='flex flex-row items-center justify-center gap-12'>
				<div className='hover:-translate-y-1.5 transition-transform duration-200'>
					<a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
						<BsInstagram size={24} className='hover:text-[#dd2a7b] text-gray-500 transition-colors duration-200' />
					</a>
				</div>
				<div className='hover:-translate-y-1.5 transition-transform duration-200'>
					<a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
						<RiDiscordLine size={30} className='hover:text-[#738adb] text-gray-500 transition-colors duration-200' />
					</a>
				</div>
				<div className='hover:-translate-y-1.5 transition-transform duration-200'>
					<a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
						<FaXTwitter size={24} className='hover:text-black text-gray-500 transition-colors duration-200' />
					</a>
				</div>
				<div className='hover:-translate-y-1.5 transition-transform duration-200'>
					<a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
						<BsTwitch size={24} className='hover:text-purple-700 text-gray-500 transition-colors duration-200' />
					</a>
				</div>
				<div className='hover:-translate-y-1.5 transition-transform duration-200'>
					<a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
						<FiYoutube size={26} className='hover:text-[#ed0000] text-gray-500 transition-colors duration-200' />
					</a>
				</div>
			</FadeUp>
		</section>
	);
}
