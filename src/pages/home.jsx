import React from "react";
import HeroImage from "../assets/images/hero.svg";
import AboutImage from "../assets/images/about.svg";
import TypeIt from "typeit-react";
import SwipeableViews from "react-swipeable-views"; 
import pcss from "../assets/images/css.svg";
import phtml from "../assets/images/html.svg";
import js from "../assets/images/javascript.svg";
import react from "../assets/images/reactjs.svg";
import tailwind from "../assets/images/tailwind.svg";
import laravel from "../assets/images/image.png";
import Sertif from '../components/sertif';
import Hero from '../components/hero';
import Meteor from "../components/meteors";
import { useEffect,useState } from "react";
import { motion } from "framer-motion";


export default function Home() {
    
  const [instance, setInstance] = useState (null)
  const [index, setindex] = useState(0)

  const handleChangeIndex = (index) => {
    setindex(index);
  }

  
    return (
      //Homepage
      <div id="home" className="homepage pt-30 pl-20  pr-20">
        <div className="container mx-auto px-4">
        <div className="hero grid md:grid-cols-2 grid-cols-1  gap-20 pt-3 ml-100 ">
          <div className="absolute">
        <motion.div
          className="absolute size-[500px] rounded-full border-2 border-emerald-300/10"
          animate={{ scale: [1, 1.5], opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
        />
        <motion.div
          className="absolute size-[500px] rounded-full border-2 border-emerald-300/20"
          animate={{ scale: [1, 1.8], opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeOut" }}
        />
      </div>
            <div className="relative text-center size-[500px] border-2 text-white top-0 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5 flex flex-col justify-center items-center bg-black/20 backdrop-blur-lg">
              <h1 className="text-5xl lg:text-6xl  xl:text-7xl font-bold tracking-tight mt-30">
                <span className="relative inline-block">
                  <span className="absolute -inset-0.5 bg-gradient-to-r from-[#88B990] to-[#ABCD9E] blur-2xl opacity-40"></span>
                  <span className="relative bg-gradient-to-r from-white via-blue-200 to-[#9EC8B9] bg-clip-text text-transparent">HELLO, I AM </span>
                </span>
               
                <span className="relative inline-block mt-3">
                <span className="absolute -inset-0.5 bg-gradient-to-r from-[#88B990] to-[#ABCD9E] blur-2xl opacity-20"></span>
                <span className="relative bg-gradient-to-r from-white via-blue-200 to-[#9EC8B9] bg-clip-text text-transparent">HASNA</span>
                </span>
              </h1>
              <div className="Typescript">
              <TypeIt
              className="text-white md:text-3xl text-xl"
              options={{ loop: true }}
              style={{ "--ti-cursor-color": "red" }}
              getAfterInit={(instance) => {
                setInstance(instance);
                return instance;
              }}
            >
              I am a{" "}
              <span className="bg-gradient-to-r from-green-400 to-green-700 bg-clip-text text-transparent">
                Front End Developer
              </span>
            </TypeIt>

              </div>
              <p className="text-base/8 mb-7 text-center text-white">a student majoring in software engineering at SMK 4 Bandung</p>
              <a href="#" className="bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white rounded-full">Tentang Saya </a>
            </div>
            
            <div className="box mr-20">

            </div>
          </div>


                {/*About*/}
          <div id="about" className="about grid md:grid-cols-2 grid-cols-1 items-center gap-20 md:pt-20 pb-10">
            <div className="box md:order-1 order-2 mb-40">
              <Hero />
            </div>
            <div className="box md:order-2 order-1 mt-50">
              <h1 className="lg:text-6xl/tight text-3xl font-medium mb-7 text-left text-white">ABOUT ME</h1>
              <p className="text-base/loose text-left text-white">Saya Merupakan seorang siswa SMKN 4 Bandung jurusan Rekayasa Perangkat Lunak. Saya tertarik pada bidang UI/UX Design serta Front End Developer, karena ketertarikan saya akan bidang tersebut saya menguasai beberapa tollsnya seperti HTML, CSS, dan juga JavaScript. Saya juga mempelajari php beserta frameworknyaa yakni Laravel. Saya senang untuk membuat sebuah web yang inovatif, responsif dan fungsional.</p>
            </div>
          </div>

                {/*Project*/}
          <div id="portofolio" className="services mt-50 pt-25">
            <h1 className="text-center lg:text-6xl/tight text-3xl font-medium mb-2 text-white">Portofolio</h1>
            <p className="text-center text-white">This my Project and my sklills</p>
            <div className="md:w-3xl flex justify-around mx-auto p-4 rounded-2xl border border-white/10 bg-transparent shadow-lg shadow-white/5 backdrop-blur-lg text-gray-300">
            <button 
  onClick={() => setindex(0)} 
  className="flex flex-col items-center"
>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width="48" 
    height="48" 
    className={`${
      index === 0 
        ? "text-[#6366f1]" 
        : "text-gray-400 opacity-70"
    }`}
    fill="currentColor"
  >
    <path d="M13 21V23H11V21H3C2.44772 21 2 20.5523 2 20V6H22V20C22 20.5523 21.5523 21 21 21H13ZM4 19H20V8H4V19ZM13 10H18V12H13V10ZM13 14H18V16H13V14ZM9 10V13H12C12 14.6569 10.6569 16 9 16C7.34315 16 6 14.6569 6 13C6 11.3431 7.34315 10 9 10ZM2 3H22V5H2V3Z"></path>
  </svg>
  <span 
    className={`${
      index === 0
        ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent"
        : "text-gray-400 opacity-70"
    }`}
  >
    Project
  </span>
</button>

<button 
  onClick={() => setindex(1)} 
  className="flex flex-col items-center"
>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width="48" 
    height="48" 
    className={`${
      index === 1 
        ? "text-[#6366f1]" 
        : "text-gray-400 opacity-70"
    }`}
    fill="currentColor"
  >
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 110-16 8 8 0 010 16zm1-13h-2v6h2V7zm0 8h-2v2h2v-2z"></path>
  </svg>
  <span 
    className={`${
      index === 1
        ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent"
        : "text-gray-400 opacity-70"
    }`}
  >
    Skills
  </span>
</button>

            </div>

            {/*Project & skills content*/}
                
            <div>
              <SwipeableViews index={index} onChange={handleChangeIndex}>
                <div className="grid grid-cols-2">
                <div className="w-xl m-5 p-4 rounded-2xl border border-white/10 bg-transparent shadow-lg shadow-white/5 backdrop-blur-lg text-gray-300">
                  <img src="" alt="" />
                  <h3>TEACHING FACTORY PROJECT</h3>
                  <span>Sebuah project untuk membuat forum pendaftaran talent untuk perusahaan Jagoo Talenta Indonesia Serta membuat analisis performa talent</span>
                </div>
                <div className="w-xl m-5 p-4 rounded-2xl border border-white/10 bg-transparent shadow-lg shadow-white/5 backdrop-blur-lg text-gray-300">
                  <img src="" alt="" />
                  <h3>SPOURTIFY</h3>
                  <span>Spourtify merupakan website untuk membantu petani menganalisa suatu tanaman beserta tanahnya</span>
                </div>
                <div className="w-xl m-5 p-4 rounded-2xl border border-white/10 bg-transparent shadow-lg shadow-white/5 backdrop-blur-lg text-gray-300">
                  <img src="" alt="" />
                  <h3>Zoozle</h3>
                  <span>Sebuah game puzzle bertemakan kebun binatang yang dibuat dengan unity dengan bahasa C#.</span>
                </div>
                <div className="w-xl m-5 p-4 rounded-2xl border border-white/10 bg-transparent shadow-lg shadow-white/5 backdrop-blur-lg text-gray-300">
                  <img src="" alt="" />
                  <h3>SPOURTIFY</h3>
                  <span>Spourtify merupakan website untuk membantu petani menganalisa suatu tanaman beserta tanahnya</span>
                </div>
                </div>
                {/*skill*/}
                <div className="grid grid-cols-3 mx-auto text-center place-items-center">
                    <div className="p-4 w-[10rem] h-auto m-5 rounded-2xl border border-white/10 bg-transparent shadow-lg shadow-white/5 backdrop-blur-lg text-gray-300">
                        <img src={pcss} alt="CSS LOGO" className="w-32"/>
                        <span>CSS</span>
                    </div>
                    <div className="p-4 w-[10rem] h-auto m-5 rounded-2xl border border-white/10 bg-transparent shadow-lg shadow-white/5 backdrop-blur-lg text-gray-300">
                        <img src={phtml} alt="CSS LOGO" className="w-32"/>
                        <span>HTML</span>
                    </div>
                    <div className="p-4 w-[10rem] h-auto m-5 rounded-2xl border border-white/10 bg-transparent shadow-lg shadow-white/5 backdrop-blur-lg text-gray-300">
                        <img src={js} alt="CSS LOGO" className="w-32"/>
                        <span>JavaScript</span>
                    </div>
                    <div className="p-4 w-[10rem] h-auto m-5 rounded-2xl border border-white/10 bg-transparent shadow-lg shadow-white/5 backdrop-blur-lg text-gray-300">
                        <img src={react} alt="CSS LOGO" className="w-32"/>
                        <span>ReactJS</span>
                    </div>
                    <div className="p-4 w-[10rem] h-auto m-5 rounded-2xl border border-white/10 bg-transparent shadow-lg shadow-white/5 backdrop-blur-lg text-gray-300">
                        <img src={tailwind} alt="CSS LOGO" className="w-32"/>
                        <span>Tailwind CSS</span>
                    </div>
                    <div className="p-4 w-[10rem] h-auto m-5 rounded-2xl border border-white/10 bg-transparent shadow-lg shadow-white/5 backdrop-blur-lg text-gray-300">
                        <img src={laravel} alt="CSS LOGO" className="w-32"/>
                        <span>Laravel</span>
                    </div>
                </div>
              </SwipeableViews>
            </div>
            
            <div>
              <Sertif />
            </div>

          </div>
        </div>
      </div>
    )
  }