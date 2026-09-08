import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { githubRepos } from '../data/githubRepos';
import { Github, Star, GitFork, ExternalLink, ArrowUpRight, FolderGit2 } from 'lucide-react';
import useSEO from '../hooks/useSEO';

const GitHubPage: React.FC = () => {
  useSEO({
    title: 'GitHub & Open Source Projects — Rahul Dadhich',
    description: 'Explore public open-source software repositories on GitHub by Rahul Dadhich, including web platforms, developer tools, and AI projects.',
    url: 'https://rahuldadhich.dev/github',
  });

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(
    new Set(githubRepos.map((repo) => repo.category))
  );

  const filteredRepos = selectedCategory
    ? githubRepos.filter((repo) => repo.category === selectedCategory)
    : githubRepos;

  return (
    <div className="w-full bg-bg-primary text-text-primary">
      {/* Top Broadsheet Dateline */}
      <div className="border-b border-border-primary bg-bg-surface py-2.5 px-4 sm:px-6 lg:px-12 font-mono text-2xs uppercase tracking-widest text-text-muted font-semibold">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent inline-block" />
            <span className="font-bold text-text-primary">OPEN SOURCE // GITHUB REPOSITORIES</span>
          </div>
          <div className="flex items-center gap-3 font-bold text-text-primary">
            <span>GITHUB: @rahuldadhich1517-sys</span>
            <span>•</span>
            <span>PUBLIC REPOS: {githubRepos.length}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
        {/* Section Kicker */}
        <div className="section-kicker mb-6">
          <span>OPEN SOURCE REPOSITORIES</span>
        </div>

        {/* Page Headline */}
        <div className="mb-10 sm:mb-14 max-w-5xl">
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary leading-[1.02] uppercase">
            Open Source Work: <br />
            <span className="italic font-normal font-serif text-text-muted lowercase">repositories,</span>{' '}
            tools & side projects.
          </h1>
          <p className="font-body text-base sm:text-xl text-text-primary leading-relaxed mt-4 max-w-3xl font-normal">
            A public collection of repositories I maintain on GitHub, including production web applications,
            developer utilities, and AI experiments.
          </p>
        </div>

        {/* Double Rule */}
        <div className="editorial-double-rule mb-10" />

        {/* Category Filter Bar */}
        <div className="border border-border-primary bg-bg-secondary p-4 mb-12 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-mono text-2xs uppercase tracking-wider text-text-muted font-bold">
            <span className="w-1.5 h-1.5 bg-accent" />
            <span>FILTER BY TOPIC:</span>
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
              ALL REPOSITORIES ({githubRepos.length})
            </button>
            {categories.map((category) => {
              const count = githubRepos.filter((r) => r.category === category).length;
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

        {/* Repositories Gazette Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredRepos.map((repo, index) => {
            const indexStr = String(index + 1).padStart(2, '0');
            return (
              <motion.article
                key={repo.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="border-2 border-border-primary bg-bg-secondary p-6 sm:p-8 flex flex-col justify-between hover:bg-bg-surface transition-colors"
              >
                {/* Header Strip */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-border-subtle pb-3 font-mono text-2xs uppercase tracking-widest text-text-muted font-semibold">
                    <span className="font-bold text-accent">REPO // {indexStr}</span>
                    <span className="px-2 py-0.5 border border-border-subtle bg-bg-primary text-text-primary font-bold">
                      {repo.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-text-primary leading-tight flex items-start justify-between gap-2">
                      <span>{repo.name}</span>
                      <FolderGit2 size={20} className="text-text-primary flex-shrink-0 mt-1" />
                    </h3>
                    {repo.year && (
                      <span className="font-mono text-2xs text-text-muted font-bold block mt-1">
                        CREATED // {repo.year}
                      </span>
                    )}
                  </div>

                  <p className="font-body text-sm sm:text-base text-text-primary leading-relaxed font-normal">
                    {repo.description}
                  </p>
                </div>

                {/* Bottom Metadata & Actions */}
                <div className="pt-6 mt-6 border-t border-border-subtle space-y-4">
                  {/* Language & Stats */}
                  <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent inline-block" />
                      <span className="text-text-primary font-bold">{repo.language}</span>
                    </div>

                    <div className="flex items-center gap-3 text-text-muted font-semibold">
                      {repo.stars !== undefined && (
                        <div className="flex items-center gap-1">
                          <Star size={13} className="text-accent" />
                          <span>{repo.stars} stars</span>
                        </div>
                      )}
                      {repo.forks !== undefined && (
                        <div className="flex items-center gap-1">
                          <GitFork size={13} />
                          <span>{repo.forks} forks</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Topics Pills */}
                  {repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {repo.topics.map((topic) => (
                        <span
                          key={topic}
                          className="font-mono text-[10px] px-2 py-0.5 border border-border-subtle bg-bg-primary text-text-primary font-semibold"
                        >
                          #{topic}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Links */}
                  <div className="pt-2 flex flex-wrap gap-3">
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--primary btn--sm flex items-center gap-1.5"
                    >
                      <Github size={14} />
                      <span>View on GitHub</span>
                      <ArrowUpRight size={13} />
                    </a>
                    {repo.liveUrl && (
                      <a
                        href={repo.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--secondary btn--sm flex items-center gap-1.5"
                      >
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Profile Action Banner */}
        <div className="mt-16 p-8 border-2 border-border-primary bg-bg-secondary flex flex-col sm:flex-row items-center justify-between gap-6 shadow-hard">
          <div className="space-y-2">
            <span className="font-mono text-xs text-accent uppercase tracking-widest font-bold block">
              GITHUB // OPEN SOURCE
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-text-primary">
              Check out all my work on GitHub
            </h3>
            <p className="font-sans text-sm sm:text-base text-text-primary font-normal max-w-xl leading-relaxed">
              Browse commit histories, active experiments, and open-source contributions directly on my GitHub profile.
            </p>
          </div>
          <a
            href="https://github.com/rahuldadhich1517-sys"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary btn--lg flex items-center gap-2 flex-shrink-0"
          >
            <Github size={16} />
            <span>Visit @rahuldadhich1517-sys</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GitHubPage;
