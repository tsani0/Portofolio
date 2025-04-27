import React from 'react'
import AboutMeImage from './AboutMeImage'
import HeroText from '../heroSection/HeroText'

const AboutMeMain = () => {
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 px-4 max-w-[1200px] mx-auto justify-between items-center mt-[-10px]' id='home'>
        <HeroText className="order-1 sm:order-2 flex justify-center" />
        <AboutMeImage className="order-2 md:order-1" />
    </div>
  )
}

export default AboutMeMain
