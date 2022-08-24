import Image from 'next/image'
import React from 'react'

import logo from '../assets/logo.png'

const Header = () => {
  return (
    <header className='w-full'>
      <nav className='flex flex-row w-full'>
        <ul className='flex flex-row w-full items-center h-24 2xl:gap-16 xl:gap-14 lg:gap-16 gap-2 sm:justify-start justify-center'>
          <li className='flex'>
            <img className='w-20 h-20' src={logo.src} alt="Logo"/>
          </li>
          <li className='flex sm:w-auto w-0 overflow-hidden font-medium text-nav text-text'>My Skills</li>
          <li className='flex sm:w-auto w-0 overflow-hidden font-medium text-nav text-text'>Recent Work</li>
          <li className='flex sm:w-auto w-0 overflow-hidden font-medium text-nav text-text'>About Me</li>
          <li className='flex sm:w-auto w-0 overflow-hidden font-medium text-nav text-text'>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header