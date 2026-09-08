import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Home, Compass, ArrowUpRight } from 'lucide-react';
import useSEO from '../hooks/useSEO';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  useSEO({
    title: '404 — Page Not Found — Rahul Dadhich',
    description: 'The requested page does not exist on this portfolio website.',
    url: 'https://rahuldadhich.dev/404',
  });

  return (
    <div className="w-full min-h-[80vh] bg-bg-primary text-text-primary flex items-center justify-center px-4 sm:px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-xl w-full border-2 border-border-primary bg-bg-secondary p-8 sm:p-12 shadow-hard space-y-8"
      >
        {/* Dateline Header */}
        <div className="flex items-center justify-between border-b border-border-primary pb-3 font-mono text-2xs uppercase tracking-widest text-text-muted font-semibold">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent inline-block" />
            <span className="font-bold text-text-primary">404 // NOT FOUND</span>
          </div>
          <span className="font-bold text-text-primary">PAGE NOT FOUND</span>
        </div>

        {/* 404 Big Numerals & Headline */}
        <div className="space-y-3">
          <div className="font-serif text-7xl sm:text-9xl font-black text-text-primary tracking-tighter leading-none">
            404<span className="text-accent">.</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-4xl font-bold uppercase tracking-tight text-text-primary leading-tight">
            Page Not Found.
          </h1>
          <p className="font-body text-sm sm:text-base text-text-primary leading-relaxed font-normal">
            The page you are looking for doesn't exist, has been moved, or the link is incorrect.
          </p>
        </div>

        {/* Double Rule */}
        <div className="editorial-double-rule" />

        {/* Action Triggers */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => navigate('/')}
            className="btn btn--primary flex-1 flex items-center justify-center gap-2"
          >
            <Home size={15} />
            <span>Back to Homepage</span>
          </button>
          <button
            onClick={() => navigate(-1)}
            className="btn btn--secondary flex-1 flex items-center justify-center gap-2"
          >
            <ArrowLeft size={15} />
            <span>Go Back</span>
          </button>
        </div>

        {/* Direct Section Index */}
        <div className="pt-4 border-t border-border-subtle">
          <span className="font-mono text-2xs text-text-muted uppercase tracking-wider block mb-3 font-bold">
            QUICK NAVIGATION:
          </span>
          <div className="grid grid-cols-2 gap-2 font-mono text-xs">
            <Link
              to="/about"
              className="p-2 border border-border-subtle hover:border-border-primary hover:bg-bg-surface transition-colors flex items-center justify-between text-text-primary font-semibold"
            >
              <span>ABOUT</span>
              <ArrowUpRight size={12} className="text-text-primary" />
            </Link>
            <Link
              to="/skills"
              className="p-2 border border-border-subtle hover:border-border-primary hover:bg-bg-surface transition-colors flex items-center justify-between text-text-primary font-semibold"
            >
              <span>SKILLS</span>
              <ArrowUpRight size={12} className="text-text-primary" />
            </Link>
            <Link
              to="/projects"
              className="p-2 border border-border-subtle hover:border-border-primary hover:bg-bg-surface transition-colors flex items-center justify-between text-text-primary font-semibold"
            >
              <span>PROJECTS</span>
              <ArrowUpRight size={12} className="text-text-primary" />
            </Link>
            <Link
              to="/contact"
              className="p-2 border border-border-subtle hover:border-border-primary hover:bg-bg-surface transition-colors flex items-center justify-between text-text-primary font-semibold"
            >
              <span>CONTACT</span>
              <ArrowUpRight size={12} className="text-text-primary" />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
