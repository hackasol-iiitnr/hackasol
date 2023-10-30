"use client";
import localFont from "next/font/local";
import Image from "next/image";
const myFont = localFont({ src: "../font/Minecrafter.Alt.ttf" });
import { createContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ParticleAnimation from "./particleAnimation";

export default function Home() {
   const pixelatedAndNeonText = {
    initial: {
      textShadow:
        "10px 10px 0 rgba(255, 255, 255, 0.3), 20px 20px 0 rgba(255, 255, 255, 0.3), 3px 3px 0 rgba(255, 255, 255, 0.3), 4px 4px 0 rgba(255, 255, 255, 0.3), 5px 5px 0 rgba(255, 255, 255, 0.3), 0 0 10px rgba(255, 0, 228, 0.5), 0 0 20px rgba(255, 0, 228, 0.5), 0 0 30px rgba(255, 0, 228, 0.5), 0 0 40px rgba(255, 0, 228, 0.5), 0 0 70px rgba(255, 0, 228, 0.5), 0 0 80px rgba(255, 0, 228, 0.5), 0 0 100px rgba(255, 0, 228, 0.5), 0 0 150px rgba(255, 0, 228, 0.5)",
      transform: "translateZ(0)",
    },
    animate: {
      textShadow:
        "1px 1px 0 rgba(255, 255, 255, 0.4), 2px 2px 0 rgba(255, 255, 255, 0.4), 3px 3px 0 rgba(255, 255, 255, 0.4), 4px 4px 0 rgba(255, 255, 255, 0.4), 5px 5px 0 rgba(255, 255, 255, 0.4), 0 0 10px rgba(255, 0, 228, 0.6), 0 0 20px rgba(255, 0, 228, 0.6), 0 0 30px rgba(255, 0, 228, 0.6), 0 0 40px rgba(255, 0, 228, 0.6), 0 0 70px rgba(255, 0, 228, 0.6), 0 0 80px rgba(255, 0, 228, 0.6), 0 0 100px rgba(255, 0, 228, 0.6), 0 0 150px rgba(255, 0, 228, 0.6)",
      transform: "translateZ(5px)",
    },
  };
  
  return (
    <>
      <nav className="fixed top-0 left-0 h-20 w-full z-50 flex items-center justify-between  px-20 py-1">
        <div>
          <a href="#home">
            <Image
              src="/logo.png"
              width={60}
              height={60}
              className="object-cover"
            />
          </a>
        </div>
        <div className="flex md:hidden">
          <button className="bg-violet-700 gap-x-2 px-4 py-2">
            Contact Us
          </button>
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-lg gap-x-10">
            <li className="cursor-pointer  hover:text-violet-600 hover:-rotate-3 hover:scale-[1.1] transition">
              <a href="#about-us">About Us</a>
            </li>
            <li className="cursor-pointer  hover:text-violet-600 hover:-rotate-3 hover:scale-[1.1] transition">
              <a href="#schedule">Schedule</a>
            </li>
            <li className="cursor-pointer  hover:text-violet-600 hover:-rotate-3 hover:scale-[1.1] transition">
              <a href="#prizes">Prizes</a>
            </li>
            <li className="cursor-pointer  hover:text-violet-600 hover:-rotate-3 hover:scale-[1.1] transition">
              <a href="#sponsors">Sponsors</a>
            </li>
          </ul>
        </div>
      </nav>
      <div
        id="home"
        className=" select-none w-full min-h-screen bg-no-repeat bg-center bg-cover bg-fixed px-8 md:px-20"
        style={{
          backgroundImage: "url(/bg4.png)",
          opacity: 0.9,
        }}
      >
        <div className="h-screen w-full flex flex-col items-center justify-center z-10 ">
          <div className="mb-10">
            <AnimatePresence>
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
            >
              <motion.h1
                style={myFont.style}
                className="text-5xl md:text-9xl font-semibold  text-purple-700/90 neon-text animate__animated"
                variants={pixelatedAndNeonText}
                initial="initial"
                animate="animate"
              >
                HACK-A-SOL
              </motion.h1>
              <motion.p
                className="text-center text-lg mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                variants={pixelatedAndNeonText}
              >
                20th - 21st Nov, 2023 • Naya Raipur, India
              </motion.p>
            </motion.div>
            </AnimatePresence>
          </div>

          <div className="hidden md:flex gap-x-20 mt-10">
            <button className="bg-indigo-500 flex items-center gap-x-2 px-4 py-2 hover:scale-105 group transition">
              <Image
                src="/discord.svg"
                width={25}
                height={25}
                className="object-cover group-hover:-rotate-12 group-hover:scale-125 group-hover:-translate-x-1 transition"
              />
              <p className="text-lg font-semibold">Join Our Discord</p>
            </button>
            <button className="bg-blue-500 flex items-center gap-x-2 px-4 py-2 hover:scale-105 group transition">
              <Image
                src="/dev.svg"
                width={20}
                height={20}
                className="object-cover group-hover:-rotate-12 group-hover:scale-125  group-hover:-translate-x-1 transition"
              />
              <p className="text-lg font-semibold">Apply with Devfolio</p>
            </button>
          </div>
          <div className="flex md:hidden gap-x-10 mt-6">
            <button className="bg-indigo-500 flex items-center gap-x-2 px-4 py-2 hover:scale-105 group transition">
              <Image
                src="/discord.svg"
                width={25}
                height={25}
                className="object-cover group-hover:-rotate-12 group-hover:scale-125 group-hover:-translate-x-1 transition"
              />
              <p className="text-lg font-semibold">Discord</p>
            </button>
            <button className="bg-blue-500 flex items-center gap-x-2 px-4 py-2 hover:scale-105 group transition">
              <Image
                src="/dev.svg"
                width={20}
                height={20}
                className="object-cover group-hover:-rotate-12 group-hover:scale-125  group-hover:-translate-x-1 transition"
              />
              <p className="text-lg font-semibold">Devfolio</p>
            </button>
          </div>
        </div>
      </div>
      <div
        id="about-us"
        className="w-full min-h-screen bg-no-repeat bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: "url(/bg3.png)",
          opacity: 1,
        }}
      ></div>
      <div
        id="schedule"
        className="w-full min-h-screen bg-no-repeat bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: "url(/bg2.png)",
          opacity: 1,
        }}
      ></div>
      <div
        id="prizes"
        className="w-full flex items-center justify-center min-h-screen bg-no-repeat bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: "url(/bg.png)",
          opacity: 1,
        }}
      >
        <div className="flex items-center gap-x-20">
          <div className="relative w-64 h-96 bg-gradient-to-tr from-slate-900 to-slate-700 group ">
            <div
              className="bg-slate-600 w-64 h-96 absolute top-2 left-2"
              draggable
            >
              <div
                className="p-5 border w-full h-full bg-red object-contain"
                style={{
                  backgroundImage: "url(/pp.png)",
                  opacity: 1,
                }}
              ></div>
              {/* <div>
                <Image src='/hero.png' width={100} height={300} alt="hero" />

              </div>
              <div className="pr-6">
                <h1 className="text-3xl">1st Prize</h1>
                <p>$1000</p>
              </div> */}
            </div>
          </div>
          <div className="relative w-72 h-44 bg-gradient-to-tr from-yellow-400 to-pink-400">
            <div className="bg-white w-72 h-44 absolute top-[6px] left-[6px]"></div>
          </div>
          <div className="relative w-72 h-44 bg-gradient-to-tr from-yellow-400 to-pink-400">
            <div className="bg-white w-72 h-44 absolute top-[6px] left-[6px] "></div>
          </div>
        </div>
      </div>
      <div
        id="sponsors"
        className="w-full min-h-screen bg-no-repeat bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: "url(/bg5.png)",
          opacity: 1,
        }}
      ></div>
      <div
        id="contact-us"
        className="w-full min-h-screen bg-no-repeat bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: "url(/bg6.png)",
          opacity: 1,
        }}
      ></div>
    </>
  );
}
