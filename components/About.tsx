import CustomButton from "./CustomButton";
import FadeLeft from "./FadeLeft";
import FadeRight from "./FadeRight";
import Image from "next/image";

export default function About() {
	return (
		<section id='about' className='mx-auto max-w-6xl px-6 py-16'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
				<FadeRight className='bg-(--color-secondary-bg) rounded-lg p-6 flex items-center justify-center'>
					<div className='w-full h-full rounded-md overflow-hidden'>
						<Image src='/images/founders.jpeg' alt='GEL Founders' width={512} height={512} className='object-cover w-full h-full' />
					</div>
				</FadeRight>

				<FadeLeft>
					<h2 className='text-2xl font-bold'>Who</h2>
					<p className='mb-4 text-muted tracking-wide'>Gulf Esports League (GEL) is a passion project born from the shared love of gaming and esports between two dedicated founders. What began as an idea to bring players together has grown into a full-scale esports event management organization, delivering tournaments and gaming experiences from A to Z.</p>
					<h2 className='text-2xl font-bold'>What</h2>
					<p className='text-muted tracking-wide'>From concept to champion’s podium, GEL manages the entire esports tournament journey. We handle everything — from planning and organizing events, player registration, and bracket management, to live streaming, production, and brand partnerships.</p>

					<CustomButton href='/meet-the-team' text='Learn More' />
				</FadeLeft>
			</div>
		</section>
	);
}
