'use client'

import { useState, useEffect } from 'react'
import { Mail, Linkedin, Github, Code2, Database, Cloud, Cpu, Award, MapPin, Phone, Briefcase, GraduationCap, ExternalLink, ChevronDown, Menu, X, Calendar, Layers, Box } from 'lucide-react'
import SolarSystemBackground from '@/components/SolarSystemBackground'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Portfolio data from resume
  const portfolioData = {
    name: 'Dev Vaghasiya',
    title: 'Machine Learning Engineer & Data Scientist',
    contact: {
      phone: '+916353628633',
      email: 'vaghasiyadev84@gmail.com',
      location: 'Surat, Gujarat',
      linkedin: 'https://www.linkedin.com/in/dev-vaghasiya',
      github: 'https://github.com/Vaghasiya-Dev',
      leetcode: 'https://leetcode.com/u/devvaghasiya/'
    },
    about: `A passionate Machine Learning Engineer and Data Scientist with expertise in building production-grade ML systems, generative AI models, and scalable web applications. Currently pursuing a B.S. in Data Science and Application at IIT Madras, with a strong foundation in Electronic & Communication Engineering from GEC Surat.

    My experience spans from developing diffusion-based image generation models and deploying GPU-accelerated ML workloads on Kubernetes, to building real-time web applications with Next.js and React. I'm committed to leveraging cutting-edge technologies to solve real-world problems and deliver impactful solutions.`,
    experience: [
      {
        company: 'Beyond Karma Tech',
        role: 'Machine Learning Intern',
        period: 'January 2026 - Present',
        location: 'Surat, Gujarat',
        responsibilities: [
          'Developed diffusion-based image generation models using Hugging Face and analyzed 2.2K+ social media ad records to identify high-conversion audience segments, improving category-specific targeting by ~15–20%',
          'Built and deployed production-grade ML pipelines using Docker with CI/CD automation, reducing manual deployment effort by ~40% and improving release reliability across model iterations',
          'Deployed GPU-accelerated ML and LLM inference workloads using Kubernetes, implementing vLLM-based serving to achieve ~30% lower inference latency on AMD MI300X GPUs'
        ]
      },
      {
        company: 'Microsoft Power by CloudThat',
        role: 'Data & AI Skills Intern',
        period: 'July 2, 2025 - July 17, 2025',
        location: 'Surat, Gujarat',
        responsibilities: [
          'Completed Azure AI Fundamentals (AI-900) certification and built NLP solutions with Azure AI Language',
          'Developed generative artificial intelligence (AI) models in Azure Machine Learning',
          'Performed data analysis using Microsoft Power BI Data Analysis (PL-300)'
        ]
      }
    ],
    education: [
      {
        institution: 'Indian Institute of Technology, Madras',
        degree: 'B.S. Data Science and Application',
        period: '2023 - 2027',
        location: 'Surat, Gujarat'
      },
      {
        institution: 'GEC, Surat',
        degree: 'B.E. Electronic & Communication Engineering',
        period: '2022 - 2026',
        location: 'Surat, Gujarat'
      }
    ],
    projects: [
      {
        name: 'Quick Chat',
        description: 'Developed a real-time chat application with authentication and group/private messaging capabilities',
        techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'Socket.IO'],
        outcomes: 'Supports 100+ concurrent users with ~50–100 messages per second throughput',
        link: 'https://github.com/Vaghasiya-Dev/Quick-chat'
      },
      {
        name: 'Home Finder',
        description: 'Developed a real-time home and PG finder application with intelligent roommate matching',
        techStack: ['React', 'TypeScript', 'Supabase', 'PostgreSQL'],
        outcomes: 'Supports 200+ property listings with a fully responsive and intuitive user interface',
        link: 'https://github.com/Vaghasiya-Dev/HomeFind'
      },
      {
        name: 'Facial Recognition Student Attendance System',
        description: 'Built an automated face-recognition attendance system using computer vision and machine learning',
        techStack: ['Python', 'Machine Learning', 'OpenCV', 'KNN', 'Image Processing'],
        outcomes: 'Optimized preprocessing and dataset pipelines to improve recognition accuracy by ~15–20%',
        link: 'https://github.com/Vaghasiya-Dev/Facial-Attendance'
      },
      {
        name: 'Flipkart Grid 6.0 Robotics Round-2',
        description: 'Built and trained a CNN-based image classification model for identifying fruits, vegetables, and perishable items',
        techStack: ['CNN', 'Machine Learning', 'Deep Learning', 'TensorFlow/PyTorch'],
        outcomes: 'Achieved ~85–90% accuracy on a custom dataset of perishable items',
        link: 'https://github.com/Vaghasiya-Dev/Flipkart-grid-6.0-round-2'
      }
    ],
    skills: {
      languages: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript'],
      webDevelopment: ['Next.js', 'React.js', 'Tailwind CSS', 'HTML', 'CSS'],
      mlGenAI: ['Diffusion Models', 'Generative AI', 'CNNs', 'Hugging Face', 'NumPy', 'Pandas', 'EDA'],
      mlops: ['Docker', 'Kubernetes', 'CI/CD Pipelines', 'Model Deployment', 'vLLM'],
      cloud: ['Microsoft Azure', 'Azure Machine Learning', 'Google Cloud Platform'],
      databases: ['MySQL', 'PostgreSQL', 'MongoDB'],
      tools: ['Git', 'GitHub', 'VS Code', 'Power BI', 'Data Visualization']
    },
    certifications: [
      { name: 'Microsoft Power BI Data Analysis (PL-300)', issuer: 'Microsoft' },
      { name: 'Azure AI Fundamentals (AI-900)', issuer: 'Microsoft' },
      { name: 'Tata Imagination Challenge 2024 Student Track', issuer: 'Tata' },
      { name: 'NIT Surat Data Science Workshop', issuer: 'NIT Surat' }
    ]
  }

  const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'certifications', 'contact']

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  const TiltCard = ({ children, className = '', ...props }: any) => {
    const [transform, setTransform] = useState('')

    const handleMouseMove = (e: React.MouseEvent) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = ((y - centerY) / centerY) * -5
      const rotateY = ((x - centerX) / centerX) * 5
      setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`)
    }

    const handleMouseLeave = () => {
      setTransform('perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)')
    }

    return (
      <div
        className={className}
        style={{ transform, transition: 'transform 0.3s ease-out', transformStyle: 'preserve-3d' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* 3D Solar System Background */}
      <SolarSystemBackground />

      {/* Gradient overlay for better text readability */}
      <div className="fixed inset-0 -z-5 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-blue-500/20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg shadow-blue-500/50">
                <Box className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">DV</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeSection === section
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/50'
                      : 'text-slate-400 hover:text-white hover:bg-blue-500/20'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-blue-500/20 transition-all"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-blue-500/20 bg-black/95 backdrop-blur-xl">
            <div className="px-4 py-2 space-y-1">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeSection === section
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                      : 'text-slate-400 hover:text-white hover:bg-blue-500/20'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 relative">
        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Content */}
            <div className="order-2 md:order-1">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight" style={{
                textShadow: '0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(59, 130, 246, 0.3)'
              }}>
                {portfolioData.name}
              </h1>
              <p className="text-2xl sm:text-3xl text-blue-300 mb-6 font-light" style={{
                textShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
              }}>
                {portfolioData.title}
              </p>

              <div className="flex flex-wrap gap-3 text-sm text-slate-300 mb-10">
                <div className="flex items-center gap-2 px-4 py-2 bg-black/60 rounded-xl border border-blue-500/30 backdrop-blur-md shadow-lg shadow-blue-500/20">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>{portfolioData.contact.location}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-black/60 rounded-xl border border-blue-500/30 backdrop-blur-md shadow-lg shadow-blue-500/20">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>{portfolioData.contact.phone}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-12">
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl font-semibold shadow-xl shadow-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/70 transition-all hover:-translate-y-1 hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                  <span>Get In Touch</span>
                </a>
                <a
                  href={portfolioData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-6 py-4 bg-black/60 border border-blue-500/50 rounded-xl font-medium hover:bg-blue-500/20 hover:border-blue-400 transition-all hover:-translate-y-1 backdrop-blur-md shadow-lg shadow-blue-500/20"
                >
                  <Linkedin className="w-5 h-5 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={portfolioData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-6 py-4 bg-black/60 border border-blue-500/50 rounded-xl font-medium hover:bg-blue-500/20 hover:border-blue-400 transition-all hover:-translate-y-1 backdrop-blur-md shadow-lg shadow-blue-500/20"
                >
                  <Github className="w-5 h-5 text-slate-300" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex items-center justify-center order-1 md:order-2">
              <div className="w-64 h-80 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-2xl shadow-blue-500/50">
                <img src="/Project.jpg" alt="Profile" className="w-full h-full rounded-xl object-cover border border-blue-400/50" />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <div className="animate-bounce">
              <button
                onClick={() => scrollToSection('about')}
                className="p-3 rounded-full bg-black/60 hover:bg-black/80 transition-all border border-blue-500/30 backdrop-blur-md shadow-lg shadow-blue-500/20"
                aria-label="Scroll to About"
              >
                <ChevronDown className="w-6 h-6 text-blue-400" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/30 mb-4 backdrop-blur-md">
              <Layers className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400 font-medium">About Me</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white" style={{
              textShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
            }}>Who I Am</h2>
          </div>
          <TiltCard className="p-8 bg-black/60 backdrop-blur-xl rounded-2xl border border-blue-500/20 shadow-2xl shadow-blue-500/20">
            <p className="text-lg text-slate-300 leading-relaxed whitespace-pre-line">
              {portfolioData.about}
            </p>
          </TiltCard>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/30 mb-4 backdrop-blur-md">
              <Box className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400 font-medium">Skills & Technologies</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white" style={{
              textShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
            }}>What I Do</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Languages */}
            <TiltCard className="p-6 bg-black/60 backdrop-blur-xl rounded-2xl border border-blue-500/20 shadow-xl hover:shadow-2xl hover:shadow-blue-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg shadow-blue-500/50">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Languages</h3>
                  <p className="text-xs text-slate-400">{portfolioData.skills.languages.length} technologies</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.languages.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-black/50 border border-blue-500/30 text-slate-300 rounded-lg text-sm font-medium hover:border-blue-400 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </TiltCard>

            {/* Web Development */}
            <TiltCard className="p-6 bg-black/60 backdrop-blur-xl rounded-2xl border border-blue-500/20 shadow-xl hover:shadow-2xl hover:shadow-blue-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl shadow-lg shadow-cyan-500/50">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Web Development</h3>
                  <p className="text-xs text-slate-400">{portfolioData.skills.webDevelopment.length} technologies</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.webDevelopment.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-black/50 border border-cyan-500/30 text-slate-300 rounded-lg text-sm font-medium hover:border-cyan-400 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </TiltCard>

            {/* ML & GenAI */}
            <TiltCard className="p-6 bg-black/60 backdrop-blur-xl rounded-2xl border border-blue-500/20 shadow-xl hover:shadow-2xl hover:shadow-blue-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg shadow-purple-500/50">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">ML & GenAI</h3>
                  <p className="text-xs text-slate-400">{portfolioData.skills.mlGenAI.length} technologies</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.mlGenAI.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-black/50 border border-purple-500/30 text-slate-300 rounded-lg text-sm font-medium hover:border-purple-400 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </TiltCard>

            {/* MLOps */}
            <TiltCard className="p-6 bg-black/60 backdrop-blur-xl rounded-2xl border border-blue-500/20 shadow-xl hover:shadow-2xl hover:shadow-blue-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg shadow-orange-500/50">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">MLOps & Deployment</h3>
                  <p className="text-xs text-slate-400">{portfolioData.skills.mlops.length} technologies</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.mlops.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-black/50 border border-orange-500/30 text-slate-300 rounded-lg text-sm font-medium hover:border-orange-400 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </TiltCard>

            {/* Cloud & Infrastructure */}
            <TiltCard className="p-6 bg-black/60 backdrop-blur-xl rounded-2xl border border-blue-500/20 shadow-xl hover:shadow-2xl hover:shadow-blue-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl shadow-lg shadow-sky-500/50">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Cloud & Infrastructure</h3>
                  <p className="text-xs text-slate-400">{portfolioData.skills.cloud.length} technologies</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.cloud.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-black/50 border border-sky-500/30 text-slate-300 rounded-lg text-sm font-medium hover:border-sky-400 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </TiltCard>

            {/* Databases */}
            <TiltCard className="p-6 bg-black/60 backdrop-blur-xl rounded-2xl border border-blue-500/20 shadow-xl hover:shadow-2xl hover:shadow-blue-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg shadow-green-500/50">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Databases</h3>
                  <p className="text-xs text-slate-400">{portfolioData.skills.databases.length} technologies</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.databases.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-black/50 border border-green-500/30 text-slate-300 rounded-lg text-sm font-medium hover:border-green-400 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </TiltCard>

            {/* Tools & Analytics - Full width */}
            <TiltCard className="p-6 bg-black/60 backdrop-blur-xl rounded-2xl border border-blue-500/20 shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 md:col-span-2 lg:col-span-3">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg shadow-blue-500/50">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Tools & Analytics</h3>
                  <p className="text-xs text-slate-400">{portfolioData.skills.tools.length} essential tools & platforms</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-black/50 border border-blue-500/30 text-slate-300 rounded-lg text-sm font-medium hover:border-blue-400 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/30 mb-4 backdrop-blur-md">
              <Layers className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400 font-medium">Projects</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white" style={{
              textShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
            }}>Featured Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioData.projects.map((project, index) => (
              <TiltCard
                key={index}
                className="p-6 bg-black/60 backdrop-blur-xl rounded-2xl border border-blue-500/20 shadow-xl hover:shadow-2xl hover:shadow-blue-500/30"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{project.name}</h3>
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg shadow-blue-500/50">
                    <Box className="w-5 h-5 text-white" />
                  </div>
                </div>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-bold mb-2 text-blue-400 flex items-center gap-2">
                    <Code2 className="w-4 h-4" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-black/50 border border-blue-500/30 text-slate-300 rounded-lg text-xs font-medium hover:border-blue-400 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-4 p-4 bg-black/50 rounded-xl border border-blue-500/20">
                  <h4 className="text-sm font-bold mb-2 text-slate-400">Outcomes</h4>
                  <p className="text-sm text-slate-300">{project.outcomes}</p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/30 mb-4 backdrop-blur-md">
              <Briefcase className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400 font-medium">Experience</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white" style={{
              textShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
            }}>Where I've Worked</h2>
          </div>
          <div className="space-y-8">
            {portfolioData.experience.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 pb-8 border-l-2 border-blue-500/30 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-lg shadow-blue-500/50" />
                <TiltCard className="p-6 bg-black/60 backdrop-blur-xl rounded-2xl border border-blue-500/20 shadow-xl hover:shadow-2xl hover:shadow-blue-500/30">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                      <p className="text-lg text-blue-400 font-bold">{exp.company}</p>
                    </div>
                    <div className="text-right text-sm">
                      <p className="text-blue-400 font-medium">{exp.period}</p>
                      <p className="text-slate-400 flex items-center gap-1 justify-end mt-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, i) => (
                      <li
                        key={i}
                        className="text-slate-300 flex items-start gap-3"
                      >
                        <span className="text-blue-400 mt-1.5 text-lg">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-4">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/30 mb-4 backdrop-blur-md">
              <GraduationCap className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400 font-medium">Education</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white" style={{
              textShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
            }}>My Journey</h2>
          </div>
          <div className="space-y-6">
            {portfolioData.education.map((edu, index) => (
              <TiltCard
                key={index}
                className="p-6 bg-black/60 backdrop-blur-xl rounded-2xl border border-blue-500/20 shadow-xl hover:shadow-2xl hover:shadow-blue-500/30"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shrink-0 shadow-lg shadow-blue-500/50">
                        <GraduationCap className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                        <p className="text-lg text-blue-400 font-bold mb-3">
                          {edu.institution}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                          <div className="flex items-center gap-2 px-4 py-2 bg-black/50 rounded-xl border border-blue-500/30">
                            <Calendar className="w-4 h-4 text-blue-400" />
                            <span className="text-slate-300">{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-2 px-4 py-2 bg-black/50 rounded-xl border border-blue-500/30">
                            <MapPin className="w-4 h-4 text-blue-400" />
                            <span className="text-slate-300">{edu.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 px-4">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/30 mb-4 backdrop-blur-md">
              <Award className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400 font-medium">Certifications</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white" style={{
              textShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
            }}>Achievements</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.certifications.map((cert, index) => (
              <TiltCard
                key={index}
                className="p-6 bg-black/60 backdrop-blur-xl rounded-2xl border border-blue-500/20 shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 flex items-start gap-4"
              >
                <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shrink-0 shadow-lg shadow-blue-500/50">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{cert.name}</h3>
                  <p className="text-sm text-blue-400 font-medium">{cert.issuer}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/30 mb-4 backdrop-blur-md">
              <Mail className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400 font-medium">Contact</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white" style={{
              textShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
            }}>Let's Connect</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="group p-6 bg-black/60 backdrop-blur-xl rounded-2xl border border-blue-500/20 hover:border-blue-400/50 shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all hover:-translate-y-1 flex items-center gap-4"
            >
              <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg shadow-blue-500/50">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-blue-400 mb-1">Email</p>
                <p className="font-bold text-white">{portfolioData.contact.email}</p>
              </div>
            </a>

            <div className="p-6 bg-black/60 backdrop-blur-xl rounded-2xl border border-blue-500/20 shadow-xl flex items-center gap-4">
              <div className="p-4 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl shadow-lg shadow-cyan-500/50">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-cyan-400 mb-1">Phone</p>
                <p className="font-bold text-white">{portfolioData.contact.phone}</p>
              </div>
            </div>

            <div className="p-6 bg-black/60 backdrop-blur-xl rounded-2xl border border-blue-500/20 shadow-xl flex items-center gap-4">
              <div className="p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg shadow-green-500/50">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-green-400 mb-1">Location</p>
                <p className="font-bold text-white">{portfolioData.contact.location}</p>
              </div>
            </div>

            <a
              href={portfolioData.contact.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-black/60 backdrop-blur-xl rounded-2xl border border-blue-500/20 hover:border-blue-400/50 shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all hover:-translate-y-1 flex items-center gap-4"
            >
              <div className="p-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg shadow-orange-500/50">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-orange-400 mb-1">LeetCode</p>
                <p className="font-bold text-white">devvaghasiya</p>
              </div>
            </a>

            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-black/60 backdrop-blur-xl rounded-2xl border border-blue-500/20 hover:border-blue-400/50 shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all hover:-translate-y-1 flex items-center gap-4 md:col-span-2 lg:col-span-1"
            >
              <div className="p-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg shadow-blue-500/50">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-blue-400 mb-1">LinkedIn</p>
                <p className="font-bold text-white">linkedin.com/in/dev-vaghasiya</p>
              </div>
            </a>

            <a
              href={portfolioData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-black/60 backdrop-blur-xl rounded-2xl border border-blue-500/20 hover:border-blue-400/50 shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all hover:-translate-y-1 flex items-center gap-4"
            >
              <div className="p-4 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl shadow-lg shadow-slate-500/50">
                <Github className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1">GitHub</p>
                <p className="font-bold text-white">github.com/Vaghasiya-Dev</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-blue-500/20 mt-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg shadow-blue-500/50">
              <Box className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">DV</span>
          </div>
          <p className="text-slate-400 text-sm mb-2">
            © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  )
}
