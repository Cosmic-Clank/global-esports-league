export default function Footer() {
	return (
		<footer className='mt-12' style={{ backgroundColor: "var(--color-dark-navy)" }}>
			<div className='mx-auto max-w-6xl px-6 py-8'>
				<div className='flex items-center justify-center'>
					<div className='text-muted'>© Gulf Esports League • 2025</div>
					{/* <div className='flex gap-4'>
						<a href='#' className='text-muted'>
							Terms
						</a>
						<a href='#' className='text-muted'>
							Privacy
						</a>
					</div> */}
				</div>
			</div>
		</footer>
	);
}
