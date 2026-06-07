import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
  features: string[];
}

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  
  const projects: Project[] = [
    {
      id: 'documind-ai',
      title: 'DocuMind AI',
      description:
        'Built a local-first Retrieval-Augmented Generation (RAG) platform using Llama 3.2 for intelligent document querying and contextual question answering.',
      technologies: ['Python', 'Flask', 'Ollama', 'Celery', 'Redis'],
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg',
      github: 'https://github.com/combox1234/DocuMind-AI',
      features: [
        'Automated OCR and vector indexing pipeline using Celery and Redis',
        'Role-based access control (RBAC) and JWT authentication',
        'Hybrid search and Cross-Encoder re-ranking for precise retrieval'
      ]
    },
    {
      id: 'robotic-trash-collector',
      title: 'Robotic Trash Collector',
      description:
        'Developed a computer vision system using YOLOv8 to detect floating waste in real time.',
      technologies: ['Python', 'YOLOv8', 'OpenCV'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
      github: 'https://github.com/combox1234/Robotic-Trash-Collector',
      features: [
        'Model trained on 50,000+ labeled images with >80% accuracy',
        'OpenCV-based video processing and real-time object tracking',
        'Scalable architecture for autonomous navigation and solar power'
      ]
    },
    {
      id: 'securedrop-v2',
      title: 'SecureDrop v2',
      description:
        'A multi-service, cybersecurity-focused cloud application for secure temporary file exchange on AWS.',
      technologies: ['AWS', 'Python', 'Flask', 'DynamoDB', 'Lambda', 'WAF'],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
      features: [
        'Password-protected, bcrypt-hashed presigned URLs for secure sharing',
        'AES-256 SSE-S3 encryption at rest with automated file deletion via Lambda',
        'AWS WAF integration for perimeter defense against SQLi and XSS attacks'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Projects
        </h2>
        <div className="w-20 h-1 bg-teal-500 mx-auto mb-12"></div>
        
        {/* Uniform grid for all three projects */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id}
              project={project} 
              activeProject={activeProject} 
              setActiveProject={setActiveProject} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CardProps {
  project: Project;
  activeProject: string | null;
  setActiveProject: React.Dispatch<React.SetStateAction<string | null>>;
}

const ProjectCard: React.FC<CardProps> = ({ project, activeProject, setActiveProject }) => {
  return (
    <div 
      className="bg-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group border border-gray-800 hover:border-teal-500 flex flex-col h-full"
    >
      {/* Image with hover overlay */}
      <div 
        className="h-48 overflow-hidden relative flex-shrink-0"
        onMouseEnter={() => setActiveProject(project.id)}
        onMouseLeave={() => setActiveProject(null)}
      >
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 transition-opacity duration-300 ${
          activeProject === project.id ? 'opacity-100' : ''
        }`}>
          <div className="flex space-x-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-teal-500 text-black rounded-full hover:bg-teal-400 transition-colors transform hover:scale-110"
                aria-label={`GitHub repository for ${project.title}`}
              >
                <Github size={24} />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-teal-500 text-black rounded-full hover:bg-teal-400 transition-colors transform hover:scale-110"
                aria-label={`Live demo for ${project.title}`}
              >
                <ExternalLink size={24} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Text content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {project.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-gray-400 text-xs flex items-start">
                <span className="text-teal-400 mr-2">•</span> {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech) => (
            <span 
              key={tech}
              className="px-2 py-1 bg-gray-800 text-gray-300 rounded-full text-xs border border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
