import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/experience';
import { Briefcase, Calendar, MapPin, ArrowUpRight, FileText, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

const ExperiencePage: React.FC = () => {
  useSEO({
    title: 'Experience & Work History — Rahul Dadhich',
    description: 'Work history, commercial engineering roles, core responsibilities, and technical projects by Rahul Dadhich.',
    url: 'https://rahuldadhich.dev/experience',
  });

  return (
    <div className="w-full bg-bg-primary text-text-primary">
      {/* Top Broadsheet Dateline */}
      <div className="border-b border-border-primary bg-bg-surface py-2.5 px-4 sm:px-6 lg:px-12 font-mono text-2xs uppercase tracking-widest text-text-muted font-semibold">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent inline-block" />
            <span className="font-bold text-text-primary">EXPERIENCE // WORK HISTORY</span>
          </div>
          <span className="font-bold text-text-primary">RAHUL DADHICH</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
        {/* Section Kicker */}
        <div className="section-kicker mb-6">
          <span>WORK EXPERIENCE</span>
        </div>

        {/* Headline */}
        <div className="mb-10 sm:mb-14 max-w-5xl">
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary leading-[1.02] uppercase">
            Work Experience: <br />
            <span className="italic font-normal font-serif text-text-muted lowercase">roles,</span>{' '}
            projects & impact.
          </h1>
          <p className="font-body text-base sm:text-xl text-text-primary leading-relaxed mt-4 max-w-3xl font-normal">
            A detailed record of full-time engineering roles, core contributions,
            and technology stacks I've worked with in production environments.
          </p>
        </div>

        {/* Double Rule */}
        <div className="editorial-double-rule mb-12" />

        {/* Experience Articles */}
        <div className="space-y-12 sm:space-y-16">
          {experiences.map((exp, index) => {
            const indexStr = String(index + 1).padStart(2, '0');
            return (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="border-2 border-border-primary bg-bg-secondary p-6 sm:p-8 lg:p-10"
              >
                {/* Article Header Ribbon */}
                <div className="flex flex-wrap items-center justify-between border-b border-border-subtle pb-4 mb-6 font-mono text-2xs uppercase tracking-widest text-text-muted font-semibold">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent inline-block" />
                    <span className="font-bold text-text-primary">ROLE // {indexStr}</span>
                    <span>•</span>
                    <span className="text-accent font-bold">{exp.type.toUpperCase()}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    {exp.duration && <span>PERIOD: {exp.duration}</span>}
                    {exp.location && (
                      <>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Role and Organization */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-8 space-y-6">
                    <div>
                      <div className="font-serif text-3xl sm:text-4xl font-bold text-text-primary leading-tight">
                        {exp.role}
                      </div>
                      <div className="font-mono text-base font-bold text-text-primary mt-1 flex items-center gap-2">
                        <Briefcase size={16} className="text-accent" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <p className="font-body text-base sm:text-lg text-text-primary leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Key Technical Highlights */}
                    <div className="border-l-2 border-border-primary pl-4 py-1 font-sans text-xs sm:text-sm text-text-primary font-medium space-y-1.5">
                      <div className="font-mono text-2xs text-text-muted uppercase tracking-wider font-bold">
                        KEY CONTRIBUTIONS:
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 size={15} className="text-accent flex-shrink-0 mt-0.5" />
                        <span>Engineered reliable React applications with centralized Redux state management.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 size={15} className="text-accent flex-shrink-0 mt-0.5" />
                        <span>Integrated Microsoft Entra ID (Azure AD) for enterprise secure authentication.</span>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <div className="font-mono text-2xs text-text-muted font-bold uppercase tracking-wider mb-2.5">
                        TECHNOLOGIES USED:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 border border-border-primary bg-bg-primary font-mono text-xs text-text-primary font-semibold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Sidecard: Overview */}
                  <div className="lg:col-span-4 border border-border-primary bg-bg-surface p-5 space-y-4">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-text-primary block border-b border-border-subtle pb-2">
                      AT A GLANCE
                    </span>
                    <div className="space-y-2 font-mono text-xs">
                      <div className="flex justify-between">
                        <span className="text-text-muted font-bold">TIMELINE:</span>
                        <span className="font-bold text-text-primary">{exp.year}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-muted font-bold">ROLE:</span>
                        <span className="text-text-primary font-semibold">{exp.role}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-muted font-bold">STATUS:</span>
                        <span className="text-[#16A34A] font-bold">COMPLETED</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Resume Action Banner */}
        <div className="mt-16 p-8 border-2 border-border-primary bg-bg-secondary flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-serif text-2xl font-bold text-text-primary">
              Looking for my full resume?
            </h3>
            <p className="font-sans text-xs sm:text-sm text-text-muted font-medium">
              Download a clean PDF copy containing detailed work history, skills, and education.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/Resume.pdf"
              download="Resume.pdf"
              className="btn btn--primary btn--lg flex-shrink-0"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>
            <Link to="/resume" className="btn btn--secondary btn--lg flex-shrink-0">
              <span>View Online</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
