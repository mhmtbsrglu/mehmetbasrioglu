import React from 'react'
import {BsHouse,BsBook,BsLinkedin,BsAward} from "react-icons/bs"
type Props = {}


const HomeIcon = (props:any) => {
  return <svg className={`${props.className}`} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 3L4 9v12h5v-7h6v7h5V9z"></path></svg>
}

const MobileNavigation = (props: Props) => {
  return (
    <div className='fixed w-full bottom-0 left-0 z-20 md:hidden'>
        <nav className="bg-gradient-to-b from-black to-black 2px-2 sm:px-4 py-2.5 relative ">
          
      <div className='absolute -top-10 left-0 w-full h-10 bg-gradient-to-b from-transparent to-black'/>
  <div className="container flex flex-wrap items-center justify-between mx-auto">
    <ul className='text-gray-400 font-semibold flex justify-around flex-1'>
    <li >
      <a href='/' className='flex flex-col items-center text-white'>
      <BsHouse className='mb-1'/>
      <span className='text-[0.6rem]'>Home</span>
      </a>
      </li>
      <li >
      <a href='/blog' className='flex flex-col items-center'>
      <BsBook className='mb-1'/>
      <span className='text-[0.6rem]'>Blog</span>
      </a>
      </li>
      <li className='flex flex-col items-center'>
      <a href='https://www.linkedin.com/in/mehmetbasrioglu/details/certifications/' className='flex flex-col items-center'>
      <BsAward className='mb-1'/>
      <span className='text-[0.6rem]'>Certificates</span>
      </a>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default MobileNavigation