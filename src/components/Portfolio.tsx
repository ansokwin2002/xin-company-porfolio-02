import React, { useState } from 'react';
import { ExternalLink, Github, Filter, Sparkles } from 'lucide-react';
import { Fade } from 'react-awesome-reveal';
import { useTheme } from '../contexts/ThemeContext';

interface PortfolioProps {
  showAnimations: boolean;
}

const Portfolio: React.FC<PortfolioProps> = ({ showAnimations }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { theme } = useTheme();

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-app', label: 'Web Apps' },
    { id: 'website', label: 'Websites' },
    { id: 'ecommerce', label: 'E-commerce' },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      category: 'web-app',
      description: 'A comprehensive admin dashboard for managing online store operations, built with Laravel and Vue.js.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Laravel', 'Vue.js', 'MySQL', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Restaurant Website',
      category: 'website',
      description: 'Modern restaurant website with online reservation system and menu management.',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'React', 'Strapi', 'CSS'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Fashion Store',
      category: 'ecommerce',
      description: 'Complete e-commerce solution with payment integration and inventory management.',
      image: 'https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Laravel', 'Vue.js', 'Stripe', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Task Management App',
      category: 'web-app',
      description: 'Collaborative project management tool with real-time updates and team collaboration features.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 5,
      title: 'Corporate Website',
      category: 'website',
      description: 'Professional corporate website with CMS integration and SEO optimization.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'TypeScript', 'Sanity', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 6,
      title: 'Online Learning Platform',
      category: 'web-app',
      description: 'Comprehensive learning management system with video streaming and progress tracking.',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Laravel', 'Vue.js', 'Redis', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className={`py-24 transition-colors duration-500 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800' 
        : ''
    }`}>
      {/* Background for Light Mode - Glassmorphism */}
      {theme !== 'dark' && (
        <div className="absolute inset-0">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80)` }}
          />
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-white/75"></div>
          
          {/* Additional gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/60 via-white/70 to-cyan-100/60"></div>
          
          {/* Animated geometric shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-emerald-300/40 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-cyan-300/40 rounded-full blur-3xl animate-pulse delay-500"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-teal-200/40 to-transparent rounded-full blur-3xl animate-spin-slow"></div>
          </div>
        </div>
      )}
      
      {/* Background for Dark Mode - Stunning glassmorphism with background image */}
      {theme === 'dark' && (
        <div className="absolute inset-0">
          {/* Background Image for Dark Mode */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1920&q=80)` }}
          />
          
          {/* Dark glassmorphism overlay */}
          <div className="absolute inset-0 bg-black/65"></div>
          
          {/* Additional gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/55 to-black/75"></div>
          
          {/* Animated geometric shapes for dark mode */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Primary animated shapes */}
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-emerald-500/12 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-cyan-500/12 rounded-full blur-3xl animate-pulse delay-500"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-teal-500/10 to-transparent rounded-full blur-3xl animate-spin-slow"></div>
            
            {/* Secondary animated shapes */}
            <div className="absolute top-1/6 left-1/6 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/6 right-1/6 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1500"></div>
            
            {/* Additional floating elements */}
            <div className="absolute top-2/3 right-1/3 w-48 h-48 bg-green-500/8 rounded-full blur-2xl animate-pulse delay-2000"></div>
            <div className="absolute top-1/4 left-2/3 w-56 h-56 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-750"></div>
            
            {/* Subtle gradient overlays */}
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-emerald-900/8 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-cyan-900/8 to-transparent"></div>
          </div>
        </div>
      )}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {showAnimations ? (
          <Fade direction="down" triggerOnce>
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-2 mb-6">
                <Sparkles className="text-red-500" size={24} />
                <span className={`text-sm font-semibold tracking-wider uppercase ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  My Work
                </span>
                <Sparkles className="text-red-500" size={24} />
              </div>
              <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                My <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Portfolio</span>
              </h2>
              <p className={`text-xl max-w-4xl mx-auto leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Here are some of my recent projects that showcase my skills and expertise 
                in web development across different industries and technologies.
              </p>
            </div>
          </Fade>
        ) : (
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 mb-6">
              <Sparkles className="text-red-500" size={24} />
              <span className={`text-sm font-semibold tracking-wider uppercase ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                My Work
              </span>
              <Sparkles className="text-red-500" size={24} />
            </div>
            <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              My <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <p className={`text-xl max-w-4xl mx-auto leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Here are some of my recent projects that showcase my skills and expertise 
              in web development across different industries and technologies.
            </p>
          </div>
        )}

        {/* Filter Buttons */}
        {showAnimations ? (
          <Fade direction="up" delay={200} triggerOnce>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center space-x-3 backdrop-blur-sm border ${
                    activeFilter === filter.id
                      ? 'bg-red-600 text-white shadow-lg border-red-500 scale-105'
                      : theme === 'dark'
                        ? 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border-white/20'
                        : 'bg-white/50 text-gray-700 hover:bg-white hover:text-red-600 border-gray-200/50'
                  }`}
                >
                  <Filter size={18} />
                  <span>{filter.label}</span>
                </button>
              ))}
            </div>
          </Fade>
        ) : (
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center space-x-3 backdrop-blur-sm border ${
                  activeFilter === filter.id
                    ? 'bg-red-600 text-white shadow-lg border-red-500 scale-105'
                    : theme === 'dark'
                      ? 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border-white/20'
                      : 'bg-white/50 text-gray-700 hover:bg-white hover:text-red-600 border-gray-200/50'
                }`}
              >
                <Filter size={18} />
                <span>{filter.label}</span>
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            showAnimations ? (
              <Fade direction="up" delay={index * 150} triggerOnce key={project.id}>
                <div className={`rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden h-full flex flex-col backdrop-blur-sm border ${
                  theme === 'dark' 
                    ? 'bg-white/10 border-white/20 hover:bg-white/15' 
                    : 'bg-white/80 border-gray-200/50 hover:bg-white'
                }`}>
                  {/* Project Image */}
                  <div className="relative overflow-hidden group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-red-600/90 via-red-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center space-x-6">
                      <a
                        href={project.liveUrl}
                        className="bg-white text-red-600 p-4 rounded-2xl hover:bg-red-50 transition-all duration-300 transform hover:scale-110 shadow-lg"
                        title="View Live"
                      >
                        <ExternalLink size={24} />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="bg-white text-red-600 p-4 rounded-2xl hover:bg-red-50 transition-all duration-300 transform hover:scale-110 shadow-lg"
                        title="View Code"
                      >
                        <Github size={24} />
                      </a>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className={`text-2xl font-bold mb-3 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {project.title}
                    </h3>
                    <p className={`mb-6 leading-relaxed flex-1 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                            theme === 'dark'
                              ? 'bg-red-900/30 text-red-300 border border-red-500/30'
                              : 'bg-red-50 text-red-600 border border-red-200'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex space-x-6 mt-auto">
                      <a
                        href={project.liveUrl}
                        className="flex items-center space-x-2 text-red-500 hover:text-red-600 font-semibold transition-colors duration-300 group"
                      >
                        <ExternalLink size={18} className="group-hover:scale-110 transition-transform duration-300" />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        className={`flex items-center space-x-2 font-semibold transition-colors duration-300 group ${
                          theme === 'dark' ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-700'
                        }`}
                      >
                        <Github size={18} className="group-hover:scale-110 transition-transform duration-300" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Fade>
            ) : (
              <div
                key={project.id}
                className={`rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden h-full flex flex-col backdrop-blur-sm border ${
                  theme === 'dark' 
                    ? 'bg-white/10 border-white/20 hover:bg-white/15' 
                    : 'bg-white/80 border-gray-200/50 hover:bg-white'
                }`}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-600/90 via-red-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center space-x-6">
                    <a
                      href={project.liveUrl}
                      className="bg-white text-red-600 p-4 rounded-2xl hover:bg-red-50 transition-all duration-300 transform hover:scale-110 shadow-lg"
                      title="View Live"
                    >
                      <ExternalLink size={24} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="bg-white text-red-600 p-4 rounded-2xl hover:bg-red-50 transition-all duration-300 transform hover:scale-110 shadow-lg"
                      title="View Code"
                    >
                      <Github size={24} />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className={`text-2xl font-bold mb-3 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`mb-6 leading-relaxed flex-1 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                          theme === 'dark'
                            ? 'bg-red-900/30 text-red-300 border border-red-500/30'
                            : 'bg-red-50 text-red-600 border border-red-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-6 mt-auto">
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-2 text-red-500 hover:text-red-600 font-semibold transition-colors duration-300 group"
                    >
                      <ExternalLink size={18} className="group-hover:scale-110 transition-transform duration-300" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className={`flex items-center space-x-2 font-semibold transition-colors duration-300 group ${
                        theme === 'dark' ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-700'
                      }`}
                    >
                      <Github size={18} className="group-hover:scale-110 transition-transform duration-300" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        {/* CTA */}
        {showAnimations ? (
          <Fade direction="up" delay={600} triggerOnce>
            <div className="text-center mt-20">
              <p className={`mb-8 text-lg ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Interested in seeing more of my work?
              </p>
              <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                View All Projects
              </button>
            </div>
          </Fade>
        ) : (
          <div className="text-center mt-20">
            <p className={`mb-8 text-lg ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Interested in seeing more of my work?
            </p>
            <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              View All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;