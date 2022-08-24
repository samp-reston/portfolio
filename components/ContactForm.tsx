import React, { FunctionComponent } from 'react'

const ContactForm: FunctionComponent = () => {
  return (
    <form id="contact" className='flex flex-col gap-4 grow text-p'>
      <div className='flex flex-col'>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" className='border-4 border-secondary bg-black-75 rounded-lg h-12 text-white focus:outline-none p-1 '/>
      </div>
      <div className='flex flex-col'>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" className='border-4 border-secondary bg-black-75 rounded-lg h-12 text-white focus:outline-none p-1'/>
      </div>
      <div className='flex flex-col'>
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" cols={30} rows={7} className='border-4 border-secondary bg-black-75 rounded-lg text-white focus:outline-none p-1'></textarea>
      </div>
      <input type="submit" className='transition-all duration-200 border-4 border-secondary bg-black-75 rounded-lg h-12 text-white focus:outline-none p-1 w-1/2 self-end hover:cursor-pointer hover:text-secondary focus:bg-black-5 focus:text-black-100 ' value='Send'/>
    </form>
  )
}

export default ContactForm