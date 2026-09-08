import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, FileText, Layers, Compass, Code2 } from 'lucide-react';
import useSEO from '../hooks/useSEO';

const AboutPage: React.FC = () => {
  useSEO({
    title: 'About Rahul Dadhich — Full Stack Developer × AI Engineer',
    description: 'Learn about my journey, technical philosophy, and experience architecting resilient web applications.',
    url: 'https://rahuldadhich.dev/about',
  });

  const principles = [
    {
      index: '01',
      title: 'Precision in Type & State',
      description:
        'Eliminating ambiguity through end-to-end TypeScript typings and centralized state management with Redux Toolkit.',
    },
    {
      index: '02',
      title: 'Performance as a Feature',
      description:
        'Caching redundant network traffic, optimizing render lifecycles, and keeping core bundle sizes tightly constrained.',
    },
    {
      index: '03',
      title: 'Architectural Empathy',
      description:
        'Writing clean, self-documenting code that future teammates will read with clarity and build upon with confidence.',
    },
  ];

  return (
    <div className="w-full bg-bg-primary text-text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
        {/* Section Kicker */}
        <div className="section-kicker mb-6">
          <span>ABOUT ME // BACKGROUND & PRINCIPLES</span>
        </div>

        {/* Headline */}
        <div className="mb-10 sm:mb-14 max-w-5xl">
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary leading-[1.02] uppercase">
            Building Reliable Software <br />
            <span className="italic font-normal font-serif text-text-muted lowercase">with</span>{' '}
            clean code & thoughtful design.
          </h1>
        </div>

        {/* Double Rule */}
        <div className="editorial-double-rule mb-12" />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column (7 cols): Editorial Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <p className="font-body text-xl sm:text-2xl text-text-primary leading-relaxed">
              <span className="font-serif font-bold text-4xl text-accent float-left mr-3 leading-none">
                I
              </span>
              am Rahul Dadhich, a Full Stack Developer and AI Engineer with over two years of commercial experience
              delivering scalable production applications. My focus is on writing code that is structurally clean,
              easy to maintain, and fast for users.
            </p>

            <div className="space-y-4 font-sans text-base text-text-primary leading-relaxed">
              <p>
                My journey in software engineering began with a curiosity about how web applications and distributed
                systems work behind the scenes. Today, that curiosity has translated into shipping production software
                for Danish municipalities, architecting visual node-based workflow builders, integrating enterprise authentication,
                and publishing open-source developer tools.
              </p>
              <p>
                To me, frontend engineering is about more than just styling; it is about responsive layouts, predictable state
                management, and handling edge cases gracefully. On the backend, I focus on clean REST APIs, organized database
                schemas, and practical AI integrations that deliver real value.
              </p>
            </div>

            {/* Core Working Principles */}
            <div className="pt-6 border-t border-border-primary space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-text-primary">
                  // HOW I WORK
                </span>
                <Compass size={16} className="text-accent" />
              </div>

              <div className="divide-y divide-border-subtle">
                {principles.map((p) => (
                  <div key={p.index} className="py-4">
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="font-mono text-xs font-bold text-accent">
                        PRINCIPLE // {p.index}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-text-primary">
                        {p.title}
                      </h3>
                    </div>
                    <p className="font-sans text-sm text-text-muted font-medium leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap gap-4">
              <Link to="/projects" className="btn btn--primary">
                <span>View Projects</span>
                <ArrowUpRight className="btn__icon" />
              </Link>
              <a
                href="/Resume.pdf"
                download="Resume.pdf"
                className="btn btn--secondary flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column (5 cols): Competency Ledgers & Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border-2 border-border-primary bg-bg-secondary p-6 sm:p-8 space-y-6">
              <div className="border-b border-border-primary pb-3 flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-text-primary">
                  CORE SKILLS // FOCUS AREAS
                </span>
                <Layers size={14} className="text-accent" />
              </div>

              {/* Pillar 1 */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 font-mono text-2xs uppercase tracking-wider text-accent font-bold">
                  <Code2 size={13} />
                  <span>01 // FRONTEND</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-text-primary">
                  Responsive & Interactive Web Apps
                </h4>
                <p className="font-sans text-xs text-text-muted font-medium leading-relaxed">
                  React 19, TypeScript, Redux Toolkit, Tailwind CSS, Framer Motion. Engineering fluid, accessible, and type-safe user experiences.
                </p>
              </div>

              <div className="border-t border-border-subtle pt-4 space-y-2">
                <div className="flex items-center gap-2 font-mono text-2xs uppercase tracking-wider text-accent font-bold">
                  <Layers size={13} />
                  <span>02 // BACKEND & CLOUD</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-text-primary">
                  APIs & Enterprise Integrations
                </h4>
                <p className="font-sans text-xs text-text-muted font-medium leading-relaxed">
                  Node.js, Express, MongoDB, RESTful architectures, Azure Active Directory / Microsoft Entra ID enterprise integration.
                </p>
              </div>

              <div className="border-t border-border-subtle pt-4 space-y-2">
                <div className="flex items-center gap-2 font-mono text-2xs uppercase tracking-wider text-accent font-bold">
                  <CheckCircle2 size={13} />
                  <span>03 // AI & GRAPH BUILDERS</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-text-primary">
                  Interactive Node Logic
                </h4>
                <p className="font-sans text-xs text-text-muted font-medium leading-relaxed">
                  React Flow visual chatbot builders, drag-and-drop conversational graph editors, and intelligent assistance pipelines.
                </p>
              </div>

              {/* Callout */}
              <div className="p-4 border border-border-primary bg-bg-surface text-text-primary">
                <span className="font-mono text-2xs text-accent uppercase tracking-widest block mb-1 font-bold">
                  STATUS & AVAILABILITY
                </span>
                <p className="font-sans text-xs text-text-primary leading-relaxed font-medium">
                  Open to full-time engineering roles, high-impact freelance projects, and technical collaborations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
