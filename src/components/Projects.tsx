'use client';

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaShieldAlt, FaRobot, FaShoppingCart, FaChartLine, FaCalendarAlt, FaBook, FaTasks, FaImage } from 'react-icons/fa'

const projects = [
  {
    title: 'IoT Botnet Defender',
    description: 'An advanced security system that detects and prevents IoT botnet attacks using machine learning algorithms and real-time monitoring.',
    icon: <FaShieldAlt className="w-16 h-16 text-purple-400" />,
    technologies: ['Python', 'TensorFlow', 'Docker', 'MongoDB', 'React'],
    link: '#',
  },
  {
    title: 'AI-Powered Chatbot',
    description: 'An intelligent chatbot system that uses natural language processing to provide customer support and automate responses.',
    icon: <FaRobot className="w-16 h-16 text-purple-400" />,
    technologies: ['Python', 'NLP', 'FastAPI', 'React', 'TypeScript'],
    link: '#',
  },
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory management and secure payment processing.',
    icon: <FaShoppingCart className="w-16 h-16 text-purple-400" />,
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    link: '#',
  },
  {
    title: 'Analytics Dashboard',
    description: 'A comprehensive analytics dashboard for tracking business metrics and generating insights.',
    icon: <FaChartLine className="w-16 h-16 text-purple-400" />,
    technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Material-UI'],
    link: '#',
  },
  {
    title: 'Event Management System',
    description: 'A web application for managing events, bookings, and schedules with email notifications and calendar integration.',
    icon: <FaCalendarAlt className="w-16 h-16 text-purple-400" />,
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'SendGrid'],
    link: '#',
  },
  {
    title: 'Blog Platform',
    description: 'A modern blog platform with rich text editing, comments, and social sharing features.',
    icon: <FaBook className="w-16 h-16 text-purple-400" />,
    technologies: ['Next.js', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'AWS S3'],
    link: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, task assignments, and progress tracking.',
    icon: <FaTasks className="w-16 h-16 text-purple-400" />,
    technologies: ['React', 'Firebase', 'Material-UI', 'Redux', 'WebSocket'],
    link: '#',
  },
  {
    title: 'Image Gallery App',
    description: 'A responsive image gallery application with search, filtering, and lightbox features for viewing images.',
    icon: <FaImage className="w-16 h-16 text-purple-400" />,
    technologies: ['React', 'Tailwind CSS', 'Firebase Storage', 'Framer Motion', 'React Query'],
    link: '#',
  },
]

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-white">My Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg shadow-purple-500/20 p-6"
              >
                <div className="flex flex-col items-center mb-6">
                  <div className="p-4 bg-gray-900/50 rounded-full mb-4">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white text-center">{project.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 text-center">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="text-center">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.link}
                    className="inline-block px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
                  >
                    View Project
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 