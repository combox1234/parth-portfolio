import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
}

const Certifications: React.FC = () => {
  const certRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const certifications: Certification[] = [
    {
      id: 'aws-cloud',
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2024',
      image: '/certificates/parth certificate/aws certificate.png'
    },
    {
      id: 'google-cert',
      title: 'Google Certificate',
      issuer: 'Google',
      date: '2024',
      image: '/certificates/parth certificate/google certificate.png'
    },
    {
      id: 'java-masterclass',
      title: 'Java Master Class 130+',
      issuer: 'Udemy',
      date: '2024',
      image: '/certificates/parth certificate/java master class 130+.png'
    },
    {
      id: 'java-oop',
      title: 'Java Object-Oriented Programming',
      issuer: 'LinkedIn Learning / Other',
      date: '2024',
      image: '/certificates/parth certificate/java oop.png'
    },
    {
      id: 'llm-app',
      title: 'LLM App Development',
      issuer: 'Unknown',
      date: '2024',
      image: '/certificates/parth certificate/llm app.png'
    },
    {
      id: 'opjava',
      title: 'Java Programming',
      issuer: 'Unknown',
      date: '2024',
      image: '/certificates/parth certificate/opjava.png'
    },
    {
      id: 'selenium',
      title: 'Selenium',
      issuer: 'Unknown',
      date: '2024',
      image: '/certificates/parth certificate/sel.png'
    },
    {
      id: 'uiux',
      title: 'UI/UX Design',
      issuer: 'Simplilearn',
      date: '2024',
      image: '/certificates/parth certificate/simplilearn uiux.png'
    },
    {
      id: 'udemy-cert',
      title: 'Udemy Certificate',
      issuer: 'Udemy',
      date: '2024',
      image: '/certificates/parth certificate/UC-0842a6e3-381d-41ae-acdc-11e1ebdeaa34.png'
    },
    {
      id: 'completion-cert',
      title: 'Completion Certificate',
      issuer: 'Unknown',
      date: '2024',
      image: '/certificates/parth certificate/Completion Certificate - Parth Patil.png'
    },
    {
      id: 'meta-cert',
      title: 'Certificate',
      issuer: 'Unknown',
      date: '2024',
      image: '/certificates/parth certificate/cbb67b01d99793bb063f62f9e6b825c8241bad2bca095c8cda98e90eab3b6209.png'
    }
  ];


  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-x-0');
          entry.target.classList.remove('opacity-0', 'translate-x-[-100px]');
        }
      });
    }, observerOptions);

    certRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      certRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Certifications
        </h2>
        <div className="w-20 h-1 bg-teal-500 mx-auto mb-12"></div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={cert.id}
                ref={el => certRefs.current[index] = el}
                onClick={() => setSelectedCert(cert)}
                className="cursor-pointer bg-gray-900 rounded-xl shadow-xl overflow-hidden transform opacity-0 translate-x-[-100px] transition-all duration-700 ease-out hover:shadow-2xl border border-gray-800 hover:border-teal-500"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-teal-400 font-medium mb-2">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal with smooth pop-out */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full p-4"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl"
              />
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-3 right-3 bg-gray-800 text-white rounded-full px-3 py-1 hover:bg-red-500 transition"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
