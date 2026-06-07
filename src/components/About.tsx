import React, { useEffect, useState } from "react";
import { Github, Linkedin, Code } from "lucide-react";

interface CounterProps {
  end: number;
  duration: number;
  suffix: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <div className="text-4xl font-bold text-teal-400 mb-2">
      {count}
      {suffix}
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-12"></div>

          {/* Flexbox for text and image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12">
            {/* Left: Paragraphs */}
            <div className="prose prose-lg max-w-none text-justify">
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                I'm a Computer Engineering student at Pimpri Chinchwad College
                of Engineering, passionate about building innovative software
                solutions and exploring cutting-edge technologies.
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                With a strong foundation in backend development, generative AI,
                and data structures, I enjoy tackling complex challenges and
                creating robust applications. My academic journey has equipped me
                with skills in various programming languages and frameworks.
              </p>

              <p className="text-gray-300 leading-relaxed text-lg">
                Beyond academics, I take pride in my leadership roles with the
                ISTE Students' Chapter and PCCOE ACM Student Chapter, where I've
                helped organize events, grow membership, and foster a
                collaborative learning environment.
              </p>
            </div>

            {/* Right: Round Image with Hover Social Links */}
            <div className="flex justify-center">
              <div className="relative rounded-full w-80 h-80">
                {/* Image with glow & hover scale */}
                <div className="rounded-full p-1 bg-black border-2 border-teal-500 shadow-[0_0_20px_rgba(20,255,200,0.5)] transition-all duration-500 ease-in-out hover:scale-90 hover:shadow-[0_0_30px_rgba(20,255,200,0.7)] w-full h-full">
                  <img
                    src="/Photo/WhatsApp_Image_2026-02-21_at_11.24.38_PM-removebg-preview.png"
                    alt="Parth Patil"
                    className="rounded-full w-full h-full object-contain animate-float"
                  />
                </div>

                {/* Overlay for social links */}
                <div className="absolute inset-0 rounded-full bg-black/80 flex items-center justify-center gap-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="https://github.com/combox1234"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-teal-400 text-2xl"
                    title="GitHub"
                  >
                    <Github />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/parth-patil-910482292"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-teal-400 text-2xl"
                    title="LinkedIn"
                  >
                    <Linkedin />
                  </a>
                  <a
                    href="https://leetcode.com/u/skullroster/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-teal-400 text-2xl"
                    title="LeetCode"
                  >
                    <Code />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Counters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-teal-500 transition-all duration-300">
              <Counter end={3} duration={2000} suffix="+" />
              <p className="text-gray-300">Years of Coding Experience</p>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-teal-500 transition-all duration-300">
              <Counter end={5} duration={2500} suffix="+" />
              <p className="text-gray-300">Major Projects</p>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-teal-500 transition-all duration-300">
              <Counter end={200} duration={3000} suffix="+" />
              <p className="text-gray-300">DSA Problems Solved</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating animation */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
