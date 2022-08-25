import React, { FunctionComponent } from 'react'
import { ProjectType } from './RecentWork'

import { MdOpenInNew } from 'react-icons/md'

type PropTypes = {
  project: ProjectType
}

const Project: FunctionComponent<PropTypes> = ({ project }) => {
  const {description, image, testimonial, title, link} = project
  const collage = require(`../assets/projects/${image}`)

  return (
    <div className='bg-white shadow-lg rounded-lg flex flex-col px-8 py-8 sm:px-16 sm:py-12 gap-4 max-w-xl relative'>
      <span className='hidden sm:absolute sm:flex top-4 right-4 text-black-90 hover:text-secondary transition-all duration-200 hover:cursor-pointer text-h5'><a target='_blank' title='Open in New Tab' href={link}><MdOpenInNew /></a></span>
      <h3 className='md:text-h3 text-h3-mobile text-black-90'>{title}</h3>
      <div className='flex flex-row w-full h-full justify-center'>
        <img src={collage.default.src} className='object-scale-down' width='256px' height='256px' alt="Project Image 1"/>
      </div>
      <p className='text-p-mobile hidden sm:block text-black-90'>
        {description}
      </p>
      <p className='text-testimonial-mobile text-black-90 italic hidden xs:block'>
        {testimonial}
      </p>
    </div>
  )
}

export default Project