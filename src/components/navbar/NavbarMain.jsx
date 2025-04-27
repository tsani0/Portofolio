import React from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarBtn from './NavbarBtn'
import NavbarLinks from './NavbarLinks'
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';

const Navbarmain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className='max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4  mt-7'>
        <div className='flex justify-between w-full max-w-[1200px] mx-auto  bg-black/30 backdrop-blur-md items-center p-3 rounded-r-full rounded-l-full border-orange border-[0.5px]'>
        <NavbarLogo />
        <div className={`${menuOpen ? 'sm:block' : 'sm:hidden'} lg:block`}>
        <NavbarLinks />
        </div>
        <NavbarBtn />
        </div>
        <div className='flex lg:hidden sm:block p-6 bg-black/30 backdrop-blur-md items-center justify-center rounded-full border-[0.5px] border-orange'>
          <button className='text-2xl p-3 border border-orange rounded-full text-white' 
          onClick={toggleMenu}>
            <RxHamburgerMenu />
          </button>
        </div>
    </nav>
  )
}

export default Navbarmain