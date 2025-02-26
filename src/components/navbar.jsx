import { useEffect, useState } from "react";
import logo from "../assets/images/sani.png"

export default function Navbar() {
    const [show, setShow] = useState(false);
    const [scroll, setScroll] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    function handleClick() {
        setShow(!show);
    }

    let menuActive = show ? "left-0" : "-left-full";

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 5);
            setShow(false);
    
            const sections = ["home", "about", "portofolio", "sertif"];
            let currentSection = "home"; // Default ke home
    
            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3) {
                        currentSection = section;
                    }
                }
            });
            setActiveSection(currentSection);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    

    let scrollActive = scroll ? "py-6 bg-transparent backdrop-blur-md shadow" : "py-4";

    const navItems = [
        { label: "Beranda", href: "#home" },
        { label: "About Me", href: "#about" },
        { label: "Portofolio", href: "#portofolio" },
        { label: "sertification", href: "#sertif" },
    ];

    return (
        <div className={`navbar fixed w-full transition-all z-50 ${scrollActive}`}>
            <div className="container mx-auto px-4">
                <div className="navbar-box flex items-center justify-between">
                    <div className="logo ">
                        <h1 className="sm:text-2xl text-xl font-bold">
                            <img src={logo} alt="logo" className="w-15 p-0 m-0"/>
                        </h1>
                    </div>
                    <ul className={`flex lg:gap-12 gap-8 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:text-black md:p-0 md:m-0 md:transition-none fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg shadow-slate-300 bg-sky-400 font-bold text-white transition-all`}>
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className={`group relative px-1 py-2 text-sm font-medium transition-colors duration-300 ${
                                        activeSection === item.href.substring(1)
                                            ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent font-semibold"
                                            : "text-[#e2d3fd] group-hover:text-white"
                                    }`}
                                >
                                    {item.label}
                                    <span
                                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transform origin-left transition-transform duration-300 ${
                                            activeSection === item.href.substring(1)
                                                ? "scale-x-100"
                                                : "scale-x-0 group-hover:scale-x-100"
                                        }`}
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="social flex items-center gap-2">
                        <a href="#sosial" className="bg-sky-500 px-5 py-2 rounded-full text-white font-bold hover:bg-sky-500">Sosial Media</a>
                        <svg className="md:hidden block" onClick={handleClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M18 18V20H6V18H18ZM21 11V13H3V11H21ZM18 4V6H6V4H18Z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
