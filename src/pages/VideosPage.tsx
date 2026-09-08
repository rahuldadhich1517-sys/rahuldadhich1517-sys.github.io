import React, { useState } from 'react';
import { reels, getAllCategories } from '../data/reels';
import { Instagram, ArrowUpRight } from 'lucide-react';
import useSEO from '../hooks/useSEO';

const VideosPage: React.FC = () => {
  useSEO({
    title: 'Videos & Reels — Rahul Dadhich',
    description: 'Short-form coding videos covering React, TypeScript, web development tips, and career insights by Rahul Dadhich.',
    url: 'https://rahuldadhich.dev/videos',
  });

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = getAllCategories();

  return (
    <div className="w-full bg-bg-primary text-text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
        {/* Section Kicker */}
        <div className="section-kicker mb-6">
          <span>VIDEOS & REELS</span>
        </div>

        {/* Page Headline */}
        <div className="mb-10 sm:mb-14 max-w-5xl">
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary leading-[1.02] uppercase">
            Videos & Reels: <br />
            <span className="italic font-normal font-serif text-text-muted lowercase">tips,</span>{' '}
            patterns & developer insights.
          </h1>
          <p className="font-body text-base sm:text-xl text-text-primary leading-relaxed mt-4 max-w-3xl font-normal">
            Short-form videos breaking down React hooks, TypeScript techniques, portfolio development,
            and practical engineering tips.
          </p>
        </div>  

        {/* Instagram Profile Action Callout */}
          <div className="mt-16 p-8 border-2 border-border-primary bg-bg-secondary flex flex-col sm:flex-row items-center justify-between gap-6 shadow-hard">  
      <div className="space-y-2">                                                                                                                        
        <span className="font-mono text-xs text-accent uppercase tracking-widest font-bold block">                                                       
          INSTAGRAM // DEV REELS                                                                                                                         
        </span>                                                                                                                                          
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-text-primary">                                                                     
          Follow for regular tips & reels                                                                                                                
        </h3>                                                                                                                                            
        <p className="font-sans text-sm sm:text-base text-text-primary font-normal max-w-xl leading-relaxed">                                            
          I share short-form coding tutorials, project breakdowns, and developer tips on Instagram.                                                      
        </p>                                                                                                                                             
      </div>                                                                                                                                             
      <a                                                                                                                                                 
        href="https://www.instagram.com/rahul_dadhich.dev/"                                                                                              
        target="_blank"                                                                                                                                  
        rel="noopener noreferrer"                                                                                                                        
        className="btn btn--primary btn--lg flex items-center gap-2 flex-shrink-0"                                                                       
      >                                                                                                                                                  
        <Instagram size={16} />                                                                                                                          
        <span>@rahul_dadhich.dev</span>                                                                                                                  
        <ArrowUpRight size={14} />                                                                                                                       
      </a>                                                                                                                                               
    </div>           
      </div>
    </div>
  );
};

export default VideosPage;
