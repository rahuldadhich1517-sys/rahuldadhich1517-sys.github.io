import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../../data/skills';
import SkillDetails from './SkillDetails';
import { ArrowUpRight } from 'lucide-react';

interface SkillGridProps {
  skills: Skill[];
}

const SkillGrid: React.FC<SkillGridProps> = ({ skills }) => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 border-t border-l border-border-primary"
      >
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          const indexStr = String(index + 1).padStart(2, '0');

          return (
            <motion.button
              key={skill.id}
              variants={cardVariants}
              onClick={() => setSelectedSkill(skill)}
              className="group relative flex flex-col justify-between text-left p-4 sm:p-5 border-r border-b border-border-primary bg-bg-secondary hover:bg-bg-surface transition-colors cursor-pointer"
            >
              {/* Top Row: Index & Category */}
              <div className="flex items-center justify-between w-full mb-4">
                <span className="font-mono text-2xs font-bold text-text-muted group-hover:text-accent transition-colors">
                  #{indexStr}
                </span>
                <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                  {skill.category}
                </span>
              </div>

              {/* Middle: Tech Icon & Name */}
              <div className="flex items-center gap-3 my-2">
                <div className="w-9 h-9 border border-border-primary bg-bg-primary flex items-center justify-center text-xl text-text-primary group-hover:border-accent group-hover:text-accent transition-colors flex-shrink-0">
                  <Icon />
                </div>
                <div className="overflow-hidden">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-text-primary truncate">
                    {skill.name}
                  </h3>
                  <p className="font-mono text-[10px] font-semibold text-text-muted uppercase tracking-wider">
                    {skill.proficiency}
                  </p>
                </div>
              </div>

              {/* Bottom Row: Inspect Trigger */}
              <div className="mt-4 pt-3 border-t border-border-subtle flex items-center justify-between w-full font-mono text-[10px] font-bold text-text-muted group-hover:text-text-primary transition-colors">
                <span>VIEW DETAILS</span>
                <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.button>
          );
        })}
      </motion.div>

      {/* Technical Data Sheet Modal */}
      {selectedSkill && (
        <SkillDetails
          skill={selectedSkill}
          onClose={() => setSelectedSkill(null)}
        />
      )}
    </>
  );
};

export default SkillGrid;
