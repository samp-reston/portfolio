import React, { FunctionComponent } from 'react'

import ContactForm from './ContactForm'
import Info from './Info'

const Footer: FunctionComponent = () => {
  return (
    <>
      <h1 className='text-h1 text-black-90'>Contact Me</h1>
      <div className="flex md:flex-row flex-col divide-black-90 gap-8 md:divide-x-2 divide-y-2 md:divide-y-0 w-full">
        <ContactForm />
        <Info />
      </div>
    </>
  )
}

export default Footer