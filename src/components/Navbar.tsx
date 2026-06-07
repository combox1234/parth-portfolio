import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = [
        'home',
        'about',
        'education',
        'skills',
        'projects',
        'achievements',
        'certifications',
        'gallery',
        'contact',
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', title: 'Home' },
    { href: '#about', title: 'About' },
    { href: '#education', title: 'Education' },
    { href: '#skills', title: 'Skills' },
    { href: '#projects', title: 'Projects' },
    { href: '#achievements', title: 'Achievements' },
    { href: '#certifications', title: 'Certifications' },
    { href: '#contact', title: 'Contact' }
  ];

  return (
    <header className="fixed top-4 z-50 w-full flex justify-center">
      <div
        className={`flex items-center justify-between px-6 py-3 rounded-full shadow-lg transition-all duration-300 ${
          isScrolled
            ? 'bg-black/80 backdrop-blur-md border border-gray-700'
            : 'bg-black/60 backdrop-blur-sm'
        } w-[90%] md:w-[70%] max-w-4xl`}
      >
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center text-lg font-bold text-white"
        >
          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-2">
            <span className="text-black font-bold text-sm">P</span>
          </div>
          Parth
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector(item.href)
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`text-sm font-medium transition-all duration-300 relative ${
                    activeSection === item.href
                      ? 'text-teal-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.title}
                  {activeSection === item.href && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-teal-400 rounded-full"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md text-gray-300 hover:text-teal-400"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav (below pill) */}
      {isOpen && (
        <div className="absolute top-16 w-[90%] md:hidden bg-black/95 backdrop-blur-md rounded-2xl shadow-lg border border-gray-700 px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector(item.href)
                  ?.scrollIntoView({ behavior: 'smooth' });
                setIsOpen(false);
              }}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                activeSection === item.href
                  ? 'text-teal-400'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
