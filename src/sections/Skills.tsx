import { motion } from 'framer-motion';
import { VERIFIED_DATA } from '../data/portfolioData';

const Skills = () => {
  return (
    <section className="relative py-24 bg-black px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            AI Capability Map
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full opacity-50 shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
        </motion.div>

        {/* Skill Universe Grid */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {VERIFIED_DATA.skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="px-6 py-3 md:px-8 md:py-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md hover:bg-white/10 hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(37,99,235,0.25)] transition-all cursor-default"
            >
              <span className="text-gray-300 font-medium tracking-wide">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
