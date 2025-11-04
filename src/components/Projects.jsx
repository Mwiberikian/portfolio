import React from 'react'
import ph from '../assets/project-placeholder.png'


const projects = [
  {
    title: 'School Clubs Management System',
    desc: 'A web system to manage clubs, memberships, and events for schools.',
    link: 'https://github.com/Mwiberikian?tab=repositories'
  },
  {
    title: 'Flea Market Mobile Application',
    desc: 'A mobile app for buying and selling second-hand goods, focused on student budgets.',
    link: 'https://github.com/Mwiberikian?tab=repositories'
  },
  {
    title: 'RealEstate Management System',
    desc: 'A property listing and management platform for landlords and tenants.',
    link: 'https://github.com/Mwiberikian?tab=repositories'
  }
]

export default function Projects(){
  return (
    <section id="projects" className="py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map(p => (
            <div key={p.title} className="bg-gray-800 p-4 rounded">
              <img src={ph} alt="project" className="w-full h-36 object-cover rounded mb-3" />
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-gray-300 text-sm my-2">{p.desc}</p>
              <a href={p.link} target="_blank" rel="noreferrer" className="text-tealbrand font-medium">View on GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
