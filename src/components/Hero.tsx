import React, { useEffect, useState } from "react";
import {
  Github as GitHub,
  Linkedin,
  Mail,
  Download,
  Code,
  X,
} from "lucide-react";

const Hero: React.FC = () => {
  const [displayedName, setDisplayedName] = useState("");
  const [displayedRole, setDisplayedRole] = useState("");
  const [nameComplete, setNameComplete] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isRoleDeleting, setIsRoleDeleting] = useState(false);
  const [showResume, setShowResume] = useState(false);

  const name = "Parth Patil";
  const roles = [
    "Computer Engineering Student!",
    "AI Engineer",
    "Backend Java Developer",
    "Generative AI Enthusiast",
    "LLM & RAG Application Developer",
  ];

  // Name typing effect
  useEffect(() => {
    if (displayedName.length < name.length) {
      const timeout = setTimeout(() => {
        setDisplayedName(name.slice(0, displayedName.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setNameComplete(true);
    }
  }, [displayedName, name]);

  // Role typing effect
  useEffect(() => {
    if (!nameComplete) return;
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(
      () => {
        if (!isRoleDeleting) {
          if (displayedRole.length < currentRole.length) {
            setDisplayedRole(currentRole.slice(0, displayedRole.length + 1));
          } else {
            setTimeout(() => setIsRoleDeleting(true), 2000);
          }
        } else {
          if (displayedRole.length > 0) {
            setDisplayedRole(displayedRole.slice(0, -1));
          } else {
            setIsRoleDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isRoleDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayedRole, currentRoleIndex, isRoleDeleting, roles, nameComplete]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-white relative overflow-hidden pt-32"
    >

      {/* Floating icons */}
      <div className="absolute top-20 left-10 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center opacity-30 animate-bounce">
        <Linkedin className="text-white" size={24} />
      </div>
      <div
        className="absolute top-40 right-20 w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center opacity-30 animate-bounce"
        style={{ animationDelay: "1s" }}
      >
        <GitHub className="text-white" size={24} />
      </div>
      <div
        className="absolute bottom-40 left-20 w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center opacity-30 animate-bounce"
        style={{ animationDelay: "2s" }}
      >
        <Code className="text-white" size={24} />
      </div>
      <div
        className="absolute bottom-20 right-32 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center opacity-30 animate-bounce"
        style={{ animationDelay: "1.5s" }}
      >
        <Mail className="text-white" size={24} />
      </div>
      <div
        className="absolute top-1/3 left-1/4 w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center opacity-30 animate-bounce"
        style={{ animationDelay: "2.5s" }}
      >
        <GitHub className="text-white" size={24} />
      </div>
      <div
        className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center opacity-30 animate-bounce"
        style={{ animationDelay: "3s" }}
      >
        <Linkedin className="text-white" size={24} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300 mb-8 border border-gray-700">
            <span className="w-2 h-2 bg-teal-500 rounded-full mr-2 animate-pulse"></span>
            Available for opportunities! Let's connect
          </div>

          {/* Heading */}
          <div className="mb-6">
            <h2 className="text-2xl font-medium text-gray-300 mb-4">
              Hello, I'm
            </h2>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4">
              <span className="text-white">{displayedName}</span>
              {!nameComplete && (
                <span className="animate-pulse text-teal-500">|</span>
              )}
            </h1>

            {nameComplete && (
              <div className="text-2xl sm:text-3xl md:text-4xl font-medium h-16 flex items-center justify-center">
                <span className="text-teal-400">{displayedRole}</span>
                <span className="animate-pulse ml-1 text-teal-500">|</span>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            I'm a student at{" "}
            <strong>Pimpri Chinchwad College of Engineering, Pune</strong>,
            passionate about building innovative software solutions and
            exploring cutting-edge technologies. Currently pursuing Computer
            Engineering with expertise in Backend Development, Generative AI,
            and Data Structures.
          </p>

          {/* Social links */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="https://github.com/combox1234"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-full text-gray-300 hover:text-white transition-all duration-300 border border-gray-700 hover:border-gray-600"
            >
              <GitHub size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/parth-patil"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-full text-gray-300 hover:text-white transition-all duration-300 border border-gray-700 hover:border-gray-600"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://leetcode.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-full text-gray-300 hover:text-white transition-all duration-300 border border-gray-700 hover:border-gray-600"
            >
              <Code size={20} />
              <span>LeetCode</span>
            </a>
            <a
              href="mailto:01parthpatil10@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-full text-gray-300 hover:text-white transition-all duration-300 border border-gray-700 hover:border-gray-600"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-black font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get in Touch
            </a>
            <button
              onClick={() => setShowResume(true)}
              className="px-8 py-4 border-2 border-gray-600 hover:border-teal-500 text-white hover:text-teal-400 rounded-full transition-all duration-300 font-semibold flex items-center justify-center gap-2 hover:bg-gray-900"
            >
              <Download size={20} />
              View Resume
            </button>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      {showResume && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl h-[80vh] relative overflow-hidden animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setShowResume(false)}
              className="absolute top-3 right-3 text-white hover:text-teal-400"
            >
              <X size={28} />
            </button>
            {/* Resume Iframe */}
            <iframe
              src="/resume.pdf"
              title="Resume"
              className="w-full h-full rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
