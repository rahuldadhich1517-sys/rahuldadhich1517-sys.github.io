import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, ExternalLink, Layers, CheckCircle2 } from 'lucide-react';
import { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  isMobile?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const indexStr = String(index + 1).padStart(2, '0');
  const isAlternate = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="border-2 border-border-primary bg-bg-secondary p-6 sm:p-8 lg:p-10"
    >
      {/* Article Top Dateline Ribbon */}
      <div className="flex flex-wrap items-center justify-between border-b border-border-subtle pb-3 mb-6 font-mono text-2xs uppercase tracking-widest text-text-muted font-semibold">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-accent inline-block" />
          <span className="font-bold text-text-primary">FEATURED PROJECT // {indexStr}</span>
          <span>•</span>
          <span className="font-bold text-text-primary">{project.category}</span>
        </div>
        <div className="flex items-center gap-3">
          {project.year && <span>YEAR: {project.year}</span>}
          {project.role && (
            <>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline font-bold text-text-primary">{project.role}</span>
            </>
          )}
        </div>
      </div>

      {/* Main Asymmetric Grid */}
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start ${isAlternate ? 'lg:flex-row-reverse' : ''}`}>
        {/* Editorial Narrative Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="font-mono text-xs font-bold text-accent uppercase tracking-wider mb-2">
              PROJECT #{indexStr}
            </div>
            <h3 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight leading-[1.08]">
              {project.title}
            </h3>
          </div>

          <p className="font-body text-base sm:text-lg text-text-primary leading-relaxed">
            {project.description}
          </p>

          {/* Core Architecture Highlight */}
          {project.architecture && (
            <div className="border-l-2 border-border-primary pl-4 py-1">
              <div className="font-mono text-2xs text-text-muted font-bold uppercase tracking-wider mb-1">
                ARCHITECTURE HIGHLIGHT:
              </div>
              <p className="font-sans text-xs sm:text-sm text-text-primary font-medium leading-relaxed">
                {project.architecture}
              </p>
            </div>
          )}

          {/* Key Result Ledger Point */}
          {project.results && project.results.length > 0 && (
            <div className="flex items-start gap-2 text-xs sm:text-sm text-text-muted">
              <CheckCircle2 size={16} className="text-accent flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-text-primary font-bold">Key Result: </strong>
                <span className="text-text-primary font-medium">{project.results[0]}</span>
              </span>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <div className="font-mono text-2xs text-text-muted font-bold uppercase tracking-wider mb-2.5">
              TECH STACK:
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 border border-border-primary bg-bg-primary font-mono text-xs text-text-primary font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              to={`/projects/${project.slug}`}
              className="btn btn--primary"
            >
              <span>Read Case Study</span>
              <ArrowUpRight className="btn__icon" />
            </Link>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary"
              >
                <ExternalLink size={14} />
                <span>Live Demo</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary"
              >
                <Github size={14} />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;