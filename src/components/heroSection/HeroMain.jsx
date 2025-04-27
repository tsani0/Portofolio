import React from 'react'
import HeroText from './HeroText'
import HeroPic from './HeroPic'
import HeroGradient from './HeroGradient'
import AboutmeText from '../aboutme/AboutmeText'

const HeroMain = () => {
  return (
    <div className='pt-40 pb-16' id='about'>
        <div className='flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[-8px] justify-between items-center'>
        <AboutmeText  />
        <HeroPic />
        
        </div>
    </div>
  )
}

export default HeroMain
