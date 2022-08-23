import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <header>
      <Image />
      <nav>
        <ul>
          <li>My Skills</li>
          <li>Recent Work</li>
          <li>About Me</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar