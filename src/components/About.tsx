import React from 'react';
import { Code2, Database, Globe, Smartphone } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'Laravel', level: 95, color: 'bg-red-500' },
    { name: 'Vue.js', level: 90, color: 'bg-green-500' },
    { name: 'Next.js', level: 85, color: 'bg-blue-500' },
    { name: 'Tailwind CSS', level: 95, color: 'bg-teal-500' },
    { name: 'React', level: 88, color: 'bg-blue-400' },
    { name: 'Node.js', level: 80, color: 'bg-green-600' },
  ];

  const technologies = [
    { icon: Code2, title: 'Frontend Development', desc: 'React, Vue.js, Next.js, TypeScript' },
    { icon: Database, title: 'Backend Development', desc: 'Laravel, Node.js, PHP, APIs' },
    { icon: Globe, title: 'Full Stack Solutions', desc: 'End-to-end web applications' },
    { icon: Smartphone, title: 'Responsive Design', desc: 'Mobile-first, cross-platform' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-red-600">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate web developer with 3+ years of experience creating modern, 
            scalable web solutions for businesses worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">My Story</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I'm a passionate freelance web developer based in the digital world, 
                specializing in creating beautiful, functional, and user-friendly websites 
                and web applications. My journey in web development started 3 years ago, 
                and I've been fortunate to work with amazing clients across various industries.
              </p>
              <p>
                I believe in writing clean, maintainable code and staying up-to-date with 
                the latest technologies and best practices. My goal is to help businesses 
                succeed online by delivering high-quality digital solutions that exceed expectations.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Technologies Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <tech.icon className="text-red-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{tech.title}</h4>
                    <p className="text-gray-600 text-sm">{tech.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">Skills & Expertise</h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">{skill.name}</span>
                    <span className="text-red-600 font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full transition-all duration-1000 ${skill.color}`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-red-50 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-3">Why Choose Me?</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span>Fast turnaround times</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span>Clean, maintainable code</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span>Ongoing support & maintenance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span>Competitive pricing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;