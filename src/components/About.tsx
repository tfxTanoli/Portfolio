'use client';

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg shadow-purple-500/20">
            <Image
              src="/fiverr_dp.jpg"
              alt="Faiza Nageen"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
            <p className="text-gray-300 mb-4">
              I'm a passionate Full Stack Developer with expertise in building modern web applications.
              With a strong foundation in both frontend and backend technologies, I create seamless
              user experiences and robust server-side solutions.
            </p>
            <p className="text-gray-300 mb-6">
              My journey in web development started with a curiosity for creating things that live on
              the internet. I've worked with various technologies and frameworks, always staying
              up-to-date with the latest trends and best practices.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2 text-white">Skills</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• React / Next.js</li>
                  <li>• TypeScript</li>
                  <li>• Node.js</li>
                  <li>• Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-white">Tools</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• Git / GitHub</li>
                  <li>• VS Code</li>
                  <li>• Docker</li>
                  <li>• Figma</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 