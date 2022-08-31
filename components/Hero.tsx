import Image from 'next/image'
import React, { FunctionComponent } from 'react'
import portrait from '../assets/portrait.webp'

const Hero: FunctionComponent = () => {
  return (
    <div id="hero" className='flex w-full flex-col justify-center gap-8 px-body transition-all duration-300 ease-linear'>
      <div id="titles" className='flex flex-col items-start'>
        <h1 className='text-h1-mobile text-black-90 md:text-h1'>Samuel Preston</h1>
        <h3 className='text-h3-mobile text-black-90 md:text-h3'>Freelance Web Developer</h3>
      </div>
      <div id="content" className='flex flex-wrap items-center justify-center gap-8 sm:flex-row sm:flex-nowrap sm:justify-between'>
        <p className='w-full text-p-mobile text-black-90 sm:w-3/5 md:text-p'>
          I&#39;m passionate about bringing safety to systems through <strong>cutting-edge technology</strong> with reliability built-in. All the while bringing your <strong>dreams to life</strong> through beautiful interfaces with <strong>user-experience</strong> at the forefront.
        </p>
        <Image className='m-4 rounded-full shadow-lg' src={portrait.src} alt='Samuel Preston' width={384} height={384} quality={100}/>
      </div>
    </div>
  )
}

export default Hero
