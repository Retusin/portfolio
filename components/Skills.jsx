import React from 'react'
import {
	SiHtml5,
	SiCss3,
	SiTailwindcss,
	SiStyledcomponents,
	SiReact,
	SiGithub,
} from 'react-icons/si'

const Skills = () => {
	return (
		<div id='skills' className='w-full pt-20'>
			<div className='max-w-[1240px] mx-auto flex flex-col justify-center'>
				<p className='text-md font-semibold uppercase'>Skills</p>
				<h2 className='lg:mb-10'>What I Can Do</h2>
				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
					<div className='p-6 shadow-2xl rounded-xl'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiHtml5 size={44} />
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>HTML</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-2xl rounded-xl'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiCss3 size={44} />
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>CSS</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-2xl rounded-xl'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiTailwindcss size={44} />
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Tailwind</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-2xl rounded-xl'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiStyledcomponents size={44} />
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Styled-Components</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl rounded-xl'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiReact size={44} />
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>ReactJS</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl rounded-xl'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiGithub size={44} />
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>GitHub</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills
