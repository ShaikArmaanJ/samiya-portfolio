import { motion } from 'framer-motion';
import { FileDown, FileText, Image as ImageIcon, Lock, ExternalLink } from 'lucide-react';

const Documents = () => {
  // All certificates are now live and unlocked with your exact PDF file names!
  const certificates = [
    { 
      title: "Take It Smart - Internship Certificate", 
      status: "Available",
      fileName: "/takeitsmart.pdf" 
    },
    { 
      title: "White & Box - Internship Certificate", 
      status: "Available",
      fileName: "/whitebox.pdf" 
    },
    { 
      title: "TN Hackathon Participation Certificate", 
      status: "Available",
      fileName: "/tnwise.pdf"
    }
  ];

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
            Credentials & Documents
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full opacity-50 shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Resume Card (5 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm flex flex-col items-center justify-center text-center relative overflow-hidden group"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-600/10 rounded-full blur-[60px] pointer-events-none group-hover:bg-blue-600/20 transition-colors duration-500"></div>
            
            <FileText size={48} strokeWidth={1} className="text-blue-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-2">Resume / CV</h3>
            <p className="text-gray-400 text-sm mb-8 max-w-[250px]">
              A detailed overview of academic background, skills, and project experience.
            </p>
            
            <div className="flex flex-col gap-3 w-full max-w-[200px] relative z-10">
              <a 
                href="/resume/Samiya_Siddiqua_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-white/10 text-white font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                <FileText size={16} /> View Resume
              </a>
              <a 
                href="/resume/Samiya_Siddiqua_Resume.pdf" 
                download="Samiya_Siddiqua_Resume.pdf"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-blue-600/20 text-blue-400 font-medium rounded-xl border border-blue-500/30 hover:bg-blue-600/40 transition-all"
              >
                <FileDown size={16} /> Download PDF
              </a>
            </div>
          </motion.div>

          {/* Certificate Gallery (7 columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm flex flex-col justify-between group hover:bg-white/[0.07] hover:border-white/20 transition-all relative"
              >
                <div>
                  {cert.status === "Available" ? (
                    <div className="h-36 w-full bg-blue-600/10 rounded-xl border border-blue-500/20 flex flex-col items-center justify-center mb-6 group-hover:border-blue-500/40 transition-colors relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent"></div>
                      <FileText size={40} className="text-blue-400 mb-3 relative z-10" />
                      <span className="text-[11px] text-blue-300 font-mono tracking-widest uppercase relative z-10">PDF Document</span>
                    </div>
                  ) : (
                    <div className="h-36 w-full bg-white/5 rounded-xl border border-white/10 flex flex-col items-center justify-center mb-6 group-hover:border-blue-500/30 transition-colors">
                      <ImageIcon size={32} className="text-gray-600 mb-2" />
                      <span className="text-[10px] text-gray-600 font-mono tracking-widest uppercase">Image_Pending</span>
                    </div>
                  )}
                  <h4 className="text-lg font-semibold text-white mb-2 leading-tight group-hover:text-blue-300 transition-colors">
                    {cert.title}
                  </h4>
                </div>
                <div className="flex items-center mt-4">
                  {cert.status === "Available" ? (
                    <a href={cert.fileName} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-medium text-green-400 bg-green-400/10 hover:bg-green-400/20 px-3 py-1.5 rounded-full border border-green-400/20 transition-all">
                      <ExternalLink size={12} /> View Certificate
                    </a>
                  ) : (
                    <span className="flex items-center gap-1.5 text-xs font-medium text-yellow-500/70 bg-yellow-500/10 px-3 py-1.5 rounded-full border border-yellow-500/20">
                      <Lock size={12} /> {cert.status}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Documents;