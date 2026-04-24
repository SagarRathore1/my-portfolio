import { motion } from 'framer-motion';
import { FaJava, FaGitAlt, FaFileExcel, FaChartBar, FaChartPie, FaDatabase } from 'react-icons/fa';

const skills = [
  { name: 'Advanced Excel', icon: <FaFileExcel className="text-[#217346]" /> },
  { name: 'Power BI', icon: <FaChartBar className="text-[#F2C811]" /> },
  { name: 'Tableau', icon: <FaChartPie className="text-[#E97627]" /> },
  { name: 'PostgreSQL', icon: <FaDatabase className="text-[#336791]" /> },
  { name: 'Java', icon: <FaJava className="text-[#007396]" /> },
  { name: 'Git & GitHub', icon: <FaGitAlt className="text-[#F05032]" /> },
];

const SkillGrid = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-darkBg">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center p-6 bg-gray-50 dark:bg-darkCard rounded-2xl shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-800"
            >
              <div className="text-5xl mb-4">{skill.icon}</div>
              <h3 className="font-medium text-sm md:text-base">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillGrid;