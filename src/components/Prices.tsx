import React from 'react'
import roket from "../assets/roket.png"
import bg from "../assets/bg.svg"
type Props = {}

const Prices = (props: Props) => {
 
  return (
    <div className='container flex gap-5 pb-20 relative'>
            <div className="w-full max-w-sm p-4  rounded-lg shadow sm:p-8 bg-softbg ">
        <h5 className="mb-4 text-xl font-medium text-black">Outsourcing 1</h5>
        <div className="flex items-baseline text-black">
            <span className="text-3xl font-semibold">$</span>
            <span className="text-5xl font-extrabold tracking-tight">100</span>
            <span className="ml-1 text-xl font-normal text-black">/adet</span>
        </div>
        <ul role="list" className="space-y-5 my-7">
            <li className="flex space-x-3">
                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-black">React.js</span>
            </li>
            
            <li className="flex space-x-3 line-through decoration-gray-500">
                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-black dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-gray-500">Springboot</span>
            </li>
            <li className="flex space-x-3">
                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-black">Integration Yardımı ve Meeting</span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-black dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-gray-500">UI&UX Desteği</span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-black dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-gray-500">API Güvenliği & Hızlandırma</span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-black dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-gray-500">Dokümantasyon</span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-black dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-gray-500">24/7 Telefon araması</span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-black dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-gray-500">SEO</span>
            </li>
        </ul>
        <div  className="text-black font-semibold  bg-primary rounded-md text-sm px-5 py-2.5 inline-flex justify-center w-full text-center items-center gap-2">
            <span>İletişime Geç</span>
            <img src={roket} className="w-6"/>
        </div> </div>
    <div className="w-full max-w-sm p-4  rounded-lg shadow sm:p-8 bg-softbg ">
        <h5 className="mb-4 text-xl font-medium text-black">Outsourcing 2</h5>

        <div className="flex items-baseline text-black">
            <span className="text-3xl font-semibold">$</span>
            <span className="text-5xl font-extrabold tracking-tight">290</span>
            <span className="ml-1 text-xl font-normal text-black">/adet</span>
        </div>
        <ul role="list" className="space-y-5 my-7">
            <li className="flex space-x-3">
                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-black">React.js</span>
            </li>
            <li className="flex space-x-3">
                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-black">Springboot</span>
            </li>
            <li className="flex space-x-3">
                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-black">Integration Yardımı ve Meeting</span>
            </li>
            <li className="flex space-x-3  ">
            <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-black">UI&UX Desteği</span>
            </li>
            <li className="flex space-x-3  ">
            <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-black">API Güvenliği & Hızlandırma</span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-black dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-gray-500">Dokümantasyon</span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-black dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-gray-500">24/7 Telefon araması</span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-black dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-gray-500">SEO</span>
            </li>
        </ul>
        <div  className="text-black font-semibold  bg-primary rounded-md text-sm px-5 py-2.5 inline-flex justify-center w-full text-center items-center gap-2">
            <span>İletişime Geç</span>
            <img src={roket} className="w-6"/>
        </div> </div>
    <div className="w-full max-w-sm p-4  rounded-lg shadow sm:p-8 bg-softbg ">
    <div className='flex gap-6 items-center'>
        <h5 className="mb-4 text-xl font-medium text-black">Outsourcing 3</h5>
        </div>
        <div className='absolute -top-[4rem] flex items-center gap-5'>
        <svg width="46" height="43" viewBox="0 0 46 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.25766 41.5554C7.20543 41.8761 6.90315 42.0937 6.5825 42.0414L1.35716 41.1903C1.03651 41.138 0.818904 40.8357 0.871137 40.5151C0.923371 40.1944 1.22566 39.9768 1.54631 40.0291L6.19105 40.7857L6.94765 36.1409C6.99989 35.8203 7.30217 35.6027 7.62282 35.6549C7.94348 35.7071 8.16107 36.0094 8.10884 36.3301L7.25766 41.5554ZM45.5034 1.93625C41.9622 2.53764 38.0294 5.44121 34.9355 9.29106C31.8468 13.1343 29.7053 17.7835 29.6178 21.7261L28.4416 21.6999C28.5369 17.4049 30.8378 12.5117 34.0184 8.55407C37.1937 4.60301 41.3572 1.44705 45.3064 0.776367L45.5034 1.93625ZM29.6178 21.7261C29.5621 24.2312 30.0363 25.9311 30.7102 26.9699C31.3731 27.9918 32.2218 28.3752 33.0301 28.3296C34.6824 28.2365 36.7233 26.2316 36.8011 22.3578L37.9773 22.3814C37.8938 26.5454 35.6406 29.3608 33.0963 29.5042C31.8063 29.5769 30.581 28.9326 29.7232 27.6101C28.8763 26.3045 28.3829 24.3433 28.4416 21.6999L29.6178 21.7261ZM36.8011 22.3578C36.8985 17.5016 34.7193 13.8428 31.4141 11.4586C28.0923 9.06228 23.6171 7.9467 19.1665 8.26405L19.0828 7.09054C23.766 6.7566 28.5247 7.92355 32.1024 10.5044C35.6969 13.0973 38.0831 17.1103 37.9773 22.3814L36.8011 22.3578ZM19.1665 8.26405C17.0246 8.41678 14.4275 9.46827 11.9143 11.2709C9.40877 13.068 7.02754 15.583 5.30708 18.6035C1.88175 24.6171 1.05984 32.6506 7.15449 41.1172L6.19966 41.8045C-0.184934 32.9351 0.650002 24.4025 4.2848 18.0212C6.0944 14.8442 8.59405 12.2045 11.2286 10.3149C13.8555 8.43075 16.6578 7.26346 19.0828 7.09054L19.1665 8.26405Z" fill="#3134FB"/>
</svg>
<span className='text-secondary text-xl mb-20 font-semibold '>Daha fazla mama ve diğer destekler</span>
        </div>

        <div className="flex items-baseline text-black">
            <span className="text-3xl font-semibold">$</span>
            <span className="text-5xl font-extrabold tracking-tight">310</span>
            <span className="ml-1 text-xl font-normal text-black">/adet</span>
        </div>
        <ul role="list" className="space-y-5 my-7">
            <li className="flex space-x-3">
                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-black">React.js / Next.js</span>
            </li>
            <li className="flex space-x-3">
                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-black">Springboot</span>
            </li>
            <li className="flex space-x-3">
                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-black">Integration Yardımı ve Meeting</span>
            </li>
            <li className="flex space-x-3  ">
            <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-black">UI&UX Desteği</span>
            </li>
            <li className="flex space-x-3  ">
            <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-black">API Güvenliği & Hızlandırma</span>
            </li>
            <li className="flex space-x-3  ">
            <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-black">Dokümantasyon</span>
            </li>
            <li className="flex space-x-3 ">
            <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-black">24/7 Telefon araması</span>
            </li>
            <li className="flex space-x-3  ">
            <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-black">SEO</span>
            </li>
        </ul>
        <div  className="text-black font-semibold  bg-primary rounded-md text-sm px-5 py-2.5 inline-flex justify-center w-full text-center items-center gap-2">
            <span>İletişime Geç</span>
            <img src={roket} className="w-6"/>
        </div>
   </div>
    </div>
  )
}

export default Prices