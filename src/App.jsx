import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Menu,
  X,
  ChevronDown
} from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const skills = [
    { name: 'React', level: 90, category: 'Jedi' },
    { name: 'React Native', level: 90, category: 'Jedi' },
    { name: 'NextJs', level: 70, category: 'Padawan' },
    { name: 'Vite', level: 50, category: 'Padawan' },
    { name: 'Angular', level: 60, category: 'Padawan' },
    { name: 'React Native', level: 90, category: 'Jedi' },
    { name: 'Java', level: 60, category: 'Sith' },
    { name: 'JavaScript', level: 95, category: 'Jedi' },
    { name: 'TypeScript', level: 85, category: 'Jedi' },
    { name: 'Node.js', level: 88, category: 'Sith' },
    { name: 'Python', level: 82, category: 'Sith' },
    { name: 'PostgreSQL', level: 70, category: 'Padawan' },
    { name: 'MongoDB', level: 60, category: 'Padawan' },
    { name: 'Docker', level: 50, category: 'Padawan' },
    { name: 'AWS', level: 30, category: 'Padawan' },
    { name: 'Git', level: 90, category: 'Padawan' }
  ]

  const projects = [
    {
      title: 'Em Desenvolvimento:',
      description: 'informações ainda desconhecidas',
      technologies: [],
      demoUrl: '#',
      codeUrl: '#'
    },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white relative overflow-x-hidden">
      {/* Starfield Background */}
      <div className="fixed inset-0 z-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0a0a0f]/80 backdrop-blur-sm border-b border-[#00bfff]/20 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-[#000000] glow-text-name">
              Antoniel Silva
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-[#00bfff] hover:glow-text ${activeSection === item ? 'text-[#00bfff] glow-text' : 'text-gray-300'
                    }`}
                >
                  {item === 'home' ? 'Início' :
                    item === 'about' ? 'Sobre' :
                      item === 'skills' ? 'Poderes' :
                        item === 'projects' ? 'Missões' : 'Contato'}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#00bfff]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0a0a0f]/95 border-t border-[#00bfff]/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-[#00bfff] capitalize w-full text-left"
                >
                  {item === 'home' ? 'Início' :
                    item === 'about' ? 'Sobre' :
                      item === 'skills' ? 'Poderes' :
                        item === 'projects' ? 'Missões' : 'Contato'}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative z-10">
        <div className="text-center max-w-4xl mx-auto px-4">
          <img
            src="/unnamed.jpg"
            alt="Foto de Antoniel Silva"
            className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full border-4 border-[#d8aa2a] mb-6"
          />
          <h1 className="text-6xl md:text-6xl font-bold mb-6 text-[#000000] glow-text-name starwars-font">
            Antoniel Silva
          </h1>
          <h2 className="text-2xl md:text-4xl text-[#00ffff] mb-8 glow-text-cyan">
            Desenvolvedor FullStack
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Dominando as tecnologias da galáxia para criar soluções épicas.
            Especialista em React, Node.js e arquiteturas do lado luminoso da Força.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              onClick={() => scrollToSection('projects')}
              className="lightsaber-btn jedi-btn px-8 py-4 text-lg font-semibold"
            >
              VER MISSÕES
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="lightsaber-btn sith-btn px-8 py-4 text-lg font-semibold"
            >
              TRANSMITIR MENSAGEM
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-[#00bfff] glow-icon" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#00bfff] glow-text starwars-font">
            ARQUIVO JEDI
          </h2>
          <div className="hologram-panel p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full border-2 border-[#00bfff] glow-border flex items-center justify-center">
                <div className="text-4xl text-[#00bfff] glow-text">AS</div>
              </div>
            </div>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Tenho mais de 3 anos de experiência prática no mercado, atuando em projetos diversos.
                 Meu objetivo é entregar soluções completas, com agilidade, clareza e compromisso.
              </p>
              <p className="text-lg">

                Sou formado em Análise e Desenvolvimento de Sistemas pelo Instituto Federal da Paraíba (IFPB).
                 Durante a graduação, participei de projetos voltados ao desenvolvimento de protótipos embarcados, aplicações web e mobile, 
                 sempre buscando soluções eficientes e acessíveis.
              </p>
            </div>
            <div className="text-center mt-8">
              <Button className="lightsaber-btn jedi-btn">
                <Download className="mr-2" size={16} />
                <a href="/Currículo_.pdf" download target="_blank" rel="noopener noreferrer">
                  BAIXAR CURRÍCULO
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#00bfff] glow-text starwars-font">
            SKILLS DA FORÇA
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="hologram-panel hover:glow-border-intense transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-white text-lg">{skill.name}</h3>
                    <Badge
                      variant="secondary"
                      className={`${skill.category === 'Jedi' ? 'bg-[#00bfff]/20 text-[#00bfff]' :
                        skill.category === 'Sith' ? 'bg-[#ff0040]/20 text-[#ff0040]' :
                          'bg-[#2fb717]/20 text-[#2fb717]'
                        }`}
                    >
                      {skill.category}
                    </Badge>
                  </div>
                  <div className="w-full bg-[#1a1a2e] rounded-full h-3 mb-2">
                    <div
                      className={`h-3 rounded-full transition-all duration-1000 ${skill.category === 'Jedi' ? 'lightsaber-progress-jedi' :
                        skill.category === 'Sith' ? 'lightsaber-progress-sith' :
                          'lightsaber-progress-padawan'
                        }`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-400">{skill.level}% de domínio</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#00bfff] glow-text starwars-font">
            RELATÓRIOS DE MISSÃO
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hologram-panel hover:glow-border-intense transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-[#00bfff]/20 to-[#1a1a2e] flex items-center justify-center">
                    <div className="text-6xl text-[#00bfff] glow-text opacity-50 group-hover:opacity-100 transition-opacity">
                      ⬢
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" className="lightsaber-btn jedi-btn">
                      <ExternalLink size={16} className="mr-1" />
                      DEMO
                    </Button>
                    <Button size="sm" className="lightsaber-btn sith-btn">
                      <Github size={16} className="mr-1" />
                      CÓDIGO
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-[#00bfff]/20 text-[#00bfff]">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10 ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center flex-col">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#00bfff] glow-text starwars-font">
            CANAL DE COMUNICAÇÃO
          </h2>
          <div className=" grid md:grid-cols-1 gap-12 flex">
            <div className="hologram-panel p-8">
              <h3 className="text-2xl font-semibold mb-6 text-[#00ffff] glow-text-cyan">Transmissão Direta</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                A Aliança Rebelde está sempre em busca de novos talentos.
                Se você tem uma missão ou precisa de um desenvolvedor,
                não hesite em estabelecer comunicação!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-[#00bfff] glow-icon" size={20} />
                  <span className="text-gray-300">Antonieldamiao2016@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="text-[#00bfff] glow-icon" size={20} />
                  <a href="https://www.linkedin.com/in/antoniel-silva-71782b148/" className="text-gray-300">
                    https://www.linkedin.com/in/antoniel-silva-71782b148/
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Github className="text-[#00bfff] glow-icon" size={20} />
                  <a href="https://github.com/Antonieldamiao" className="text-gray-300">
                    https://github.com/Antonieldamiao
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0f]/80 border-t border-[#00bfff]/20 py-8 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2025 Antoniel Silva. Que a Força esteja com você.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#00bfff] transition-colors glow-icon-hover">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00bfff] transition-colors glow-icon-hover">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00bfff] transition-colors glow-icon-hover">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

