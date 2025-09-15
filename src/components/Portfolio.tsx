import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Fade } from 'react-awesome-reveal';

interface PortfolioProps {
  showAnimations: boolean;
}

const Portfolio: React.FC<PortfolioProps> = ({ showAnimations }) => {
  const [activeFilter, setActiveFilter] = useState('all');

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
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showAnimations ? (
          <Fade direction="down" triggerOnce>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                My <span className="text-red-600">Portfolio</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Here are some of my recent projects that showcase my skills and expertise 
                in web development across different industries and technologies.
              </p>
            </div>
          </Fade>
        ) : (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My <span className="text-red-600">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and expertise 
              in web development across different industries and technologies.
            </p>
          </div>
        )}

        {/* Filter Buttons */}
        {showAnimations ? (
          <Fade direction="up" delay={200} triggerOnce>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                    activeFilter === filter.id
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600'
                  }`}
                >
                  <Filter size={16} />
                  <span>{filter.label}</span>
                </button>
              ))}
            </div>
          </Fade>
        ) : (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeFilter === filter.id
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600'
                }`}
              >
                <Filter size={16} />
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
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative overflow-hidden group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-red-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <a
                        href={project.liveUrl}
                        className="bg-white text-red-600 p-3 rounded-full hover:bg-red-50 transition-colors"
                        title="View Live"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="bg-white text-red-600 p-3 rounded-full hover:bg-red-50 transition-colors"
                        title="View Code"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed flex-1">{project.description}</p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-red-50 text-red-600 text-sm font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex space-x-4 mt-auto">
                      <a
                        href={project.liveUrl}
                        className="flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 font-medium transition-colors"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Fade>
            ) : (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden h-full flex flex-col"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-red-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={project.liveUrl}
                      className="bg-white text-red-600 p-3 rounded-full hover:bg-red-50 transition-colors"
                      title="View Live"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="bg-white text-red-600 p-3 rounded-full hover:bg-red-50 transition-colors"
                      title="View Code"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed flex-1">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-red-50 text-red-600 text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4 mt-auto">
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 font-medium transition-colors"
                    >
                      <Github size={16} />
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
            <div className="text-center mt-16">
              <p className="text-gray-600 mb-6">Interested in seeing more of my work?</p>
              <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
                View All Projects
              </button>
            </div>
          </Fade>
        ) : (
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">Interested in seeing more of my work?</p>
            <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
              View All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;