import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Skill } from '../../data/skills';
import { X, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface SkillDetailsProps {
  skill: Skill | null;
  onClose: () => void;
}

const SkillDetails: React.FC<SkillDetailsProps> = ({ skill, onClose }) => {
  if (!skill) return null;

  const Icon = skill.icon;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Newsprint Backdrop */}
        <motion.div
          className="fixed inset-0 bg-[#111111]/60 backdrop-blur-[2px]"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Technical Data Sheet Modal */}
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="skill-sheet-title"
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-lg border-2 border-border-primary bg-bg-secondary p-0 shadow-hard"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Dateline Header */}
          <div className="bg-bg-surface px-6 py-3 border-b border-border-primary flex items-center justify-between font-mono text-2xs uppercase tracking-widest text-text-muted font-semibold">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent inline-block" />
              <span className="font-bold text-text-primary">SKILL DETAILS // OVERVIEW</span>
            </div>
            <button
              onClick={onClose}
              className="p-1 border border-border-primary hover:bg-bg-primary transition-colors text-text-primary"
              aria-label="Close details"
            >
              <X size={16} />
            </button>
          </div>

          {/* Core Spec Content */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Title & Icon */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-border-subtle">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-border-primary bg-bg-primary flex items-center justify-center text-2xl text-text-primary">
                  <Icon />
                </div>
                <div>
                  <h3 id="skill-sheet-title" className="font-serif text-2xl sm:text-3xl font-bold text-text-primary leading-tight">
                    {skill.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-mono text-2xs uppercase tracking-wider text-accent font-bold">
                      {skill.category}
                    </span>
                    <span className="text-text-muted font-bold">•</span>
                    <span className="font-mono text-2xs uppercase tracking-wider text-text-muted font-bold">
                      ACTIVE
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="border border-border-primary px-3 py-1 font-mono text-2xs font-bold uppercase tracking-wider bg-bg-surface text-text-primary">
                {skill.proficiency}
              </div>
            </div>

            {/* Description Paragraph */}
            <div>
              <div className="font-mono text-2xs text-text-muted uppercase tracking-widest mb-2 font-bold">
                // HOW I USE IT
              </div>
              <p className="font-body text-base text-text-primary leading-relaxed">
                {skill.description}
              </p>
            </div>

            {/* Related Ecosystem Technologies */}
            <div>
              <div className="font-mono text-2xs text-text-muted uppercase tracking-widest mb-3 font-bold">
                // RELATED TOOLS & TECHNOLOGIES
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.relatedTechs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 border border-border-primary bg-bg-primary font-mono text-xs text-text-primary font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Technical Verification Footer */}
            <div className="pt-4 border-t border-border-subtle flex items-center justify-between text-2xs font-mono text-text-muted font-bold uppercase">
              <span className="flex items-center gap-1 text-[#16A34A] font-bold">
                <CheckCircle2 size={13} />
                <span>PRODUCTION EXPERIENCE</span>
              </span>
              <span>REF: #{skill.id.toUpperCase()}</span>
            </div>
          </div>

          {/* Modal Action Footbar */}
          <div className="bg-bg-surface px-6 py-3 border-t border-border-primary flex justify-end">
            <button
              onClick={onClose}
              className="btn btn--sm btn--primary"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default SkillDetails;
