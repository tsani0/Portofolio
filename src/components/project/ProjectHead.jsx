import React from 'react';
import { BsProjectorFill } from "react-icons/bs";
import { FaExclamationCircle } from "react-icons/fa";

const ProjectHead = ({ setIndex, index }) => {
  return (
    <div className='services mt-50 pt-25'>
      <h1 className='text-6xl text-cyan mb-5 text-center'>Portofolio</h1>
      <p className="text-center text-white mb-3">This is my Project and my skills</p>
      <div className='flex justify-center'>
        <div className="md:w-[1200px] sm:w-[600px] flex justify-around mx-[20px]  rounded-2xl border border-white/10 bg-transparent shadow-lg shadow-white/5 backdrop-blur-lg text-gray-300">
          {/* Button Project */}
          <button 
            onClick={() => setIndex(0)} 
            className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-500`}
          >
            <BsProjectorFill 
              size={40} 
              className={`${index === 0 ? "text-[#6366f1]" : "text-gray-400"}`} 
            />
            <span className={`text-lg ${index === 0 ? "text-gradient bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]" : "text-gray-400"}`}>
              Project
            </span>
          </button>

          {/* Button Skills */}
          <button 
            onClick={() => setIndex(1)} 
            className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-500`}
          >
            <FaExclamationCircle 
              size={40} 
              className={`${index === 1 ? "text-[#6366f1]" : "text-gray-400"}`} 
            />
            <span className={`text-lg ${index === 1 ? "text-gradient bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]" : "text-gray-400"}`}>
              Skill
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectHead;
