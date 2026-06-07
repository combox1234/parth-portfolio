import React, { useState, useEffect, useRef } from "react";
import {
  Code,
  Database,
  Globe,
  Wrench,
  Brain,
  Users,
  Cpu,
  BookOpen,
} from "lucide-react";

interface Skill {
  name: string;
  category: string;
}

interface Category {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

  const skills: Skill[] = [
    { name: "C++", category: "languages" },
    { name: "Java 21", category: "languages" },
    { name: "Python", category: "languages" },
    { name: "JavaScript(basics)", category: "languages" },
    { name: "C", category: "languages" },
    { name: "HTML5", category: "web" },
    { name: "CSS3", category: "web" },
    { name: "Responsive Design", category: "web" },
    { name: "Spring", category: "frameworks" },
    { name: "Spring Boot", category: "frameworks" },
    { name: "Flask", category: "frameworks" },
    { name: "MongoDB", category: "databases" },
    { name: "MySQL", category: "databases" },
    { name: "PostgreSQL", category: "databases" },
    { name: "Relational Database Design", category: "databases" },
    { name: "Data Structures", category: "cs" },
    { name: "Algorithm Analysis", category: "cs" },
    { name: "Object Oriented Programming", category: "cs" },
    { name: "Operating System", category: "cs" },
    { name: "Object-Oriented Design", category: "cs" },
    { name: "Machine Learning", category: "cs" },
    { name: "Git/GitHub", category: "tools" },
    { name: "VS Code", category: "tools" },
    { name: "Postman", category: "tools" },
    { name: "Linux", category: "tools" },
    { name: "Docker", category: "tools" },
    { name: "IntelliJ", category: "tools" },
    { name: "Antigravity", category: "tools" },
    { name: "Vercel Platform", category: "tools" },
    { name: "Ollama", category: "tools" },
    { name: "AWS (Amazon Web Services)", category: "cloud" },
    { name: "AWS EC2", category: "cloud" },
    { name: "AWS S3", category: "cloud" },
    { name: "AWS RDS", category: "cloud" },
    { name: "AWS DynamoDB", category: "cloud" },
    { name: "Retrieval-Augmented Generation (RAG)", category: "cs" },
    { name: "LangChain", category: "cs" },
    { name: "Chroma (Vector Database)", category: "cs" },
    { name: "HuggingFace Embeddings", category: "cs" },
    { name: "Gen AI", category: "cs" },
    { name: "Problem Solving", category: "soft" },
    { name: "Team Leadership", category: "soft" },
    { name: "Communication", category: "soft" },
    { name: "Project Management", category: "soft" },
    { name: "IoT", category: "interdisciplinary" },
    { name: "UAV", category: "interdisciplinary" },
  ];

  const categories: Category[] = [
    {
      id: "all",
      label: "All Skills",
      icon: <Brain className="w-5 h-5" />,
      color: "teal",
    },
    {
      id: "languages",
      label: "Languages",
      icon: <Code className="w-5 h-5" />,
      color: "blue",
    },
    {
      id: "web",
      label: "Web Technologies",
      icon: <Globe className="w-5 h-5" />,
      color: "green",
    },
    {
      id: "frameworks",
      label: "Frameworks",
      icon: <Cpu className="w-5 h-5" />,
      color: "purple",
    },
    {
      id: "databases",
      label: "Databases",
      icon: <Database className="w-5 h-5" />,
      color: "orange",
    },
    {
      id: "cs",
      label: "CS Fundamentals",
      icon: <BookOpen className="w-5 h-5" />,
      color: "red",
    },
    {
      id: "tools",
      label: "Tools",
      icon: <Wrench className="w-5 h-5" />,
      color: "yellow",
    },
    {
      id: "cloud",
      label: "Cloud & DevOps",
      icon: <Cpu className="w-5 h-5" />,
      color: "indigo",
    },
    {
      id: "soft",
      label: "Soft Skills",
      icon: <Users className="w-5 h-5" />,
      color: "pink",
    },
    {
      id: "interdisciplinary",
      label: "Interdisciplinary",
      icon: <Globe className="w-5 h-5" />,
      color: "teal",
    },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const getColorClasses = (color: string) => {
    const colorMap = {
      teal: "bg-teal-500/10 border-teal-500/30 text-teal-400 hover:bg-teal-500/20 hover:border-teal-500",
      blue: "bg-blue-500/10 border-blue-500/30 text-blue-400 hover:bg-blue-500/20 hover:border-blue-500",
      green:
        "bg-green-500/10 border-green-500/30 text-green-400 hover:bg-green-500/20 hover:border-green-500",
      purple:
        "bg-purple-500/10 border-purple-500/30 text-purple-400 hover:bg-purple-500/20 hover:border-purple-500",
      orange:
        "bg-orange-500/10 border-orange-500/30 text-orange-400 hover:bg-orange-500/20 hover:border-orange-500",
      red: "bg-red-500/10 border-red-500/30 text-red-400 hover:bg-red-500/20 hover:border-red-500",
      yellow:
        "bg-yellow-500/10 border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/20 hover:border-yellow-500",
      pink: "bg-pink-500/10 border-pink-500/30 text-pink-400 hover:bg-pink-500/20 hover:border-pink-500",
      indigo: "bg-indigo-500/10 border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/20 hover:border-indigo-500",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.teal;
  };

  const getActiveColorClasses = (color: string) => {
    const colorMap = {
      teal: "bg-teal-500 text-black border-teal-500",
      blue: "bg-blue-500 text-white border-blue-500",
      green: "bg-green-500 text-black border-green-500",
      purple: "bg-purple-500 text-white border-purple-500",
      orange: "bg-orange-500 text-black border-orange-500",
      red: "bg-red-500 text-white border-red-500",
      yellow: "bg-yellow-500 text-black border-yellow-500",
      pink: "bg-pink-500 text-white border-pink-500",
      indigo: "bg-indigo-500 text-white border-indigo-500",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.teal;
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("animate-bounce-in");
          }, index * 100);
        }
      });
    }, observerOptions);

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      skillRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [filteredSkills]);

  return (
    <section id="skills" className="py-16 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white">
          Technical Skills
        </h2>
        <div className="w-20 h-1 bg-teal-500 mx-auto mb-8 sm:mb-12"></div>

        <div className="max-w-6xl mx-auto">
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 transform hover:scale-105 border ${
                  activeCategory === category.id
                    ? getActiveColorClasses(category.color)
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border-gray-700 hover:border-gray-600"
                }`}
              >
                {category.icon}
                <span className="hidden sm:inline">{category.label}</span>
                <span className="sm:hidden">
                  {category.label.split(" ")[0]}
                </span>
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 justify-center">
            {filteredSkills.map((skill, index) => {
              const category = categories.find(
                (cat) => cat.id === skill.category
              );
              return (
                <div
                  key={`${skill.name}-${activeCategory}`}
                  ref={(el) => (skillRefs.current[index] = el)}
                  className={`skill-box p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 cursor-pointer text-center opacity-0 translate-y-4 ${
                    category
                      ? getColorClasses(category.color)
                      : getColorClasses("teal")
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <div className="flex flex-col items-center gap-2">
                    {category?.icon && (
                      <div className="mb-1">{category.icon}</div>
                    )}
                    <span className="font-medium text-xs sm:text-sm text-center leading-tight">
                      {skill.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Skills Count */}
          <div className="mt-8 sm:mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-800 rounded-full border border-gray-700">
              <span className="text-teal-400 font-bold text-lg sm:text-xl">
                {filteredSkills.length}
              </span>
              <span className="text-gray-300 text-sm sm:text-base">
                {activeCategory === "all"
                  ? "Total Skills"
                  : `${
                      categories.find((c) => c.id === activeCategory)?.label ||
                      "Skills"
                    }`}
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
          }
          50% {
            opacity: 1;
            transform: translateY(-10px) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-bounce-in {
          animation: bounceIn 0.6s ease-out forwards;
        }

        .skill-box {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .skill-box:hover {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 640px) {
          .skill-box {
            min-height: 80px;
          }
        }

        @media (min-width: 641px) {
          .skill-box {
            min-height: 100px;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;