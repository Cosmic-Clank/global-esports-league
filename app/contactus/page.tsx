import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import FadeRight from "@/components/FadeRight";
import FadeLeft from "@/components/FadeLeft";
import FadeUp from "@/components/FadeUp";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Meet The Team",
};

export default function ContactUs() {
	const members = ["Founder 1", "Founder 2", "Team Member 1", "Team Member 2", "Team Member 3", "Team Member 4", "Team Member 5", "Team Member 6"];

	return (
		<main className='min-h-screen text-white'>
			<Navbar />

			<section className='mx-auto max-w-6xl px-6 py-12'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-start'>
					<FadeRight className='bg-(--color-secondary-bg) rounded-lg p-6 flex items-center justify-center'>
						<div className='w-full h-72 md:h-96 bg-[#0b0b0b] rounded-md flex items-center justify-center'>
							<Image src='/images/founders-2.jpeg' alt='GEL Founders' width={512} height={512} className='object-cover w-full h-full' />
						</div>
					</FadeRight>

					<FadeLeft>
						<h1 className='text-3xl font-bold'>Meet the Founders</h1>
						<p className='mt-4 text-muted text-sm tracking-wide'>We started Gulf Esports League (GEL) out of pure passion — a love for gaming and the thrill of competition that's been with us since day one. As lifelong gamers, we always felt that the Gulf had incredible talent, but not enough spaces or opportunities to bring players together and showcase what this region can really do.</p>
						<p className='mt-4 text-muted text-sm tracking-wide'>We wanted to change that.</p>
						<p className='mt-4 text-muted text-sm tracking-wide'>GEL was born from our longing for a real gaming community — one that's competitive, supportive, and united by the same excitement we all feel when we play. We saw a gap: esports and gaming culture in the Gulf were growing fast, but the structure, visibility, and recognition weren't quite there yet. So we decided to build something that could help bridge that gap.</p>
						<p className='mt-4 text-muted text-sm tracking-wide'>Through GEL, we aim to create a true esports ecosystem — a place where players can compete weekly, grow their skills, earn recognition, and be part of something bigger than just the game. We want to raise awareness about the power and potential of gaming, and to prove that the Gulf is ready to stand shoulder-to-shoulder with the global esports scene.</p>
						<p className='mt-4 text-muted text-sm tracking-wide'>This isn't just an organization for us — it's a community we're proud to build, one tournament at a time.</p>
					</FadeLeft>
				</div>
			</section>

			<section className='mx-auto max-w-6xl px-6 py-8'>
				<h2 className='text-2xl font-bold mb-6'>Team & Future Employees</h2>
				<FadeUp stagger className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
					{members.map((m, idx) => (
						<div key={idx} className='bg-(--color-secondary-bg) rounded-lg p-4 flex flex-col items-center'>
							<div className='w-28 h-36 bg-[#0b0b0b] rounded-md flex items-center justify-center'>Photo</div>
							<div className='mt-3 text-center'>
								<div className='font-semibold'>{m}</div>
								<div className='text-sm text-muted'>Role</div>
							</div>
						</div>
					))}
				</FadeUp>
			</section>

			<section className='mx-auto max-w-6xl px-6 py-12'>
				<FadeUp className='w-full h-48 md:h-72 bg-(--color-secondary-bg) rounded-md flex items-center justify-center'>
					<div className='text-muted'>Group picture in office / venue</div>
				</FadeUp>
			</section>

			<section className='mx-auto max-w-6xl px-6 py-12'>
				<FadeUp>
					<h3 className='text-xl font-bold'>Contact Us</h3>
				</FadeUp>
				<FadeUp stagger className='mt-4 text-muted'>
					<div className='mb-2'>Phone: +971 50 000 0000</div>
					<div className='mb-2'>Email: info@gulfesportsleague.com</div>
					<div className='mb-2'>Location: Dubai, UAE</div>
				</FadeUp>
			</section>

			<Footer />
		</main>
	);
}
