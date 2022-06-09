import React from 'react'
import { ImGithub, ImTelegram } from 'react-icons/im'
import { AnimatePresence, motion } from 'framer-motion'
import { AiFillGoogleCircle } from 'react-icons/ai'

const Main = () => {
	return (
		<AnimatePresence>
			<div className='w-full h-screen text-center'>
				<div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
					<div>
						<h1 className='text-md mb-6'>
							Hello <span className='text-md'>👋</span>, I&apos;m
							<span className='text-violet-400'> Denis</span>
						</h1>
						<p className='font-semibold text-lg mb-10'>
							A <span className='text-violet-400'>Front-End</span> Web Developer
						</p>
						<div className='flex items-center justify-between max-w-[250px] m-auto py-4'>
							<motion.div
								whileTap={{ scale: 0.75 }}
								className='rounded-full bg-white text-violet-500 shadow-lg shadow-gray-400 p-2 cursor-pointer'
							>
								<ImGithub size={30} />
							</motion.div>
							<motion.div
								whileTap={{ scale: 0.75 }}
								className='rounded-full bg-white text-violet-500 shadow-lg shadow-gray-400 p-2 cursor-pointer'
							>
								<AiFillGoogleCircle size={30} />
							</motion.div>
							<motion.div
								whileTap={{ scale: 0.75 }}
								className='rounded-full bg-white text-violet-500 shadow-lg shadow-gray-400 p-2 cursor-pointer'
							>
								<ImTelegram size={30} />
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</AnimatePresence>
	)
}

export default Main
