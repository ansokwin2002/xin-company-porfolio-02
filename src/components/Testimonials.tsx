import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { Fade } from 'react-awesome-reveal';
import { useTheme } from '../contexts/ThemeContext';

interface TestimonialsProps {
  showAnimations: boolean;
}

const Testimonials: React.FC<TestimonialsProps> = ({ showAnimations }) => {
  const { theme } = useTheme();

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'CEO, TechStart Inc.',
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'An Sokwins delivered an exceptional e-commerce platform for our business. His attention to detail, communication throughout the project, and technical expertise exceeded our expectations. Our online sales have increased by 150% since launch!',
      rating: 5,
      project: 'E-Commerce Platform'
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Restaurant Owner',
      avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Working with An Sokwins was a pleasure. He created a beautiful, responsive website for our restaurant with an integrated reservation system. The site perfectly captures our brand, and we\'ve seen a significant increase in online bookings.',
      rating: 5,
      project: 'Restaurant Website'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      title: 'Marketing Director, GrowthCo',
      avatar: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'An Sokwins transformed our outdated website into a modern, fast, and SEO-optimized platform. His expertise in both design and development is remarkable. The project was completed on time and within budget.',
      rating: 5,
      project: 'Corporate Website Redesign'
    },
    {
      id: 4,
      name: 'David Thompson',
      title: 'Startup Founder',
      avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'An Sokwins built our MVP web application from scratch, including user authentication, payment processing, and an admin dashboard. His code quality is excellent, and he provided valuable suggestions that improved our product.',
      rating: 5,
      project: 'SaaS Web Application'
    },
    {
      id: 5,
      name: 'Lisa Park',
      title: 'Non-profit Director',
      avatar: 'https://images.pexels.com/photos/3763189/pexels-photo-3763189.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'An Sokwins created a beautiful website for our non-profit organization that perfectly represents our mission. He was patient with our feedback, responsive to our needs, and delivered a site that our donors and volunteers love.',
      rating: 5,
      project: 'Non-profit Website'
    },
    {
      id: 6,
      name: 'James Wilson',
      title: 'E-learning Company CEO',
      avatar: 'https://images.pexels.com/photos/3785076/pexels-photo-3785076.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'The learning management system An Sokwins developed for us has been a game-changer. The platform handles video streaming, user progress tracking, and course management flawlessly. His technical skills are top-notch.',
      rating: 5,
      project: 'Learning Management System'
    }
  ];

  const stats = [
    { value: '50+', label: 'Happy Clients' },
    { value: '100%', label: 'Satisfaction Rate' },
    { value: '98%', label: 'On-time Delivery' },
    { value: '95%', label: 'Repeat Clients' }
  ];

  return (
    <section id="testimonials" className={`py-24 transition-colors duration-500 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : ''
    }`}>
      {/* Background for Light Mode - Glassmorphism */}
      {theme !== 'dark' && (
        <div className="absolute inset-0">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80)` }}
          />
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-white/75"></div>
          
          {/* Additional gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-100/60 via-white/70 to-emerald-100/60"></div>
          
          {/* Animated geometric shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/6 right-1/6 w-72 h-72 bg-green-300/40 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/6 left-1/6 w-80 h-80 bg-emerald-300/40 rounded-full blur-3xl animate-pulse delay-400"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-gradient-to-r from-lime-200/40 to-transparent rounded-full blur-3xl animate-spin-slow"></div>
          </div>
        </div>
      )}
      
      {/* Background for Dark Mode - Stunning glassmorphism with background image */}
      {theme === 'dark' && (
        <div className="absolute inset-0">
          {/* Background Image for Dark Mode */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80)` }}
          />
          
          {/* Dark glassmorphism overlay */}
          <div className="absolute inset-0 bg-black/65"></div>
          
          {/* Additional gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/55 to-black/75"></div>
          
          {/* Animated geometric shapes for dark mode */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Primary animated shapes */}
            <div className="absolute top-1/6 right-1/6 w-72 h-72 bg-green-500/12 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/6 left-1/6 w-80 h-80 bg-emerald-500/12 rounded-full blur-3xl animate-pulse delay-400"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-gradient-to-r from-lime-500/10 to-transparent rounded-full blur-3xl animate-spin-slow"></div>
            
            {/* Secondary animated shapes */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 right-1/4 w-88 h-88 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1500"></div>
            
            {/* Additional floating elements */}
            <div className="absolute top-3/5 right-1/5 w-48 h-48 bg-mint-500/8 rounded-full blur-2xl animate-pulse delay-2000"></div>
            <div className="absolute top-1/8 left-4/5 w-56 h-56 bg-jade-500/10 rounded-full blur-3xl animate-pulse delay-750"></div>
            
            {/* Subtle gradient overlays */}
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-green-900/8 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-emerald-900/8 to-transparent"></div>
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
                  Client Reviews
                </span>
                <Sparkles className="text-red-500" size={24} />
              </div>
              <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Client <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Testimonials</span>
              </h2>
              <p className={`text-xl max-w-4xl mx-auto leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Don't just take my word for it. Here's what my clients have to say about 
                working with me and the results they've achieved.
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
                Client Reviews
              </span>
              <Sparkles className="text-red-500" size={24} />
            </div>
            <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Client <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Testimonials</span>
            </h2>
            <p className={`text-xl max-w-4xl mx-auto leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Don't just take my word for it. Here's what my clients have to say about 
              working with me and the results they've achieved.
            </p>
          </div>
        )}

        {/* Stats */}
        {showAnimations ? (
          <Fade direction="up" delay={200} triggerOnce>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              {stats.map((stat, index) => (
                <div key={index} className={`text-center p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                  theme === 'dark' 
                    ? 'bg-red-900/20 border-red-500/20' 
                    : 'bg-red-50/80 border-red-200/50'
                }`}>
                  <div className="text-4xl font-bold text-red-500 mb-2">{stat.value}</div>
                  <div className={`font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className={`text-center p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-red-900/20 border-red-500/20' 
                  : 'bg-red-50/80 border-red-200/50'
              }`}>
                <div className="text-4xl font-bold text-red-500 mb-2">{stat.value}</div>
                <div className={`font-medium ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            showAnimations ? (
              <Fade direction="up" delay={index * 150} triggerOnce key={testimonial.id}>
                <div className={`rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-full flex flex-col backdrop-blur-sm border ${
                  theme === 'dark' 
                    ? 'bg-white/10 border-white/20 hover:bg-white/15' 
                    : 'bg-white/80 border-gray-200/50 hover:bg-white shadow-lg'
                }`}>
                  {/* Quote Icon & Rating */}
                  <div className="flex justify-between items-start mb-6">
                    <Quote className="text-red-500" size={36} />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <Star key={starIndex} className="text-yellow-400 fill-current" size={18} />
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <p className={`leading-relaxed mb-8 italic flex-1 text-lg ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    "{testimonial.content}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center space-x-4 mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-red-500/20"
                    />
                    <div>
                      <h4 className={`font-bold text-lg ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {testimonial.name}
                      </h4>
                      <p className={`text-sm ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {testimonial.title}
                      </p>
                    </div>
                  </div>

                  {/* Project Tag */}
                  <div className={`pt-6 border-t mt-auto ${
                    theme === 'dark' ? 'border-white/20' : 'border-gray-200'
                  }`}>
                    <span className={`text-sm px-4 py-2 rounded-full font-medium ${
                      theme === 'dark'
                        ? 'bg-red-900/30 text-red-300 border border-red-500/30'
                        : 'bg-red-50 text-red-600 border border-red-200'
                    }`}>
                      {testimonial.project}
                    </span>
                  </div>
                </div>
              </Fade>
            ) : (
              <div
                key={testimonial.id}
                className={`rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-full flex flex-col backdrop-blur-sm border ${
                  theme === 'dark' 
                    ? 'bg-white/10 border-white/20 hover:bg-white/15' 
                    : 'bg-white/80 border-gray-200/50 hover:bg-white shadow-lg'
                }`}
              >
                {/* Quote Icon & Rating */}
                <div className="flex justify-between items-start mb-6">
                  <Quote className="text-red-500" size={36} />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star key={starIndex} className="text-yellow-400 fill-current" size={18} />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <p className={`leading-relaxed mb-8 italic flex-1 text-lg ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  "{testimonial.content}"
                </p>

                {/* Client Info */}
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-red-500/20"
                  />
                  <div>
                    <h4 className={`font-bold text-lg ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {testimonial.name}
                    </h4>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {testimonial.title}
                    </p>
                  </div>
                </div>

                {/* Project Tag */}
                <div className={`pt-6 border-t mt-auto ${
                  theme === 'dark' ? 'border-white/20' : 'border-gray-200'
                }`}>
                  <span className={`text-sm px-4 py-2 rounded-full font-medium ${
                    theme === 'dark'
                      ? 'bg-red-900/30 text-red-300 border border-red-500/30'
                      : 'bg-red-50 text-red-600 border border-red-200'
                  }`}>
                    {testimonial.project}
                  </span>
                </div>
              </div>
            )
          ))}
        </div>

        {/* CTA */}
        {showAnimations ? (
          <Fade direction="up" delay={600} triggerOnce>
            <div className={`text-center mt-24 p-12 rounded-3xl backdrop-blur-sm border ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-red-900/20 to-red-800/10 border-red-500/20' 
                : 'bg-gradient-to-br from-red-50 to-red-100/50 border-red-200/50'
            }`}>
              <h3 className={`text-3xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Ready to Join My Happy Clients?
              </h3>
              <p className={`text-lg mb-8 max-w-2xl mx-auto ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Let's discuss your project and how I can help you achieve your goals. 
                I'm committed to delivering exceptional results that exceed your expectations.
              </p>
              <button
                onClick={() => {
                  const section = document.getElementById('contact');
                  if (section) section.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Your Project
              </button>
            </div>
          </Fade>
        ) : (
          <div className={`text-center mt-24 p-12 rounded-3xl backdrop-blur-sm border ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-red-900/20 to-red-800/10 border-red-500/20' 
              : 'bg-gradient-to-br from-red-50 to-red-100/50 border-red-200/50'
          }`}>
            <h3 className={`text-3xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to Join My Happy Clients?
            </h3>
            <p className={`text-lg mb-8 max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Let's discuss your project and how I can help you achieve your goals. 
              I'm committed to delivering exceptional results that exceed your expectations.
            </p>
            <button
              onClick={() => {
                const section = document.getElementById('contact');
                if (section) section.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;