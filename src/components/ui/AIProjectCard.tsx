import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { AIProject } from '../../data/aiProjects';

interface AIProjectCardProps {
  project: AIProject;
}

export const AIProjectCard: React.FC<AIProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="h-full"
    >
      <div
        className="h-full bg-bg-secondary border border-border-primary p-6 sm:p-8 flex flex-col justify-between hover:bg-bg-surface transition-colors"
      >
        <div>
          {/* Header Strip */}
          <div className="flex items-center justify-between border-b border-border-subtle pb-3 mb-4 font-mono text-2xs uppercase tracking-widest text-text-muted font-semibold">
            <span className="font-bold text-accent">{project.category}</span>
            <span className="px-2 py-0.5 border border-border-subtle bg-bg-primary text-text-primary font-bold">
              {project.status || 'COMPLETED'}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-2xl font-bold text-text-primary mb-3 leading-tight">
            {project.title}
          </h3>

          {/* Description */}
          <p className="font-body text-sm text-text-primary leading-relaxed mb-6 font-normal">
            {project.description}
          </p>

          {/* Tech Stack */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="mb-6">
              <span className="font-mono text-2xs text-text-muted uppercase tracking-wider block mb-2 font-bold">
                TECH STACK:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-2.5 py-1 border border-border-subtle bg-bg-primary text-text-primary font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-border-subtle flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--sm flex items-center gap-1.5"
            >
              <span>Live Demo</span>
              <ArrowUpRight size={13} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary btn--sm flex items-center gap-1.5"
            >
              <Github size={13} />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AIProjectCard;
