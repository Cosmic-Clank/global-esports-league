import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import FadeRight from "@/components/FadeRight";
import FadeLeft from "@/components/FadeLeft";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
	title: "Meet The Team",
};

export default function MeetTheTeam() {
	const members = ["Founder 1", "Founder 2", "Team Member 1", "Team Member 2", "Team Member 3", "Team Member 4", "Team Member 5", "Team Member 6"];

	return (
		<main className='min-h-screen text-white'>
			<Navbar />

			<section className='mx-auto max-w-6xl px-6 py-12'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-start'>
					<FadeRight className='bg-(--color-secondary-bg) rounded-lg p-6 flex items-center justify-center'>
						<div className='w-full h-72 md:h-96 bg-[#0b0b0b] rounded-md flex items-center justify-center'>
							<div className='text-center'>
								<div className='text-muted'>GEL Founders</div>
								<div className='mt-2 font-semibold'>Founders Photo</div>
								<div className='text-sm text-muted mt-1'>(with GEL uniforms)</div>
							</div>
						</div>
					</FadeRight>

					<FadeLeft>
						<h1 className='text-3xl font-bold'>Meet the Team</h1>
						<p className='mt-4 text-muted'>Why start GEL, passion about esports, longing for community, and memorable experiences with gaming and esports — love, hate, unforgettable memories.</p>

						<ul className='mt-6 space-y-2 text-muted list-disc list-inside'>
							<li>Why start GEL</li>
							<li>Passion about esports</li>
							<li>Longing for community</li>
							<li>Experiences with gaming & esports</li>
						</ul>
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
