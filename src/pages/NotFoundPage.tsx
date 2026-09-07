import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section className="relative w-full min-h-[calc(100vh-74px)] flex items-center justify-center px-4 sm:px-6 md:px-12 bg-[#F9F9F7] overflow-hidden sharp-corners">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-md"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="font-serif text-9xl md:text-10xl font-bold text-[#CC0000] leading-none">
            404
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#111111] mb-4">
            Page Not Found
          </h2>
          <p className="text-base md:text-lg text-[#737373] leading-relaxed">
            The page you're looking for doesn't exist. Let's get you back on track.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <button
            onClick={() => navigate('/')}
            className="btn btn--primary flex items-center justify-center gap-2"
          >
            <Home size={18} />
            <span>Go Home</span>
          </button>
          <button
            onClick={() => navigate(-1)}
            className="btn btn--secondary flex items-center justify-center gap-2"
          >
            <ArrowLeft size={18} />
            <span>Go Back</span>
          </button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-[#111111]/20"
        >
          <p className="text-sm text-[#737373] mb-4">
            Or explore these sections:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { label: 'Home', path: '/' },
              { label: 'About', path: '/about' },
              { label: 'Projects', path: '/projects' },
              { label: 'GitHub', path: '/github' },
            ].map((link) => (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className="text-xs px-3 py-1.5 border border-[#111111]/30 text-[#111111] hover:border-[#CC0000] hover:text-[#CC0000] transition-colors uppercase tracking-wider font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default NotFoundPage;
