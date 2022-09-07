import React, { FunctionComponent } from 'react'

import ContactForm from './ContactForm'
import Info from './Info'

const Footer: FunctionComponent = () => {
  return (
    <div className='w-full min-w-full px-body pt-12 transition-all duration-300 ease-linear xl:w-5/6'>
      <h2 id="contact" className='text-h2-mobile text-black-90 md:text-h2'>Contact</h2>
      <div className="flex w-full flex-col gap-8 divide-y-2 divide-black-90 md:flex-row md:divide-x-2 md:divide-y-0">
        <ContactForm />
        <Info />
      </div>
    </div>
  )
}

export default Footer
