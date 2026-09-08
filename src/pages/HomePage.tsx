import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Technology from '../components/sections/Technology';
import Engineering from '../components/sections/Engineering';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import { Contact } from '../components/sections/Contact';
import useSEO from '../hooks/useSEO';

const HomePage: React.FC = () => {
  useSEO({
    title: 'Rahul Dadhich — Full Stack Developer × AI Engineer',
    description: 'Building scalable web applications and intelligent systems with React, TypeScript, Node.js, and modern web technologies.',
    url: 'https://rahuldadhich.dev/',
  });

  return (
    <>
      <Hero />
      <About />
      <Technology />
      <Engineering />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

export default HomePage;
