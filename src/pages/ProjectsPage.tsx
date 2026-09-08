import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from '../components/ui/ProjectCard';
import useSEO from '../hooks/useSEO';
import { Layers, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsPage: React.FC = () => {
  useSEO({
    title: 'Projects & Case Studies — Rahul Dadhich',
    description: 'Portfolio of full-stack web development projects, AI chatbots, visual builders, and scalable production systems.',
    url: 'https://rahuldadhich.dev/projects',
  });

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(
    new Set(projects.map((p) => p.category))
  );

  const filteredProjects = selectedCategory
    ? projects.filter((p) => p.category === selectedCategory)
    : projects;

  return (
    <div className="w-full bg-bg-primary text-text-primary">
      {/* Top Broadsheet Dateline */}
      <div className="border-b border-border-primary bg-bg-surface py-2.5 px-4 sm:px-6 lg:px-12 font-mono text-2xs uppercase tracking-widest text-text-muted font-semibold">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent inline-block" />
            <span className="font-bold text-text-primary">PROJECTS // ALL WORKS</span>
          </div>
          <span className="font-bold text-text-primary">TOTAL PROJECTS: {projects.length}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
        {/* Section Kicker */}
        <div className="section-kicker mb-6">
          <span>PROJECTS & CASE STUDIES</span>
        </div>

        {/* Page Headline */}
        <div className="mb-10 sm:mb-14 max-w-5xl">
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary leading-[1.02] uppercase">
            Projects & Work: <br />
            <span className="italic font-normal font-serif text-text-muted lowercase">real-world</span>{' '}
            applications & tools.
          </h1>
          <p className="font-body text-base sm:text-xl text-text-primary leading-relaxed mt-4 max-w-3xl font-normal">
            A complete collection of web applications, developer tools, and AI workflows I've built.
            Each project highlights the problem, architecture, and real-world results.
          </p>
        </div>

        {/* Double Rule */}
        <div className="editorial-double-rule mb-10" />

        {/* Category Filter Tabs */}
        <div className="border border-border-primary bg-bg-secondary p-4 mb-12 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-mono text-2xs uppercase tracking-wider text-text-muted font-bold">
            <span className="w-1.5 h-1.5 bg-accent" />
            <span>FILTER BY CATEGORY:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors border ${
                selectedCategory === null
                  ? 'border-accent bg-accent text-white font-bold'
                  : 'border-border-subtle bg-bg-primary text-text-primary font-semibold hover:border-border-primary'
              }`}
            >
              ALL CATEGORIES ({projects.length})
            </button>
            {categories.map((category) => {
              const count = projects.filter((p) => p.category === category).length;
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors border ${
                    isSelected
                      ? 'border-accent bg-accent text-white font-bold'
                      : 'border-border-subtle bg-bg-primary text-text-primary font-semibold hover:border-border-primary'
                  }`}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Stream */}
        <div className="space-y-12 sm:space-y-16">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-16 p-8 border-2 border-border-primary bg-bg-secondary flex flex-col sm:flex-row items-center justify-between gap-6 shadow-hard">
          <div className="space-y-2">
            <span className="font-mono text-xs text-accent uppercase tracking-widest font-bold block">
              COLLABORATION // NEW PROJECTS
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-text-primary">
              Let's discuss your next project.
            </h3>
            <p className="font-sans text-sm sm:text-base text-text-primary font-normal max-w-xl leading-relaxed">
              I'm available for full-stack web development, AI tool integration, and performance improvements.
            </p>
          </div>
          <Link to="/contact" className="btn btn--primary btn--lg flex items-center gap-2 flex-shrink-0">
            <span>Get in Touch</span>
            <ArrowUpRight className="btn__icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
