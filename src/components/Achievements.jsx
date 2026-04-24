import { motion } from 'framer-motion';
import { FaTrophy, FaCertificate } from 'react-icons/fa';

const Achievements = ({ achievements }) => {
  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Achievements & Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-8 bg-white dark:bg-darkCard rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-800 transition-all"
            >
              <div className="text-primary text-3xl mb-4">
                {item.type === 'cert' ? <FaCertificate /> : <FaTrophy />}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;