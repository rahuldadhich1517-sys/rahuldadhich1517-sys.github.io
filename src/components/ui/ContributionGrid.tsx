import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ContributionDay } from '../../types/github';

interface ContributionGridProps {
  contributionData: ContributionDay[];
}

export const ContributionGrid: React.FC<ContributionGridProps> = ({ contributionData }) => {
  const [hoveredDate, setHoveredDate] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.1,
      },
    },
  };

  const cellVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2 },
    },
  };

  const getColor = (count: number): string => {
    if (count === 0) return 'bg-bg-surface border-border-subtle';
    if (count < 3) return 'bg-accent/25 border-accent/40';
    if (count < 6) return 'bg-accent/60 border-accent/80';
    return 'bg-accent border-accent';
  };

  const tooltipText = (date: string, count: number): string => {
    const d = new Date(date);
    return `${count} contributions on ${d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })}`;
  };

  return (
    <motion.div
      className="flex justify-center w-full overflow-x-auto py-2"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex flex-col gap-2">
        <div className="flex gap-1.5 items-center">
          {contributionData.map((day) => (
            <motion.div
              key={day.date}
              variants={cellVariants}
              onMouseEnter={() => setHoveredDate(day.date)}
              onMouseLeave={() => setHoveredDate(null)}
              className={`w-3 h-3 border ${getColor(day.count)} cursor-pointer transition-colors relative`}
            >
              {hoveredDate === day.date && (
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2.5 py-1 bg-bg-inverse text-text-muted font-mono text-[10px] whitespace-nowrap z-30 shadow-hard-sm pointer-events-none">
                  {tooltipText(day.date, day.count)}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-between text-2xs font-mono text-text-muted font-bold mt-2">
          <span>LESS</span>
          <div className="flex gap-1 items-center">
            <span className="w-2.5 h-2.5 bg-bg-surface border border-border-subtle inline-block" />
            <span className="w-2.5 h-2.5 bg-accent/25 border border-accent/40 inline-block" />
            <span className="w-2.5 h-2.5 bg-accent/60 border border-accent/80 inline-block" />
            <span className="w-2.5 h-2.5 bg-accent border border-accent inline-block" />
          </div>
          <span>MORE</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ContributionGrid;
