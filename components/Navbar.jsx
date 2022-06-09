import Link from 'next/link'
import React, { useState } from 'react'
import { CgMenuGridO } from 'react-icons/cg'
import { CgCloseR } from 'react-icons/cg'
import { ImTelegram, ImGithub } from 'react-icons/im'
import { SiMaildotru } from 'react-icons/si'

const Navbar = () => {
	const [nav, setNav] = useState(false)

	const navClick = () => {
		setNav(!nav)
	}

	return (
		<div className='fixed w-full h-20 shadow-xl z-[100] rounded-b-3xl'>
			<div className='flex justify-between items-center w-full h-full px-4 2xl:px-16'>
				<span className='text-5xl italic font-semibold'>DB</span>
				<div>
					<ul className='hidden md:flex'>
						<Link href='/'>
							<li
								onClick={() => setNav(false)}
								className='ml-10 font-semibold  text-sm uppercase hover:border-b'
							>
								Home
							</li>
						</Link>
						<Link href='#skills'>
							<li
								onClick={() => setNav(false)}
								className='ml-10 font-semibold  text-sm uppercase hover:border-b'
							>
								Skills
							</li>
						</Link>
						<Link href='#projects'>
							<li
								onClick={() => setNav(false)}
								className='ml-10 font-semibold text-sm uppercase hover:border-b'
							>
								Projects
							</li>
						</Link>
					</ul>
					<div onClick={navClick} className='block md:hidden'>
						<CgMenuGridO size={30} />
					</div>
				</div>
			</div>
			<div
				className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70' : ''}
			>
				<div
					className={
						nav
							? 'fixed left-0 top-0 w-[65%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in-out duration-500'
							: 'fixed left-[-100%] top-0 w-[65%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in-out duration-500'
					}
				>
					<div>
						<div
							onClick={navClick}
							className='text-fuchsia-800 flex align-end justify-end cursor-pointer shadow-gray-400 mb-20'
						>
							<CgCloseR size={30} />
						</div>
					</div>
					<div className='py-4 flex flex-col'>
						<ul className='uppercase text-center'>
							<Link href='/'>
								<li className='py-4 text-sm text-black font-semibold'>Home</li>
							</Link>
							<Link href='/'>
								<li className='py-4 text-sm text-black font-semibold'>
									Skills
								</li>
							</Link>
							<Link href='/'>
								<li className='py-4 text-sm text-black font-semibold'>
									Projects
								</li>
							</Link>
						</ul>
						<div className='pt-40 flex gap-6 items-center justify-center shadow-gray-400'>
							<ImTelegram
								className='text-fuchsia-800 cursor-pointer'
								size={30}
							/>
							<SiMaildotru
								className='text-fuchsia-800 cursor-pointer'
								size={30}
							/>
							<ImGithub className='text-fuchsia-800 cursor-pointer' size={30} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
