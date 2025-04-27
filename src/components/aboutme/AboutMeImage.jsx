import React from 'react';
import Spline from '@splinetool/react-spline';

const AboutMeImage = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center md:mt-0 md:scale-100 sm:mt-[-160px] sm:items-center sm:scale-75">
      <div className="w-full h-full flex items-center justify-center mt-20 sm:transform">
        <Spline
          scene="https://prod.spline.design/zVCWE3GQfx1m2pXP/scene.splinecode"
          style={{
            width: "100%",  // Pastikan menggunakan 100% agar muat di kontainer
            height: "100%",
            objectFit: "contain", // Menjaga agar konten tidak terpotong
          }}
        />
      </div>
    </section>
  );
};

export default AboutMeImage;