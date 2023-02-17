import React from 'react'
import avatar from "../assets/mehmet.png"
import logo from "../assets/logo.svg"
import {FaLinkedin} from "react-icons/fa"
type Props = {}


const HomeIcon = (props:any) => {
  return <svg className={`${props.className}`} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 3L4 9v12h5v-7h6v7h5V9z"></path></svg>
}

const Navbar = (props: Props) => {
  return (
    <div>
        <nav className="bg-black px-2 sm:px-4 py-2.5  shadow-lg">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  <a href="/" className="flex items-center text-white font-semibold">
    <img src={logo} className="w-14 mr-5" />
  <span className='text-2xl '>Mehmet Basrioğlu</span>
  </a>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul className="flex gap-10 p-4  rounded-lg self-center font-semibold whitespace-nowrap dark:text-white">
    
    <li className='relative'>
       <a href='/'>
        <div className="py-2 px-8 bg-primary text-black rounded-lg flex items-center " aria-current="page">
          <HomeIcon className="w-5 -mt-1 mr-2"/>
          <span className='inline-block'>Anasayfa</span>
        </div>
       </a>
      </li>
      <li>
        <a href="/blog" className="block py-2 pl-3 pr-4 text-white  " aria-current="page">Blog</a>
      </li>
      
      <li className='flex gap-2 items-center'>
        <a href="#" className="block py-2 pr-4 text-white " aria-current="page">Linkedin</a>
      </li>
      <li className='flex gap-2 items-center'>
        <a href="https://www.linkedin.com/in/mehmetbasrioglu/details/certifications/" className="block py-2 pr-4 text-white " aria-current="page">Sertifika ve Lisanslar</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar