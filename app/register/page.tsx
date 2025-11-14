import CustomButton from "@/components/CustomButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export const metadata = {
	title: "Register - Gulf Esports League",
};

const tourneys = [
	{
		name: "Valorant 2v2",
		description: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.",
		image: "/images/valorant-cover.jpg",
		href: "/home",
	},
	{
		name: "Valorant 5v5",
		description: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.",
		image: "/images/standard-league.png",
		href: "/home",
	},
	{
		name: "League Of Legends",
		description: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.",
		image: "/images/league-of-legends-cover.jpg",
		href: "/home",
	},
];

export default function RegisterPage() {
	return (
		<main className='min-h-screen text-white relative overflow-hidden'>
			{/* Background video */}
			<video className='absolute inset-0 w-full h-full object-cover' src='/videos/bg-video.mp4' autoPlay muted loop playsInline aria-hidden='true' />

			{/* optional gradient overlay for readability */}
			<div className='absolute inset-0 hero-gradient' />
			<Navbar />

			<div className='relative z-10 mx-auto max-w-6xl px-6 py-16'>
				<h1 className='text-3xl text-center md:text-4xl font-bold'>Register for the tournament</h1>
				<p className='text-center text-lg mb-8 leading-relaxed'>Sign up now and secure your spot in our upcoming Esports events.</p>
			</div>
			<div className='max-w-4xl mx-auto space-y-8'>
				{tourneys.map((tourney, index) => {
					return (
						<div key={index} className={`flex justify-between relative w-full bg-(--color-secondary-bg) rounded-3xl p-9 gap-8 ${index % 2 == 0 ? "flex-row" : "flex-row-reverse"}`}>
							<div className='flex flex-col'>
								<h3 className='text-3xl tracking-wide mb-4'>{tourney.name}</h3>
								<p className='text-gray-400 text-lg'>{tourney.description}</p>
								<CustomButton href={tourney.href} text='Register Now' />
							</div>
							<Image className='w-72 rounded-xl' src={tourney.image} width={216} height={216} alt={`image for ${tourney.name} tournament`} />
						</div>
					);
				})}
			</div>

			<Footer />
		</main>
	);
}
