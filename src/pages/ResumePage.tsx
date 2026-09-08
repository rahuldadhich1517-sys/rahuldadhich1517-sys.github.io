import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, FileText, CheckCircle2, Briefcase, GraduationCap, Code2, Layers, Printer } from 'lucide-react';
import useSEO from '../hooks/useSEO';

const ResumePage: React.FC = () => {
  useSEO({
    title: 'Resume — Rahul Dadhich',
    description: 'View and download the resume of Rahul Dadhich, Full Stack Developer and AI Engineer.',
    url: 'https://rahuldadhich.dev/resume',
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full bg-bg-primary text-text-primary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Action Header Bar */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-border-primary pb-6">
          <div>
            <span className="font-mono text-xs font-bold text-accent uppercase tracking-widest block mb-1">
              RESUME // OVERVIEW
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-tight text-text-primary">
              Resume
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/Resume.pdf"
              download="Resume.pdf"
              className="btn btn--primary flex items-center gap-2"
            >
              <Download size={15} />
              <span>Download Resume (PDF)</span>
            </a>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary flex items-center gap-2"
            >
              <ExternalLink size={15} />
              <span>Open PDF in New Tab</span>
            </a>
          </div>
        </div>

        {/* The Broadside Printed Resume Canvas */}
        <div className="border-2 border-border-primary bg-bg-secondary p-6 sm:p-12 lg:p-16 space-y-12 shadow-hard">
          {/* Resume Masthead */}
          <div className="border-b-2 border-border-primary pb-8">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
              <div>
                <h2 className="font-serif text-4xl sm:text-5xl font-black text-text-primary tracking-tight uppercase">
                  Rahul Dadhich
                </h2>
                <p className="font-mono text-sm uppercase tracking-widest text-accent font-bold mt-1">
                  Full Stack Developer × AI Engineer
                </p>
              </div>

              <div className="font-mono text-xs text-text-muted font-bold sm:text-right space-y-1">
                <p>JAIPUR, RAJASTHAN, INDIA</p>
                <p>rahuldadhich1517@gmail.com</p>
                <p>+91 9351876909</p>
              </div>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-text-primary border-b border-border-primary pb-1.5">
              <span className="text-accent">01 //</span>
              <span>SUMMARY</span>
            </div>
            <p className="font-body text-base text-text-primary leading-relaxed pt-1 font-normal">
              Full Stack Developer with 2+ years of hands-on production engineering experience building resilient
              web applications using React, TypeScript, Node.js, and modern cloud technologies. Proven track record
              in improving data-fetching performance by ~25%, implementing zero-downtime Microsoft Entra ID (Azure AD)
              authentication, building visual drag-and-drop conversational graph editors with React Flow, and authoring
              open-source npm packages. Committed to type safety, modular architecture, and high-performance digital products.
            </p>
          </section>

          {/* Section: Work Experience */}
          <section className="space-y-8">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-text-primary border-b border-border-primary pb-1.5">
              <span className="text-accent">02 //</span>
              <span>WORK EXPERIENCE</span>
            </div>

            {/* Position 1 */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-text-primary">
                    Full Stack Web Developer
                  </h3>
                  <p className="font-mono text-xs font-bold text-text-primary">
                    Sumedha Softech Pvt. Ltd. • Jaipur, India
                  </p>
                </div>
                <span className="font-mono text-xs text-accent font-bold">
                  April 2024 — April 2026 (2 Years)
                </span>
              </div>

              <ul className="space-y-2 font-sans text-xs sm:text-sm text-text-primary pl-1 font-normal">
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-accent text-xs mt-0.5">▪</span>
                  <span>
                    Architected and maintained the <strong>KomPublic Municipality Case Management</strong> platform for Danish local authorities; centralized API calls and state caching using <strong>Redux Toolkit</strong>, reducing redundant network requests and improving data-fetching latency by 25%.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-accent text-xs mt-0.5">▪</span>
                  <span>
                    Developed the <strong>KomPublic AI Chatbot</strong> application for Case Managers, integrating <strong>Microsoft Entra ID (Azure Active Directory)</strong> single sign-on without production downtime.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-accent text-xs mt-0.5">▪</span>
                  <span>
                    Created the <strong>Activate Everyware Chatbot</strong> visual builder using <strong>React Flow</strong>, enabling non-technical stakeholders to configure conditional conversational graphs with node-based logic.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-accent text-xs mt-0.5">▪</span>
                  <span>
                    Built and published open-source npm packages (<code>stringkit-utils</code>, <code>data-transform-toolkit</code>) utilized for string operations and data transformations.
                  </span>
                </li>
              </ul>
            </div>

            {/* Position 2 */}
            <div className="space-y-3 pt-4 border-t border-border-subtle">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-text-primary">
                    Intern Web Developer
                  </h3>
                  <p className="font-mono text-xs font-bold text-text-primary">
                    Aaron Softech Pvt. Ltd. • India
                  </p>
                </div>
                <span className="font-mono text-xs text-text-muted font-bold">
                  Sep 2023 — Dec 2023 (4 Months)
                </span>
              </div>

              <ul className="space-y-2 font-sans text-xs sm:text-sm text-text-primary pl-1 font-normal">
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-accent text-xs mt-0.5">▪</span>
                  <span>
                    Contributed to commercial full-stack web applications using the MERN stack (MongoDB, Express, React, Node.js).
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-accent text-xs mt-0.5">▪</span>
                  <span>
                    Developed responsive user interfaces, implemented REST API integrations, and collaborated with senior engineers using Git version control.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section: Technical Competencies */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-text-primary border-b border-border-primary pb-1.5">
              <span className="text-accent">03 //</span>
              <span>SKILLS & TECHNOLOGIES</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              <div className="p-3 border border-border-primary bg-bg-primary">
                <span className="text-accent font-bold block mb-1">FRONTEND:</span>
                <span className="text-text-primary font-medium">
                  React 19, TypeScript, JavaScript (ES6+), Next.js, Redux Toolkit, Tailwind CSS, React Flow, HTML5/CSS3
                </span>
              </div>
              <div className="p-3 border border-border-primary bg-bg-primary">
                <span className="text-accent font-bold block mb-1">BACKEND & APIs:</span>
                <span className="text-text-primary font-medium">
                  Node.js, Express.js, RESTful API Design, Microservices, Authentication, Middleware, Caching
                </span>
              </div>
              <div className="p-3 border border-border-primary bg-bg-primary">
                <span className="text-accent font-bold block mb-1">DATABASE & CLOUD:</span>
                <span className="text-text-primary font-medium">
                  MongoDB, SQL Databases, Microsoft Azure, Microsoft Entra ID (Azure AD), Docker, Cloud Storage
                </span>
              </div>
              <div className="p-3 border border-border-primary bg-bg-primary">
                <span className="text-accent font-bold block mb-1">DEV TOOLS & TESTING:</span>
                <span className="text-text-primary font-medium">
                  Git, GitHub, Vite, Webpack, Babel, Jest, npm/yarn packaging, Postman, CI/CD
                </span>
              </div>
            </div>
          </section>

          {/* Section: Education */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-text-primary border-b border-border-primary pb-1.5">
              <span className="text-accent">04 //</span>
              <span>EDUCATION</span>
            </div>
            <div className="flex justify-between items-baseline pt-1">
              <div>
                <h4 className="font-serif text-lg font-bold text-text-primary">
                  Bachelor of Technology
                </h4>
                <p className="font-mono text-xs text-text-muted font-medium">
                  Artificial Intelligence and Data Science
                </p>
              </div>
              <span className="font-mono text-xs text-text-primary font-bold">
                JAIPUR, RAJASTHAN, INDIA
              </span>
            </div>
          </section>

          {/* Colophon Stamp */}
          <div className="pt-6 border-t-2 border-border-primary flex items-center justify-between font-mono text-2xs text-text-muted font-bold uppercase">
            <span>END OF RESUME</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
