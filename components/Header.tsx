import Image from 'next/image'
import Link from 'next/link'
import React, { FunctionComponent } from 'react'

import logo from '../assets/logo.png'

const Header: FunctionComponent = () => {
  return (
    <header className='min-w-full px-body transition-all duration-300 ease-linear '>
      <nav className='flex w-full flex-row'>
        <ul className='flex h-24 w-full flex-row items-center justify-center sm:justify-start sm:gap-header'>
          <li className='flex hover:cursor-pointer'>
            <Link href='/#'><a><Image width={80} height={80} src={logo.src} alt="Logo" layout='fixed'/></a></Link>
          </li>
          <li className='flex w-0 overflow-hidden text-nav-mobile font-medium text-black-90 transition-all duration-200 hover:text-secondary sm:w-auto md:text-nav'><Link href='/#my-skills'>My Skills</Link></li>
          <li className='flex w-0 overflow-hidden text-nav-mobile font-medium text-black-90 transition-all duration-200 hover:text-secondary sm:w-auto md:text-nav'><Link href='/#recent-work'>Recent Work</Link></li>
          <li className='flex w-0 overflow-hidden text-nav-mobile font-medium text-black-90 transition-all duration-200 hover:text-secondary sm:w-auto md:text-nav'><Link href='/#about-me'>About Me</Link></li>
          <li className='flex w-0 overflow-hidden text-nav-mobile font-medium text-black-90 transition-all duration-200 hover:text-secondary sm:w-auto md:text-nav'><Link href='/#contact'>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
