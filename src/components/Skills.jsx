import React from 'react'

const tech = ['HTML', 'CSS', 'JavaScript', 'MySQL', 'PostgreSQL', 'Git & GitHub']
const soft = ['Teamwork', 'Problem-Solving', 'Communication', 'Leadership']

export default function Skills(){
  return (
    <section id="skills" className="py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Technical</h3>
            <ul className="space-y-2">
              {tech.map(t => (
                <li key={t} className="text-gray-300">• {t}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Soft Skills</h3>
            <ul className="space-y-2">
              {soft.map(s => (
                <li key={s} className="text-gray-300">• {s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
