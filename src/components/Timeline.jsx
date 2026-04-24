import { motion } from 'framer-motion';

const Timeline = ({ items, title }) => {
  return (
    <section id={title.split(' ')[0].toLowerCase()} className="py-20 bg-white dark:bg-darkBg">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          {title}
        </motion.h2>

        <div className="relative border-l-4 border-gray-200 dark:border-gray-700 ml-3 md:ml-1/2 max-w-4xl mx-auto">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-10 ml-6 md:ml-12"
            >
              {/* Timeline Node */}
              <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-[15px] ring-4 ring-white dark:ring-darkBg"></span>
              
             {/* Card */}
<div className="p-6 bg-gray-50 dark:bg-darkCard rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow">
  <div className="flex items-start gap-4">
    
    {/* Organization Logo */}
    {item.image && (
      <img 
        src={item.image} 
        alt={item.organization} 
        className="w-12 h-12 md:w-16 md:h-16 rounded-lg object-contain bg-white p-1 shadow-sm"
      />
    )}

    <div className="flex-grow">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
        <h3 className="text-xl font-bold">{item.title}</h3>
        <span className="text-sm font-medium text-primary bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full w-fit">
          {item.date}
        </span>
      </div>
      <h4 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2">{item.organization}</h4>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
      
      {/* Tech Stack Pills */}
      {item.tech && (
        <div className="flex flex-wrap gap-2">
          {item.tech.map((tech, i) => (
            <span key={i} className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md">
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;