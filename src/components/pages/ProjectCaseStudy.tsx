import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, ChevronLeft, ChevronRight, CheckCircle2, Layers, AlertCircle, Cpu } from 'lucide-react';
import { getProjectBySlug, projects } from '../../data/projects';
import ArchitectureFlow from '../ui/ArchitectureFlow';

const ProjectCaseStudy: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : null;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) {
      const index = projects.findIndex((p) => p.slug === slug);
      setCurrentIndex(index);
    }
  }, [slug, project]);

  if (!project) {
    return (
      <div className="min-h-[70vh] bg-bg-primary text-text-primary flex items-center justify-center px-6 py-24">
        <div className="text-center max-w-md border-2 border-border-primary p-8 bg-bg-secondary shadow-hard">
          <span className="font-mono text-xs text-accent uppercase tracking-widest font-bold block mb-2">
            NOT FOUND
          </span>
          <h1 className="font-serif text-3xl font-bold text-text-primary mb-4">
            Project Not Found
          </h1>
          <p className="font-sans text-xs sm:text-sm text-text-muted font-medium mb-6 leading-relaxed">
            The project you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/projects"
            className="btn btn--primary inline-flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>
    );
  }

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <article className="w-full bg-bg-primary text-text-primary">
      {/* Top Broadsheet Dateline Ribbon */}
      <div className="border-b border-border-primary bg-bg-surface py-2.5 px-4 sm:px-6 lg:px-12 font-mono text-2xs uppercase tracking-widest text-text-muted font-semibold">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent inline-block" />
            <span className="font-bold text-text-primary">
              CASE STUDY // {String(currentIndex + 1).padStart(2, '0')}
            </span>
          </div>
          <div className="flex items-center gap-4 font-bold text-text-primary">
            <span>CATEGORY: {project.category}</span>
            {project.year && <span>• {project.year}</span>}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold text-text-muted hover:text-accent uppercase tracking-wider transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to all projects</span>
          </Link>
        </div>

        {/* Lead Case Headline */}
        <div className="mb-8 max-w-5xl">
          <span className="font-mono text-xs font-bold text-accent uppercase tracking-widest block mb-2">
            CASE STUDY // {project.category.toUpperCase()}
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary leading-[1.02] uppercase">
            {project.title}
          </h1>
        </div>

        {/* Double Rule */}
        <div className="editorial-double-rule mb-10" />

        {/* Case Study Meta Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          {/* Left Column: Abstract & Overview */}
          <div className="lg:col-span-8 space-y-6">
            <p className="font-body text-xl sm:text-2xl text-text-primary leading-relaxed font-normal">
              {project.shortDescription}
            </p>

            <div className="font-sans text-base text-text-primary leading-relaxed space-y-4 font-normal">
              {project.longDescription ? (
                project.longDescription.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))
              ) : (
                <p>{project.description}</p>
              )}
            </div>

            {/* Action Triggers */}
            <div className="pt-2 flex flex-wrap gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  <ExternalLink size={15} />
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
                  <Github size={15} />
                  <span>Source Code</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Specification Ledger */}
          <div className="lg:col-span-4">
            <div className="border-2 border-border-primary bg-bg-secondary p-6 space-y-5">
              <div className="border-b border-border-primary pb-3 flex items-center justify-between font-mono text-xs font-bold uppercase tracking-widest text-text-primary">
                <span>PROJECT DETAILS</span>
                <Layers size={14} className="text-accent" />
              </div>

              <div className="divide-y divide-border-subtle font-mono text-xs">
                <div className="py-2.5 flex justify-between">
                  <span className="text-text-muted font-bold">CATEGORY:</span>
                  <span className="text-accent font-bold">{project.category}</span>
                </div>
                {project.year && (
                  <div className="py-2.5 flex justify-between">
                    <span className="text-text-muted font-bold">YEAR:</span>
                    <span className="text-text-primary font-bold">{project.year}</span>
                  </div>
                )}
                {project.role && (
                  <div className="py-2.5 flex justify-between">
                    <span className="text-text-muted font-bold">ROLE:</span>
                    <span className="text-text-primary font-bold">{project.role}</span>
                  </div>
                )}
                <div className="py-2.5 flex justify-between">
                  <span className="text-text-muted font-bold">STATUS:</span>
                  <span className="text-[#16A34A] font-bold">COMPLETED</span>
                </div>
              </div>

              {/* Technologies List */}
              <div className="pt-2 border-t border-border-primary">
                <span className="font-mono text-2xs text-text-muted uppercase tracking-wider block mb-2 font-bold">
                  TECH STACK:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 border border-border-subtle bg-bg-primary font-mono text-2xs text-text-primary font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Architecture Blueprint */}
        {project.architecture && (
          <section className="mb-16 border-t-2 border-border-primary pt-12">
            <div className="section-kicker mb-4">
              <span>ARCHITECTURE // SYSTEM DESIGN</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-primary uppercase mb-6">
              Architecture & Design Decisions
            </h2>
            <div className="p-6 sm:p-8 border border-border-primary bg-bg-secondary space-y-6">
              <p className="font-body text-base sm:text-lg text-text-primary leading-relaxed font-normal">
                {project.architecture}
              </p>
              {/* Optional interactive visual graph */}
              <div className="border border-border-subtle bg-bg-surface p-4">
                <div className="font-mono text-2xs uppercase tracking-widest text-text-muted font-bold mb-3 flex items-center justify-between">
                  <span>INTERACTIVE ARCHITECTURE DIAGRAM</span>
                  <Cpu size={14} className="text-accent" />
                </div>
                <ArchitectureFlow project={project} />
              </div>
            </div>
          </section>
        )}

        {/* Section: Challenges & Solutions */}
        {((project.challenges && project.challenges.length > 0) || (project.solutions && project.solutions.length > 0)) && (
          <section className="mb-16 border-t-2 border-border-primary pt-12">
            <div className="section-kicker mb-4">
              <span>CHALLENGES & SOLUTIONS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-primary uppercase mb-8">
              Key Challenges & How I Solved Them
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Challenges Column */}
              {project.challenges && project.challenges.length > 0 && (
                <div className="border border-border-primary bg-bg-secondary p-6 sm:p-8 space-y-4">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-accent uppercase tracking-widest border-b border-border-subtle pb-3">
                    <AlertCircle size={15} />
                    <span>CHALLENGES</span>
                  </div>
                  <ul className="space-y-4 font-sans text-sm text-text-primary font-medium">
                    {project.challenges.map((c, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="font-mono text-xs text-accent font-bold mt-0.5">#{String(i + 1).padStart(2, '0')}</span>
                        <span className="leading-relaxed">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Solutions Column */}
              {project.solutions && project.solutions.length > 0 && (
                <div className="border border-border-primary bg-bg-secondary p-6 sm:p-8 space-y-4">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-text-primary uppercase tracking-widest border-b border-border-subtle pb-3">
                    <CheckCircle2 size={15} className="text-[#16A34A]" />
                    <span>SOLUTIONS</span>
                  </div>
                  <ul className="space-y-4 font-sans text-sm text-text-primary font-medium">
                    {project.solutions.map((s, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="font-mono text-xs text-text-primary font-bold mt-0.5">#{String(i + 1).padStart(2, '0')}</span>
                        <span className="leading-relaxed">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Section: Results & Quantitative Impact */}
        {project.results && project.results.length > 0 && (
          <section className="mb-16 border-t-2 border-border-primary pt-12">
            <div className="section-kicker mb-4">
              <span>RESULTS & IMPACT</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-primary uppercase mb-6">
              Results & Measurable Impact
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.results.map((res, i) => (
                <div
                  key={i}
                  className="p-6 border border-border-primary bg-bg-secondary flex flex-col justify-between"
                >
                  <span className="font-mono text-2xs text-text-muted uppercase tracking-wider block mb-3 font-bold">
                    KEY RESULT #{String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="font-serif text-base sm:text-lg font-bold text-text-primary leading-snug">
                    {res}
                  </p>
                  <div className="mt-4 pt-3 border-t border-border-subtle font-mono text-2xs text-[#16A34A] uppercase font-bold flex items-center gap-1">
                    <CheckCircle2 size={12} />
                    <span>VERIFIED RESULT</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom Pagination: Next & Previous Project */}
        <div className="border-t-2 border-border-primary pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.slug}`}
              className="p-6 border border-border-primary bg-bg-secondary hover:bg-bg-surface transition-colors block group"
            >
              <div className="flex items-center gap-2 font-mono text-2xs text-text-muted font-bold uppercase tracking-widest mb-1">
                <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                <span>PREVIOUS PROJECT</span>
              </div>
              <h4 className="font-serif text-xl font-bold text-text-primary group-hover:text-accent transition-colors">
                {prevProject.title}
              </h4>
            </Link>
          ) : <div />}

          {nextProject ? (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="p-6 border border-border-primary bg-bg-secondary hover:bg-bg-surface transition-colors block text-right group"
            >
              <div className="flex items-center justify-end gap-2 font-mono text-2xs text-text-muted font-bold uppercase tracking-widest mb-1">
                <span>NEXT PROJECT</span>
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
              <h4 className="font-serif text-xl font-bold text-text-primary group-hover:text-accent transition-colors">
                {nextProject.title}
              </h4>
            </Link>
          ) : <div />}
        </div>
      </div>
    </article>
  );
};

export default ProjectCaseStudy;
