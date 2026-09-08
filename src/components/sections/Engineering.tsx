import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Activity, Layers } from 'lucide-react';

const Engineering: React.FC = () => {
  const principles = [
    {
      index: '01',
      title: 'Scalability & Performance',
      icon: Cpu,
      summary: 'Clean architecture and fast load times from day one.',
      details: [
        'Modular component architecture with clean separation of concerns',
        'State management with Redux Toolkit to prevent unnecessary re-renders and duplicate API calls',
        'Optimized bundle splitting and responsive layouts for fast page loads',
      ],
    },
    {
      index: '02',
      title: 'Security & Clean Code',
      icon: ShieldCheck,
      summary: 'Enterprise authentication and strict type safety.',
      details: [
        'Secure enterprise login with Microsoft Entra ID (Azure AD)',
        'End-to-end TypeScript types to catch errors early at compile time',
        'Sanitized form inputs, secure cookies, and safe session handling',
      ],
    },
    {
      index: '03',
      title: 'Reliability & User Experience',
      icon: Activity,
      summary: 'Resilient error handling and thoughtful UI details.',
      details: [
        'React error boundaries to catch UI errors without crashing the entire app',
        'Automatic retry logic and friendly offline/network recovery states',
        'Accessible, keyboard-friendly layouts tested across modern devices',
      ],
    },
  ];

  return (
    <section
      id="engineering"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-bg-surface text-text-primary border-b border-border-primary"
    >
      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Kicker */}
        <div className="flex flex-wrap items-center justify-between border-b border-border-subtle pb-3 mb-8 sm:mb-12">
          <div className="section-kicker">
            <span>ENGINEERING // HOW I WORK</span>
          </div>
          <span className="font-mono text-2xs text-text-muted font-semibold uppercase tracking-widest">
            CORE PRINCIPLES
          </span>
        </div>

        {/* Section Headline */}
        <div className="mb-10 sm:mb-14 max-w-4xl">
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-[1.08] uppercase">
            Engineering Principles <br />
            <span className="italic font-normal font-serif text-text-muted lowercase">for</span>{' '}
            real-world applications.
          </h2>
          <p className="font-body text-base sm:text-lg text-text-primary leading-relaxed mt-4 font-normal">
            I focus on writing clean, maintainable code, preventing edge-case bugs, and making sure applications
            stay fast and dependable as user traffic grows.
          </p>
        </div>

        {/* Double Rule */}
        <div className="editorial-double-rule mb-12" />

        {/* Three Principles Columnar Ledger */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="border border-border-primary bg-bg-secondary flex flex-col justify-between"
              >
                {/* Card Header */}
                <div className="p-6 border-b border-border-subtle bg-bg-primary">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-accent">
                      PRINCIPLE // {item.index}
                    </span>
                    <Icon className="w-5 h-5 text-text-primary" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-text-muted font-medium mt-2 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                {/* Card Body - Technical Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <ul className="space-y-3 font-sans text-xs sm:text-sm text-text-primary font-medium">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="font-mono text-accent text-2xs mt-1">▪</span>
                        <span className="leading-snug">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-border-subtle font-mono text-2xs text-text-muted font-bold uppercase tracking-wider flex items-center justify-between">
                    <span>CORE STANDARD</span>
                    <Layers size={13} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Engineering;