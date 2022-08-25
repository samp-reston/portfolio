import React, { FunctionComponent } from 'react'

import portrait from '../assets/portrait.webp'

const Hero: FunctionComponent = () => {
  return (
    <div className='flex flex-col xl:w-5/6 w-full 2xl:px-64 xl:px-64 lg:px-32 md:px-16 px-8 pb-16 min-w-full transition-all ease-linear duration-300 gap-8'>
      <div className='flex flex-col'>
        <h1 className='md:text-h1 text-h1-mobile text-black-90'>Samuel Preston</h1>
        <h3 className='md:text-h3 text-h3-mobile text-black-90'>Freelance Web Developer</h3>
      </div>
      <div className='flex sm:flex-row flex-wrap justify-center sm:justify-between items-center sm:flex-nowrap gap-8'>
        <p className='md:text-p text-p-mobile text-black-90 sm:w-3/5 w-full'>
          I&#39;m passionate about bringing safety to systems through <strong>cutting-edge technology</strong> with reliability built-in. All the while bringing your <strong>dreams to life</strong> through beautiful interfaces with <strong>user-experience</strong> at the forefront.
        </p>
        <img src={portrait.src} alt='Samuel Preston' className='h-64 sm:h-48 md:h-64 w-auto lg:h-72 xl:h-96 object-scale-down rounded-full m-4 shadow-lg' />
      </div>
    </div>
  )
}

export default Hero