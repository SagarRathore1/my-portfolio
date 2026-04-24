import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profileImg from '../assets/profile.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-2">Hello, I'm</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Sagar
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">
            Data Analyst & Engineering Student specializing in Business Intelligence, Python, and Operations.
          </p>
          
          <div className="flex justify-center md:justify-start space-x-4 mb-8">
            <a href="#projects" className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl">
              View My Work
            </a>
            <a href="mailto:sagarfromdtu@gmail.com" className="px-8 py-3 border-2 border-primary text-primary dark:text-white rounded-full font-medium hover:bg-primary hover:text-white transition-colors">
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start space-x-6 text-2xl text-gray-600 dark:text-gray-400">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><FaLinkedin /></a>
            <a href="mailto:sagarfromdtu@gmail.com" className="hover:text-primary transition-colors"><FaEnvelope /></a>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 border-4 border-primary rounded-full animate-pulse opacity-50"></div>
            <img 
              src={profileImg}
              alt="Profile" 
              className="rounded-full w-full h-full object-cover shadow-2xl z-10 relative"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;