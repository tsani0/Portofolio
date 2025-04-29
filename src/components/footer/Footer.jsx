import React from 'react'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaInstagram,FaWhatsapp } from 'react-icons/fa6';
import { CiLocationOn } from "react-icons/ci";
const Footer = () => {
  return (
    <footer className='bg-[#213448] px-4 md:px-16 lg:px-28 text-white mt-32'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='mt-6'>
                <h2 className='text-lg font-bold mb-4'>Business Inquiries</h2>
                <div className='flex gap-2'>
                    <MdOutlineMarkEmailUnread />
                    <p>hsnTsaniyah@gmail.com</p>
                </div>
                <div className='flex gap-2'>
                    <CiLocationOn />
                    <p>Sukapura St. Number 95, Bandung, West Java</p>
                </div>
            </div>
            <div className='grid grid-cols-1 mb-2 mt-6'>
                <h2 className='text-lg font-bold mb-4'>Website Pages</h2>
                <a href="#about">About Me</a>
                <a href="#portofolio">Project-Skill</a>
                <a href="#experience">Experiences</a>
            </div>
            <div>
                <h2 className='text-lg font-bold mb-4 mt-6'>Contact Me</h2>
                <div className='flex mb-5'>
                    <FaInstagram className='size-8'/>
                    <FaWhatsapp className='size-8' />
                </div>
            </div>
            
        </div>
        <div>
            <p className='border-gray-600 border-t p-4 text-grey-300 text-center'>Copyright © 2025 Hasna Tsaniya Hidayat, All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer