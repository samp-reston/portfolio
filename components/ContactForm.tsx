import React, { FunctionComponent } from 'react'

const ContactForm: FunctionComponent = () => {
  return (
    <form className='flex grow flex-col gap-4 text-p-mobile md:text-p'>
      <div className='flex flex-col'>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" className='h-12 rounded-lg border-4 border-secondary bg-black-75 p-1 text-white focus:outline-none '/>
      </div>
      <div className='flex flex-col'>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" className='h-12 rounded-lg border-4 border-secondary bg-black-75 p-1 text-white focus:outline-none'/>
      </div>
      <div className='flex flex-col'>
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" cols={30} rows={7} className='rounded-lg border-4 border-secondary bg-black-75 p-1 text-white focus:outline-none'></textarea>
      </div>
      <input type="submit" className='h-12 w-1/2 self-end rounded-lg border-4 border-secondary bg-black-75 p-1 text-white transition-all duration-200 hover:cursor-pointer hover:text-secondary focus:bg-black-5 focus:text-black-100 focus:outline-none ' value='Send'/>
    </form>
  )
}

export default ContactForm
