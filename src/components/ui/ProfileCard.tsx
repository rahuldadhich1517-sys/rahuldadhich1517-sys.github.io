import React from 'react';
import { motion } from 'framer-motion';

interface ProfileCardProps {
  isMobile?: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-lg border border-border-primary bg-bg-secondary p-3 sm:p-4"
    >
      {/* Editorial Frame Header */}
      <div className="flex items-center justify-between border-b border-border-subtle pb-2 mb-3 font-mono text-2xs uppercase tracking-widest text-text-muted font-semibold">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-accent inline-block" />
          <span className="font-bold text-text-primary">PROFILE</span>
        </div>
        <span>INTERACTIVE</span>
      </div>

      {/* Video Media Container */}
      <div className="relative border border-border-primary bg-[#0E0E0E] overflow-hidden aspect-square flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src={`${import.meta.env.BASE_URL}video.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Framing Corner Accents */}
        <div className="absolute top-2 left-2 font-mono text-[9px] text-white/80 font-bold tracking-wider">
          CAM // 01
        </div>
        <div className="absolute bottom-2 right-2 font-mono text-[9px] text-accent font-bold tracking-widest uppercase">
          LIVE LOOP
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
