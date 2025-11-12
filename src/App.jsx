import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Menu, X, Database, Code, Users, Briefcase, ChevronDown, Terminal, Zap } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});
  const canvasRef = useRef(null);

  // Mouse tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animated background particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = 'rgba(45, 212, 191, 0.5)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.strokeStyle = `rgba(45, 212, 191, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const skills = [
    { name: 'HTML, CSS, JavaScript, React', icon: Code, color: 'from-orange-400 to-red-500' },
    { name: 'Database Management', icon: Database, color: 'from-blue-400 to-cyan-500' },
    { name: 'MySQL & PostgreSQL', icon: Database, color: 'from-purple-400 to-pink-500' },
    { name: 'Git & GitHub', icon: Terminal, color: 'from-green-400 to-emerald-500' },
    { name: 'UI/UX Design', icon: Briefcase, color: 'from-yellow-400 to-orange-500' },
    { name: 'Leadership & Teamwork', icon: Users, color: 'from-teal-400 to-cyan-500' }
  ];

  const projects = [
    {
      title: 'School Clubs Management System',
      description: 'A comprehensive system for managing school clubs, members, and activities with an intuitive interface.',
      tags: ['Web Development', 'Database', 'UI/UX'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Flea Market Mobile Application',
      description: 'Mobile app connecting buyers and sellers in local flea markets with real-time listings and chat.',
      tags: ['Mobile', 'Database', 'Kotlin'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Real Estate Management System',
      description: 'Property management platform with listing management, tenant tracking, and payment processing.',
      tags: ['Web Development', 'MySQL', 'Full-Stack'],
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <div className="bg-slate-950 text-gray-100 min-h-screen overflow-x-hidden">
      {/* Animated background canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-teal-500/20 z-50 transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              KM
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 relative ${
                    activeSection === section
                      ? 'text-teal-400 scale-110'
                      : 'text-gray-300 hover:text-teal-400'
                  }`}
                >
                  {section}
                  {activeSection === section && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 animate-pulse" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-teal-400 transition-transform hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-teal-500/20 animate-fade-in">
            <div className="px-4 py-4 space-y-3">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left capitalize text-gray-300 hover:text-teal-400 transition-all py-2 hover:translate-x-2"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className="mb-8 transition-transform duration-300"
            style={{
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
            }}
          >
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600 flex items-center justify-center text-4xl font-bold animate-float shadow-lg shadow-teal-500/50 relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400 to-cyan-600 animate-spin-slow opacity-20 blur-xl"></div>
              <span className="relative z-10">KM</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-500 bg-clip-text text-transparent animate-gradient">
            Kian Mwiberi Muchemi
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-4 animate-fade-in-up">
            Computer Scientist & Database Enthusiast
          </p>
          <p className="text-lg text-gray-500 mb-8 flex items-center justify-center gap-2 animate-fade-in-up">
            <Zap className="text-teal-400 animate-pulse" size={20} />
            Nairobi, Kenya
          </p>
          <div className="flex justify-center space-x-6 animate-fade-in-up">
            <a
              href="https://github.com/Mwiberikian?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-teal-500/20 rounded-full transition-all hover:scale-125 hover:rotate-12 group relative"
            >
              <Github className="text-teal-400 group-hover:text-teal-300" size={24} />
              <div className="absolute inset-0 rounded-full bg-teal-500/20 animate-ping opacity-0 group-hover:opacity-100"></div>
            </a>
            <a
              href="https://www.linkedin.com/in/kian-muchemi-03820b382/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-teal-500/20 rounded-full transition-all hover:scale-125 hover:rotate-12 group relative"
            >
              <Linkedin className="text-teal-400 group-hover:text-teal-300" size={24} />
              <div className="absolute inset-0 rounded-full bg-teal-500/20 animate-ping opacity-0 group-hover:opacity-100"></div>
            </a>
            <a
              href="mailto:muchemikian@gmail.com"
              className="p-3 bg-slate-800 hover:bg-teal-500/20 rounded-full transition-all hover:scale-125 hover:rotate-12 group relative"
            >
              <Mail className="text-teal-400 group-hover:text-teal-300" size={24} />
              <div className="absolute inset-0 rounded-full bg-teal-500/20 animate-ping opacity-0 group-hover:opacity-100"></div>
            </a>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="mt-12 text-teal-400 animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center px-4 py-20 relative z-10">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            About <span className="text-teal-400 animate-pulse">Me</span>
          </h2>
          <div 
            className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-teal-500/20 hover:border-teal-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/20 relative overflow-hidden group"
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 0.02}deg) rotateY(${mousePosition.x * 0.02}deg)`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="text-lg text-gray-300 leading-relaxed relative z-10">
              I'm a Computer Scientist with hands-on experience in web development and database management. 
              I'm passionate about solving real-world problems with technology and continuously improving my skills through 
              projects and collaboration.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-6 relative z-10">
              My approach combines technical expertise with creative problem-solving, ensuring that every 
              project I work on is both functional and user-friendly. I thrive in collaborative environments 
              and am always eager to learn new technologies and methodologies.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center px-4 py-20 relative z-10">
        <div className={`max-w-6xl mx-auto w-full transition-all duration-1000 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            My <span className="text-teal-400">Skills</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-teal-500/20 hover:border-teal-500/60 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20 relative overflow-hidden"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <Icon className="text-teal-400 mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 relative z-10" size={32} />
                  <h3 className="text-xl font-semibold text-gray-200 relative z-10">{skill.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center px-4 py-20 relative z-10">
        <div className={`max-w-6xl mx-auto w-full transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Featured <span className="text-teal-400">Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-teal-500/20 hover:border-teal-500/60 hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 group hover:scale-105 relative overflow-hidden"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <h3 className="text-2xl font-bold mb-4 text-gray-100 group-hover:text-teal-400 transition-colors relative z-10">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed relative z-10">{project.description}</p>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-sm border border-teal-500/30 hover:bg-teal-500/20 hover:scale-110 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center px-4 py-20 relative z-10">
        <div className={`max-w-4xl mx-auto w-full text-center transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Get In <span className="text-teal-400">Touch</span>
          </h2>
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-teal-500/20 hover:border-teal-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/20 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="text-xl text-gray-300 mb-8 relative z-10">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <a
              href="mailto:muchemikian@gmail.com"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all hover:scale-110 relative z-10 group"
            >
              <Mail size={24} className="group-hover:rotate-12 transition-transform" />
              <span>muchemikian@gmail.com</span>
            </a>
            <div className="flex justify-center space-x-6 mt-12 relative z-10">
              <a
                href="https://github.com/Mwiberikian?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-all hover:scale-125 hover:rotate-12"
              >
                <Github size={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/kian-muchemi-03820b382/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-all hover:scale-125 hover:rotate-12"
              >
                <Linkedin size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/80 border-t border-teal-500/20 py-8 relative z-10">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 Kian Mwiberi Muchemi. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        .animate-fade-in {
          animation: fade-in-up 0.3s ease-out;
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
}