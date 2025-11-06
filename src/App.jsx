import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown, MapPin } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "School Clubs Management System",
      description: "A comprehensive web application for managing school clubs, member registrations, events, and activities with an intuitive admin dashboard.",
      tech: ["JavaScript", "MySQL", "HTML", "CSS"],
      github: "https://github.com/Mwiberikian"
    },
    {
      title: "Flea Market Mobile Application",
      description: "Mobile marketplace application enabling users to buy and sell second-hand items locally with real-time chat and location-based search.",
      tech: ["JavaScript", "Database", "UI/UX"],
      github: "https://github.com/Mwiberikian"
    },
    {
      title: "Real Estate Management System",
      description: "Full-featured property management platform with listings, client management, and transaction tracking capabilities.",
      tech: ["JavaScript", "PostgreSQL", "HTML", "CSS"],
      github: "https://github.com/Mwiberikian"
    }
  ];

  const skills = [
    { 
      category: "Frontend Development", 
      items: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX Design"] 
    },
    { 
      category: "Database Management", 
      items: ["MySQL", "PostgreSQL", "Database Design", "Query Optimization"] 
    },
    { 
      category: "Tools & Soft Skills", 
      items: ["Git & GitHub", "Problem-Solving", "Teamwork", "Communication", "Leadership"] 
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-950/95 backdrop-blur-md shadow-lg shadow-teal-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-teal-400">
              KMM
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${activeSection === item ? 'text-teal-400' : 'text-gray-300 hover:text-teal-400'}`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button className="md:hidden text-teal-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-950/98 backdrop-blur-md border-t border-gray-800">
            <div className="px-4 py-4 space-y-3">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize text-gray-300 hover:text-teal-400 transition-colors py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-teal-500/10 rounded-full blur-3xl top-1/4 left-1/4 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-teal-400/10 rounded-full blur-3xl bottom-1/4 right-1/4 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full mb-6">
            <MapPin size={16} className="text-teal-400" />
            <span className="text-sm text-gray-300">Nairobi, Kenya</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Kian Mwiberi Muchemi
          </h1>
          <div className="text-2xl md:text-3xl text-teal-400 mb-6 font-semibold">
            Computer Scientist & Database Enthusiast
          </div>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            I build responsive web applications and design efficient database systems. Passionate about solving real-world problems with technology and continuously improving through hands-on projects and collaboration.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-gray-950 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-teal-500/30"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-teal-500 text-teal-400 hover:bg-teal-500/10 rounded-lg font-semibold transition-all"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex gap-4 justify-center">
            <a 
              href="https://github.com/Mwiberikian?tab=repositories" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-teal-500/20 border border-gray-700 hover:border-teal-500/50 rounded-lg transition-all"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/kian-muchemi-03820b382/" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-teal-500/20 border border-gray-700 hover:border-teal-500/50 rounded-lg transition-all"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:muchemikian@gmail.com"
              className="p-3 bg-gray-800 hover:bg-teal-500/20 border border-gray-700 hover:border-teal-500/50 rounded-lg transition-all"
            >
              <Mail size={24} />
            </a>
          </div>
          
          <div className="mt-16 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-teal-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            About <span className="text-teal-400">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                I'm a Computer Scientist with hands-on experience in web development and database management. My journey in technology is driven by a passion for creating solutions that make a real impact.
              </p>
              <p>
                I specialize in building responsive web applications using HTML, CSS, and JavaScript, combined with robust database systems using MySQL and PostgreSQL. Every project is an opportunity to learn, grow, and push the boundaries of what's possible.
              </p>
              <p>
                I believe in the power of collaboration and continuous improvement. Whether it's through team projects or solo endeavors, I'm always seeking to refine my skills and contribute meaningfully to the tech community.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-teal-500/20 to-gray-800/50 rounded-2xl backdrop-blur-sm border border-teal-500/20 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="text-8xl mb-6">💻</div>
                  <p className="text-2xl font-semibold text-teal-400">Building Digital Solutions</p>
                  <p className="text-gray-400 mt-2">One Line of Code at a Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Skills & <span className="text-teal-400">Expertise</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div 
                key={index} 
                className="bg-gray-900/50 rounded-xl p-8 backdrop-blur-sm border border-gray-800 hover:border-teal-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <h3 className="text-2xl font-bold mb-6 text-teal-400">{skillGroup.category}</h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                      <span className="text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Featured <span className="text-teal-400">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group bg-gray-900/80 rounded-xl overflow-hidden border border-gray-800 hover:border-teal-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20"
              >
                <div className="h-48 bg-gradient-to-br from-teal-500/20 to-gray-800/50 flex items-center justify-center">
                  <div className="text-6xl">📱</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-teal-400 group-hover:text-teal-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-teal-500/10 border border-teal-500/30 text-teal-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    View on GitHub <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-teal-400">Connect</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from you. Let's build something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a 
              href="mailto:muchemikian@gmail.com"
              className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-gray-950 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-teal-500/30 inline-flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              muchemikian@gmail.com
            </a>
          </div>

          <div className="flex gap-6 justify-center">
            <a 
              href="https://github.com/Mwiberikian?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-teal-500/50 text-teal-400 hover:bg-teal-500/10 rounded-lg font-semibold transition-all inline-flex items-center gap-2"
            >
              <Github size={20} />
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/kian-muchemi-03820b382/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-teal-500/50 text-teal-400 hover:bg-teal-500/10 rounded-lg font-semibold transition-all inline-flex items-center gap-2"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>&copy; 2024 Kian Mwiberi Muchemi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
```

---

## 📄 **.gitignore**
```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?