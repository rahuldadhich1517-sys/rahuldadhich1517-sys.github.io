import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills, Skill } from '../data/skills';
import SkillGrid from '../components/ui/SkillGrid';
import SkillDetails from '../components/ui/SkillDetails';
import useSEO from '../hooks/useSEO';
import { ArrowUpRight } from 'lucide-react';

const SkillsPage: React.FC = () => {
  useSEO({
    title: 'Skills & Technical Directory — Rahul Dadhich',
    description: 'A comprehensive technical index of languages, frameworks, cloud services, and developer tools.',
    url: 'https://rahuldadhich.dev/skills',
  });

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeModalSkill, setActiveModalSkill] = useState<Skill | null>(null);

  const categories = Array.from(
    new Set(skills.map((skill) => skill.category))
  );

  const filteredSkills = selectedCategory
    ? skills.filter((s) => s.category === selectedCategory)
    : skills;

  return (
    <div className="w-full bg-bg-primary text-text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
        {/* Section Kicker */}
        <div className="section-kicker mb-6">
          <span>SKILLS & TECHNOLOGIES</span>
        </div>

        {/* Page Headline */}
        <div className="mb-10 sm:mb-14 max-w-5xl">
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary leading-[1.02] uppercase">
            Skills & Tools: <br />
            <span className="italic font-normal font-serif text-text-muted lowercase">languages,</span>{' '}
            frameworks & cloud tools.
          </h1>
          <p className="font-body text-base sm:text-xl text-text-primary leading-relaxed mt-4 max-w-3xl font-normal">
            A complete directory of the languages, libraries, and tools I use in daily development
            across frontend, backend, databases, and AI workflows.
          </p>
        </div>

        {/* Double Rule */}
        <div className="editorial-double-rule mb-10" />

        {/* Main Skills Directory Grid */}
        <div className="mb-16">
          <SkillGrid skills={filteredSkills} />
        </div>

        {/* Detailed Domain Breakdown */}
        <div className="space-y-16 pt-8 border-t-2 border-border-primary">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-2xl sm:text-4xl font-bold uppercase tracking-tight text-text-primary">
              Detailed Breakdown by Category
            </h2>
            <span className="font-mono text-2xs text-text-muted font-bold uppercase">OVERVIEW</span>
          </div>

          {categories.map((category, catIndex) => {
            const catIndexStr = String(catIndex + 1).padStart(2, '0');
            const categorySkills = skills.filter((s) => s.category === category);
            return (
              <div key={category} className="border border-border-primary bg-bg-secondary">
                {/* Category Header Bar */}
                <div className="p-4 sm:p-6 bg-bg-surface border-b border-border-primary flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="font-mono text-xs font-bold text-accent uppercase tracking-widest block mb-1">
                      CATEGORY // {catIndexStr}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-text-primary">
                      {category}
                    </h3>
                  </div>
                  <span className="font-mono text-xs px-2.5 py-1 border border-border-primary bg-bg-primary font-bold">
                    {categorySkills.length} SKILLS
                  </span>
                </div>

                {/* Table of Skills within Category */}
                <div className="divide-y divide-border-subtle">
                  {categorySkills.map((skill, sIdx) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.id}
                        onClick={() => setActiveModalSkill(skill)}
                        className="p-4 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-bg-surface transition-colors cursor-pointer group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 border border-border-primary bg-bg-primary flex items-center justify-center text-xl text-text-primary group-hover:border-accent group-hover:text-accent transition-colors flex-shrink-0">
                            <Icon />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-serif text-lg font-bold text-text-primary">
                                {skill.name}
                              </h4>
                              <span className="font-mono text-[10px] px-2 py-0.5 border border-border-subtle uppercase text-accent font-bold">
                                {skill.proficiency}
                              </span>
                            </div>
                            <p className="font-sans text-xs text-text-primary font-normal mt-1 leading-relaxed max-w-xl">
                              {skill.description}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 self-end md:self-center">
                          <div className="hidden sm:flex flex-wrap gap-1.5 justify-end">
                            {skill.relatedTechs.slice(0, 3).map((tech) => (
                              <span
                                key={tech}
                                className="font-mono text-[10px] px-2 py-0.5 border border-border-subtle bg-bg-primary text-text-primary font-semibold"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <span className="font-mono text-2xs text-accent flex items-center gap-1 uppercase font-semibold">
                            <span>DETAILS</span>
                            <ArrowUpRight size={13} />
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal if clicked */}
      {activeModalSkill && (
        <SkillDetails
          skill={activeModalSkill}
          onClose={() => setActiveModalSkill(null)}
        />
      )}
    </div>
  );
};

export default SkillsPage;
