import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProfileCard from '../ui/ProfileCard';
import AnimatedCounter from '../ui/AnimatedCounter';

const About: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      id="about"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-bg-primary text-text-primary border-b border-border-primary"
    >
      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Kicker & Header Bar */}
        <div className="flex flex-wrap items-center justify-between border-b border-border-subtle pb-3 mb-8 sm:mb-12">
          <div className="section-kicker">
            <span>ABOUT ME</span>
          </div>
          <span className="font-mono text-2xs text-text-muted font-semibold uppercase tracking-widest">
            BACKGROUND & APPROACH
          </span>
        </div>

        {/* Section Headline */}
        <div className="mb-10 sm:mb-14 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-[1.08] uppercase"
          >
            I build software <br className="hidden sm:inline" />
            with clean code <br />
            <span className="italic font-normal font-serif text-text-muted lowercase">and</span>{' '}
            great user experience.
          </motion.h2>
        </div>

        {/* Double Rule */}
        <div className="editorial-double-rule mb-12" />

        {/* Main Broadsheet Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column (7 cols): Narrative & Metrics */}
          <div className="lg:col-span-7 space-y-10">
            {/* Story & Biography */}
            <div className="space-y-6">
              <p className="font-body text-lg sm:text-xl text-text-primary leading-relaxed font-normal">
                <span className="font-serif font-bold text-3xl text-accent float-left mr-2.5 leading-none">
                  M
                </span>
                y name is Rahul Dadhich. I am a Full Stack Developer and AI Engineer based in Jaipur, India.
                I enjoy building clean, reliable web products that are easy to use, fast to load,
                and straightforward to maintain.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 font-sans text-sm text-text-muted font-medium leading-relaxed">
                <div className="border-l-2 border-border-primary pl-4">
                  <h3 className="font-mono text-xs font-bold text-text-primary uppercase tracking-wider mb-2">
                    // FULL-STACK CRAFT
                  </h3>
                  <p>
                    I specialize in React, TypeScript, and Node.js. I prioritize type safety,
                    reusable components, and clean state management so products scale cleanly
                    without turning into spaghetti code.
                  </p>
                </div>

                <div className="border-l-2 border-border-primary pl-4">
                  <h3 className="font-mono text-xs font-bold text-text-primary uppercase tracking-wider mb-2">
                    // PRACTICAL AI INTEGRATION
                  </h3>
                  <p>
                    I build AI-assisted tools and visual canvas editors using React Flow.
                    My focus is on creating intuitive interfaces that automate repetitive workflows
                    and save people time.
                  </p>
                </div>
              </div>
            </div>

            {/* Editorial Tabular Metrics Ledger */}
            <div>
              <div className="border-b border-border-primary pb-2 mb-4 flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-text-primary">
                  KEY HIGHLIGHTS
                </span>
                <span className="font-mono text-2xs text-accent font-bold uppercase">OVERVIEW</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <StatLedgerCell
                  figure="EXP"
                  number={2}
                  suffix="+"
                  label="Years Experience"
                  delay={0.1}
                />
                <StatLedgerCell
                  figure="WORK"
                  number={4}
                  suffix="+"
                  label="Featured Projects"
                  delay={0.2}
                />
                <StatLedgerCell
                  figure="STACK"
                  number={15}
                  suffix="+"
                  label="Technologies"
                  delay={0.3}
                />
                <StatLedgerCell
                  figure="FOCUS"
                  number={100}
                  suffix="%"
                  label="Ownership & Care"
                  delay={0.4}
                />
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Media Artifact & Editorial Sidebar */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end space-y-6">
            <ProfileCard isMobile={isMobile} />

            {/* Sidebar Colophon Note */}
            <div className="w-full max-w-lg border border-border-subtle bg-bg-surface p-4">
              <div className="font-mono text-2xs font-bold text-text-muted uppercase tracking-widest mb-1.5 flex items-center justify-between">
                <span>NOTE // ON ENGINEERING</span>
                <span>RD.</span>
              </div>
              <p className="font-body italic text-xs sm:text-sm text-text-primary leading-relaxed font-normal">
                "Great software doesn't need to be flashy or overly complicated. It should be fast,
                reliable, easy to navigate, and built to solve real-world problems."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface StatLedgerCellProps {
  figure: string;
  number: number;
  suffix: string;
  label: string;
  delay: number;
}

const StatLedgerCell: React.FC<StatLedgerCellProps> = ({
  figure,
  number,
  suffix,
  label,
  delay,
}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="border border-border-primary bg-bg-secondary p-3 sm:p-4 hover:bg-bg-surface transition-colors"
    >
      <div className="font-mono text-[9px] text-text-muted font-bold uppercase tracking-wider mb-2">
        {figure}
      </div>
      <div className="flex items-baseline gap-0.5 mb-1">
        <AnimatedCounter
          target={number}
          isInView={isInView}
          className="font-serif text-2xl sm:text-3xl font-black text-text-primary tracking-tight"
        />
        <span className="font-serif text-lg font-bold text-accent">{suffix}</span>
      </div>
      <span className="font-mono text-2xs uppercase tracking-wider text-text-primary font-bold block leading-tight">
        {label}
      </span>
    </motion.div>
  );
};

export default About;