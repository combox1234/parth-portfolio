import React, { useEffect, useRef } from "react";
import { Award, BookOpen, Code, Trophy, Users, Target, Star, Medal } from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'technical' | 'personal';
  date?: string;
}

const Achievements: React.FC = () => {
  const achievementRefs = useRef<(HTMLDivElement | null)[]>([]);

  const achievements: Achievement[] = [
    {
      id: 'TIGC 2026',
      title: '2026 Technology Infusion Grand Challenge - Undergraduate edition',
      description: 'Participated in 2026 Technology Infusion Grand Challenge - Undergraduate edition.',
      icon: <BookOpen className="text-teal-400" size={24} />,
      category: 'technical',
      date: '2026'
    },
    {
      id: 'cyberkavach-2025',
      title: 'Active Participant, CyberKavach 2025 - IdeaExpo',
      description: 'Actively participated in CyberKavach 2025 – IdeaExpo, organized by OWASP PCCOE and the Department of Computer Engineering.',
      icon: <Award className="text-teal-400" size={24} />,
      category: 'technical',
      date: '2025'
    },
    {
      id: 'cybersecurity-bootcamp-2025',
      title: 'Participant, Cybersecurity and Ethical Hacking Bootcamp',
      description: 'Participated in the Cybersecurity and Ethical Hacking Bootcamp organized by OWASP PCCOE and the Department of Computer Engineering.',
      icon: <Award className="text-teal-400" size={24} />,
      category: 'technical',
      date: '2025'
    },
    {
      id: 'codechef-4star',
      title: 'CodeChef 4-Star Rating Achievement',
      description: 'Achieved a CodeChef rating of 1867 (4-Star, Div 2) with a global rank of 4,207 and India rank of 3,280. Solved 200+ Data Structures and Algorithms problems across platforms.',
      icon: <Code className="text-teal-400" size={24} />,
      category: 'technical',
      date: '2024'
    },
    {
      id: 'hackerrank-2star',
      title: 'HackerRank 2-Star Problem Solving',
      description: 'Attained a 2-Star rating in Problem Solving on HackerRank, demonstrating algorithmic skills.',
      icon: <Award className="text-teal-400" size={24} />,
      category: 'technical',
      date: '2024'
    },
    {
      id: 'code-relay-2nd',
      title: '2nd Place in Code Relay Competition',
      description: 'Secured 2nd place in the Code Relay competition at PCCOE Techfest – Anantya, organized by ACM-W.',
      icon: <Trophy className="text-teal-400" size={24} />,
      category: 'technical',
      date: '2024'
    },
    {
      id: 'Volleyball',
      title: 'District Level Volleyball Player, Pune',
      description: 'Previously a one-time District Level Volleyball player in Pune, showcasing discipline, teamwork, and competitive spirit.',
      icon: <Trophy className="text-teal-400" size={24} />,
      category: 'personal',
      date: '2023'
    },
    {
      id: 'Spectrum 2024 - head',
      title: 'Head of Marketing and Sponsorship, Spectrum 2024',
      description: 'Served as Head of Marketing and Sponsorship and Core Student Organizer Member.',
      icon: <Users className="text-teal-400" size={24} />,
      category: 'personal',
      date: '2024'
    },
    {
      id: 'acm-marketing-team',
      title: 'Marketing Team Member, ACM',
      description: 'Served as a marketing team member during the second year of engineering, leading and assisting in tech event management.',
      icon: <Users className="text-teal-400" size={24} />,
      category: 'personal',
      date: '2024'
    },
    {
      id: 'baby-conference-2025',
      title: 'Finance Team, Baby Conference',
      description: 'Handled financial management and sponsorships for the conference.',
      icon: <Users className="text-teal-400" size={24} />,
      category: 'personal',
      date: '2025'
    },
    {
      id: 'sih-management-team',
      title: 'SIH Management Team',
      description: 'Handled managing students and their allocations.',
      icon: <Users className="text-teal-400" size={24} />,
      category: 'personal',
      date: '2024'
    }
  ];

  const technicalAchievements = achievements.filter(a => a.category === 'technical');
  const personalAchievements = achievements.filter(a => a.category === 'personal');

  const getCategoryColor = (category: string) => {
    return category === 'technical' 
      ? {
          bg: 'from-blue-500/20 to-indigo-500/20',
          border: 'border-blue-500/30',
          accent: 'text-blue-400',
          dot: 'bg-gradient-to-r from-blue-500 to-indigo-500',
          glow: 'shadow-blue-500/30'
        }
      : {
          bg: 'from-purple-500/20 to-pink-500/20',
          border: 'border-purple-500/30',
          accent: 'text-purple-400',
          dot: 'bg-gradient-to-r from-purple-500 to-pink-500',
          glow: 'shadow-purple-500/30'
        };
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    achievementRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      achievementRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Achievements & Recognition
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Milestones and accomplishments that define my journey in technology and leadership
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Technical Achievements Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
              <Code className="text-blue-400" size={28} />
              Technical Achievements
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full opacity-80 shadow-lg"></div>
              
              <div className="space-y-12">
                {technicalAchievements.map((achievement, index) => {
                  const colors = getCategoryColor('technical');
                  return (
                    <div 
                      key={achievement.id}
                      ref={el => achievementRefs.current[index] = el}
                      className={`relative flex flex-col md:flex-row md:items-center opacity-0 translate-y-10 transition-all duration-700 ease-out ${
                        index % 2 === 0 ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      {/* Timeline dot */}
                      <div className={`absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 ${colors.dot} rounded-full border-4 border-black z-20 shadow-xl ${colors.glow}`}>
                        <div className={`absolute inset-0 ${colors.dot} rounded-full animate-ping opacity-30`}></div>
                        <div className="absolute inset-2 bg-white rounded-full opacity-20"></div>
                      </div>
                      
                      {/* Content */}
                      <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-0 md:pr-12' : 'md:pl-12 md:pr-0'} pl-8`}>
                        <div className={`relative bg-gradient-to-br ${colors.bg} backdrop-blur-lg rounded-3xl p-8 border-2 ${colors.border} hover:border-opacity-80 transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 shadow-2xl ${colors.glow} group overflow-hidden`}>
                          {/* Decorative elements */}
                          <div className={`absolute -top-10 -right-10 w-32 h-32 ${colors.dot} opacity-10 rounded-full blur-xl`}></div>
                          <div className={`absolute -bottom-10 -left-10 w-24 h-24 ${colors.dot} opacity-10 rounded-full blur-xl`}></div>
                          
                          <div className="flex items-start space-x-4">
                            <div className={`flex-shrink-0 p-4 bg-gradient-to-br ${colors.bg} rounded-2xl border-2 ${colors.border} shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                              <div className="text-blue-400">
                                {achievement.icon}
                              </div>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors duration-300 leading-tight">{achievement.title}</h4>
                              {achievement.date && (
                                <span className={`${colors.accent} text-sm font-medium mb-3 block bg-gray-800/60 rounded-lg px-3 py-1 inline-block`}>{achievement.date}</span>
                              )}
                              <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
                            </div>
                          </div>
                          
                          {/* Hover glow effect */}
                          <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`}></div>
                        </div>
                      </div>
                      
                      {/* Spacer for timeline */}
                      <div className="md:w-1/2"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Personal Achievements Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
              <Users className="text-purple-400" size={28} />
              Leadership & Personal Achievements
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full opacity-80 shadow-lg"></div>
              
              <div className="space-y-12">
                {personalAchievements.map((achievement, index) => {
                  const colors = getCategoryColor('personal');
                  return (
                    <div 
                      key={achievement.id}
                      ref={el => achievementRefs.current[technicalAchievements.length + index] = el}
                      className={`relative flex flex-col md:flex-row md:items-center opacity-0 translate-y-10 transition-all duration-700 ease-out ${
                        index % 2 === 0 ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      {/* Timeline dot */}
                      <div className={`absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 ${colors.dot} rounded-full border-4 border-black z-20 shadow-xl ${colors.glow}`}>
                        <div className={`absolute inset-0 ${colors.dot} rounded-full animate-ping opacity-30`}></div>
                        <div className="absolute inset-2 bg-white rounded-full opacity-20"></div>
                      </div>
                      
                      {/* Content */}
                      <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-0 md:pr-12' : 'md:pl-12 md:pr-0'} pl-8`}>
                        <div className={`relative bg-gradient-to-br ${colors.bg} backdrop-blur-lg rounded-3xl p-8 border-2 ${colors.border} hover:border-opacity-80 transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 shadow-2xl ${colors.glow} group overflow-hidden`}>
                          {/* Decorative elements */}
                          <div className={`absolute -top-10 -right-10 w-32 h-32 ${colors.dot} opacity-10 rounded-full blur-xl`}></div>
                          <div className={`absolute -bottom-10 -left-10 w-24 h-24 ${colors.dot} opacity-10 rounded-full blur-xl`}></div>
                          
                          <div className="flex items-start space-x-4">
                            <div className={`flex-shrink-0 p-4 bg-gradient-to-br ${colors.bg} rounded-2xl border-2 ${colors.border} shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                              <div className="text-purple-400">
                                {achievement.icon}
                              </div>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors duration-300 leading-tight">{achievement.title}</h4>
                              {achievement.date && (
                                <span className={`${colors.accent} text-sm font-medium mb-3 block bg-gray-800/60 rounded-lg px-3 py-1 inline-block`}>{achievement.date}</span>
                              )}
                              <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
                            </div>
                          </div>
                          
                          {/* Hover glow effect */}
                          <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`}></div>
                        </div>
                      </div>
                      
                      {/* Spacer for timeline */}
                      <div className="md:w-1/2"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Coding Platform Cards */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
              <Medal className="text-teal-400" size={28} />
              Coding Profiles & Rankings
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* HackerRank Card */}
              <a
                href="https://www.hackerrank.com/profile/yarparth1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-center block group"
              >
                <div className="relative mb-6">
                  {/* Siddhesh Photo Circle */}
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-green-500 group-hover:border-green-400 transition-colors">
                    <img
                      src="/Photo/WhatsApp_Image_2026-02-21_at_11.24.38_PM-removebg-preview.png"
                      alt="Siddhesh Patil"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Platform Logo Badge */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center border-4 border-gray-900">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.42 16.927l-2.022.001v-3.874H8.601v3.874H6.58V7.073h2.022v3.916h6.797V7.073h2.022v9.854z"/>
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  HackerRank
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/20">
                    <p className="text-green-400 font-bold">2-Star Rating</p>
                    <p className="text-gray-300">Problem Solving</p>
                  </div>
                  <div className="text-gray-400">
                    <p>Data Structures & Algorithms</p>
                  </div>
                </div>
              </a>

              {/* LeetCode Card */}
              <a
                href="https://leetcode.com/u/skullroster/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-yellow-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-center block group"
              >
                <div className="relative mb-6">
                  {/* Siddhesh Photo Circle */}
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-yellow-500 group-hover:border-yellow-400 transition-colors">
                    <img
                      src="/Photo/WhatsApp_Image_2026-02-21_at_11.24.38_PM-removebg-preview.png"
                      alt="Siddhesh Patil"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Platform Logo Badge */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center border-4 border-gray-900">
                    <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  LeetCode
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="bg-yellow-500/10 rounded-lg p-3 border border-yellow-500/20">
                    <p className="text-yellow-400 font-bold">Active Solver</p>
                    <p className="text-gray-300">Problem Solving</p>
                  </div>
                  <div className="text-gray-400">
                    <p>Data Structures & Algorithms</p>
                    <p>Regular Contest Participation</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;