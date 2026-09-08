import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram, Mail, ArrowUp, MessageSquare, Code2, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/rahuldadhich1517-sys',
      label: 'GitHub profile',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/rahul-dadhich-a40b67200',
      label: 'LinkedIn profile',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/rahul_dadhich.dev/',
      label: 'Instagram profile',
    },
    {
      name: 'WhatsApp',
      icon: MessageSquare,
      href: 'https://wa.me/919351876909?text=Hello%20Rahul!',
      label: 'WhatsApp direct message',
    },
  ];

  const navigationLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Skills', href: '/skills' },
    { label: 'Experience', href: '/experience' },
    { label: 'Projects', href: '/projects' },
    { label: 'GitHub', href: '/github' },
    { label: 'Packages', href: '/packages' },
    { label: 'Videos', href: '/videos' },
  ];

  const quickLinks = [
    { label: 'Download Resume (PDF)', href: '/Resume.pdf', isDownload: true },
    { label: 'Interactive Resume', href: '/resume' },
    { label: 'Contact & Inquiries', href: '/contact' },
  ];

  return (
    <footer className="w-full bg-bg-surface text-text-primary border-t-2 border-border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
        {/* Main Broadsheet Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-border-primary">
          {/* Brand & Bio (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-black text-text-primary uppercase tracking-tight">
                RAHUL DADHICH
              </h3>
              <p className="font-mono text-xs uppercase tracking-widest text-accent font-bold mt-1">
                FULL STACK DEVELOPER × AI ENGINEER
              </p>
            </div>
            <p className="font-body text-sm text-text-primary font-normal leading-relaxed max-w-sm">
              Building robust web applications and modern AI tools with clean code and great user experience.
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="w-9 h-9 border border-border-primary bg-bg-secondary flex items-center justify-center text-text-primary hover:bg-accent hover:text-white hover:border-accent transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Resources & Resume (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-2xs uppercase tracking-widest text-text-muted font-bold mb-4">
              // RESOURCES & RESUME
            </h4>
            <ul className="space-y-2.5 font-mono text-xs font-semibold">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.isDownload ? (
                    <a
                      href={link.href}
                      download="Resume.pdf"
                      className="text-accent hover:underline flex items-center gap-1 font-bold"
                    >
                      <span>{link.label}</span>
                      <ExternalLink size={12} />
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-text-primary hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-2xs text-text-muted font-semibold">
          <div>
            © {new Date().getFullYear()} RAHUL DADHICH. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="btn btn--sm btn--secondary flex items-center gap-1.5 py-1 px-2.5"
              aria-label="Return to top of page"
            >
              <span>TOP OF PAGE</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};