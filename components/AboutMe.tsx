import React, { FunctionComponent } from 'react'

const AboutMe: FunctionComponent = () => {
  return (
    <div className='flex min-w-full flex-col gap-12 px-body pb-16 transition-all duration-300 ease-linear'>
      <h2 id="about-me" className='text-h2-mobile text-black-90 md:text-h2'>About Me</h2>
      <p className='text-p-mobile text-black-90 md:w-full md:text-p lg:w-5/6'>
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
