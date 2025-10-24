function CustomButton({ href, text }: { href: string; text: string }) {
	return (
		<div className='mt-8 flex gap-3'>
			<a href={href} className='px-6 py-3 rounded-md font-light text-lg text-white tracking-wide' style={{ backgroundColor: "var(--color-accent-red)" }}>
				{text}
			</a>
		</div>
	);
}

export default CustomButton;
