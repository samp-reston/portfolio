import React, { FunctionComponent, useState } from 'react'
import { useQuery } from 'react-query'
import { getAboutContent } from '../api/cdn'
import { ParseContent } from '../utils/utils'

const AboutMe: FunctionComponent = () => {
  const [content, setContent] = useState<null | Array<{text: string, bold: boolean}>>(null)

  useQuery('aboutContent', getAboutContent, {
    onSuccess: (data) => {
      setContent(data)
    }
  })

  if (content == null) return <></>

  return (
    <div className='flex min-w-full flex-col gap-12 px-body pb-16 transition-all duration-300 ease-linear'>
      <h1 id="about-me" className='text-h1-mobile text-black-90 md:text-h1'>About Me</h1>
      <p className='whitespace-pre-wrap text-p-mobile text-black-90 md:w-full md:text-p lg:w-5/6'>
        <ParseContent content={content} />
      </p>
    </div>
  )
}

export default AboutMe
