import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { npmPackages } from '../data/npmPackages';
import { Copy, Check, ExternalLink, Code2, Download, Package, ArrowUpRight, Terminal } from 'lucide-react';
import useSEO from '../hooks/useSEO';

const PackagesPage: React.FC = () => {
  useSEO({
    title: 'NPM Packages & Open Source Libraries — Rahul Dadhich',
    description: 'Published open source NPM packages for string manipulation, data transformation, schema validation, and utilities.',
    url: 'https://rahuldadhich.dev/packages',
  });

  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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
    <div className="w-full bg-bg-primary text-text-primary">
      {/* Top Broadsheet Dateline */}
      <div className="border-b border-border-primary bg-bg-surface py-2.5 px-4 sm:px-6 lg:px-12 font-mono text-2xs uppercase tracking-widest text-text-muted font-semibold">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent inline-block" />
            <span className="font-bold text-text-primary">NPM PACKAGES // OPEN SOURCE LIBRARIES</span>
          </div>
          <div className="flex items-center gap-3 font-bold text-text-primary">
            <span>REGISTRY: NPMJS.COM/~RAHULDADHICH1517</span>
            <span>•</span>
            <span>PACKAGES: {npmPackages.length}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
        {/* Section Kicker */}
        <div className="section-kicker mb-6">
          <span>OPEN SOURCE PACKAGES</span>
        </div>

        {/* Page Headline */}
        <div className="mb-10 sm:mb-14 max-w-5xl">
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary leading-[1.02] uppercase">
            Published Packages: <br />
            <span className="italic font-normal font-serif text-text-muted lowercase">reusable</span>{' '}
            libraries for developers.
          </h1>
          <p className="font-body text-base sm:text-xl text-text-primary leading-relaxed mt-4 max-w-3xl font-normal">
            Modular software packages authored and distributed on npm. Built with full TypeScript support,
            comprehensive unit tests, and minimal runtime footprints.
          </p>
        </div>

        {/* Double Rule */}
        <div className="editorial-double-rule mb-10" />

        {/* Category Filter Bar */}
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
              ALL PACKAGES ({npmPackages.length})
            </button>
            {categories.map((category) => {
              const count = npmPackages.filter((pkg) => pkg.category === category).length;
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

        {/* Packages Stream */}
        <div className="space-y-10 sm:space-y-12">
          {filteredPackages.map((pkg, index) => {
            const indexStr = String(index + 1).padStart(2, '0');
            return (
              <motion.article
                key={pkg.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="border-2 border-border-primary bg-bg-secondary p-6 sm:p-8 lg:p-10"
              >
                {/* Header Ribbon */}
                <div className="flex flex-wrap items-center justify-between border-b border-border-subtle pb-4 mb-6 font-mono text-2xs uppercase tracking-widest text-text-muted font-semibold">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent inline-block" />
                    <span className="font-bold text-text-primary">PACKAGE // {indexStr}</span>
                    <span>•</span>
                    <span className="text-accent font-bold">{pkg.category}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span>VERSION: v{pkg.version}</span>
                    {pkg.downloads && (
                      <>
                        <span>•</span>
                        <span className="text-text-primary font-bold">{pkg.downloads.toLocaleString()} DOWNLOADS</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-8 space-y-6">
                    <div>
                      <h3 className="font-serif text-3xl sm:text-4xl font-bold text-text-primary flex items-center gap-3">
                        <Package size={26} className="text-accent" />
                        <span>{pkg.name}</span>
                      </h3>
                      <span className="font-mono text-xs text-text-muted font-semibold block mt-1">
                        AUTHOR: {pkg.author} • RELEASE YEAR: {pkg.year || 2026}
                      </span>
                    </div>

                    <p className="font-body text-base sm:text-lg text-text-primary leading-relaxed font-normal">
                      {pkg.description}
                    </p>

                    {/* Terminal Copy Command Strip */}
                    <div>
                      <span className="font-mono text-2xs text-text-muted uppercase tracking-wider block mb-2 font-bold">
                        INSTALL COMMAND:
                      </span>
                      <div className="flex items-center justify-between p-3.5 bg-bg-primary border border-border-primary font-mono text-xs sm:text-sm text-text-primary">
                        <div className="flex items-center gap-2 font-bold">
                          <Terminal size={15} className="text-accent flex-shrink-0" />
                          <span className="select-all">npm install {pkg.name}</span>
                        </div>
                        <button
                          onClick={() => handleCopyCommand(pkg.name, pkg.id)}
                          className="px-2.5 py-1 border border-border-primary bg-bg-secondary hover:bg-bg-surface font-mono text-2xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                          aria-label="Copy install command"
                        >
                          {copiedId === pkg.id ? (
                            <>
                              <Check size={12} className="text-accent" />
                              <span className="text-accent">COPIED</span>
                            </>
                          ) : (
                            <>
                              <Copy size={12} />
                              <span>COPY</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Built With Toolchain */}
                    {pkg.tools && pkg.tools.length > 0 && (
                      <div>
                        <span className="font-mono text-2xs text-text-muted uppercase tracking-wider block mb-2 font-bold">
                          BUILT WITH:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {pkg.tools.map((tool) => (
                            <span
                              key={tool}
                              className="px-2.5 py-1 border border-border-primary bg-bg-surface font-mono text-xs text-text-primary font-semibold"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Sidecard: Registry Verification */}
                  <div className="lg:col-span-4 border border-border-primary bg-bg-surface p-6 space-y-5">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-text-primary block border-b border-border-subtle pb-2">
                      PACKAGE INFO
                    </span>

                    <div className="space-y-2.5 font-mono text-xs">
                      <div className="flex justify-between">
                        <span className="text-text-muted font-bold">ECOSYSTEM:</span>
                        <span className="font-bold text-text-primary">Node.js / npm</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-muted font-bold">LICENSE:</span>
                        <span className="text-text-primary font-semibold">MIT Open Source</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-muted font-bold">TYPE SYSTEM:</span>
                        <span className="text-accent font-bold">Strict TypeScript</span>
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="pt-3 border-t border-border-subtle space-y-2">
                      <a
                        href={pkg.npmUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--primary btn--sm w-full flex items-center justify-center gap-1.5"
                      >
                        <ExternalLink size={14} />
                        <span>View on npm</span>
                      </a>
                      {pkg.githubUrl && (
                        <a
                          href={pkg.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn--secondary btn--sm w-full flex items-center justify-center gap-1.5"
                        >
                          <Code2 size={14} />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PackagesPage;
