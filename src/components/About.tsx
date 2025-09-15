import React from 'react';
import { Code2, Database, Globe, Smartphone } from 'lucide-react';
import { Fade } from 'react-awesome-reveal';

interface AboutProps {
  showAnimations: boolean;
}

const About: React.FC<AboutProps> = ({ showAnimations }) => {
  const skills = [
    { name: 'HTML', level: 90, color: 'bg-orange-500' },
    { name: 'CSS', level: 90, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
    { name: 'React', level: 90, color: 'bg-blue-400' },
    { name: 'Next.js', level: 90, color: 'bg-gray-800' },
    { name: 'Vue.js', level: 90, color: 'bg-green-500' },
    { name: 'jQuery', level: 90, color: 'bg-blue-700' },
    { name: 'Bootstrap', level: 90, color: 'bg-purple-600' },
    { name: 'Tailwind CSS', level: 90, color: 'bg-teal-500' },
    { name: 'PHP', level: 90, color: 'bg-indigo-500' },
    { name: 'Laravel', level: 90, color: 'bg-red-500' },
    { name: 'MySQL', level: 90, color: 'bg-blue-600' },
    { name: 'AJAX', level: 90, color: 'bg-gray-600' },
    { name: 'C', level: 90, color: 'bg-blue-700' },
    { name: 'C++', level: 90, color: 'bg-blue-800' },
    { name: 'AI', level: 95, color: 'bg-purple-500' },
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
        {showAnimations ? (
          <Fade direction="down" triggerOnce>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About <span className="text-red-600">Me</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Passionate web developer with 3+ years of experience creating modern, 
                scalable web solutions for businesses worldwide.
              </p>
            </div>
          </Fade>
        ) : (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-red-600">Me</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate web developer with 3+ years of experience creating modern, 
              scalable web solutions for businesses worldwide.
            </p>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Bio */}
          {showAnimations ? (
            <Fade direction="left" delay={200} triggerOnce>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">My Story</h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Hi, I'm An Sokwin – a passionate Full Stack Developer who believes great code tells a story, and every project is an opportunity to create something extraordinary.
                  </p>
                  <p>
                    Based in the vibrant tech scene of Phnom Penh, Cambodia, I've spent the last few years mastering the art of building digital experiences that don't just work – they captivate. Having completed my Computer Science degree at the Royal University of Phnom Penh and working as a Full Stack Developer at CIJD Company (a Japanese firm), I've learned that the best solutions come from understanding both the technical challenge and the human behind it.
                  </p>
                  <p>
                    <strong>What drives me?</strong> The thrill of transforming complex problems into elegant, responsive solutions. Whether I'm architecting robust back-end systems, crafting pixel-perfect front-end interfaces, or diving deep into Next.js and React to build lightning-fast web applications, I approach every project with the same philosophy: make it work beautifully, make it scale effortlessly, and make it memorable.
                  </p>
                  <p>
                    My expertise spans the full development spectrum – from Laravel and PHP powering the backend to React, Next.js, and Vue.js creating seamless user experiences. I specialize in fully responsive design because in today's world, your users might discover you on their phone during their morning coffee or their laptop during a late-night session. Every pixel matters, on every screen.
                  </p>
                  <p>
                    But here's what truly sets me apart: I'm not just a developer, I'm an educator and innovation enthusiast at heart. Teaching at ETEC CENTER and NEW INFORMATION TECHNOLOGY has taught me that the best code is code others can understand and build upon. This perspective makes me a collaborative team player who writes clean, maintainable solutions that stand the test of time.
                  </p>
                  <p>
                    <strong>My secret weapon?</strong> I've mastered the art of leveraging AI and advanced research techniques to accelerate development workflows. In today's fast-paced digital landscape, I don't just write code – I strategically combine cutting-edge AI tools with proven development practices to deliver modern, professional results in record time. This approach allows me to meet tight deadlines without compromising quality, turning weeks of work into days and delivering solutions that are both innovative and robust.
                  </p>
                  <p>
                    When I'm not crafting code, you'll find me with a guitar in hand, exploring new music, or diving into books that spark fresh ideas. I believe inspiration comes from everywhere – and that curiosity is what keeps me ahead of the curve in this ever-evolving field.
                  </p>
                  <p>
                    <strong>Ready to build something amazing together?</strong> Let's create digital experiences that don't just meet expectations – they exceed them.
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
            </Fade>
          ) : (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">My Story</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Hi, I'm An Sokwin – a passionate Full Stack Developer who believes great code tells a story, and every project is an opportunity to create something extraordinary.
                </p>
                <p>
                  Based in the vibrant tech scene of Phnom Penh, Cambodia, I've spent the last few years mastering the art of building digital experiences that don't just work – they captivate. Having completed my Computer Science degree at the Royal University of Phnom Penh and working as a Full Stack Developer at CIJD Company (a Japanese firm), I've learned that the best solutions come from understanding both the technical challenge and the human behind it.
                </p>
                <p>
                  <strong>What drives me?</strong> The thrill of transforming complex problems into elegant, responsive solutions. Whether I'm architecting robust back-end systems, crafting pixel-perfect front-end interfaces, or diving deep into Next.js and React to build lightning-fast web applications, I approach every project with the same philosophy: make it work beautifully, make it scale effortlessly, and make it memorable.
                </p>
                <p>
                  My expertise spans the full development spectrum – from Laravel and PHP powering the backend to React, Next.js, and Vue.js creating seamless user experiences. I specialize in fully responsive design because in today's world, your users might discover you on their phone during their morning coffee or their laptop during a late-night session. Every pixel matters, on every screen.
                </p>
                <p>
                  But here's what truly sets me apart: I'm not just a developer, I'm an educator and innovation enthusiast at heart. Teaching at ETEC CENTER and NEW INFORMATION TECHNOLOGY has taught me that the best code is code others can understand and build upon. This perspective makes me a collaborative team player who writes clean, maintainable solutions that stand the test of time.
                </p>
                <p>
                  <strong>My secret weapon?</strong> I've mastered the art of leveraging AI and advanced research techniques to accelerate development workflows. In today's fast-paced digital landscape, I don't just write code – I strategically combine cutting-edge AI tools with proven development practices to deliver modern, professional results in record time. This approach allows me to meet tight deadlines without compromising quality, turning weeks of work into days and delivering solutions that are both innovative and robust.
                </p>
                <p>
                  When I'm not crafting code, you'll find me with a guitar in hand, exploring new music, or diving into books that spark fresh ideas. I believe inspiration comes from everywhere – and that curiosity is what keeps me ahead of the curve in this ever-evolving field.
                </p>
                <p>
                  <strong>Ready to build something amazing together?</strong> Let's create digital experiences that don't just meet expectations – they exceed them.
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
          )}

          {/* Right Column - Skills */}
          {showAnimations ? (
            <Fade direction="right" delay={400} triggerOnce>
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
            </Fade>
          ) : (
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
          )}
        </div>
      </div>
    </section>
  );
};

export default About;