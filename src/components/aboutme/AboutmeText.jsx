import React from 'react'

const AboutmeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
        <h2 className='text-6xl text-cyan mb-10'>About ME</h2>
        <p className='text-white w-[600px] sm:w-[400px]'>I am a student at SMKN 4 Bandung majoring in Software Engineering. I am interested in the fields of UI/UX Design and Front-End Development. Due to my passion for these areas, I have mastered several tools such as HTML, CSS, and JavaScript. I have also studied PHP along with its framework, Laravel. I enjoy creating innovative, responsive, and functional websites.</p>
        <a href='#portofolio' className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan'>MyProject</a>
    </div>
  )
}

export default AboutmeText