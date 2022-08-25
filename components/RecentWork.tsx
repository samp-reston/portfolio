import React, { FunctionComponent } from 'react'
import Project from './Project'

export type ProjectType = {
  title: string
  description: string
  testimonial: string
  image: string
  link: string
}

type PropTypes = {
  projects: ProjectType[]
}

const RecentWork: FunctionComponent<PropTypes> = ({ projects }) => {
  return (
    <div className='flex flex-col xl:w-5/6 w-full 2xl:px-64 xl:px-64 lg:px-32 md:px-16 px-8 py-16 gap-12 min-w-full transition-all ease-linear duration-300'>
      <h1 id="recent-work" className='text-black-90 md:text-h1 text-h1-mobile'>Recent Work</h1>
      <div className='flex justify-center flex-wrap gap-12'>
        {projects.map((project, index) => {
          return <Project key={index} project={project} />
        })}
      </div>
    </div>
  )
}

export default RecentWork