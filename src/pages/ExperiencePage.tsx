import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/experience';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import useSEO from '../hooks/useSEO';

const ExperiencePage: React.FC = () => {
  useSEO({
    title: 'Experience — Rahul Dadhich',
    description: 'Professional experience in full-stack web development with leading companies and innovative projects.',
    url: 'https://rahuldadhich.dev/experience',
  });
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

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

  return (
    <section className="relative w-full py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-[#F9F9F7] overflow-hidden sharp-corners">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#111111]/20 bg-[#CC0000]/20 text-[#CC0000] tracking-widest uppercase text-xs mb-8">
            EXPERIENCE
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#111111] leading-tight mb-6">
            My Career
          </h1>
          <p className="text-base md:text-lg text-[#737373] leading-relaxed max-w-2xl">
            Journey through roles, companies, and continuous learning.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {experiences.map((exp) => (
            <motion.article
              key={exp.id}
              variants={itemVariants}
              className="group border border-[#111111] p-6 sm:p-8 lg:p-10 hover:bg-[#F5F5F5] transition-colors duration-300 sharp-corners"
            >
              {/* Top Section */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                {/* Role & Company */}
                <div>
                  <div className="flex items-center gap-2 text-[#CC0000] mb-4">
                    <Briefcase className="w-5 h-5" />
                    <span className="text-xs font-semibold uppercase tracking-widest">
                      Work Experience
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111] mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-base sm:text-lg font-medium text-[#737373]">
                    {exp.company}
                  </p>
                </div>

                {/* Duration & Location */}
                <div className="flex flex-col gap-3 text-sm text-[#737373] lg:items-end">
                  {exp.duration && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#CC0000]" />
                      <span>{exp.duration}</span>
                    </div>
                  )}
                  {exp.location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#CC0000]" />
                      <span>{exp.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Divider */}
              <div className="my-8 border-t border-[#111111]/20" />

              {/* Description */}
              <p className="text-sm sm:text-base text-[#737373] leading-relaxed mb-8 max-w-4xl">
                {exp.description}
              </p>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-[#737373] mb-4">
                  Technologies & Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="border border-[#111111]/30 px-3 py-1.5 text-xs sm:text-sm font-medium text-[#111111] hover:border-[#CC0000] hover:text-[#CC0000] transition-colors"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperiencePage;
