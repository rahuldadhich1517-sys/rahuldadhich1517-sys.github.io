import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../../data/experience';
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-bg-primary text-text-primary border-b border-border-primary"
    >
      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Kicker & Header Bar */}
        <div className="flex flex-wrap items-center justify-between border-b border-border-subtle pb-3 mb-8 sm:mb-12">
          <div className="section-kicker">
            <span>WORK HISTORY // EXPERIENCE</span>
          </div>
          <span className="font-mono text-2xs text-text-muted font-semibold uppercase tracking-widest">
            CAREER TIMELINE
          </span>
        </div>

        {/* Section Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-10 sm:mb-14">
          <div className="lg:col-span-8">
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-[1.08] uppercase">
              Work History <br />
              <span className="italic font-normal font-serif text-text-muted lowercase">and</span>{' '}
              past roles.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="font-sans text-xs sm:text-sm text-text-muted font-medium leading-relaxed mb-3">
              A timeline of full-time engineering roles, projects I've built, and teams I've worked with.
            </p>
            <Link
              to="/experience"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-accent uppercase tracking-wider hover:underline"
            >
              <span>View detailed experience</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Double Rule */}
        <div className="editorial-double-rule mb-12" />

        {/* Chronological Gazette Articles */}
        <div className="divide-y divide-border-primary">
          {experiences.map((exp, index) => {
            const indexStr = String(index + 1).padStart(2, '0');
            return (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start group"
              >
                {/* Left Metadata Column (4 cols) */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center gap-2 font-mono text-2xs text-accent font-bold uppercase tracking-widest">
                    <span>ROLE // {indexStr}</span>
                    <span>•</span>
                    <span>{exp.type.toUpperCase()}</span>
                  </div>

                  <div className="font-serif text-2xl sm:text-3xl font-black text-text-primary tracking-tight">
                    {exp.year}
                  </div>

                  {exp.duration && (
                    <div className="flex items-center gap-2 font-mono text-xs text-text-muted font-semibold">
                      <Calendar size={13} className="text-text-muted flex-shrink-0" />
                      <span>{exp.duration}</span>
                    </div>
                  )}

                  {exp.location && (
                    <div className="flex items-center gap-2 font-mono text-xs text-text-muted font-semibold">
                      <MapPin size={13} className="text-text-muted flex-shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                  )}
                </div>

                {/* Right Content Column (8 cols) */}
                <div className="lg:col-span-8 space-y-6">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-text-primary leading-tight">
                      {exp.role}
                    </h3>
                    <div className="font-mono text-sm sm:text-base font-bold text-text-primary mt-1">
                      @ {exp.company}
                    </div>
                  </div>

                  <p className="font-body text-base sm:text-lg text-text-primary leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Technologies Ledger */}
                  <div>
                    <div className="font-mono text-2xs text-text-muted font-bold uppercase tracking-wider mb-2.5">
                      TECHNOLOGIES USED:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 border border-border-primary bg-bg-secondary font-mono text-xs text-text-primary font-semibold group-hover:border-accent transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
