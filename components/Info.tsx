import React, { FunctionComponent } from 'react'
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/Si'

const Info: FunctionComponent = () => {
  const email: string = 'samp.reston@outlook.com'
  const githubLink: string = 'https://github.com/samp-reston'
  const linkedinLink: string = 'https://www.linkedin.com/in/samp-reston/'
  const twitterLink: string = 'https://twitter.com/samp_reston'

  return (
    <footer className='flex flex-col gap-8 pt-8 md:pt-0 md:pl-8 grow md:w-min'>
      <p className='text-black-90 md:text-p text-p-mobile'>Designed and Built by Samuel Preston</p>
      <p className='text-black-90 md:text-p text-p-mobile hover:text-secondary transition-all duration-200'><a href={`emailto:${email}`}>{email}</a></p>
      <ul className='flex flex-row gap-6 md:text-socials text-socials-mobile text-black-90 grow'>
        <li className='hover:text-secondary overflow-hidden transition-all duration-200'><a href={githubLink}><SiGithub /></a></li>
        <li className='hover:text-secondary overflow-hidden transition-all duration-200'><a href={linkedinLink}><SiLinkedin /></a></li>
        <li className='hover:text-secondary overflow-hidden transition-all duration-200'><a href={twitterLink}><SiTwitter /></a></li>
      </ul>
      <p className='text-black-90 md:text-p text-p-mobile'>&copy; Samuel Preston 2022</p>
    </footer>
  )
}

export default Info