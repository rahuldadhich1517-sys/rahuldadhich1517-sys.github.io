import React from 'react';
import { motion } from 'framer-motion';
import SkillGrid from '../components/ui/SkillGrid';
import { skills } from '../data/skills';
import useSEO from '../hooks/useSEO';

const SkillsPage: React.FC = () => {
  useSEO({
    title: 'Skills — Rahul Dadhich',
    description: 'Technical expertise in React, TypeScript, Node.js, and modern web development technologies.',
    url: 'https://rahuldadhich.dev/skills',
  });
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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

  const categories = Array.from(
    new Set(skills.map((skill) => skill.category))
  );

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
            SKILLS
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#111111] leading-tight mb-6">
            Technical Arsenal
          </h1>
          <p className="text-base md:text-lg text-[#737373] leading-relaxed max-w-2xl">
            Technologies and tools I use to build modern web applications.
          </p>
        </motion.div>

        {/* All Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16 md:mb-24"
        >
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#111111] mb-8">
            All Technologies
          </h2>
          <SkillGrid skills={skills} />
        </motion.div>

        {/* Category Breakdown */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {categories.map((category) => {
            const categorySkills = skills.filter(
              (skill) => skill.category === category
            );
            return (
              <div key={category}>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-[#111111] mb-6">
                  {category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorySkills.map((skill) => (
                    <motion.div
                      key={skill.id}
                      variants={itemVariants}
                      className="p-6 border border-[#111111] hover:bg-[#F5F5F5] transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <skill.icon
                          size={24}
                          style={{ color: skill.color }}
                        />
                        <div>
                          <h4 className="font-serif font-bold text-[#111111]">
                            {skill.name}
                          </h4>
                          <p className="text-xs text-[#737373] uppercase tracking-wider">
                            {skill.proficiency}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-[#737373]">
                        {skill.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsPage;
