import React from 'react'

import ProjectItem from './ProjectItem'
import gameStoreImg from '../assets/gamestore.png'

const Project = () => {
	return (
		<div id='projects' className='w-full'>
			<div className='max-w-[1240px] mx-auto px-2 pt-20'>
				<p className='text-xl uppercase'>Projects</p>
				<h2 className='py-4'>What I&apos;ve Built</h2>
				<div className='grid md:grid-cols-2 gap-8'>
					<ProjectItem
						title='Game Store'
						backgroundImg={gameStoreImg}
						projectUrl='/store'
					/>
					<ProjectItem
						title='Game Store'
						backgroundImg={gameStoreImg}
						projectUrl='/store'
					/>
					<ProjectItem
						title='Game Store'
						backgroundImg={gameStoreImg}
						projectUrl='/store'
					/>
					<ProjectItem
						title='Game Store'
						backgroundImg={gameStoreImg}
						projectUrl='/store'
					/>
				</div>
			</div>
		</div>
	)
}

export default Project
