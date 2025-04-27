import React from 'react'
import Marquee from 'react-fast-marquee'

const SubHeroSection = () => {
  return (
    <div className='w-full border-y border-lightGrey text-lightGrey flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 items-center bg-black/30 backdrop-blur-6xl  mt-[-100px]'>
        <Marquee>
          <p>Fast Learner</p>
          <span className="mx-2">•</span>
          <p>Team Work</p>
          <span className="mx-2">•</span>
          <p>Problem Solving</p>
          <span className="mx-2">•</span>
          <p>Time Management</p>
          <span className="mx-2">•</span>
          <p>Creative</p>
          <span className="mx-2">•</span>
          <p>Public Speaking</p>
          <span className="mx-2">•</span>
        </Marquee>
    </div>
  )
}

export default SubHeroSection
