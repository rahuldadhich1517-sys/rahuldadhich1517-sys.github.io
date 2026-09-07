import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink } from 'lucide-react';
import useSEO from '../hooks/useSEO';

const ResumePage: React.FC = () => {
  useSEO({
    title: 'Resume — Rahul Dadhich',
    description: 'Download or view my professional resume showcasing my experience in full-stack development.',
    url: 'https://rahuldadhich.dev/resume',
  });
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="relative w-full py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-[#F9F9F7] overflow-hidden sharp-corners">
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Page Header */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mb-12 md:mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#111111]/20 bg-[#CC0000]/20 text-[#CC0000] tracking-widest uppercase text-xs mb-8">
            RESUME
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#111111] leading-tight mb-6">
            My Resume
          </h1>
          <p className="text-base md:text-lg text-[#737373] leading-relaxed">
            Download or view my professional resume below.
          </p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16 md:mb-20"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              variants={itemVariants}
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Rahul-Dadhich-Resume.pdf"
              className="btn btn--primary flex items-center justify-center gap-2"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </motion.a>
            <motion.a
              variants={itemVariants}
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary flex items-center justify-center gap-2"
            >
              <ExternalLink size={18} />
              <span>View Online</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Resume Preview Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Summary */}
          <div className="p-6 sm:p-8 border border-[#111111] hover:bg-[#F5F5F5] transition-colors">
            <div className="flex items-start gap-4">
              <FileText size={24} className="text-[#CC0000] mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#111111] mb-3">
                  Professional Summary
                </h2>
                <p className="text-sm sm:text-base text-[#737373] leading-relaxed">
                  Full Stack Developer with 2+ years of experience building web applications using React, TypeScript, Node.js, and modern web technologies. Proven expertise in designing scalable architectures, implementing responsive interfaces, and delivering high-quality code. Passionate about problem-solving and continuous learning.
                </p>
              </div>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Frontend Development',
                skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
              },
              {
                title: 'Backend Development',
                skills: ['Node.js', 'Express', 'REST APIs', 'Authentication'],
              },
              {
                title: 'Tools & Practices',
                skills: ['Git', 'Vite', 'Docker', 'Testing'],
              },
            ].map((section, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 border border-[#111111] hover:bg-[#F5F5F5] transition-colors"
              >
                <h3 className="font-serif font-bold text-[#111111] mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-[#737373] flex items-center gap-2"
                    >
                      <span className="w-2 h-2 bg-[#CC0000] rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Download Notice */}
          <div className="p-6 sm:p-8 bg-[#CC0000]/5 border border-[#CC0000]/20">
            <p className="text-sm text-[#737373]">
              📄 For a detailed view of my experience, education, and certifications, please download the full resume or view it online using the buttons above.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumePage;
