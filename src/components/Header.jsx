import React from 'react'

export default function Header(){
  return (
    <header className="fixed w-full z-30 bg-transparent">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="text-xl font-semibold text-tealbrand">Kian Mwiberi Muchemi</div>
        <nav className="space-x-4 hidden md:block">
          <a href="#about" className="hover:text-tealbrand">About</a>
          <a href="#skills" className="hover:text-tealbrand">Skills</a>
          <a href="#projects" className="hover:text-tealbrand">Projects</a>
          <a href="#contact" className="hover:text-tealbrand">Contact</a>
        </nav>
      </div>
    </header>
  )
}
