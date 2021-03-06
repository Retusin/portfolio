import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectItem = ({ title, backgroundImg, projectUrl }) => {
	return (
		<div className='relative flex items-center justify-center h-auto w-full shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-violet-200 to-violet-400'>
			<Image
				className='rounded-xl group-hover:opacity-10'
				src={backgroundImg}
				alt='/'
			/>
			<div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
				<h3 className='text-3xl text-center'>{title}</h3>
				<p className='pb-4 pt-4 text-center'>ReactJS</p>
				<Link href={projectUrl}>
					<p className='text-center py-3 rounded-lg bg-violet-600 font-bold text-lg cursor-pointer'>
						More Info
					</p>
				</Link>
			</div>
		</div>
	)
}

export default ProjectItem
