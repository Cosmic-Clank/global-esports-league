import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
	title: "Register - Gulf Esports League",
};

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

			<div className='relative z-10 max-w-4xl mx-auto w-full px-6 pb-16'>
				<div className='w-full h-[70vh] md:h-[80vh] rounded overflow-hidden shadow-lg bg-(--color-secondary-bg)'>
					<iframe src='https://docs.google.com/forms/d/e/1FAIpQLScp5BWCOWM0tfCDudUbhGZIsdZCfT7fSipAb7BhShCjYNdjUQ/viewform?embedded=true' className='w-full h-full border-none' title='GEL Registration Form'>
						Loading…
					</iframe>
				</div>
			</div>

			<Footer />
		</main>
	);
}
