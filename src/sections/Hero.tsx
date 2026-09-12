import { motion } from 'framer-motion';
import { ChevronRight, FileText, Mail } from 'lucide-react';
import { VERIFIED_DATA } from '../data/portfolioData';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden px-6">
      {/* Subtle background grid and soft glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-blue-400 font-semibold tracking-widest text-xs md:text-sm uppercase mb-6">
            {VERIFIED_DATA.education.degree} • {VERIFIED_DATA.education.year}
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            {VERIFIED_DATA.personal.name}
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            {VERIFIED_DATA.personal.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="flex items-center gap-2 px-7 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors">
            View Projects <ChevronRight size={18} />
          </button>
          <button className="flex items-center gap-2 px-7 py-3 bg-white/5 text-white font-medium rounded-full border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm">
            <FileText size={18} /> View Resume
          </button>
          <button className="flex items-center gap-2 px-7 py-3 bg-transparent text-gray-400 font-medium rounded-full hover:text-white transition-colors">
            <Mail size={18} /> Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
