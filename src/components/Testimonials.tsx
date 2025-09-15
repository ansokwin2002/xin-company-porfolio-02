import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Fade } from 'react-awesome-reveal';

interface TestimonialsProps {
  showAnimations: boolean;
}

const Testimonials: React.FC<TestimonialsProps> = ({ showAnimations }) => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'CEO, TechStart Inc.',
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Alex delivered an exceptional e-commerce platform for our business. His attention to detail, communication throughout the project, and technical expertise exceeded our expectations. Our online sales have increased by 150% since launch!',
      rating: 5,
      project: 'E-Commerce Platform'
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Restaurant Owner',
      avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Working with Alex was a pleasure. He created a beautiful, responsive website for our restaurant with an integrated reservation system. The site perfectly captures our brand, and we\'ve seen a significant increase in online bookings.',
      rating: 5,
      project: 'Restaurant Website'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      title: 'Marketing Director, GrowthCo',
      avatar: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Alex transformed our outdated website into a modern, fast, and SEO-optimized platform. His expertise in both design and development is remarkable. The project was completed on time and within budget.',
      rating: 5,
      project: 'Corporate Website Redesign'
    },
    {
      id: 4,
      name: 'David Thompson',
      title: 'Startup Founder',
      avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Alex built our MVP web application from scratch, including user authentication, payment processing, and an admin dashboard. His code quality is excellent, and he provided valuable suggestions that improved our product.',
      rating: 5,
      project: 'SaaS Web Application'
    },
    {
      id: 5,
      name: 'Lisa Park',
      title: 'Non-profit Director',
      avatar: 'https://images.pexels.com/photos/3763189/pexels-photo-3763189.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Alex created a beautiful website for our non-profit organization that perfectly represents our mission. He was patient with our feedback, responsive to our needs, and delivered a site that our donors and volunteers love.',
      rating: 5,
      project: 'Non-profit Website'
    },
    {
      id: 6,
      name: 'James Wilson',
      title: 'E-learning Company CEO',
      avatar: 'https://images.pexels.com/photos/3785076/pexels-photo-3785076.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'The learning management system Alex developed for us has been a game-changer. The platform handles video streaming, user progress tracking, and course management flawlessly. His technical skills are top-notch.',
      rating: 5,
      project: 'Learning Management System'
    }
  ];

  const scrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showAnimations ? (
          <Fade direction="down" triggerOnce>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Client <span className="text-red-600">Testimonials</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't just take my word for it. Here's what my clients have to say about 
                working with me and the results they've achieved.
              </p>
            </div>
          </Fade>
        ) : (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Client <span className="text-red-600">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take my word for it. Here's what my clients have to say about 
              working with me and the results they've achieved.
            </p>
          </div>
        )}

        {/* Stats */}
        {showAnimations ? (
          <Fade direction="up" delay={200} triggerOnce>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center">
              <div className="bg-red-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
                <div className="text-gray-600 font-medium">Happy Clients</div>
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
                <div className="text-gray-600 font-medium">Satisfaction Rate</div>
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-red-600 mb-2">98%</div>
                <div className="text-gray-600 font-medium">On-time Delivery</div>
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-red-600 mb-2">95%</div>
                <div className="text-gray-600 font-medium">Repeat Clients</div>
              </div>
            </div>
          </Fade>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center">
            <div className="bg-red-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Satisfaction Rate</div>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-red-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium">On-time Delivery</div>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-red-600 mb-2">95%</div>
              <div className="text-gray-600 font-medium">Repeat Clients</div>
            </div>
          </div>
        )}

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            showAnimations ? (
              <Fade direction="up" delay={index * 150} triggerOnce key={testimonial.id}>
                <div
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start mb-4">
                    <Quote className="text-red-600" size={32} />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <Star key={starIndex} className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-gray-600 leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                    </div>
                  </div>

                  {/* Project Tag */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-xs bg-red-50 text-red-600 px-3 py-1 rounded-full font-medium">
                      {testimonial.project}
                    </span>
                  </div>
                </div>
              </Fade>
            ) : (
              <div
                key={testimonial.id}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="text-red-600" size={32} />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star key={starIndex} className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>

                {/* Project Tag */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-xs bg-red-50 text-red-600 px-3 py-1 rounded-full font-medium">
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
            <div className="text-center mt-16 bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Join My Happy Clients?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Let's discuss your project and how I can help you achieve your goals. 
                I'm committed to delivering exceptional results that exceed your expectations.
              </p>
              <button
                onClick={() => {
                  const section = document.getElementById('contact');
                  if (section) section.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </button>
            </div>
          </Fade>
        ) : (
          <div className="text-center mt-16 bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join My Happy Clients?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss your project and how I can help you achieve your goals. 
              I'm committed to delivering exceptional results that exceed your expectations.
            </p>
            <button
              onClick={() => {
                const section = document.getElementById('contact');
                if (section) section.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
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
