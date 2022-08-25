import Image from 'next/image'
import Link from 'next/link'
import React, { FunctionComponent } from 'react'

import logo from '../assets/logo.png'

const Header: FunctionComponent = () => {
  return (
    <header className='2xl:px-64 xl:px-64 lg:px-32 md:px-16 px-8 min-w-full transition-all ease-linear duration-300 '>
      <nav className='flex flex-row w-full'>
        <ul className='flex flex-row w-full items-center h-24 2xl:gap-16 xl:gap-14 lg:gap-16 sm:gap-8 sm:justify-start justify-center'>
          <li className='flex hover:cursor-pointer'>
            <Link href='/#'><Image width={80} height={80} src={logo.src} alt="Logo" layout='fixed'/></Link>
          </li>
          <li className='flex sm:w-auto w-0 overflow-hidden font-medium text-nav text-black-90 hover:text-secondary transition-all duration-200'><Link href='/#my-skills'>My Skills</Link></li>
          <li className='flex sm:w-auto w-0 overflow-hidden font-medium text-nav text-black-90 hover:text-secondary transition-all duration-200'><Link href='/#recent-work'>Recent Work</Link></li>
          <li className='flex sm:w-auto w-0 overflow-hidden font-medium text-nav text-black-90 hover:text-secondary transition-all duration-200'><Link href='/#about-me'>About Me</Link></li>
          <li className='flex sm:w-auto w-0 overflow-hidden font-medium text-nav text-black-90 hover:text-secondary transition-all duration-200'><Link href='/#contact'>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
