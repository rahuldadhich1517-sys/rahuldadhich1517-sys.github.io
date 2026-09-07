import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { reels, getAllCategories } from '../data/reels';
import { Play, ExternalLink, Clock, Eye } from 'lucide-react';
import useSEO from '../hooks/useSEO';

const VideosPage: React.FC = () => {
  useSEO({
    title: 'Videos — Rahul Dadhich',
    description: 'Short-form video content about web development, design, career tips, and my journey as a developer.',
    url: 'https://rahuldadhich.dev/videos',
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

  const categories = getAllCategories();
  const filteredReels = selectedCategory
    ? reels.filter((reel) => reel.category === selectedCategory)
    : reels;

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
            CONTENT CREATOR
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#111111] leading-tight mb-6">
            Latest Videos
          </h1>
          <p className="text-base md:text-lg text-[#737373] leading-relaxed max-w-2xl">
            Short-form content about web development, design, and my journey as a developer. Created using public folder videos.
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

        {/* Videos Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-6"
        >
          {filteredReels.map((reel) => (
            <motion.a
              key={reel.id}
              href={reel.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group flex flex-col h-full border border-[#111111] hover:bg-[#F5F5F5] transition-all duration-300"
            >
              {/* Thumbnail Area */}
              <div className="relative h-64 sm:h-80 bg-gradient-to-br from-[#F5F5F5] to-[#E8E1D5] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-20 h-20 rounded-full bg-[#CC0000]/20 border-2 border-[#CC0000] flex items-center justify-center">
                    <Play
                      size={32}
                      className="text-[#CC0000] ml-1"
                      fill="#CC0000"
                    />
                  </div>
                </div>
                {reel.featured && (
                  <div className="absolute top-3 right-3 px-2 py-1 bg-[#CC0000] text-[#F9F9F7] text-xs font-semibold uppercase tracking-wider">
                    Featured
                  </div>
                )}
                {/* Duration Badge */}
                {reel.duration && (
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 text-white text-xs font-mono backdrop-blur-sm">
                    {reel.duration}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 p-4 sm:p-6 flex flex-col">
                <div className="mb-3">
                  <span className="text-xs font-medium text-[#CC0000] uppercase tracking-wider">
                    {reel.category}
                  </span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#111111] mb-2 line-clamp-2">
                  {reel.title}
                </h3>

                <p className="text-sm text-[#737373] mb-4 line-clamp-2 flex-1">
                  {reel.description}
                </p>

                {/* Stats */}
                {(reel.views || reel.duration) && (
                  <div className="flex gap-3 mb-3 text-xs text-[#737373]">
                    {reel.views && (
                      <div className="flex items-center gap-1">
                        <Eye size={12} />
                        <span>{reel.views.toLocaleString()} views</span>
                      </div>
                    )}
                    {reel.duration && (
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        <span>{reel.duration}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {reel.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-[#F9F9F7] text-[#737373] border border-[#111111]/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Date */}
                <div className="flex items-center justify-between pt-4 border-t border-[#111111]/10 mt-3">
                  <span className="text-xs text-[#737373]">
                    {new Date(reel.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                  <span className="text-[#CC0000] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <ExternalLink size={14} />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {filteredReels.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#737373]">
              No videos found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideosPage;
