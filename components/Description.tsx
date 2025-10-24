import CustomButton from "./CustomButton";
import FadeLeft from "./FadeLeft";
import FadeRight from "./FadeRight";

export default function Description() {
	return (
		<section id='description' className='mx-auto max-w-6xl px-6 py-12'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-start'>
				<FadeRight>
					<h3 className='text-2xl font-bold'>Description</h3>
					<p className='mt-4 text-muted'>A quick overview of how our tournaments and systems work.</p>

					<ul className='mt-6 list-disc list-inside space-y-2 text-muted'>
						<li>Tournament points system</li>
						<li>Brackets</li>
						<li>Weekly tournaments</li>
						<li>Grand season finale</li>
					</ul>

					<CustomButton href='/format' text='Tournamet Formatting and rules' />
				</FadeRight>

				<FadeLeft className='flex items-center justify-center'>
					<div className='w-full h-48 md:h-64 bg-(--color-secondary-bg) rounded-md flex items-center justify-center'>
						<div className='text-muted'>Infographic: How tournaments work (placeholder)</div>
					</div>
				</FadeLeft>
			</div>
		</section>
	);
}
