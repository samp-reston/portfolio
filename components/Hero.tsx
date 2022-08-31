import Image from 'next/image'
import React, { Fragment, FunctionComponent, useState } from 'react'
import { getHeroContent, getHeroImage } from '../api/cdn'
import { ParseContent } from '../utils/utils'

import { useQuery } from 'react-query'

const Hero: FunctionComponent = () => {
  const [content, setContent] = useState<null | Array<{text: string, bold: boolean}>>(null)
  const [imageURL, setImageURL] = useState<null | string>(null)

  useQuery('heroContent', getHeroContent, {
    onSuccess: (data) => {
      setContent(data)
    }
  })

  useQuery('heroImage', getHeroImage, {
    onSuccess: (data) => {
      setImageURL(data)
    }
  })

  if (content == null || imageURL == null) return <></>

  return (
    <div id="hero" className='flex w-full flex-col justify-center gap-8 px-body transition-all duration-300 ease-linear'>
      <div id="titles" className='flex flex-col items-start'>
        <h1 className='text-h1-mobile text-black-90 md:text-h1'>Samuel Preston</h1>
        <h3 className='text-h3-mobile text-black-90 md:text-h3'>Freelance Web Developer</h3>
      </div>
      <div id="content" className='flex flex-wrap items-center justify-center gap-8 sm:flex-row sm:flex-nowrap sm:justify-between'>
        <p className='w-full text-p-mobile text-black-90 sm:w-3/5 md:text-p'>
          <ParseContent content={content} />
        </p>
        <Image className='m-4 rounded-full shadow-lg' src={imageURL} alt='Samuel Preston' width={384} height={384} quality={100}/>
      </div>
    </div>
  )
}

export default Hero
