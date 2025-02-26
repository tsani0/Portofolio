import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Meteor = () => {
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Math.random();
      setMeteors((prev) => [
        ...prev,
        {
          id,
          x: Math.random() * window.innerWidth, // Posisi awal random
          size: Math.random() * 6 + 4, // Ukuran 4 - 10px
          speed: Math.random() * 2 + 1, // Kecepatan 1 - 3 detik
          color: `hsl(${Math.random() * 50 + 200}, 100%, 70%)`, // Warna neon biru/purple
        },
      ]);

      setTimeout(() => {
        setMeteors((prev) => prev.filter((meteor) => meteor.id !== id));
      }, 3000);
    }, 400); // Muncul tiap 0.4 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {meteors.map(({ id, x, size, speed, color }) => (
        <motion.div
          key={id}
          initial={{ x, y: -50, opacity: 1 }}
          animate={{ x: x + 400, y: window.innerHeight, opacity: 0 }} // Jatuh miring kanan bawah
          transition={{ duration: speed, ease: "linear" }}
          className="absolute"
          style={{
            left: x,
            width: size,
            height: size * 6,
            background: `linear-gradient(90deg, ${color}, transparent)`,
            filter: "blur(4px)", // Blur halus untuk efek neon
            transform: "rotate(30deg)", // Miring ke kanan
            borderRadius: "50%",
            boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`, // Glow ala Magic UI
          }}
        />
      ))}
    </div>
  );
};

export default Meteor;
