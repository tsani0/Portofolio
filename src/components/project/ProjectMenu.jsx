import React from 'react';

const ProjectMenu = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center">
        <div className="md:w-1/3 mx-5 mb-5 p-4 rounded-2xl border border-white/10 bg-transparent shadow-lg shadow-white/5 backdrop-blur-lg text-gray-300 ">
          <img src="images/jagoit.png" alt="" className="w-[400px] h-[250px] mx-auto rounded-2xl pb-9" />
          <h3>TEACHING FACTORY PROJECT</h3>
          <span>School project to create a registration website for the JagooIT Talent Pool.<br /><br /></span>
          <a href="" className='border border-orange rounded-full py-2 px-4 text-lg hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan'>View</a>
        </div>
        <div className="md:w-1/3 mx-5 mb-5 p-4 rounded-2xl border border-white/10 bg-transparent shadow-lg shadow-white/5 backdrop-blur-lg text-gray-300">
          <img src="images/sproutify.png" alt="" className="w-[400px] h-auto mx-auto rounded-2xl pb-9" />
          <h3>SPOURTIFY</h3>
          <span>A responsive frontend for agricultural analysis. <br /> <br /></span>
          <a href="" className='border border-orange rounded-full py-2 px-4 text-lg hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan'>View</a>
        </div>
        <div className="md:w-1/3 m-5 p-4 rounded-2xl border border-white/10 bg-transparent shadow-lg shadow-white/5 backdrop-blur-lg text-gray-300">
          <img src="" alt="" />
          <h3>Zoozle</h3>
          <span>Sebuah game puzzle bertemakan kebun binatang yang dibuat dengan unity dengan bahasa C#.</span>
          <a href="" className='border border-orange rounded-full py-2 px-4 text-lg hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan'>View</a>
        </div>
        <div className="md:w-1/3 m-5 p-4 rounded-2xl border border-white/10 bg-transparent shadow-lg shadow-white/5 backdrop-blur-lg text-gray-300">
          <img src="" alt="" />
          <h3>SPOURTIFY</h3>
          <span>Spourtify merupakan website untuk membantu petani menganalisa suatu tanaman beserta tanahnya</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectMenu;
