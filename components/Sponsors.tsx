export default function Sponsors() {
	const logos = new Array(8).fill(0);

	// Duration in seconds for the full marquee pass (tweak for faster/slower)
	const duration = 28;

	return (
		<section id='sponsors' className='w-full max-w-6xl mx-auto px-6 py-12'>
			<h4 className='text-lg font-bold mb-4 text-center'>Our Partners</h4>

			{/* full-width track (not constrained to max-w) */}
			<div className='marquee-track mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-200px),transparent_100%)]'>
				{/* the inner marquee has duplicated content so the animation loops seamlessly */}
				<div
					className={`marquee marquee-anim`}
					style={{
						// two copies => translateX(-50%) covers one copy width
						animationDuration: `${duration}s`,
					}}
					aria-hidden={false}>
					{[...logos, ...logos].map((_, i) => (
						<div key={i} className='w-40 h-20 bg-(--color-secondary-bg) rounded flex items-center justify-center' style={{ flex: "0 0 auto" }}>
							<div className='text-muted'>Sponsor {((i % logos.length) + 1).toString()}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
