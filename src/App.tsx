import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import hd from "./assets/teamwork2.mp4"
import { Router, Routes } from 'react-router-dom'
import { Route } from 'react-router'
import Oops from './components/Oops'
import Blogs from './components/Blogs'
import gelecegiyazanlar from "./assets/gelecegiyazanlar.png"
import btk from "./assets/btk-akademi.png"
import patika from "./assets/patika.png"
import BlogDetail from './components/BlogDetail/BlogDetail'
import MobileNavigation from './components/MobileNavigation'
import Typed from "react-typed"
import { BsArrowBarLeft, BsArrowRight, BsArrowRightCircle, BsTelephone } from 'react-icons/bs'
import Projects from './components/Projects'
import Marquee from "react-fast-marquee";
function App() {
  const [count, setCount] = useState(0)
//import.meta.env.VITE_REACT_APP_PROJECT_ID
  return (
    <div className="App">
      <Navbar/>
      <MobileNavigation/>
      <Routes>
        <Route path='/' caseSensitive errorElement={<Oops/>} element={<div className=''>
        <div >
          <div className='sm:h-60 md:h-96 w-full md:container relative overflow-hidden md:mt-28 md:hidden'>
            <video src={hd}  className="w-full h-full object-cover md:rounded-t-md" loop muted autoPlay/>
            <div className='absolute bottom-0 left-0 w-full h-10 bg-gradient-to-b scale-110 from-transparent to-black'/>
          </div>
          <div className='container -mt-10  relative md:mt-28'>
          <div className="text-white text-3xl md:text-5xl font-semibold mt-5">Corporate or Personal</div>
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-secondary text-3xl font-normal">Software Development</div>
          <div className='my-5 text-gray-300'>
            <p>Hi, I'm Mehmet Basrioglu, I have java and react development certificates from platforms called Patika.dev, Btk Akademi, and Turkcell Gelecegi Yazanlar. I can develop corporate or personal projects. 
I give importance to teamwork and cooperation as a team player.
I'm interested with travelling, fitness, nutrition, self-improvement and entrepreneurship (:
            </p>
            <div className='bg-softbg rounded-xl my-10 '>
            <Marquee gradient={false} speed={100}><div className='flex items-center justify-between py-2 gap-10'>
            <img src={gelecegiyazanlar} className="w-30"/>
            <img src={btk} className="w-20" />
            <img src={patika} className="w-20" />
            </div></Marquee>
            </div>
            
            <div className=' my-5 p-[0.1rem] rounded-lg relative mt-20'>
            <div className='flex items-center justify-between px-5 rounded-lg  lowercase text-sm text-black bg-white p-2'>
            <Typed  loop backSpeed={50} typeSpeed={70} strings={[
    "are you LOOKING FOR CV ?",
  ]}/>
            </div>
            </div>
            <div className='relative mb-20'>
              
            
            <div className='scale-100 z-0 bg-gradient-to-r from-primary rounded-lg  via-secondary to-secondary p-[0.1rem] absolute inset-0 w-full h-full blur-xl'></div>
            <div className=' my-5 bg-gradient-to-r from-primary rounded-lg  via-secondary to-secondary p-[0.1rem] relative '>
            <div className='flex items-center justify-between px-5 uppercase text-sm rounded-lg  text-white bg-gradient-to-r from-[#3f4348] to-[#14161c]  p-2'>
              <span>Let's Talk with longer</span>
              <BsArrowRightCircle size={16}/>
            </div>
            </div>
            </div>
          </div>
          <div className='mb-20 mt-10'>
          <div className="text-white text-3xl font-semibold mt-5">Get involved in the these project </div>
          <Projects/>
          </div>
          </div>
        </div>
      </div>} /> 
      <Route path='/blog'caseSensitive errorElement={<Oops/>} element={<div className='my-10 container text-white'>
        <Blogs/>
      </div>} />
      <Route path='/blog/:id' caseSensitive errorElement={<Oops/>} element={<BlogDetail/>}/>
      <Route path='*' element={<Oops/>}/>
      </Routes>
    </div>
  )
}

export default App
