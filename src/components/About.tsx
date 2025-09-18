import React, { useState, useEffect, useRef } from 'react';
import { Code2, Database, Globe, Smartphone, Sparkles, Zap, Heart, Target } from 'lucide-react';
import { Fade } from 'react-awesome-reveal';
import { useTheme } from '../contexts/ThemeContext';

interface AboutProps {
  showAnimations: boolean;
}

// Animated Progress Bar Component
interface AnimatedProgressBarProps {
  skill: {
    name: string;
    level: number;
    color: string;
    icon: string;
  };
  theme: string;
  delay?: number;
  isVisible: boolean;
}

const AnimatedProgressBar: React.FC<AnimatedProgressBarProps> = ({ skill, theme, delay = 0, isVisible }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      const timer = setTimeout(() => {
        // Animate the progress bar
        let currentLevel = 0;
        const increment = skill.level / 60; // 60 frames for smooth animation
        const animationTimer = setInterval(() => {
          currentLevel += increment;
          if (currentLevel >= skill.level) {
            currentLevel = skill.level;
            clearInterval(animationTimer);
            setHasAnimated(true);
          }
          setAnimatedLevel(Math.round(currentLevel));
        }, 16); // ~60fps

        return () => clearInterval(animationTimer);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level, delay, hasAnimated]);

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <span className="text-xl transform transition-transform duration-300 hover:scale-125">{skill.icon}</span>
          <span className={`font-semibold transition-colors duration-300 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {skill.name}
          </span>
        </div>
        <span className="text-red-500 font-bold text-sm transition-all duration-300 hover:scale-110">
          {animatedLevel}%
        </span>
      </div>
      <div className={`w-full rounded-full h-3 relative overflow-hidden transition-all duration-300 hover:h-4 ${
        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
      }`}>
        {/* Background glow effect */}
        <div 
          className={`absolute inset-0 rounded-full opacity-20 blur-sm bg-gradient-to-r ${skill.color}`}
          style={{ width: `${animatedLevel}%` }}
        />
        {/* Main progress bar */}
        <div 
          className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-75 ease-out relative overflow-hidden`}
          style={{ width: `${animatedLevel}%` }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shimmer" />
        </div>
        {/* Pulse effect for high-level skills */}
        {animatedLevel >= 90 && (
          <div 
            className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${skill.color} opacity-30 animate-pulse`}
            style={{ width: `${animatedLevel}%` }}
          />
        )}
      </div>
    </div>
  );
};

const About: React.FC<AboutProps> = ({ showAnimations }) => {
  const { theme } = useTheme();
  const [skillsVisible, setSkillsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for skills animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            setSkillsVisible(true);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-50px'
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const skills = [
    { name: 'HTML', level: 95, color: 'from-orange-400 to-orange-600', icon: '🌐' },
    { name: 'CSS', level: 92, color: 'from-blue-400 to-blue-600', icon: '🎨' },
    { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-yellow-600', icon: '⚡' },
    { name: 'React', level: 93, color: 'from-cyan-400 to-cyan-600', icon: '⚛️' },
    { name: 'Next.js', level: 88, color: 'from-gray-400 to-gray-600', icon: '🚀' },
    { name: 'Vue.js', level: 85, color: 'from-green-400 to-green-600', icon: '💚' },
    { name: 'jQuery', level: 87, color: 'from-indigo-400 to-indigo-600', icon: '📱' },
    { name: 'Bootstrap', level: 90, color: 'from-purple-400 to-purple-600', icon: '🎯' },
    { name: 'Tailwind CSS', level: 94, color: 'from-teal-400 to-teal-600', icon: '🌊' },
    { name: 'PHP', level: 89, color: 'from-violet-400 to-violet-600', icon: '🐘' },
    { name: 'Laravel', level: 91, color: 'from-red-400 to-red-600', icon: '🔥' },
    { name: 'MySQL', level: 86, color: 'from-blue-500 to-blue-700', icon: '🗄️' },
    { name: 'AJAX', level: 88, color: 'from-emerald-400 to-emerald-600', icon: '🔄' },
    { name: 'C', level: 82, color: 'from-slate-400 to-slate-600', icon: '⚙️' },
    { name: 'C++', level: 80, color: 'from-zinc-400 to-zinc-600', icon: '🔧' },
    { name: 'AI', level: 95, color: 'from-pink-400 to-pink-600', icon: '🤖' },
  ];

  const technologies = [
    { 
      icon: Code2, 
      title: 'Frontend Development', 
      desc: 'React, Vue.js, Next.js, TypeScript',
      gradient: theme === 'dark' ? 'from-gray-600 to-gray-800' : 'from-gray-700 to-gray-900'
    },
    { 
      icon: Database, 
      title: 'Backend Development', 
      desc: 'Laravel, Node.js, PHP, APIs',
      gradient: theme === 'dark' ? 'from-gray-600 to-gray-800' : 'from-gray-700 to-gray-900'
    },
    { 
      icon: Globe, 
      title: 'Full Stack Solutions', 
      desc: 'End-to-end web applications',
      gradient: 'from-red-500 to-red-700'
    },
    { 
      icon: Smartphone, 
      title: 'Responsive Design', 
      desc: 'Mobile-first, cross-platform',
      gradient: theme === 'dark' ? 'from-gray-600 to-gray-800' : 'from-gray-700 to-gray-900'
    },
  ];

  const achievements = [
    { icon: Target, label: 'Projects Delivered', value: '50+', color: theme === 'dark' ? 'text-gray-400' : 'text-gray-600' },
    { icon: Heart, label: 'Happy Clients', value: '30+', color: 'text-red-500' },
    { icon: Zap, label: 'Technologies', value: '15+', color: theme === 'dark' ? 'text-gray-400' : 'text-gray-600' },
    { icon: Sparkles, label: 'Years Experience', value: '3+', color: theme === 'dark' ? 'text-gray-400' : 'text-gray-600' },
  ];

  return (
    <section id="about" className={`py-24 transition-colors duration-500 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : ''
    }`}>
      {/* Background for Light Mode - Similar to Hero */}
      {theme !== 'dark' && (
        <div className="absolute inset-0">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=1920&q=80)` }}
          />
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-white/70"></div>
          
          {/* Additional gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/80"></div>
          
          {/* Animated geometric shapes for light mode */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Primary animated shapes */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-100/30 to-transparent rounded-full blur-3xl animate-spin-slow"></div>
            
            {/* Secondary animated shapes */}
            <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-emerald-200/25 rounded-full blur-3xl animate-pulse delay-500"></div>
            <div className="absolute top-1/6 right-1/3 w-72 h-72 bg-rose-200/25 rounded-full blur-3xl animate-pulse delay-1500"></div>
            
            {/* Additional floating elements */}
            <div className="absolute top-1/3 right-1/6 w-48 h-48 bg-yellow-200/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
            <div className="absolute bottom-1/6 left-1/6 w-56 h-56 bg-indigo-200/25 rounded-full blur-3xl animate-pulse delay-750"></div>
            
            {/* Subtle gradient overlays */}
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-blue-50/20 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-purple-50/20 to-transparent"></div>
          </div>
        </div>
      )}
      
      {/* Background for Dark Mode - Stunning glassmorphism with background image */}
      {theme === 'dark' && (
        <div className="absolute inset-0">
          {/* Background Image for Dark Mode */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80)` }}
          />
          
          {/* Dark glassmorphism overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
          
          {/* Additional gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
          
          {/* Animated geometric shapes for dark mode */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Primary animated shapes */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 to-transparent rounded-full blur-3xl animate-spin-slow"></div>
            
            {/* Secondary animated shapes */}
            <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-emerald-500/8 rounded-full blur-3xl animate-pulse delay-500"></div>
            <div className="absolute top-1/6 right-1/3 w-72 h-72 bg-pink-500/8 rounded-full blur-3xl animate-pulse delay-1500"></div>
            
            {/* Additional floating elements */}
            <div className="absolute top-1/3 right-1/6 w-48 h-48 bg-yellow-500/6 rounded-full blur-2xl animate-pulse delay-2000"></div>
            <div className="absolute bottom-1/6 left-1/6 w-56 h-56 bg-indigo-500/8 rounded-full blur-3xl animate-pulse delay-750"></div>
            
            {/* Subtle gradient overlays */}
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-blue-900/5 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-purple-900/5 to-transparent"></div>
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
                  Get to know me
                </span>
                <Sparkles className="text-red-500" size={24} />
              </div>
              <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                About <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Me</span>
              </h2>
              <p className={`text-xl max-w-4xl mx-auto leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Passionate web developer with 3+ years of experience creating modern, 
                scalable web solutions that drive business growth and user engagement.
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
                Get to know me
              </span>
              <Sparkles className="text-red-500" size={24} />
            </div>
            <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              About <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className={`text-xl max-w-4xl mx-auto leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Passionate web developer with 3+ years of experience creating modern, 
              scalable web solutions that drive business growth and user engagement.
            </p>
          </div>
        )}

        {/* Achievements */}
        {showAnimations ? (
          <Fade direction="up" delay={200} triggerOnce>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className={`text-center p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                    theme === 'dark' 
                      ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                      : 'bg-white/50 border-gray-200/50 hover:bg-white/80'
                  }`}
                >
                  <achievement.icon className={`mx-auto mb-3 ${achievement.color}`} size={32} />
                  <div className={`text-3xl font-bold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {achievement.value}
                  </div>
                  <div className={`text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className={`text-center p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                    : 'bg-white/50 border-gray-200/50 hover:bg-white/80'
                }`}
              >
                <achievement.icon className={`mx-auto mb-3 ${achievement.color}`} size={32} />
                <div className={`text-3xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {achievement.value}
                </div>
                <div className={`text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Bio */}
          {showAnimations ? (
            <Fade direction="left" delay={300} triggerOnce>
              <div className="space-y-8">
                <div className={`p-8 rounded-3xl backdrop-blur-sm border ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/10' 
                    : 'bg-white/50 border-gray-200/50'
                }`}>
                  <h3 className={`text-3xl font-bold mb-6 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    My Story
                  </h3>
                  <div className={`space-y-6 leading-relaxed ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <p>
                      Hi, I'm <strong className="text-red-500">An Sokwins</strong> – a passionate Full Stack Developer who believes great code tells a story, and every project is an opportunity to create something extraordinary.
                    </p>
                    <p>
                      Based in the vibrant tech scene of <strong>Phnom Penh, Cambodia</strong>, I've spent the last few years mastering the art of building digital experiences that don't just work – they captivate. Having completed my Computer Science degree at the Royal University of Phnom Penh and working as a Full Stack Developer at CIJD Company (a Japanese firm), I've learned that the best solutions come from understanding both the technical challenge and the human behind it.
                    </p>
                    <p>
                      <strong className="text-red-500">What drives me?</strong> The thrill of transforming complex problems into elegant, responsive solutions. Whether I'm architecting robust back-end systems, crafting pixel-perfect front-end interfaces, or diving deep into Next.js and React to build lightning-fast web applications, I approach every project with the same philosophy: make it work beautifully, make it scale effortlessly, and make it memorable.
                    </p>
                    <p>
                      <strong className="text-red-500">My secret weapon?</strong> I've mastered the art of leveraging AI and advanced research techniques to accelerate development workflows. In today's fast-paced digital landscape, I don't just write code – I strategically combine cutting-edge AI tools with proven development practices to deliver modern, professional results in record time.
                    </p>
                  </div>
                </div>

                {/* Technologies Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {technologies.map((tech, index) => (
                    <div 
                      key={index} 
                      className={`group p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                        theme === 'dark' 
                          ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                          : 'bg-white/50 border-gray-200/50 hover:bg-white/80'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${tech.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <tech.icon className="text-white" size={24} />
                      </div>
                      <h4 className={`font-bold mb-2 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {tech.title}
                      </h4>
                      <p className={`text-sm ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {tech.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Fade>
          ) : (
            <div className="space-y-8">
              <div className={`p-8 rounded-3xl backdrop-blur-sm border ${
                theme === 'dark' 
                  ? 'bg-white/5 border-white/10' 
                  : 'bg-white/50 border-gray-200/50'
              }`}>
                <h3 className={`text-3xl font-bold mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  My Story
                </h3>
                <div className={`space-y-6 leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <p>
                    Hi, I'm <strong className="text-red-500">An Sokwins</strong> – a passionate Full Stack Developer who believes great code tells a story, and every project is an opportunity to create something extraordinary.
                  </p>
                  <p>
                    Based in the vibrant tech scene of <strong>Phnom Penh, Cambodia</strong>, I've spent the last few years mastering the art of building digital experiences that don't just work – they captivate. Having completed my Computer Science degree at the Royal University of Phnom Penh and working as a Full Stack Developer at CIJD Company (a Japanese firm), I've learned that the best solutions come from understanding both the technical challenge and the human behind it.
                  </p>
                  <p>
                    <strong className="text-red-500">What drives me?</strong> The thrill of transforming complex problems into elegant, responsive solutions. Whether I'm architecting robust back-end systems, crafting pixel-perfect front-end interfaces, or diving deep into Next.js and React to build lightning-fast web applications, I approach every project with the same philosophy: make it work beautifully, make it scale effortlessly, and make it memorable.
                  </p>
                  <p>
                    <strong className="text-red-500">My secret weapon?</strong> I've mastered the art of leveraging AI and advanced research techniques to accelerate development workflows. In today's fast-paced digital landscape, I don't just write code – I strategically combine cutting-edge AI tools with proven development practices to deliver modern, professional results in record time.
                  </p>
                </div>
              </div>

              {/* Technologies Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <div 
                    key={index} 
                    className={`group p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                      theme === 'dark' 
                        ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                        : 'bg-white/50 border-gray-200/50 hover:bg-white/80'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${tech.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <tech.icon className="text-white" size={24} />
                    </div>
                    <h4 className={`font-bold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {tech.title}
                    </h4>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {tech.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Right Column - Skills */}
          {showAnimations ? (
            <Fade direction="right" delay={500} triggerOnce>
              <div className="space-y-8">
                <div className={`p-8 rounded-3xl backdrop-blur-sm border ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/10' 
                    : 'bg-white/50 border-gray-200/50'
                }`}>
                  <h3 className={`text-3xl font-bold mb-8 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Skills & Expertise
                  </h3>
                  
                  <div ref={skillsRef} className="space-y-6">
                    {skills.map((skill, index) => (
                      <AnimatedProgressBar
                        key={index}
                        skill={skill}
                        theme={theme}
                        delay={index * 100} // Stagger animation by 100ms per skill
                        isVisible={skillsVisible}
                      />
                    ))}
                  </div>
                </div>

                {/* Why Choose Me */}
                <div className={`p-8 rounded-3xl backdrop-blur-sm border ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-red-900/20 to-red-800/10 border-red-500/20' 
                    : 'bg-gradient-to-br from-red-50 to-red-100/50 border-red-200/50'
                }`}>
                  <h4 className={`font-bold text-xl mb-6 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Why Choose Me?
                  </h4>
                  <ul className="space-y-4">
                    {[
                      'Fast turnaround times',
                      'Clean, maintainable code',
                      'Ongoing support & maintenance',
                      'Competitive pricing',
                      'AI-powered development',
                      'Modern tech stack'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Fade>
          ) : (
            <div className="space-y-8">
              <div className={`p-8 rounded-3xl backdrop-blur-sm border ${
                theme === 'dark' 
                  ? 'bg-white/5 border-white/10' 
                  : 'bg-white/50 border-gray-200/50'
              }`}>
                <h3 className={`text-3xl font-bold mb-8 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Skills & Expertise
                </h3>
                
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <AnimatedProgressBar
                      key={index}
                      skill={skill}
                      theme={theme}
                      delay={index * 100} // Stagger animation by 100ms per skill
                      isVisible={skillsVisible}
                    />
                  ))}
                </div>
              </div>

              {/* Why Choose Me */}
              <div className={`p-8 rounded-3xl backdrop-blur-sm border ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-red-900/20 to-red-800/10 border-red-500/20' 
                  : 'bg-gradient-to-br from-red-50 to-red-100/50 border-red-200/50'
              }`}>
                <h4 className={`font-bold text-xl mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Why Choose Me?
                </h4>
                <ul className="space-y-4">
                  {[
                    'Fast turnaround times',
                    'Clean, maintainable code',
                    'Ongoing support & maintenance',
                    'Competitive pricing',
                    'AI-powered development',
                    'Modern tech stack'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                        {item}
                      </span>
                    </li>
                  ))}
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