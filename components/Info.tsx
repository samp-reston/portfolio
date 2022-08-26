import React, { FunctionComponent } from 'react'
import { SiGithub } from '@react-icons/all-files/si/SiGithub'
import { SiLinkedin } from '@react-icons/all-files/si/SiLinkedin'
import { SiTwitter } from '@react-icons/all-files/si/SiTwitter'

const Info: FunctionComponent = () => {
  const email: string = 'samp.reston@outlook.com'
  const githubLink: string = 'https://github.com/samp-reston'
  const linkedinLink: string = 'https://www.linkedin.com/in/samp-reston/'
  const twitterLink: string = 'https://twitter.com/samp_reston'

  return (
    <footer className='flex grow flex-col gap-8 pt-8 md:w-min md:pt-0 md:pl-8'>
      <p className='text-p-mobile text-black-90 md:text-p'>Designed and Built by Samuel Preston</p>
      <p className='text-p-mobile text-black-90 transition-all duration-200 hover:text-primary md:text-p'><a href={`mailto:${email}`}>{email}</a></p>
      <p className='text-p-mobile text-black-90 transition-all duration-200 hover:text-primary md:text-p'><a href="tel:+447949420516">+44 794 9420 516</a></p>
      <ul className='flex grow flex-row gap-6 text-socials-mobile text-black-90 md:text-socials'>
        <li><a title="GitHub" className='overflow-hidden transition-all duration-200 hover:text-secondary' href={githubLink}><SiGithub /></a></li>
        <li><a title="LinkedIn" className='overflow-hidden transition-all duration-200 hover:text-secondary' href={linkedinLink}><SiLinkedin /></a></li>
        <li><a title="Twitter" className='overflow-hidden transition-all duration-200 hover:text-secondary' href={twitterLink}><SiTwitter /></a></li>
      </ul>
      <p className='text-p-mobile text-black-90 md:text-p'>&copy; Samuel Preston 2022</p>
    </footer>
  )
}

export default Info
