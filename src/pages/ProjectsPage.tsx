import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from '../components/ui/ProjectCard';
import { usePrefersReducedMotion } from '../hooks/useReducedMotion';
import { cardStaggerVariants, itemFadeUpVariants, getVariants } from '../animations/transitionVariants';
import useSEO from '../hooks/useSEO';

const ProjectsPage: React.FC = () => {
  useSEO({
    title: 'Projects — Rahul Dadhich',
    description: 'Portfolio of full-stack web development projects showcasing expertise in React, TypeScript, Node.js, and modern web technologies.',
    url: 'https://rahuldadhich.dev/projects',
  });

  const [isMobile, setIsMobile] = React.useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const labelVariants = getVariants(prefersReducedMotion, itemFadeUpVariants);
  const cardStaggerVariantsResolved = getVariants(
    prefersReducedMotion,
    cardStaggerVariants
  );

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

  return (
    <section className="relative w-full py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-[#F9F9F7] overflow-hidden sharp-corners">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div
          variants={labelVariants}
          initial="hidden"
          animate="visible"
          className="mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#111111]/20 bg-[#CC0000]/20 text-[#CC0000] tracking-widest uppercase text-xs mb-8">
            PROJECTS
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#111111] leading-tight mb-6">
            All Projects
          </h1>
          <p className="text-base md:text-lg text-[#737373] leading-relaxed max-w-2xl">
            A selection of projects that showcase my expertise in full-stack development.
          </p>
        </motion.div>

        {/* Filter by Category */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mb-12 md:mb-16 flex flex-wrap gap-3"
        >
          <span className="text-sm text-[#737373] uppercase tracking-wider pt-1">
            Categories:
          </span>
          {Array.from(
            new Set(projects.map((p) => p.category))
          ).map((category) => (
            <span
              key={category}
              className="px-3 py-1.5 border border-[#111111]/30 text-xs sm:text-sm font-medium text-[#111111] hover:border-[#CC0000] hover:text-[#CC0000] transition-colors"
            >
              {category}
            </span>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={cardStaggerVariantsResolved}
          initial="hidden"
          animate="visible"
          className="space-y-24 md:space-y-32"
        >
          {projects.map((project, index) => (
            <motion.div key={project.id} variants={itemFadeUpVariants}>
              <ProjectCard project={project} index={index} isMobile={isMobile} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPage;
