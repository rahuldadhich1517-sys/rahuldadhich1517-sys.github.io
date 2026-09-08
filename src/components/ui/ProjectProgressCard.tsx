import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BuildingProject } from '../../data/buildingProjects';

interface ProjectProgressCardProps {
  project: BuildingProject;
  index?: number;
}

export const ProjectProgressCard: React.FC<ProjectProgressCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusLabel = (status: string): string => {
    return status.toUpperCase();
  };

  const getTechStatusIcon = (status: string): string => {
    switch (status) {
      case 'completed':
        return '✓';
      case 'in-progress':
        return '◐';
      case 'planned':
        return '○';
      default:
        return '—';
    }
  };

  return (
    <div className="h-full">
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="h-full bg-bg-secondary border border-border-primary p-6 cursor-pointer hover:bg-bg-surface transition-colors"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border-subtle pb-3 mb-4 font-mono text-2xs uppercase tracking-widest text-text-muted font-semibold">
          <span className="font-bold text-accent">{project.category}</span>
          <span className="px-2 py-0.5 border border-border-subtle bg-bg-primary text-text-primary font-bold">
            {getStatusLabel(project.status)}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-2xl font-bold text-text-primary mb-2">
          {project.name}
        </h3>

        {/* Description */}
        <p className="font-body text-sm text-text-primary leading-relaxed mb-6 font-normal">
          {project.description}
        </p>

        {/* Progress Bar & Meter */}
        <div className="mb-6 space-y-2">
          <div className="flex items-center justify-between font-mono text-xs">
            <span className="text-text-muted font-bold uppercase tracking-wider">PROGRESS</span>
            <span className="font-bold text-text-primary">{project.progress}%</span>
          </div>
          {/* Hairline Progress Bar */}
          <div className="w-full bg-bg-surface border border-border-primary h-2 p-0.5">
            <div
              className="h-full bg-accent transition-all duration-500"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-4 pb-4 border-b border-border-subtle">
          <span className="font-mono text-2xs text-text-muted uppercase tracking-wider block mb-2 font-bold">
            TECH STACK:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech.name}
                className="px-2 py-0.5 border border-border-subtle bg-bg-primary font-mono text-xs text-text-primary font-medium flex items-center gap-1"
              >
                <span>{tech.name}</span>
                <span className="text-accent font-bold">{getTechStatusIcon(tech.status)}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="flex items-center justify-between font-mono text-2xs text-text-muted font-semibold">
          <span>STARTED: {new Date(project.startedAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }).toUpperCase()}</span>
          {project.estimatedCompletion && (
            <span>TARGET: {new Date(project.estimatedCompletion).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }).toUpperCase()}</span>
          )}
        </div>

        <div className="mt-4 pt-2 text-center font-mono text-2xs text-accent uppercase tracking-wider font-bold">
          {isExpanded ? '[— LESS DETAILS]' : '[+ VIEW DETAILS]'}
        </div>
      </div>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="mt-2 p-6 border-2 border-border-primary bg-bg-primary space-y-4">
          {project.longDescription && (
            <p className="font-body text-sm text-text-primary leading-relaxed font-normal">
              {project.longDescription}
            </p>
          )}

          <div>
            <span className="font-mono text-2xs text-text-muted uppercase tracking-wider block mb-2 font-bold">
              TECH STATUS:
            </span>
            <div className="divide-y divide-border-subtle border border-border-subtle bg-bg-secondary">
              {project.technologies.map((tech) => (
                <div key={tech.name} className="p-2.5 flex items-center justify-between font-mono text-xs">
                  <span className="text-text-primary">{tech.name}</span>
                  <span className="text-accent font-bold">
                    {tech.status.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectProgressCard;
