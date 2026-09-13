import { motion } from 'framer-motion';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';
import { VERIFIED_DATA } from '../data/portfolioData';

const Projects = () => {
  return (
    <section className="relative py-24 bg-black px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full opacity-50 shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VERIFIED_DATA.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group flex flex-col justify-between p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/[0.07] hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl">
                    <FolderGit2 size={28} strokeWidth={1.5} />
                  </div>
                  <div className="flex gap-3 text-gray-500">
                    {/* Disabled visual states for placeholders */}
                   <Github size={22} className="opacity-40 cursor-not-allowed" />
<ExternalLink size={22} className="opacity-40 cursor-not-allowed" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="text-xs font-medium px-3 py-1 bg-white/5 border border-white/10 text-gray-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
