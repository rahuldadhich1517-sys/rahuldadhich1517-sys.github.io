import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, FileText, Mail } from 'lucide-react';
import './Navbar.css';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Experience', href: '/experience' },
  { label: 'Work', href: '/projects' },
  { label: 'GitHub', href: '/github' },
  { label: 'Packages', href: '/packages' },
  { label: 'Videos', href: '/videos' },
];

const ALL_MOBILE_ITEMS: NavItem[] = [
  ...NAV_ITEMS,
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  const isActive = (href: string): boolean => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  // Keyboard accessibility for mobile menu
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    },
    [isMobileMenuOpen]
  );

  return (
    <header className="editorial-masthead" role="banner">
      <div className="editorial-masthead__dateline">
        <div className="editorial-masthead__dateline-inner">

          <div className="hidden md:flex items-center gap-3 font-mono text-2xs tracking-widest text-text-primary font-bold uppercase">
            <span>DEVELOPER PORTFOLIO</span>
            <span>•</span>
            <span>JAIPUR, INDIA</span>
          </div>
        </div>
      </div>

      {/* Main Masthead Bar */}
      <nav
        className="editorial-masthead__main"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="editorial-masthead__inner">
          {/* Masthead Brandmark */}
          <Link
            to="/"
            className="editorial-masthead__brand"
            aria-label="Rahul Dadhich — Portfolio Home"
          >
            <div className="editorial-masthead__brand-mark">
              <span className="editorial-masthead__logo-title">RAHUL DADHICH</span>
              <span className="editorial-masthead__logo-sub">
                FULL STACK × AI ENGINEER
              </span>
            </div>
          </Link>

          {/* Desktop Editorial Navigation Index */}
          <div className="editorial-masthead__nav desktop-only" aria-hidden={isMobileMenuOpen}>
            <ul className="editorial-masthead__list" role="menubar">
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.label} role="none" className="editorial-masthead__item">
                    <Link
                      to={item.href}
                      className={`editorial-masthead__link ${active ? 'editorial-masthead__link--active' : ''}`}
                      role="menuitem"
                    >
                      {/* <span className="editorial-masthead__index">{item.number}</span> */}
                      <span className="editorial-masthead__label">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Action CTAs */}
          <div className="editorial-masthead__actions desktop-only">
            <a
              href="/Resume.pdf"
              download="Resume.pdf"
              className="btn btn--sm btn--secondary"
              aria-label="Download Resume (PDF)"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume (PDF)</span>
            </a>
            <Link
              to="/contact"
              className="btn btn--sm btn--primary"
              aria-label="Get in touch"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="editorial-masthead__mobile-toggle mobile-only"
            aria-expanded={isMobileMenuOpen}
            aria-controls="editorial-mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close index' : 'Open publication index'}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }
            }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-5 h-5 text-text-primary" aria-hidden="true" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-center gap-1.5"
                >
                  <span className="font-mono text-2xs font-bold tracking-widest uppercase">INDEX</span>
                  <Menu className="w-4 h-4 text-text-primary" aria-hidden="true" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Broadsheet Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="editorial-mobile__overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              id="editorial-mobile-menu"
              className="editorial-mobile__drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label="Table of contents"
              onKeyDown={handleKeyDown}
            >
              <div className="editorial-mobile__content">
                {/* Mobile Drawer Masthead Header */}
                <div className="editorial-mobile__header">
                  <div>
                    <div className="font-serif font-bold text-xl tracking-tight text-text-primary">
                      RAHUL DADHICH
                    </div>
                    <div className="font-mono text-2xs text-text-muted font-bold tracking-widest uppercase">
                      TABLE OF CONTENTS // 2026
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 border border-border-primary hover:bg-bg-surface text-text-primary"
                    aria-label="Close table of contents"
                  >
                    <X className="w-5 h-5 text-text-primary" />
                  </button>
                </div>

                {/* Numbered Article Index */}
                <div className="editorial-mobile__index-list">
                  <div className="px-4 py-2 bg-bg-surface border-b border-border-subtle font-mono text-2xs font-bold tracking-widest uppercase text-text-primary">
                    PUBLICATIONS & SECTIONS
                  </div>
                  <ul className="divide-y divide-border-subtle" role="menu">
                    {ALL_MOBILE_ITEMS.map((item) => {
                      const active = isActive(item.href);
                      return (
                        <li key={item.label} role="none">
                          <Link
                            to={item.href}
                            className={`editorial-mobile__link ${active ? 'editorial-mobile__link--active' : ''}`}
                            role="menuitem"
                          >
                            <span className="font-serif text-lg font-bold tracking-tight text-text-primary">
                              {item.label}
                            </span>
                            <ArrowUpRight className="w-4 h-4 ml-auto text-text-primary" />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Mobile Bottom Dispatch Bar */}
                <div className="editorial-mobile__footer">
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <a
                      href="/Resume.pdf"
                      download="Resume.pdf"
                      className="btn btn--secondary btn--sm w-full"
                      aria-label="Download Resume (PDF)"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Resume (PDF)</span>
                    </a>
                    <Link
                      to="/contact"
                      className="btn btn--primary btn--sm w-full"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Contact</span>
                    </Link>
                  </div>
                  <div className="font-mono text-2xs text-text-muted font-bold text-center tracking-widest uppercase">
                    PORTFOLIO • RAHULDADHICH.DEV
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
