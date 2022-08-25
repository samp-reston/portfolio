import React, { FunctionComponent } from 'react'
import Project from './Project'

export interface ProjectType {
  title: string
  description: string
  testimonial: string
  image: string
  link: string
}

interface PropTypes {
  projects: ProjectType[]
}

const RecentWork: FunctionComponent<PropTypes> = ({ projects }) => {
  return (
    <div className='flex w-full min-w-full flex-col gap-12 px-body transition-all duration-300 ease-linear'>
      <h1 id="recent-work" className='text-h1-mobile text-black-90 md:text-h1'>Recent Work</h1>
      <div className='flex flex-wrap justify-center gap-12'>
        {projects.map((project, index) => {
          return <Project key={index} project={project} />
        })}
      </div>
    </div>
  )
}

export default RecentWork
