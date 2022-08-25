import React, { FunctionComponent } from 'react'
import { ProjectType } from './RecentWork'

import { MdOpenInNew } from 'react-icons/md'

import Image from 'next/image'

interface PropTypes {
  project: ProjectType
}

const Project: FunctionComponent<PropTypes> = ({ project }) => {
  const { description, image, testimonial, title, link } = project
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const collage = require(`../assets/projects/${image}`)

  return (
    <div className='relative flex max-w-xl flex-col gap-4 rounded-lg bg-white p-8 shadow-lg sm:px-16 sm:py-12'>
      <span className='top-4 right-4 hidden text-h5 text-black-90 transition-all duration-200 hover:cursor-pointer hover:text-secondary sm:absolute sm:flex'><a target='_blank' rel="noreferrer" title='Open in New Tab' href={link}><MdOpenInNew /></a></span>
      <h4 className='text-h3-mobile text-black-90 md:text-h3'>{title}</h4>
      <div className='flex h-full w-full flex-row justify-center'>
        <Image src={collage.default.src} width={256} height={256} alt="Project Image 1"/>
      </div>
      <p className='hidden text-p-mobile text-black-90 sm:block'>
        {description}
      </p>
      <p className='hidden text-testimonial-mobile italic text-black-90 xs:block'>
        {testimonial}
      </p>
    </div>
  )
}

export default Project
