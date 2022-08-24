import Image from 'next/image'
import React, { FunctionComponent } from 'react'

import logo from '../assets/logo.png'

const Header: FunctionComponent = () => {
  return (
    <header className='2xl:px-64 xl:px-64 lg:px-32 md:px-16 px-8 pb-16 min-w-full transition-all ease-linear duration-300 '>
      <nav className='flex flex-row w-full'>
        <ul className='flex flex-row w-full items-center h-24 2xl:gap-16 xl:gap-14 lg:gap-16 sm:gap-8 sm:justify-start justify-center'>
          <li className='flex'>
            <a href='/#'><img className='w-20 h-20' src={logo.src} alt="Logo"/></a>
          </li>
          <li className='flex sm:w-auto w-0 overflow-hidden font-medium text-nav text-black-90 hover:text-secondary transition-all duration-200'><a href='/#my-skills'>My Skills</a></li>
          <li className='flex sm:w-auto w-0 overflow-hidden font-medium text-nav text-black-90 hover:text-secondary transition-all duration-200'><a href='/#recent-work'>Recent Work</a></li>
          <li className='flex sm:w-auto w-0 overflow-hidden font-medium text-nav text-black-90 hover:text-secondary transition-all duration-200'><a href='/#about-me'>About Me</a></li>
          <li className='flex sm:w-auto w-0 overflow-hidden font-medium text-nav text-black-90 hover:text-secondary transition-all duration-200'><a href='/#contact'>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header