import CustomButton from "./CustomButton";
import FadeLeft from "./FadeLeft";
import FadeRight from "./FadeRight";

export default function About() {
	return (
		<section id='about' className='mx-auto max-w-6xl px-6 py-16'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
				<FadeRight className='bg-(--color-secondary-bg) rounded-lg p-6 flex items-center justify-center'>
					<div className='w-64 h-64 bg-linear-to-br from-[#1C1F3A] to-[#0F1628] rounded-md flex items-center justify-center'>
						<span className='text-white'>Founder Photos</span>
					</div>
				</FadeRight>

				<FadeLeft>
					<h2 className='text-2xl font-bold'>About Gulf Esports League</h2>
					<p className='mt-4 text-muted'>Gulf Esports League (G.E.L) is a premier esports tournament management company dedicated to elevating the gaming scene across the Gulf region. We specialize in organizing high-quality, competitive gaming events that bring together top-tier talent, grassroots players, and gaming enthusiasts in an electrifying atmosphere.</p>

					<ul className='mt-4 space-y-2 text-muted list-disc list-inside'>
						<li>Tournament points system</li>
						<li>Buckles and prize pools for winners</li>
						<li>Weekly tournaments across popular titles</li>
						<li>Grand season finale with top teams</li>
					</ul>

					<CustomButton href='/meet-the-team' text='Learn More' />
				</FadeLeft>
			</div>
		</section>
	);
}
