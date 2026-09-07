import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { githubRepos } from '../data/githubRepos';
import { Github, Star, GitFork, ExternalLink } from 'lucide-react';
import useSEO from '../hooks/useSEO';

const GitHubPage: React.FC = () => {
  useSEO({
    title: 'GitHub — Open Source Projects by Rahul Dadhich',
    description: 'Explore my open source repositories on GitHub including full-stack applications, libraries, and development tools.',
    url: 'https://rahuldadhich.dev/github',
  });

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const categories = Array.from(
    new Set(githubRepos.map((repo) => repo.category))
  );
  const filteredRepos = selectedCategory
    ? githubRepos.filter((repo) => repo.category === selectedCategory)
    : githubRepos;

  return (
    <section className="relative w-full py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-[#F9F9F7] overflow-hidden sharp-corners">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#111111]/20 bg-[#CC0000]/20 text-[#CC0000] tracking-widest uppercase text-xs mb-8">
            GITHUB REPOSITORIES
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#111111] leading-tight mb-6">
            Open Source Work
          </h1>
          <p className="text-base md:text-lg text-[#737373] leading-relaxed max-w-2xl">
            Projects and repositories showcasing my work on GitHub.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mb-12 md:mb-16"
        >
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 border transition-colors text-xs sm:text-sm font-medium uppercase tracking-wider ${
                selectedCategory === null
                  ? 'border-[#CC0000] bg-[#CC0000] text-[#F9F9F7]'
                  : 'border-[#111111]/30 text-[#111111] hover:border-[#CC0000]'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 border transition-colors text-xs sm:text-sm font-medium uppercase tracking-wider ${
                  selectedCategory === category
                    ? 'border-[#CC0000] bg-[#CC0000] text-[#F9F9F7]'
                    : 'border-[#111111]/30 text-[#111111] hover:border-[#CC0000]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Repositories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-6"
        >
          {filteredRepos.map((repo) => (
            <motion.a
              key={repo.id}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group p-6 border border-[#111111] hover:bg-[#F5F5F5] transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Github size={20} className="text-[#CC0000]" />
                  <h3 className="font-serif text-lg font-bold text-[#111111] group-hover:text-[#CC0000] transition-colors">
                    {repo.name}
                  </h3>
                </div>
                {repo.featured && (
                  <span className="px-2 py-1 bg-[#CC0000]/10 text-[#CC0000] text-xs font-semibold uppercase tracking-wider">
                    Featured
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-[#737373] mb-4 leading-relaxed">
                {repo.description}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-3 mb-4 text-xs text-[#737373]">
                <span className="px-2 py-1 border border-[#111111]/20 rounded">
                  {repo.language}
                </span>
                <span className="px-2 py-1 border border-[#111111]/20 rounded">
                  {repo.category}
                </span>
                {repo.year && (
                  <span className="px-2 py-1 border border-[#111111]/20 rounded">
                    {repo.year}
                  </span>
                )}
              </div>

              {/* Stats */}
              {(repo.stars || repo.forks) && (
                <div className="flex gap-4 text-xs text-[#737373] mb-4 pb-4 border-t border-[#111111]/10">
                  {repo.stars !== undefined && (
                    <div className="flex items-center gap-1 mt-3">
                      <Star size={14} />
                      <span>{repo.stars} stars</span>
                    </div>
                  )}
                  {repo.forks !== undefined && (
                    <div className="flex items-center gap-1 mt-3">
                      <GitFork size={14} />
                      <span>{repo.forks} forks</span>
                    </div>
                  )}
                </div>
              )}

              {/* Topics */}
              {repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.topics.map((topic) => (
                    <span
                      key={topic}
                      className="text-xs px-2 py-1 bg-[#F5F5F5] text-[#737373] rounded"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}

              {/* Links */}
              <div className="flex gap-3">
                <span className="text-[#CC0000] text-xs font-semibold uppercase tracking-wider flex items-center gap-1">
                  View on GitHub
                  <ExternalLink size={12} />
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {filteredRepos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#737373]">No repositories found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GitHubPage;
