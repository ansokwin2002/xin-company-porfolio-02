import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Sparkles } from 'lucide-react';
import { Fade } from 'react-awesome-reveal';
import { useTheme } from '../contexts/ThemeContext';

interface ContactProps {
  showAnimations: boolean;
}

const Contact: React.FC<ContactProps> = ({ showAnimations }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I\'ll get back to you within 24 hours.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'ansokwins@example.com',
      href: 'mailto:ansokwins@example.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+855 (12) 345-6789',
      href: 'tel:+85512345678'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Phnom Penh, Cambodia',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <section id="contact" className={`py-16 md:py-24 transition-colors duration-500 relative overflow-hidden ${
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
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1920&q=80)` }}
          />
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-white/75"></div>
          
          {/* Additional gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-100/60 via-white/70 to-gray-100/60"></div>
          
          {/* Animated geometric shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-slate-300/40 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/5 w-72 h-72 bg-gray-300/40 rounded-full blur-3xl animate-pulse delay-600"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-zinc-200/40 to-transparent rounded-full blur-3xl animate-spin-slow"></div>
          </div>
        </div>
      )}
      
      {/* Background for Dark Mode - Stunning glassmorphism with background image */}
      {theme === 'dark' && (
        <div className="absolute inset-0">
          {/* Background Image for Dark Mode */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1920&q=80)` }}
          />
          
          {/* Dark glassmorphism overlay */}
          <div className="absolute inset-0 bg-black/65"></div>
          
          {/* Additional gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/55 to-black/75"></div>
          
          {/* Animated geometric shapes for dark mode */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Primary animated shapes */}
            <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-slate-500/12 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/5 w-72 h-72 bg-gray-500/12 rounded-full blur-3xl animate-pulse delay-600"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-zinc-500/10 to-transparent rounded-full blur-3xl animate-spin-slow"></div>
            
            {/* Secondary animated shapes */}
            <div className="absolute top-1/6 left-1/3 w-80 h-80 bg-neutral-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/6 right-1/3 w-88 h-88 bg-stone-500/10 rounded-full blur-3xl animate-pulse delay-1500"></div>
            
            {/* Additional floating elements */}
            <div className="absolute top-3/4 right-1/6 w-48 h-48 bg-iron-500/8 rounded-full blur-2xl animate-pulse delay-2000"></div>
            <div className="absolute top-1/8 left-4/5 w-56 h-56 bg-steel-500/10 rounded-full blur-3xl animate-pulse delay-750"></div>
            
            {/* Subtle gradient overlays */}
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-slate-900/8 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-gray-900/8 to-transparent"></div>
          </div>
        </div>
      )}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {showAnimations ? (
          <Fade direction="down" triggerOnce>
            <div className="text-center mb-12 md:mb-20">
              <div className="inline-flex items-center space-x-2 mb-4 md:mb-6">
                <Sparkles className="text-red-500" size={20} />
                <span className={`text-xs md:text-sm font-semibold tracking-wider uppercase ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Get In Touch
                </span>
                <Sparkles className="text-red-500" size={20} />
              </div>
              <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Let's Work <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Together</span>
              </h2>
              <p className={`text-base md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed px-4 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Ready to start your next project? Get in touch and let's discuss how 
                I can help bring your vision to life with modern web development solutions.
              </p>
            </div>
          </Fade>
        ) : (
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-flex items-center space-x-2 mb-4 md:mb-6">
              <Sparkles className="text-red-500" size={20} />
              <span className={`text-xs md:text-sm font-semibold tracking-wider uppercase ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Get In Touch
              </span>
              <Sparkles className="text-red-500" size={20} />
            </div>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Let's Work <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Together</span>
            </h2>
            <p className={`text-base md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed px-4 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Ready to start your next project? Get in touch and let's discuss how 
              I can help bring your vision to life with modern web development solutions.
            </p>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Information */}
          {showAnimations ? (
            <Fade direction="left" delay={200} triggerOnce>
              <div className="space-y-6 md:space-y-8">
                <div className={`p-6 md:p-8 rounded-2xl md:rounded-3xl backdrop-blur-sm border ${
                  theme === 'dark' 
                    ? 'bg-white/10 border-white/20' 
                    : 'bg-white/80 border-gray-200/50'
                }`}>
                  <h3 className={`text-2xl md:text-3xl font-bold mb-4 md:mb-6 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Get in Touch
                  </h3>
                  <p className={`mb-6 md:mb-8 leading-relaxed text-base md:text-lg ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    I'm always interested in new projects and opportunities. 
                    Whether you need a simple website or a complex web application, 
                    I'm here to help you succeed.
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-4 md:space-y-6">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.href}
                        className={`flex items-center space-x-3 md:space-x-4 p-4 md:p-6 rounded-xl md:rounded-2xl transition-all duration-300 group hover:scale-105 ${
                          theme === 'dark' 
                            ? 'bg-white/5 hover:bg-white/10 border border-white/10' 
                            : 'bg-white hover:bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md'
                        }`}
                      >
                        <div className={`flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl transition-colors ${
                          theme === 'dark' 
                            ? 'bg-red-900/30 group-hover:bg-red-800/40' 
                            : 'bg-red-50 group-hover:bg-red-100'
                        }`}>
                          <info.icon className="text-red-500" size={20} />
                        </div>
                        <div>
                          <h4 className={`font-bold text-base md:text-lg ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}>
                            {info.title}
                          </h4>
                          <p className={`text-sm md:text-base ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            {info.content}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="mt-6 md:mt-8">
                    <h4 className={`font-bold text-base md:text-lg mb-4 md:mb-6 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      Follow Me
                    </h4>
                    <div className="flex space-x-3 md:space-x-4">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          aria-label={social.label}
                          className={`flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl transition-all duration-300 group hover:scale-110 ${
                            theme === 'dark' 
                              ? 'bg-white/10 hover:bg-white/20 border border-white/20' 
                              : 'bg-white hover:bg-red-50 border border-gray-200 shadow-sm hover:shadow-md'
                          }`}
                        >
                          <social.icon className={`transition-colors ${
                            theme === 'dark' 
                              ? 'text-gray-400 group-hover:text-red-400' 
                              : 'text-gray-600 group-hover:text-red-600'
                          }`} size={20} />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Availability */}
                  <div className={`mt-6 md:mt-8 p-4 md:p-6 rounded-xl md:rounded-2xl border ${
                    theme === 'dark' 
                      ? 'bg-green-900/20 border-green-500/20' 
                      : 'bg-green-50 border-green-200'
                  }`}>
                    <div className="flex items-center space-x-2 md:space-x-3 mb-2">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className={`font-bold text-sm md:text-base ${
                        theme === 'dark' ? 'text-green-400' : 'text-green-800'
                      }`}>
                        Available for Projects
                      </span>
                    </div>
                    <p className={`text-xs md:text-sm ${
                      theme === 'dark' ? 'text-green-300' : 'text-green-700'
                    }`}>
                      Currently accepting new projects with start dates in 2024
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
          ) : (
            <div className="space-y-6 md:space-y-8">
              <div className={`p-6 md:p-8 rounded-2xl md:rounded-3xl backdrop-blur-sm border ${
                theme === 'dark' 
                  ? 'bg-white/10 border-white/20' 
                  : 'bg-white/80 border-gray-200/50'
              }`}>
                <h3 className={`text-2xl md:text-3xl font-bold mb-4 md:mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Get in Touch
                </h3>
                <p className={`mb-6 md:mb-8 leading-relaxed text-base md:text-lg ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  I'm always interested in new projects and opportunities. 
                  Whether you need a simple website or a complex web application, 
                  I'm here to help you succeed.
                </p>

                {/* Contact Info */}
                <div className="space-y-4 md:space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className={`flex items-center space-x-3 md:space-x-4 p-4 md:p-6 rounded-xl md:rounded-2xl transition-all duration-300 group hover:scale-105 ${
                        theme === 'dark' 
                          ? 'bg-white/5 hover:bg-white/10 border border-white/10' 
                          : 'bg-white hover:bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md'
                      }`}
                    >
                      <div className={`flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl transition-colors ${
                        theme === 'dark' 
                          ? 'bg-red-900/30 group-hover:bg-red-800/40' 
                          : 'bg-red-50 group-hover:bg-red-100'
                      }`}>
                        <info.icon className="text-red-500" size={20} />
                      </div>
                      <div>
                        <h4 className={`font-bold text-base md:text-lg ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {info.title}
                        </h4>
                        <p className={`text-sm md:text-base ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {info.content}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-6 md:mt-8">
                  <h4 className={`font-bold text-base md:text-lg mb-4 md:mb-6 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Follow Me
                  </h4>
                  <div className="flex space-x-3 md:space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        className={`flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl transition-all duration-300 group hover:scale-110 ${
                          theme === 'dark' 
                            ? 'bg-white/10 hover:bg-white/20 border border-white/20' 
                            : 'bg-white hover:bg-red-50 border border-gray-200 shadow-sm hover:shadow-md'
                        }`}
                      >
                        <social.icon className={`transition-colors ${
                          theme === 'dark' 
                            ? 'text-gray-400 group-hover:text-red-400' 
                            : 'text-gray-600 group-hover:text-red-600'
                        }`} size={20} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className={`mt-6 md:mt-8 p-4 md:p-6 rounded-xl md:rounded-2xl border ${
                  theme === 'dark' 
                    ? 'bg-green-900/20 border-green-500/20' 
                    : 'bg-green-50 border-green-200'
                }`}>
                  <div className="flex items-center space-x-2 md:space-x-3 mb-2">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className={`font-bold text-sm md:text-base ${
                      theme === 'dark' ? 'text-green-400' : 'text-green-800'
                    }`}>
                      Available for Projects
                    </span>
                  </div>
                  <p className={`text-xs md:text-sm ${
                    theme === 'dark' ? 'text-green-300' : 'text-green-700'
                  }`}>
                    Currently accepting new projects with start dates in 2024
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Contact Form */}
          {showAnimations ? (
            <Fade direction="right" delay={400} triggerOnce>
              <div className={`p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl backdrop-blur-sm border shadow-2xl ${
                theme === 'dark' 
                  ? 'bg-white/10 border-white/20' 
                  : 'bg-white/80 border-gray-200/50'
              }`}>
                <h3 className={`text-2xl md:text-3xl font-bold mb-6 md:mb-8 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Send Me a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label htmlFor="name" className={`block text-xs md:text-sm font-semibold mb-2 md:mb-3 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm md:text-base ${
                          theme === 'dark' 
                            ? 'bg-white/10 border-white/20 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className={`block text-xs md:text-sm font-semibold mb-2 md:mb-3 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm md:text-base ${
                          theme === 'dark' 
                            ? 'bg-white/10 border-white/20 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className={`block text-xs md:text-sm font-semibold mb-2 md:mb-3 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Project Type *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm md:text-base ${
                        theme === 'dark' 
                          ? 'bg-white/10 border-white/20 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    >
                      <option value="">Select project type</option>
                      <option value="website">New Website</option>
                      <option value="webapp">Web Application</option>
                      <option value="ecommerce">E-Commerce Store</option>
                      <option value="redesign">Website Redesign</option>
                      <option value="maintenance">Maintenance & Support</option>
                      <option value="consultation">Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className={`block text-xs md:text-sm font-semibold mb-2 md:mb-3 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className={`w-full px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none text-sm md:text-base ${
                        theme === 'dark' 
                          ? 'bg-white/10 border-white/20 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                      placeholder="Tell me about your project requirements, goals, and any specific features you need..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-6 md:px-8 py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2 md:space-x-3 shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} className="md:w-6 md:h-6" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </Fade>
          ) : (
            <div className={`p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl backdrop-blur-sm border shadow-2xl ${
              theme === 'dark' 
                ? 'bg-white/10 border-white/20' 
                : 'bg-white/80 border-gray-200/50'
            }`}>
              <h3 className={`text-2xl md:text-3xl font-bold mb-6 md:mb-8 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="name" className={`block text-xs md:text-sm font-semibold mb-2 md:mb-3 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm md:text-base ${
                        theme === 'dark' 
                          ? 'bg-white/10 border-white/20 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className={`block text-xs md:text-sm font-semibold mb-2 md:mb-3 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm md:text-base ${
                        theme === 'dark' 
                          ? 'bg-white/10 border-white/20 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className={`block text-xs md:text-sm font-semibold mb-2 md:mb-3 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Project Type *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm md:text-base ${
                      theme === 'dark' 
                        ? 'bg-white/10 border-white/20 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  >
                    <option value="">Select project type</option>
                    <option value="website">New Website</option>
                    <option value="webapp">Web Application</option>
                    <option value="ecommerce">E-Commerce Store</option>
                    <option value="redesign">Website Redesign</option>
                    <option value="maintenance">Maintenance & Support</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className={`block text-xs md:text-sm font-semibold mb-2 md:mb-3 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className={`w-full px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none text-sm md:text-base ${
                      theme === 'dark' 
                        ? 'bg-white/10 border-white/20 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Tell me about your project requirements, goals, and any specific features you need..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-6 md:px-8 py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2 md:space-x-3 shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} className="md:w-6 md:h-6" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;