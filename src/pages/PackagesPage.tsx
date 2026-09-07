import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { npmPackages } from '../data/npmPackages';
import { Copy, Check, ExternalLink, Code2 } from 'lucide-react';
import useSEO from '../hooks/useSEO';

const PackagesPage: React.FC = () => {
  useSEO({
    title: 'Packages — Rahul Dadhich',
    description: 'Open source NPM packages for string manipulation, data transformation, and utilities.',
    url: 'https://rahuldadhich.dev/packages',
  });

  const [copiedId, setCopiedId] = useState<string | null>(null);
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
    new Set(npmPackages.map((pkg) => pkg.category))
  );
  const filteredPackages = selectedCategory
    ? npmPackages.filter((pkg) => pkg.category === selectedCategory)
    : npmPackages;

  const handleCopyCommand = (packageName: string, id: string) => {
    const command = `npm install ${packageName}`;
    navigator.clipboard.writeText(command);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

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
            PACKAGES
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#111111] leading-tight mb-6">
            Open Source Packages
          </h1>
          <p className="text-base md:text-lg text-[#737373] leading-relaxed max-w-2xl">
            Reusable NPM packages I've published for string manipulation, data transformation, and utilities.
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

        {/* Packages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {filteredPackages.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={itemVariants}
              className="p-6 sm:p-8 border border-[#111111] hover:bg-[#F5F5F5] transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#111111] mb-2 flex items-center gap-2">
                    <Code2 size={24} className="text-[#CC0000]" />
                    {pkg.name}
                  </h3>
                  <p className="text-sm sm:text-base text-[#737373] leading-relaxed max-w-xl">
                    {pkg.description}
                  </p>
                </div>
                {pkg.featured && (
                  <span className="w-fit px-3 py-1 bg-[#CC0000]/10 text-[#CC0000] text-xs font-semibold uppercase tracking-wider whitespace-nowrap">
                    Featured
                  </span>
                )}
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-4 mb-6 text-xs text-[#737373]">
                <div className="flex items-center gap-2">
                  <span className="font-mono">v{pkg.version}</span>
                </div>
                <span className="px-2 py-1 border border-[#111111]/20 rounded">
                  {pkg.category}
                </span>
                {pkg.downloads && (
                  <span className="px-2 py-1 border border-[#111111]/20 rounded">
                    {pkg.downloads.toLocaleString()} downloads
                  </span>
                )}
              </div>

              {/* Tools Used */}
              {pkg.tools && pkg.tools.length > 0 && (
                <div className="mb-6 pb-6 border-b border-[#111111]/10">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#737373] mb-3">
                    Built With
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {pkg.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-2.5 py-1.5 bg-[#111111]/5 text-[#111111] border border-[#111111]/20 font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Installation Command */}
              <div className="mb-6 p-4 bg-[#F5F5F5] border border-[#111111]/10 font-mono text-sm text-[#111111] flex items-center justify-between group/command">
                <span>{`npm install ${pkg.name}`}</span>
                <button
                  onClick={() => handleCopyCommand(pkg.name, pkg.id)}
                  className="ml-4 p-2 hover:bg-[#111111]/10 rounded transition-colors"
                  aria-label="Copy install command"
                >
                  {copiedId === pkg.id ? (
                    <Check size={16} className="text-[#CC0000]" />
                  ) : (
                    <Copy size={16} className="text-[#737373]" />
                  )}
                </button>
              </div>

              {/* Tags */}
              {pkg.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {pkg.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-[#F9F9F7] text-[#737373] border border-[#111111]/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Links */}
              <div className="flex flex-wrap gap-4 text-sm">
                <a
                  href={pkg.npmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#CC0000] hover:text-[#111111] font-semibold uppercase tracking-wider transition-colors"
                >
                  NPM Package
                  <ExternalLink size={14} />
                </a>
                {pkg.githubUrl && (
                  <a
                    href={pkg.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#CC0000] hover:text-[#111111] font-semibold uppercase tracking-wider transition-colors"
                  >
                    GitHub
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredPackages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#737373]">
              No packages found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PackagesPage;
