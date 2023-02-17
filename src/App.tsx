import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import keyboard from "./assets/meksim.mp4"
import Prices from './components/Prices'
import mutlu from "./assets/mutlu.mp4"
import mehmet from "./assets/mehmet.png"
import border from "./assets/border.svg"
import { Router, Routes } from 'react-router-dom'
import { Route } from 'react-router'
import Oops from './components/Oops'
import Blogs from './components/Blogs'
import glasses from "./assets/glasses.gif"
import font from "./assets/font.svg"
import BlogDetail from './components/BlogDetail/BlogDetail'
function App() {
  const [count, setCount] = useState(0)
//import.meta.env.VITE_REACT_APP_PROJECT_ID
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' caseSensitive errorElement={<Oops/>} element={<div className='min-h-screen flex flex-col'>
          <div className=' '>
          <div className='container'>
          <div className='relative  h-[35rem] my-20  mb-32'>
      <video src={keyboard} className="h-full w-full object-cover rounded-[1rem] " autoPlay={true} loop muted />
      <img src={border} className="absolute inset-0 w-full h-full scale-105 z-10"/>
      <div className='p-10 flex justify-start absolute top-0 inset-0 items-end bg-black/25 rounded-[1rem]'>
      <div className=' text-2xl font-semibold text-white flex-1 p-2 h-1/5 rounded-lg flex flex-col'>
        <h1 className=''>Onlar bizim bir parçamız ve dostumuzdur. </h1>
        <h1 className='text-transparent bg-clip-text bg-white  font-normal '>mama, kulübe veya diğer bağışları yaparak destek olabilir ve mutlu edebilirsin.</h1>
        <h1 className='text-transparent bg-clip-text bg-white   flex items-center'>Destek paketindeki fiyatlandırmaların çoğu dostlarımıza gitmektedir. <img src={mehmet} className="w-10"/></h1>
        <div className='flex my-5 gap-2 font-thin text-3xl'>
        </div>
      </div>
      </div>
     
      </div>
          </div>
      <div className='bg-middlebar flex flex-col'>
      <div className='container'>
        <div className='flex my-20 relative'>
        <svg width="342" height="317" className='top-0 left-40 absolute ' viewBox="0 0 342 317" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M293.012 313.208C293.412 315.671 295.728 317.342 298.184 316.94L338.217 310.403C340.674 310.002 342.341 307.68 341.941 305.217C341.541 302.754 339.225 301.083 336.768 301.485L301.183 307.296L295.387 271.621C294.987 269.159 292.671 267.487 290.214 267.888C287.757 268.289 286.09 270.611 286.491 273.074L293.012 313.208ZM-9.74347e-06 8.90862C27.1302 13.5277 57.2605 35.8288 80.9637 65.398C104.627 94.9165 121.034 130.625 121.704 160.907L130.715 160.705C129.985 127.717 112.357 90.1345 87.9899 59.7375C63.663 29.3909 31.7652 5.15126 1.50925 0L-9.74347e-06 8.90862ZM121.704 160.907C122.131 180.147 118.498 193.204 113.335 201.182C108.256 209.031 101.754 211.976 95.5615 211.626C82.9028 210.91 67.2669 195.512 66.6708 165.758L57.6596 165.94C58.2993 197.922 75.5618 219.546 95.0544 220.647C104.937 221.206 114.325 216.257 120.897 206.099C127.385 196.072 131.165 181.008 130.715 160.705L121.704 160.907ZM66.6708 165.758C65.9246 128.46 82.6201 100.358 107.942 82.0461C133.391 63.6408 167.677 55.0725 201.775 57.5099L202.416 48.4967C166.537 45.9318 130.079 54.8947 102.669 74.7173C75.1304 94.6323 56.8491 125.455 57.6596 165.94L66.6708 165.758ZM201.775 57.5099C218.184 58.683 238.081 66.7591 257.336 80.6044C276.531 94.4072 294.775 113.724 307.956 136.923C334.198 183.111 340.495 244.813 293.802 309.842L301.117 315.121C350.032 246.999 343.635 181.463 315.788 132.451C301.924 108.05 282.773 87.775 262.589 73.2618C242.464 58.7903 220.995 49.8248 202.416 48.4967L201.775 57.5099Z" fill="black"/>
</svg>
      <h1 className='absolute top-0 left-96 text-4xl font-semibold text-black'>Mutlu et. Mutlu ol.</h1>
        <video loop autoPlay muted controls={false} src={mutlu} className="w-72 h-72 -mt-2 ml-4 object-cover rounded-full z-10"/>
        
        </div>

      <div className='text-black flex gap-5 items-center justify-center'>
      <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M38.7244 15.0531C28.6106 16.0587 20.1675 23.443 17.8336 33.3238C17.5435 34.5523 17.2214 36.746 17.2214 37.4936C17.2214 37.8848 17.1849 37.9374 16.7621 38.1528C16.0972 38.492 14.827 39.814 14.4875 40.5203C13.8903 41.7627 13.8565 42.1014 13.8928 46.4985C13.9248 50.3715 13.9357 50.556 14.1689 51.1756C15.0169 53.4294 17.0861 54.9165 19.3825 54.9227C21.051 54.9271 22.2962 54.078 22.9256 52.5067C23.0919 52.0918 23.1104 51.4657 23.1104 46.2559C23.1104 40.9198 23.0948 40.4216 22.9122 39.8968C22.5397 38.8269 21.2907 37.7484 20.1774 37.5354C19.7894 37.4612 19.7929 37.548 20.0964 35.4713C21.0757 28.7716 25.6473 22.628 31.8398 19.6897C40.0379 15.7998 49.5021 17.4048 55.9231 23.7737C59.348 27.1709 61.5915 31.8533 62.0378 36.5355L62.1273 37.4746L61.7986 37.5375C61.1272 37.666 60.3825 38.1116 59.8333 38.7135C58.8695 39.7696 58.8934 39.6021 58.8479 45.6216C58.8061 51.1494 58.8584 52.0912 59.2529 52.9074C59.7044 53.8413 60.7803 54.676 61.7731 54.8624L62.1723 54.9375V56.526C62.1723 58.2651 62.048 58.9555 61.5515 59.9708C60.8851 61.3338 59.2745 62.47 57.682 62.7005C57.2693 62.7602 56.0561 62.81 54.986 62.8112L53.0404 62.8133L52.7973 62.2825C52.4777 61.5849 51.5408 60.7336 50.7452 60.4178C50.1781 60.1927 49.9135 60.1678 47.6956 60.1304C44.2712 60.0725 43.5054 60.268 42.3962 61.4834C40.5085 63.552 41.3313 66.7952 43.9973 67.7942C44.5639 68.0064 44.7784 68.0184 47.4707 67.987C50.3314 67.9538 50.3422 67.9528 50.9638 67.6611C51.6839 67.3231 52.5264 66.508 52.8126 65.8722L53.0108 65.4322L55.6736 65.3813C58.6885 65.3236 58.9345 65.2782 60.5329 64.4856C62.3171 63.6011 63.7543 61.9187 64.411 59.9455C64.6793 59.1399 64.7022 58.9207 64.7417 56.7852L64.7841 54.4908L65.3447 54.1738C66.0606 53.7693 67.1446 52.6111 67.5052 51.8657C68.0744 50.6891 68.1154 50.3087 68.1154 46.2018C68.1154 42.0882 68.0757 41.7221 67.499 40.5203C67.165 39.8243 65.8936 38.4939 65.2476 38.1644L64.8109 37.9418L64.6817 36.5527C64.0082 29.3194 60.1707 22.9517 54.0197 18.8608C50.9679 16.8311 47.2688 15.5009 43.5328 15.0896C42.6298 14.9902 39.5888 14.967 38.7244 15.0531ZM18.4516 40.2624C17.8308 40.483 17.1574 41.0938 16.8119 41.7499L16.519 42.3059V46.2018V50.0977L16.8093 50.6485C17.3224 51.6226 18.1491 52.1949 19.1777 52.2883C19.765 52.3417 19.8223 52.3252 20.1327 52.0143L20.463 51.6835V46.2018V40.7201L20.1472 40.4038C19.8911 40.1473 19.7428 40.0891 19.3638 40.096C19.1066 40.1007 18.6961 40.1757 18.4516 40.2624ZM61.8399 40.4038L61.524 40.7201V46.2018V51.6835L61.8399 51.9998C62.0809 52.2413 62.2554 52.3161 62.577 52.3161C63.6031 52.3161 64.6537 51.6439 65.1752 50.6537L65.468 50.0977V46.2559C65.468 42.4373 65.4665 42.4107 65.2099 41.8419C64.7533 40.8302 63.6389 40.0875 62.577 40.0875C62.2554 40.0875 62.0809 40.1623 61.8399 40.4038ZM44.7093 62.9194C43.7941 63.2898 43.7918 64.7993 44.706 65.2336C45.2339 65.4846 49.3741 65.4948 49.8965 65.2465C50.5447 64.9384 50.7933 64.1307 50.4465 63.4591C50.1388 62.8631 49.8897 62.8127 47.2931 62.8202C45.9976 62.8239 44.8349 62.8686 44.7093 62.9194Z" fill="black" stroke="#F4F5F7" stroke-width="1.23256"/>
<path d="M35.1487 37.8419C35.3301 37.4623 35.509 37.2819 35.8698 37.1147C36.6303 36.7624 37.5346 37.2607 37.7605 38.1566C38.0195 39.1837 36.9948 40.2518 36.0428 39.9472C35.1787 39.6707 34.7533 38.6691 35.1487 37.8419Z" fill="#3134FB"/>
<path d="M40.2167 39.7366C39.3292 39.1094 39.4196 37.6784 40.3797 37.1574C41.0704 36.7825 41.9135 37.1004 42.2608 37.8665C42.8749 39.2215 41.3987 40.5721 40.2167 39.7366Z" fill="#3134FB"/>
<path d="M44.2351 38.1566C44.3423 37.7315 44.8028 37.1746 45.1312 37.073C46.3619 36.6921 47.4101 37.9767 46.8408 39.1683C46.552 39.7731 45.9925 40.0765 45.3546 39.9743C44.6142 39.8557 44.0413 38.9254 44.2351 38.1566Z" fill="#3134FB"/>
</svg>

      <span className='inline-block  font-semibold my-10 text-3xl'>Destek Paketleri</span>
   
      </div>
      <Prices/>
      </div>
      </div>
      <div className='container'>
      <div className='text-white flex gap-5 items-center justify-center my-10 relative'>
      <img src={font}  className="w-96 absolute top-8 -left-28"/>
      <span className='inline-block  font-semibold my-10 text-5xl'>Ben Mehmet</span>
      </div>
      <div className='w-full p-4 shadow-inner  rounded-md text-gray-400 text-center '>
        <p>Yazılım geliştirmeye 8.sınıfta başladım ve günümüzde halen devam ediyorum. İlk yazılımım online bir oyun için
          script yazmak oldu. Bu script kullanıcı hesaplarını yönetme ve takip etme imkanı veriyordu. Lise yıllarımın sonuna doğru front-end geliştirmeye merak sardım.
          Herkesin idölleri olduğu gibi benimde birkaç tane vardı ve Tech titans girişimcileri ilk sıralarda yer alıyordu. Facebook projesinin aynısını yapmaya çalıştım
          ve ilk klon projemi başarılı şekilde tamamlamıştım. Bunun hevesiyle çitayı motto zirvesine çıkarmaya karar verdim. Motto zirvesinin gerçekleşmesi için fedakarlıklar
          yapmam gerekiyordu. Bu fedakarlıklar üniversite hayalimi 1 sene erteleme neden olsada sonunda hedefime ulaşmıştım. React.js öğrenmiş ve javascript konusunda kendimi geliştirmiştim.
          2020'de üniversite hayalimi kazandım ve gerçekleştirdim. 2022 sonunda bilgisayar programcılığı bölümünü myo birincisi olarak bitirdim. 2 senelik süreçte boş durmadım.
          Bu süreçte Patika.dev ve Turkcell Geleceği Yazanlar gibi platformlarda detaylı back-end ve front-end eğitimlerini tamamlayarak ileri seviye sertifikalar aldım.
          Sürekli gelişime aç olduğumu ve hayat boyu öğrenmeyi asla bırakmayacağımı farkettim. Bunun peşinden gitmem gerekiyordu ve gittim. Stajyerken java backend application yapmamı istediler.
          Bu application Java Enterprise Editionla çalışan takibi yapmam ardından oracle veritabanına kayıt etmemdi. E tabi bunun websocket kısmı vardı çalışanların takibini yaparken tatil günlerinde araçları
          kullandıkları tespit edilirse arabaya bağlı cihazdan realtime communication yapılması dahil idi. Eğitim aldığımı bildikleri için sanırsam sorun etmediler ama bir stajyer için zor bir proje olduğunu düşünüyorum.
          Çünkü arkasında çok iyi bir mühendislik yatmak zorunda ve onlarca araç olduğunu düşünürsek redisle caching işlemleri dahil bir çok scaling işlemi gerekiyordu. 1 hafta içerisinde başardım ve staj bitiminde
          Yazılım Destek Danışmanı olarak işe başladım. Şimdi ise Omreon Bilişim şirketinde güncel olarak çalışmaktayım. Uzun lafın kısası bu sektöre olan açlığımı kendime borçluyum.
          Elimden gelenin en iyisini yapmaya çalışacağım, seniorlar dahil bir çok ekip arkadaşımdan hayat boyu bilgi aktarımı yapacak ve alacağım. Unutmayın başarı ekip çalışmasında ve bizde saklıdır.  
        </p>
        <ul className='my-10'>
          <div className='flex gap-2 items-center my-5 justify-center'>
            
          <span className='inline-block my-2 font-semibold text-2xl text-white'>Yer aldığım projeler</span>
          </div>
          <li>Adplus kobi (Monolith, Springboot, React.js 14)</li>
          <li>İştesuit (Microservice, Springboot, Eureka, Spring Cloud, Apache Kafka, Dış entegrasyonlar ve React.js LTS)</li>
        </ul>
        <ul className='my-10'>
          <div className='flex gap-2 items-center my-5 justify-center'>
            
          <span className='inline-block my-2 font-semibold text-2xl text-white'>Geliştirdiğim diğer projeler</span>
          </div>
          <li>Araç Takip Arvento (Monolith, Springboot, React.js LTS)</li>
          <li>Pinterest (Monolith, Springboot, React.js LTS)</li>
          <li>Spotify (Monolith, Springboot, 2Auth Dış entegrasyonları ve React.js LTS)</li>
          <li>TikTok (Monolith, Springboot, Express.js | FFMPEG Sunucusu ve React.js LTS)</li>
        </ul>
         </div>
      </div>
          </div>
      <div 
      className={`flex-1  flex flex-col p-40  text-black relative bg-white`}>
        <div className='absolute -top-20 right-10 bg-[#fac6cc] w-72 h-60 flex items-center justify-center rounded-lg border-4 border-black'>
          <img src={glasses} className="w-44 h-32 "/>
        </div>
        <div className='absolute top-44 right-10 bg-primary w-72 h-20 flex items-center justify-center rounded-lg border-4 border-black font-semibold'>
          Button
        </div>
        <div className='container flex flex-col items-center z-10'>
          <h1 className='font-semibold text-4xl my-2'>İletişim</h1>
          <h1 className='font-normal text-2xl my-2'>Daha fazla bilgi veya sorularınız için</h1>
          <a href='https://www.linkedin.com/in/mehmetbasrioglu/' className='font-semibold text-2xl my-2'><b className='text-black rounded-full ' >Linkedin</b> üzerinden konuşabiliriz (: </a>
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
