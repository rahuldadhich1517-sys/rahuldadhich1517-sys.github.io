import React from 'react';
import { motion } from 'framer-motion';
import useSEO from '../hooks/useSEO';

const AboutPage: React.FC = () => {
  useSEO({
    title: 'About Rahul Dadhich — Full Stack Developer',
    description: 'Learn about my journey, expertise in frontend and backend development, and my passion for building scalable web applications.',
    url: 'https://rahuldadhich.dev/about',
  });

  return (
    <section
      id="about"
      className="relative w-full py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-[#F9F9F7] overflow-hidden sharp-corners"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#111111]/20 bg-[#CC0000]/20 text-[#CC0000] tracking-widest uppercase text-xs mb-8">
            ABOUT ME
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#111111] leading-tight mb-6">
            Who I Am
          </h1>
          <p className="text-base md:text-lg text-[#737373] leading-relaxed max-w-2xl">
            A full-stack developer passionate about building elegant solutions to complex problems.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#111111] mb-4">
                My Journey
              </h2>
              <p className="text-base text-[#737373] leading-relaxed mb-4">
                I started my journey into web development with a passion for building things that matter. Over the past few years, I've grown from learning the fundamentals to architecting scalable full-stack applications.
              </p>
              <p className="text-base text-[#737373] leading-relaxed">
                My focus is on writing clean, maintainable code and creating user experiences that are both intuitive and delightful. I believe in continuous learning and staying at the forefront of modern web development.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Key Points */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-6 border border-[#111111] hover:bg-[#F5F5F5] transition-colors">
              <h3 className="font-serif text-lg font-bold text-[#111111] mb-2">
                Frontend Expertise
              </h3>
              <p className="text-sm text-[#737373]">
                React, TypeScript, Tailwind CSS. Building performant, responsive interfaces with modern tooling.
              </p>
            </div>
            <div className="p-6 border border-[#111111] hover:bg-[#F5F5F5] transition-colors">
              <h3 className="font-serif text-lg font-bold text-[#111111] mb-2">
                Backend Skills
              </h3>
              <p className="text-sm text-[#737373]">
                Node.js, Express, MongoDB. Building scalable APIs and server-side applications.
              </p>
            </div>
            <div className="p-6 border border-[#111111] hover:bg-[#F5F5F5] transition-colors">
              <h3 className="font-serif text-lg font-bold text-[#111111] mb-2">
                Problem Solving
              </h3>
              <p className="text-sm text-[#737373]">
                Approaching challenges methodically with attention to detail and user needs.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
