import React, { FunctionComponent } from 'react'
import { SiReact, SiNextdotjs, SiTailwindcss, SiPrisma, SiMysql, SiGithub, SiTypescript, SiPython } from 'react-icons/Si'
import SimpleIconsTrpc from '../icons/SimpleIconsTrpc'

const MySkills: FunctionComponent = () => {
  const reactLink: string = 'https://reactjs.org/'
  const nextLink: string = 'https://nextjs.org/'
  const tailwindLink: string = 'https://tailwindcss.com/'
  const trpcLink: string = 'https://trpc.io/'
  const prismaLink: string = 'https://www.prisma.io/'
  const mysqlLink: string = 'https://www.mysql.com/'
  const githubLink: string = 'https://github.com/samp-reston'
  const typescriptLink: string = 'https://www.typescriptlang.org/'
  const pythonLink: string = 'https://www.python.org/'

  return (
    <div id="my-skills" className='bg-white 2xl:px-64 xl:px-64 lg:px-32 md:px-16 px-8 min-w-full transition-all ease-linear duration-300 py-32 gap-24 items-center flex flex-col'>
      <section className='flex flex-col items-center gap-6'>
        <h4 className='text-black-90 md:text-h4 text-h4-mobile'>The Tools I Use</h4>
        <ul className='flex flex-wrap gap-6 justify-center md:text-p text-p-mobile text-black-90'>
          <li><a className='flex flex-row gap-6 items-center hover:text-secondary transition-all duration-200' href={reactLink} target='_blank'><SiReact/>React</a></li>
          <li><a className='flex flex-row gap-6 items-center hover:text-secondary transition-all duration-200' href={nextLink} target='_blank'><SiNextdotjs/>NextJS</a></li>
          <li><a className='flex flex-row gap-6 items-center hover:text-secondary transition-all duration-200' href={tailwindLink} target='_blank'><SiTailwindcss/>TailwindCSS</a></li>
          <li><a className='flex flex-row gap-6 items-center hover:text-secondary transition-all duration-200' href={trpcLink} target='_blank'><SimpleIconsTrpc />tRPC</a></li>
          <li><a className='flex flex-row gap-6 items-center hover:text-secondary transition-all duration-200' href={prismaLink} target='_blank'><SiPrisma/>Prisma</a></li>
          <li><a className='flex flex-row gap-6 items-center hover:text-secondary transition-all duration-200' href={mysqlLink} target='_blank'><SiMysql/>MySQL</a></li>
          <li><a className='flex flex-row gap-6 items-center hover:text-secondary transition-all duration-200' href={githubLink} target='_blank'><SiGithub/>GitHub</a></li>
        </ul>
      </section>
      <section  className='flex flex-col items-center gap-6'>
        <h4 className='text-black-90 md:text-h4 text-h4-mobile'>The Languages I Speak</h4>
        <ul className='flex flex-wrap gap-6 justify-center md:text-p text-p-mobile text-black-90'>
          <li><a className='flex flex-row gap-6 items-center hover:text-secondary transition-all duration-200' href={typescriptLink} target='_blank'><SiTypescript/>TypeScript</a></li>
          <li><a className='flex flex-row gap-6 items-center hover:text-secondary transition-all duration-200' href={pythonLink} target='_blank'><SiPython/>Python</a></li>
        </ul>
      </section>
    </div>
  )
}

export default MySkills