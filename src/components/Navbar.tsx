import React from 'react'
import { BsAward, BsBook, BsFillCloudFog2Fill, BsHouse } from 'react-icons/bs'
type Props = {}


const HomeIcon = (props:any) => {
  return <svg className={`${props.className}`} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 3L4 9v12h5v-7h6v7h5V9z"></path></svg>
}

const Navbar = (props: Props) => {
  return (
    <div className='w-full top-0 left-0 z-10 sm:hidden fixed md:block md:w-full'>
        <nav className="bg-black px-2 sm:px-4 py-2.5 relative ">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  <a href="/" className="flex items-center text-white font-semibold">
  <BsFillCloudFog2Fill className='mr-4 ' size={50}/>
  </a>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul className="flex gap-10 p-4  rounded-lg self-center font-semibold whitespace-nowrap dark:text-white">
    
    <li className='relative'>
       <a href='/'>
        <div className="py-2 bg-white text-black rounded-lg flex items-center " aria-current="page">
        <BsHouse className='mx-2'/>
          <span className='inline-block mx-5'>Home</span>
        </div>
       </a>
      </li>
      <li>
        <a href="/blog" className="flex items-center py-2 pl-3 pr-4 text-gray-400  " aria-current="page">
        <BsBook  className='mx-2'/>
          <span className='inline-block mx-5'>Blog</span>
        </a>
      </li>
      
      <li>
        <a href="https://www.linkedin.com/in/mehmetbasrioglu/details/certifications/" className="flex items-center py-2 pl-3 pr-4 text-gray-400  " aria-current="page">
        <BsAward  className='mx-2'/>
          <span className='inline-block mx-5'>Certificates</span>
        </a>
      </li>
     
    </ul>
  </div>
  </div>
  <div className='absolute -bottom-10 left-0 w-full bg-gradient-to-b from-black to-transparent h-10'/>
</nav>
    </div>
  )
}

export default Navbar