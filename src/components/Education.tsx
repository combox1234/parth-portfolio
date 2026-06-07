import React, { useEffect, useRef } from 'react';
import { GraduationCap, Calendar, MapPin, Award, Trophy } from 'lucide-react';

interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  details?: string;
  level: 'undergraduate' | 'secondary' | 'primary';
}

const Education: React.FC = () => {
  const educationRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const education: Education[] = [
    {
      id: 'btech',
      degree: 'B.Tech Computer Engineering',
      institution: 'Pimpri Chinchwad College of Engineering (PCCOE)',
      location: 'Pune',
      period: '2023 – Present',
      grade: 'In Progress',
      level: 'undergraduate'
    },
    {
      id: 'hsc',
      degree: 'HSC (Science)',
      institution: 'SNBP School & Jr. College',
      location: 'Rahatani',
      period: '2021 – 2023',
      grade: 'Completed',
      level: 'secondary'
    },
    {
      id: 'ssc',
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Indira National School',
      location: 'Pune',
      period: '2021',
      grade: 'Completed',
      level: 'primary'
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'undergraduate':
        return {
          bg: 'from-blue-500/10 to-indigo-500/10',
          border: 'border-blue-500/20',
          accent: 'text-blue-400',
          dot: 'bg-gradient-to-r from-blue-500 to-indigo-500',
          glow: 'shadow-blue-500/20'
        };
      case 'entrance':
        return {
          bg: 'from-blue-500/10 to-indigo-500/10',
          border: 'border-blue-500/20',
          accent: 'text-blue-400',
          dot: 'bg-gradient-to-r from-blue-500 to-indigo-500',
          glow: 'shadow-blue-500/20'
        };
      case 'secondary':
        return {
          bg: 'from-blue-500/10 to-indigo-500/10',
          border: 'border-blue-500/20',
          accent: 'text-blue-400',
          dot: 'bg-gradient-to-r from-blue-500 to-indigo-500',
          glow: 'shadow-blue-500/20'
        };
      case 'primary':
        return {
          bg: 'from-blue-500/10 to-indigo-500/10',
          border: 'border-blue-500/20',
          accent: 'text-blue-400',
          dot: 'bg-gradient-to-r from-blue-500 to-indigo-500',
          glow: 'shadow-blue-500/20'
        };
      default:
        return {
          bg: 'from-gray-500/10 to-gray-600/10',
          border: 'border-gray-500/20',
          accent: 'text-gray-400',
          dot: 'bg-gray-500',
          glow: 'shadow-gray-500/10'
        };
    }
  };
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10', 'scale-95');
          }, index * 200);
        }
      });
    }, observerOptions);
    
    educationRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      educationRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Educational Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My academic path that shaped my knowledge and passion for technology
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Straight timeline line on the left */}
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full opacity-80 shadow-md"></div>
            
            {/* Education items */}
            <div className="space-y-16">
              {education.map((edu, index) => {
                const colors = getLevelColor(edu.level);
                return (
                  <div 
                    key={edu.id}
                    ref={el => educationRefs.current[index] = el}
                    className="relative flex items-center opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out"
                  >
                    {/* Timeline dot on the left */}
                    <div className={`absolute left-4 transform -translate-x-1/2 w-8 h-8 ${colors.dot} rounded-full border-4 border-black z-20 shadow-lg ${colors.glow}`}>
                      <div className={`absolute inset-0 ${colors.dot} rounded-full animate-ping opacity-30`}></div>
                      <div className="absolute inset-2 bg-white rounded-full opacity-20"></div>
                    </div>
                    
                    {/* Content card on the right */}
                    <div className="flex-1 pl-16">
                      <div className={`relative bg-gradient-to-br ${colors.bg} backdrop-blur-lg rounded-3xl p-8 border-2 ${colors.border} hover:border-opacity-80 transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 shadow-lg ${colors.glow} group overflow-hidden`}>
                        {/* Decorative corner elements */}
                        <div className={`absolute -top-10 -right-10 w-32 h-32 ${colors.dot} opacity-5 rounded-full blur-xl`}></div>
                        <div className={`absolute -bottom-10 -left-10 w-24 h-24 ${colors.dot} opacity-5 rounded-full blur-xl`}></div>
                        
                        {/* Animated background pattern */}
                        <div className="absolute inset-0 opacity-3">
                          <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          <div className="absolute bottom-6 left-6 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                          <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                        </div>
                        
                        <div className="relative z-10">
                          {/* Header with icon */}
                          <div className="flex items-start space-x-4 mb-6">
                            <div className={`flex-shrink-0 p-4 bg-gradient-to-br ${colors.bg} rounded-2xl border-2 ${colors.border} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                              {edu.level === 'entrance' ? (
                                <Trophy className={`${colors.accent} transition-colors duration-300`} size={28} />
                              ) : (
                                <GraduationCap className={`${colors.accent} transition-colors duration-300`} size={28} />
                              )}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors duration-300 leading-tight">
                                {edu.degree}
                              </h3>
                              <h4 className={`text-lg md:text-xl font-semibold ${colors.accent} mb-1 group-hover:brightness-125 transition-all duration-300`}>
                                {edu.institution}
                              </h4>
                            </div>
                          </div>
                          
                          {/* Details section */}
                          <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-300 space-y-3 sm:space-y-0 sm:space-x-4">
                              <div className="flex items-center bg-gray-800/40 rounded-xl px-4 py-3 backdrop-blur-sm border border-gray-700/30 shadow-md">
                                <Calendar size={16} className={`mr-2 ${colors.accent}`} />
                                <span className="font-medium">{edu.period}</span>
                              </div>
                              <div className="flex items-center bg-gray-800/40 rounded-xl px-4 py-3 backdrop-blur-sm border border-gray-700/30 shadow-md">
                                <MapPin size={16} className={`mr-2 ${colors.accent}`} />
                                <span className="font-medium">{edu.location}</span>
                              </div>
                            </div>
                            
                            {/* Grade highlight */}
                            <div className={`bg-gradient-to-r ${colors.bg} rounded-2xl p-5 border-2 ${colors.border} shadow-lg backdrop-blur-sm`}>
                              <div className="flex items-center justify-center">
                                <div className="flex items-center">
                                  <Award size={24} className={`mr-4 ${colors.accent} group-hover:rotate-12 transition-transform duration-300`} />
                                  <span className={`${colors.accent} font-bold text-xl tracking-wide`}>{edu.grade}</span>
                                </div>
                              </div>
                            </div>
                            
                            {edu.details && (
                              <div className="bg-gray-800/30 rounded-xl p-5 backdrop-blur-sm border border-gray-700/30 shadow-md">
                                <p className="text-gray-300 text-sm leading-relaxed italic">{edu.details}</p>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        {/* Hover glow effect */}
                        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;