import React from 'react';
import SkillGrid from '../ui/SkillGrid';
import { skills } from '../../data/skills';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const Technology: React.FC = () => {
  return (
    <section
      id="technology"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-bg-primary text-text-primary border-b border-border-primary"
    >
      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Kicker & Header Bar */}
        <div className="flex flex-wrap items-center justify-between border-b border-border-subtle pb-3 mb-8 sm:mb-12">
          <div className="section-kicker">
            <span>SKILLS & TOOLS</span>
          </div>
          <span className="font-mono text-2xs text-text-muted font-semibold uppercase tracking-widest">
            LANGUAGES, FRAMEWORKS & SERVICES
          </span>
        </div>

        {/* Section Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-10 sm:mb-14">
          <div className="lg:col-span-8">
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-[1.08] uppercase">
              The Tools & Technologies <br />
              <span className="italic font-normal font-serif text-text-muted lowercase">I use</span>{' '}
              to build software.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="font-sans text-xs sm:text-sm text-text-muted font-medium leading-relaxed mb-4">
              Technologies and tools I use regularly in production across frontend, backend, databases, and AI.
            </p>
            <Link
              to="/skills"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-accent uppercase tracking-wider hover:underline"
            >
              <span>View all skills & details</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Double Rule */}
        <div className="editorial-double-rule mb-10" />

        {/* The Grid Directory */}
        <SkillGrid skills={skills} />
      </div>
    </section>
  );
};

export default Technology;