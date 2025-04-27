import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

// Array skill dengan nama dan ikon
const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Redux",
    icon: SiRedux,
  },
  {
    skill: "NextJS",
    icon: SiNextdotjs,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
];

const SkillMenu = () => {
  return (
    <div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 max-w-[1200px] mx-auto p-6">
        {skills.map((item, index) => (
          <div key={index} className="flex flex-col items-center p-4 rounded-2xl border border-white/10 bg-transparent shadow-lg shadow-white/5 backdrop-blur-lg text-gray-300">
            <item.icon size={50} />
            <span className="mt-2">{item.skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillMenu;
