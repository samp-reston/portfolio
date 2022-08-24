import React, { FunctionComponent } from 'react'

import ContactForm from './ContactForm'
import Info from './Info'

const Footer: FunctionComponent = () => {
  return (
    <div className='xl:w-5/6 w-full'>
      <h1 id="contact" className='text-h1 text-black-90'>Contact</h1>
      <div className="flex md:flex-row flex-col divide-black-90 gap-8 md:divide-x-2 divide-y-2 md:divide-y-0 w-full">
        <ContactForm />
        <Info />
      </div>
    </div>
  )
}

export default Footer