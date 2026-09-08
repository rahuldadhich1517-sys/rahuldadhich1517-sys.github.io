import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, FileText, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-bg-primary text-text-primary border-b-2 border-border-primary overflow-hidden">
      {/* Front-Page Issue Dateline */}
      <div className="border-b border-border-primary bg-bg-surface py-2 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 font-mono text-2xs uppercase tracking-widest text-text-muted font-semibold">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent inline-block" />
            <span className="font-bold text-text-primary">PORTFOLIO // 2026</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">FULL-STACK & AI DEVELOPMENT</span>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <span>RAHUL DADHICH</span>
            <span>•</span>
            <span>FULL STACK DEVELOPER × AI ENGINEER</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-text-primary font-bold">JAIPUR, INDIA (UTC+5:30)</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-14 lg:py-16">
        {/* Newspaper Section Kicker */}
        <div className="mb-6 flex items-center justify-between border-b border-border-subtle pb-3">
          <div className="section-kicker">
            <span>INTRODUCTION</span>
          </div>
          <span className="font-mono text-2xs text-text-muted uppercase tracking-widest hidden sm:inline font-semibold">
            PORTFOLIO // RAHUL DADHICH
          </span>
        </div>

        {/* Master Typographic Headline */}
        <div className="mb-10 sm:mb-14">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-text-primary tracking-tighter leading-[0.98] uppercase"
          >
            Building Fast, Reliable <br className="hidden sm:inline" />
            Web Applications <br />
            <span className="italic font-normal font-serif text-text-muted lowercase">and</span>{' '}
            Modern AI Tools.
          </motion.h1>
        </div>

        {/* Double Rule separating headline from editorial columns */}
        <div className="editorial-double-rule mb-10" />

        {/* Main Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left / Lead Editorial Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              {/* Lead Paragraph */}
              <p className="font-body text-lg sm:text-xl md:text-2xl text-text-primary leading-relaxed font-normal">
                <span className="font-serif font-bold text-3xl sm:text-4xl text-accent float-left mr-3 leading-none">
                  I
                </span>
                build clean, reliable web applications and practical AI tools.
                I focus on writing maintainable code, designing responsive interfaces,
                and building dependable backend services that solve real problems.
              </p>

              {/* Secondary Editorial Commentary */}
              <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed font-medium">
                I work mainly with React, TypeScript, Node.js, and modern AI APIs.
                Previously, I built and improved production apps for Danish municipalities, created visual workflow tools
                using React Flow, and published open-source developer libraries on npm.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <a href="#projects" className="btn btn--primary btn--lg">
                  <span>View Projects</span>
                  <ArrowUpRight className="btn__icon" />
                </a>
                <a href="#contact" className="btn btn--secondary btn--lg">
                  <span>Get in Touch</span>
                </a>
                <a
                  href="/Resume.pdf"
                  download="Resume.pdf"
                  className="btn btn--secondary btn--lg"
                  aria-label="Download Resume (PDF)"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </div>
            </motion.div>

            {/* Notice of Availability Box */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border-l-4 border-accent border-y border-r border-border-primary bg-bg-secondary p-5 sm:p-6"
            >
              <div className="flex items-center gap-2 mb-2 font-mono text-2xs font-bold text-accent uppercase tracking-widest">
                <span className="w-2 h-2 bg-accent inline-block" />
                <span>Current Availability // 2026</span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-text-muted font-medium leading-relaxed">
                Available for full-time engineering roles, contract projects, and consulting.
                Specializing in frontend engineering, full-stack TypeScript, and AI integrations.
              </p>
            </motion.div>
          </div>

          {/* Right / Telemetry & Credentials Ledger (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-border-primary bg-bg-secondary p-6 sm:p-8">
              {/* Box Header */}
              <div className="border-b-2 border-border-primary pb-3 mb-6 flex items-center justify-between">
                <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-text-primary">
                  AT A GLANCE
                </h2>
                <span className="font-mono text-2xs text-accent font-bold uppercase">2026</span>
              </div>

              {/* Tabular Ledger Rows */}
              <div className="divide-y divide-border-subtle">
                <div className="py-4 flex items-baseline justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-text-muted font-bold">
                    EXPERIENCE
                  </span>
                  <div className="text-right">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-text-primary">
                      2+ Years
                    </span>
                    <p className="font-mono text-2xs text-text-muted font-semibold">Full-Stack Development</p>
                  </div>
                </div>

                <div className="py-4 flex items-baseline justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-text-muted font-bold">
                    PROJECTS
                  </span>
                  <div className="text-right">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-text-primary">
                      10+ Projects
                    </span>
                    <p className="font-mono text-2xs text-text-muted font-semibold">Built & Shipped</p>
                  </div>
                </div>

                <div className="py-4 flex items-baseline justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-text-muted font-bold">
                    TECH STACK
                  </span>
                  <div className="text-right">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-text-primary">
                      Modern Web
                    </span>
                    <p className="font-mono text-2xs text-text-muted font-semibold">React • TypeScript • Node • Azure</p>
                  </div>
                </div>

                <div className="py-4 flex items-baseline justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-text-muted font-bold">
                    OPEN SOURCE
                  </span>
                  <div className="text-right">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-accent">
                      NPM Author
                    </span>
                    <p className="font-mono text-2xs text-text-muted font-semibold">Public packages & tools</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Running Bottom Discipline Ticker */}
        <div className="mt-12 pt-6 border-t border-border-primary flex flex-wrap items-center justify-between gap-4 font-mono text-2xs tracking-widest text-text-muted font-bold uppercase">
          <div className="flex items-center gap-1.5">
            <ArrowDown className="w-3.5 h-3.5 text-accent animate-bounce" />
            <span className="text-text-primary">SCROLL DOWN TO EXPLORE MY WORK</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span>TYPESCRIPT</span>
            <span>•</span>
            <span>REACT 19</span>
            <span>•</span>
            <span>NODE.JS</span>
            <span>•</span>
            <span>REDUX TOOLKIT</span>
            <span>•</span>
            <span>AZURE AD</span>
            <span>•</span>
            <span>AI INTEGRATION</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
