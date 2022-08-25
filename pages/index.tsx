import type { NextPage } from 'next'
import Head from 'next/head'
import AboutMe from '../components/AboutMe'
import Hero from '../components/Hero'
import MySkills from '../components/MySkills'
import RecentWork from '../components/RecentWork'
import projects from '../data/data.json'

const Home: NextPage = () => {
  return (
    <div id="body" className='flex flex-col items-start gap-28'>
      <Head>
        <title>Sam Preston | Web Developer</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Hero />
      <MySkills />
      <RecentWork projects={projects}/>
      <AboutMe />
    </div>
  )
}

export default Home
