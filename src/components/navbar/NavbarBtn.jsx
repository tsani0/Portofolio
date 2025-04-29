import React from 'react';
import { FaArrowUpFromBracket } from "react-icons/fa6";

const NavbarBtn = () => {
  return (
    <a 
      href="/cv.pdf"
      download="Hasna_CV"
      className='px-4 py-2 rounded-full text-xl font-bold font-body text-white border border-cyan flex items-center gap-1 bg-gradient-to-r from-[#62cdff] to-[#655dbb] transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow'
    >
      My CV
      <div className='sm:hidden md:block'>
        <FaArrowUpFromBracket />
      </div>
    </a>
  );
}

export default NavbarBtn;
