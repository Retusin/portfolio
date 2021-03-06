import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Project from '../components/Project'
import Skills from '../components/Skills'
import Main from './../components/Main'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Denis | Frontend</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
			<Main />
			<Skills />
			<Project />
		</div>
	)
}
