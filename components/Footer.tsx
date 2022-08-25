import React, { FunctionComponent } from 'react'

import ContactForm from './ContactForm'
import Info from './Info'

const Footer: FunctionComponent = () => {
  return (
    <div className='xl:w-5/6 w-full 2xl:px-64 xl:px-64 lg:px-32 md:px-16 px-8 pt-12 min-w-full transition-all ease-linear duration-300'>
      <h1 id="contact" className='md:text-h1 text-h1-mobile text-black-90'>Contact</h1>
      <div className="flex md:flex-row flex-col divide-black-90 gap-8 md:divide-x-2 divide-y-2 md:divide-y-0 w-full">
        <ContactForm />
        <Info />
      </div>
    </div>
  )
}

export default Footer
