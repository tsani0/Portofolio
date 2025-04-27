import React from 'react'
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <div className='w-full flex items-center justify-center'>
        <img src="/images/hexaa.png" alt="Hasna Tsaniya" className='max-h-[1200px] h-auto sm:h-[450px]' />

        <div className='absolute -z-10 flex justify-center items-center animate-pulse'>
            <PiHexagonThin className='md:-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]' />
        </div>
    </div>
  )
}

export default HeroPic
