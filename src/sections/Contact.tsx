import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { VERIFIED_DATA } from '../data/portfolioData';

const Contact = () => {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Contact form UI is ready! Backend email integration coming soon. Please use the email button to reach me directly.");
  };

  return (
    <section className="relative pt-24 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 pb-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full opacity-50 shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              I'm currently looking for new opportunities and internships. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-4">
              {/* Email Link */}
              <a href={`mailto:${VERIFIED_DATA.personal.email}`} className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/50 transition-all group">
                <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-0.5">Email</p>
                  <p className="text-gray-200 font-medium">{VERIFIED_DATA.personal.email}</p>
                </div>
              </a>

              {/* LinkedIn Link */}
              <a href={VERIFIED_DATA.personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/50 transition-all group">
                <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-0.5">LinkedIn</p>
                  <p className="text-gray-200 font-medium">Samiya Siddiqua S.</p>
                </div>
              </a>

              {/* GitHub - Disabled State */}
              <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl opacity-60 cursor-not-allowed">
                <div className="p-3 bg-gray-500/10 text-gray-400 rounded-lg">
                  <Github size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-0.5">GitHub</p>
                  <p className="text-gray-400 font-medium">{VERIFIED_DATA.personal.github}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form UI */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
          >
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input type="text" id="name" required className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input type="email" id="email" required className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea id="message" required rows={4} className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none" placeholder="How can I help you?"></textarea>
              </div>
              <button type="submit" className="w-full flex items-center justify-center gap-2 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-colors">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-8 text-center px-6">
        <p className="text-gray-500 text-sm mb-2">
          © {new Date().getFullYear()} {VERIFIED_DATA.personal.name}. All rights reserved.
        </p>
        <p className="text-gray-600 text-xs">
          Designed & developed by <span className="text-gray-400 font-medium">Shaik Armaan</span>
        </p>
      </footer>
    </section>
  );
};

export default Contact;
