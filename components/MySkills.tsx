import React, { FunctionComponent } from 'react'
import { SiReact, SiNextdotjs, SiTailwindcss, SiPrisma, SiMysql, SiGithub, SiTypescript, SiPython } from 'react-icons/Si'

import SimpleIconsTrpc from './SimpleIconsTrpc'

const MySkills: FunctionComponent = () => {

  return (
    <div className='bg-white 2xl:px-64 xl:px-64 lg:px-32 md:px-16 px-8 min-w-full transition-all ease-linear duration-300 py-32 gap-24 items-center flex flex-col'>
      <section className='flex flex-col items-center gap-6'>
        <h4 className='text-black-90 md:text-h4 text-h4-mobile'>The Tools I Use</h4>
        <ul className='flex flex-wrap gap-6 justify-center md:text-p text-p-mobile text-black-90'>
          <li className='flex flex-row gap-6 items-center'><SiReact/>React</li>
          <li className='flex flex-row gap-6 items-center'><SiNextdotjs/>NextJS</li>
          <li className='flex flex-row gap-6 items-center'><SiTailwindcss/>TailwindCSS</li>
          <li className='flex flex-row gap-6 items-center'><SimpleIconsTrpc />tRPC</li>
          <li className='flex flex-row gap-6 items-center'><SiPrisma/>Prisma</li>
          <li className='flex flex-row gap-6 items-center'><SiMysql/>MySQL</li>
          <li className='flex flex-row gap-6 items-center'><SiGithub/>GitHub</li>
        </ul>
      </section>
      <section  className='flex flex-col items-center gap-6'>
        <h4 className='text-black-90 md:text-h4 text-h4-mobile'>The Languages I Speak</h4>
        <ul className='flex flex-wrap gap-6 justify-center md:text-p text-p-mobile text-black-90'>
          <li className='flex flex-row gap-6 items-center'><SiTypescript/>TypeScript</li>
          <li className='flex flex-row gap-6 items-center'><SiPython/>Python</li>
        </ul>
      </section>
    </div>
  )
}

export default MySkills