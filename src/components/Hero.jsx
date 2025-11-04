import React from 'react'
import { motion } from 'framer-motion'
import profile from '../assets/profile.svg'

export default function Hero(){
  return (
    <section id="home" className="pt-28 pb-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 initial={{ y: -20, opacity:0 }} animate={{ y:0, opacity:1 }} className="text-3xl md:text-5xl font-bold">
          Kian Mwiberi Muchemi
        </motion.h1>
        <p className="mt-4 text-tealbrand font-medium">Computer Scientist and Database Enthusiast</p>
        <p className="mt-6 text-gray-300">Nairobi, Kenya &nbsp;•&nbsp; muchemikian@gmail.com</p>

        <div className="mt-6 flex items-center justify-center space-x-4">
          <a href="https://github.com/Mwiberikian" target="_blank" rel="noreferrer" className="px-4 py-2 border border-gray-700 rounded hover:bg-gray-800">GitHub</a>
          <a href="https://www.linkedin.com/in/kian-muchemi-03820b382/" target="_blank" rel="noreferrer" className="px-4 py-2 border border-gray-700 rounded hover:bg-gray-800">LinkedIn</a>
          <a href="#projects" className="px-4 py-2 bg-tealbrand rounded text-black font-semibold">View Projects</a>
        </div>

        <div className="mt-8 flex items-center justify-center">
          <img src={profile} alt="profile" className="w-36 h-36 rounded-full border-4 border-gray-800 object-cover"/>
        </div>
      </div>
    </section>
  )
}
