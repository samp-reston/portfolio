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
      <p className='text-black-90 md:text-p text-p-mobile hover:text-primary transition-all duration-200'><a href={`mailto:${email}`}>{email}</a></p>
      <p className='text-black-90 md:text-p text-p-mobile hover:text-primary transition-all duration-200'><a href="tel:+447949420516">+44 794 9420 516</a></p>
      <ul className='flex flex-row gap-6 md:text-socials text-socials-mobile text-black-90 grow'>
        <li><a title="GitHub" className='hover:text-secondary overflow-hidden transition-all duration-200' href={githubLink}><SiGithub /></a></li>
        <li><a title="LinkedIn" className='hover:text-secondary overflow-hidden transition-all duration-200' href={linkedinLink}><SiLinkedin /></a></li>
        <li><a title="Twitter" className='hover:text-secondary overflow-hidden transition-all duration-200' href={twitterLink}><SiTwitter /></a></li>
      </ul>
      <p className='text-black-90 md:text-p text-p-mobile'>&copy; Samuel Preston 2022</p>
    </footer>
  )
}

export default Info
