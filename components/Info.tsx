import React, { FunctionComponent } from 'react'
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/Si'

const Info: FunctionComponent = () => {
  const email: string = 'samp.reston@outlook.com'
  return (
    <footer className='flex flex-col gap-8 pt-8 md:pt-0 md:pl-8 grow md:w-min'>
      <p className='text-black-90 text-p'>Designed and Built by Samuel Preston</p>
      <p className='text-black-90 text-p'><a href={`emailto:${email}`}>{email}</a></p>
      <ul className='flex flex-row gap-6 text-socials text-black-90'>
        <li><SiGithub /></li>
        <li><SiLinkedin /></li>
        <li><SiTwitter /></li>
      </ul>
      <p className='text-black-90 text-p'>&copy; Samuel Preston 2022</p>
    </footer>
  )
}

export default Info