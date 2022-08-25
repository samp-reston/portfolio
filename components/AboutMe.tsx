import React, { FunctionComponent } from 'react'

const AboutMe: FunctionComponent = () => {
  return (
    <div className='flex flex-col gap-12 2xl:px-64 xl:px-64 lg:px-32 md:px-16 px-8 pb-16 min-w-full transition-all ease-linear duration-300'>
      <h1 id="about-me" className='md:text-h1 text-h1-mobile text-black-90'>About Me</h1>
      <p className='md:text-p text-p-mobile text-black-90 lg:w-5/6 md:w-full'>
        Hi, my name&#39;s Sam, I work at Jaguar Land Rover as an Electrical Degree Apprentice. Day-to-day I develop in-house solutions for enabling real-time Level 5 In-the-Loop testing.
        <br /><br />
        In my extra time I develop fullstack web applications using <strong>React</strong>, <strong>TypeScript</strong>, <strong>TailwindCSS</strong>, and <strong>MySQL</strong>. I also believe in using built-in typesafety within applications to ensure the upmost <strong>security</strong> and <strong>maintainability</strong>.
        <br /><br />
        I&#39;m competively spirited, striving for perfection in every aspect. I have a passion for engineering and problem solving.
      </p>
    </div>
  )
}

export default AboutMe