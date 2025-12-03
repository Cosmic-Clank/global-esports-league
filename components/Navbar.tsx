"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FadeRight from "./FadeRight";
import FadeLeft from "./FadeLeft";

export default function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<header className='w-full py-4 bg-transparent relative'>
			<div className='mx-auto max-w-7xl px-6 flex items-center justify-between text-lg tracking-wide'>
				<FadeRight>
					<Link href='/' aria-label='Gulf Esports League home' className='flex items-center gap-3'>
						<div className='w-16 h-16 relative'>
							<Image src='/images/logos/4.png' alt='Gulf Esports League logo' fill sizes='48px' className='object-contain' />
						</div>
						<span className='text-white font-semibold text-xl'>Gulf Esports League</span>
					</Link>
				</FadeRight>

				{/* Desktop nav */}
				<FadeLeft>
					<nav className='hidden md:flex items-center gap-6'>
						<Link href='/' className='text-base text-muted hover:text-white'>
							Home
						</Link>
						<Link href='/about.html' className='text-base text-muted hover:text-white'>
							About
						</Link>
						<Link href='/#cups' className='text-base text-muted hover:text-white'>
							Leagues
						</Link>
						<Link href='/#sponsors' className='text-base text-muted hover:text-white'>
							Sponsors
						</Link>
						<Link href='/registrations.html' className='ml-4 px-4 py-2 rounded-md text-white' style={{ backgroundColor: "var(--color-accent-red)" }}>
							Register
						</Link>
					</nav>
				</FadeLeft>

				{/* Mobile hamburger */}
				<div className='md:hidden'>
					<button aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((s) => !s)} className='p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2'>
						{open ? (
							<svg className='w-6 h-6 text-white' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path d='M6 18L18 6M6 6l12 12' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
							</svg>
						) : (
							<svg className='w-6 h-6 text-white' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path d='M3 6h18M3 12h18M3 18h18' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
							</svg>
						)}
					</button>

					{/* Mobile menu panel */}
					{open && (
						<div className='absolute right-4 top-[72px] w-64 bg-(--color-secondary-bg) rounded-lg shadow-lg p-4 z-50'>
							<nav className='flex flex-col gap-3'>
								<Link href='/' className='text-base text-white' onClick={() => setOpen(false)}>
									Home
								</Link>
								<Link href='/meet-the-team' className='text-base text-white' onClick={() => setOpen(false)}>
									About
								</Link>
								<Link href='#cups' className='text-base text-white' onClick={() => setOpen(false)}>
									Cups
								</Link>
								<Link href='#sponsors' className='text-base text-white' onClick={() => setOpen(false)}>
									Sponsors
								</Link>
								<Link href='/register' className='mt-2 px-4 py-2 rounded-md text-white text-center' style={{ backgroundColor: "var(--color-accent-red)" }} onClick={() => setOpen(false)}>
									Register
								</Link>
							</nav>
						</div>
					)}
				</div>
			</div>
		</header>
	);
}
