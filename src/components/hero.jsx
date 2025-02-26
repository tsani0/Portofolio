import { motion } from "framer-motion";
import Image from "../assets/images/img.png";

export default function Hero() {
  return (
    <div className="relative overflow-visible">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* Container untuk gambar */}
        <motion.div  className="h-full w-full top-0 left-[-80px] absolute  object-contain">
          <img
            src={Image}
            alt="foto"
            priority
            quality={100}
            fill
            className="object-contain"
          />
        </motion.div>

        {/* SVG ditempatkan di atas gambar */}
        <motion.svg
  className="absolute top-[-50px] left-0 w-[506px] h-[506px] xl:w-[600px] xl:h-[600px] z-10"
  viewBox="0 -50 506 506"
  xmlns="http://www.w3.org/2000/svg"
>
  <motion.circle
    cx="286"
    cy="183"
    r="210"
    stroke="#00ff99"
    strokeWidth="4"
    fill="none"
    initial={{ strokeDasharray: "24 10 0 0", opacity: 0 }}
    animate={{
      strokeDasharray: ["15 120 25 250", "16 25 92 72", "4 250 22 22"],
      rotate: [120, 360],
      opacity: 1,
    }}
    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
  />
</motion.svg>


      </motion.div>
    </div>
  );
}
