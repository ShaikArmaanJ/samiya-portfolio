import { motion } from 'framer-motion';
import { Briefcase, Terminal, Award } from 'lucide-react';
import { VERIFIED_DATA } from '../data/portfolioData';

const Milestones = () => {
  return (
    <section className="relative py-24 bg-black px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Experience & Milestones
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full opacity-50 shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12">
          
          {/* Internships Cards (Mapped dynamically) */}
          {VERIFIED_DATA.internships.map((internship, index) => (
            <motion.div
              key={internship.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="relative pl-8 md:pl-12"
            >
              {/* Glowing Node */}
              <div className="absolute -left-[20px] top-1 h-10 w-10 bg-black border border-white/20 rounded-full flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                <Briefcase size={18} />
              </div>
              
              <div className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:border-blue-500/30 hover:bg-white/[0.07] transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{internship.company}</h3>
                    <p className="text-blue-400 font-medium">{internship.role}</p>
                  </div>
                  <span className="text-xs font-medium text-gray-400 px-3 py-1.5 bg-white/5 rounded-full border border-white/10 whitespace-nowrap">
                    {internship.duration}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{internship.description}</p>
              </div>
            </motion.div>
          ))}

          {/* Hackathons Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative pl-8 md:pl-12"
          >
            <div className="absolute -left-[20px] top-1 h-10 w-10 bg-black border border-white/20 rounded-full flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.2)]">
              <Terminal size={18} />
            </div>
            
            <div className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:border-emerald-500/30 hover:bg-white/[0.07] transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-5">Hackathons</h3>
              <ul className="space-y-4">
                {VERIFIED_DATA.hackathons.map((hackathon) => (
                  <li key={hackathon} className="flex items-start gap-3 text-gray-300">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500/50 shadow-[0_0_8px_rgba(52,211,153,0.6)] flex-shrink-0" />
                    <span className="leading-snug">{hackathon}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Achievements Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative pl-8 md:pl-12"
          >
            <div className="absolute -left-[20px] top-1 h-10 w-10 bg-black border border-white/20 rounded-full flex items-center justify-center text-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.2)]">
              <Award size={18} />
            </div>
            
            <div className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:border-yellow-500/30 hover:bg-white/[0.07] transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-5">Achievements</h3>
              <ul className="space-y-4">
                {VERIFIED_DATA.achievements.mdap ? null : VERIFIED_DATA.achievements.map((achievement) => (
                  <li key={achievement} className="flex items-start gap-3 text-gray-300">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-yellow-500/50 shadow-[0_0_8px_rgba(250,204,21,0.6)] flex-shrink-0" />
                    <span className="leading-snug">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Milestones;