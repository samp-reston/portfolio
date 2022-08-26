import React, { FunctionComponent } from 'react'
// import { SiReact, SiNextdotjs, SiTailwindcss, SiPrisma, SiMysql, SiGithub, SiTypescript, SiPython } from 'react-icons/Si'
import { SiReact } from '@react-icons/all-files/si/SiReact'
import { SiNextDotJs } from '@react-icons/all-files/si/SiNextDotJs'
import { SiTailwindcss } from '@react-icons/all-files/si/SiTailwindcss'
import { SiMysql } from '@react-icons/all-files/si/SiMysql'
import { SiGithub } from '@react-icons/all-files/si/SiGithub'
import { SiTypescript } from '@react-icons/all-files/si/SiTypescript'
import { SiPython } from '@react-icons/all-files/si/SiPython'
import SimpleIconsTrpc from '../icons/SimpleIconsTrpc'
import SimpleIconsPrisma from '../icons/SimpleIconsPrisma'

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
    <div id="my-skills" className='flex min-w-full flex-col items-center gap-24 bg-white px-body py-32 text-center transition-all duration-300 ease-linear'>
      <section className='flex flex-col items-center gap-6'>
        <h4 className='text-h4-mobile text-black-90 md:text-h4'>The Tools I Use</h4>
        <ul className='flex flex-wrap justify-center gap-6 text-p-mobile text-black-90 md:text-p'>
          <li><a className='flex flex-row items-center gap-6 transition-all duration-200 hover:text-secondary' href={reactLink} target='_blank' rel="noreferrer"><SiReact/>React</a></li>
          <li><a className='flex flex-row items-center gap-6 transition-all duration-200 hover:text-secondary' href={nextLink} target='_blank' rel="noreferrer"><SiNextDotJs/>NextJS</a></li>
          <li><a className='flex flex-row items-center gap-6 transition-all duration-200 hover:text-secondary' href={tailwindLink} target='_blank' rel="noreferrer"><SiTailwindcss/>TailwindCSS</a></li>
          <li><a className='flex flex-row items-center gap-6 transition-all duration-200 hover:text-secondary' href={trpcLink} target='_blank' rel="noreferrer"><SimpleIconsTrpc />tRPC</a></li>
          <li><a className='flex flex-row items-center gap-6 transition-all duration-200 hover:text-secondary' href={prismaLink} target='_blank' rel="noreferrer"><SimpleIconsPrisma/>Prisma</a></li>
          <li><a className='flex flex-row items-center gap-6 transition-all duration-200 hover:text-secondary' href={mysqlLink} target='_blank' rel="noreferrer"><SiMysql/>MySQL</a></li>
          <li><a className='flex flex-row items-center gap-6 transition-all duration-200 hover:text-secondary' href={githubLink} target='_blank' rel="noreferrer"><SiGithub/>GitHub</a></li>
        </ul>
      </section>
      <section className='flex flex-col items-center gap-6'>
        <h4 className='text-h4-mobile text-black-90 md:text-h4'>The Languages I Speak</h4>
        <ul className='flex flex-wrap justify-center gap-6 text-p-mobile text-black-90 md:text-p'>
          <li><a className='flex flex-row items-center gap-6 transition-all duration-200 hover:text-secondary' href={typescriptLink} target='_blank' rel="noreferrer"><SiTypescript/>TypeScript</a></li>
          <li><a className='flex flex-row items-center gap-6 transition-all duration-200 hover:text-secondary' href={pythonLink} target='_blank' rel="noreferrer"><SiPython/>Python</a></li>
        </ul>
      </section>
    </div>
  )
}

export default MySkills
