import React from 'react'
type Props = {}

const Projects = (props: Props) => {
 
  return (
    <div className=''>
        <div className='bg-softbg p-4 my-5'>
            <div className='flex justify-between items-center'>
            <div className='card-banner bg-[#383e43] flex items-center justify-start px-5 py-2 text-white font-normal'>Adplus kobi</div>
            <span className='text-primary font-thin text-2xl'>01</span>
            </div>
            <div className=' my-10 font-semibold text-xl relative '>
                <span>Stacks</span>
                <div className='absolute -bottom-2 left-0 w-1/3 bg-white h-[0.1rem]' />
            </div>
            <ul className='my-5 flex flex-col items-start text-gray-400'>
                <li>Monolith</li>
                <li>Springboot</li>
                <li>React.js</li>
                <li>NPM 13/12</li>
                <li>Redux, Hooks</li>
            </ul>
        </div>
        <div className='relative p-[0.1rem] overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-primary to-secondary z-0 animate-spins' />
        <div className='bg-softbg p-4  border-gray-400 relative'>
            <div className='flex justify-between items-center'>
            <div className='card-banner bg-[#383e43] flex items-center justify-start px-5 py-2 text-white font-normal'>İştesuit</div>
            <span className='text-primary font-thin text-2xl'>02</span>
            </div>
            <div className=' my-10 font-semibold text-xl relative '>
                <span>Stacks</span>
                <div className='absolute -bottom-2 left-0 w-1/3 bg-white h-[0.1rem]' />
            </div>
            <ul className='my-5 flex flex-col items-start text-gray-400 relative'>
                <li>Microservice</li>
                <li>Springboot</li>
                <li>React.js</li>
                <li>NPM LTS</li>
                <li>Redux, Hooks</li>
                <li>Eureka, Spring Cloud Gateway, Jwt</li>
                <li>Modular Programlama</li>
                <li>Rest api communication(outsource integration)</li>
                <li>Postgresql</li>
                <li>Clean Arch</li>
                <li>Apache Kafka</li>
                <li>Swagger, Postman</li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Projects