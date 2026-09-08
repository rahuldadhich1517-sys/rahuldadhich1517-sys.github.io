import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../data/projects';
import { ArrowDown } from 'lucide-react';

interface ArchitectureFlowProps {
  project?: Project;
}

const architectureFlows: { [key: string]: string[] } = {
  'KomPublic Chatbot': [
    'React & TypeScript Client UI',
    'Microsoft Entra ID (Azure AD) Auth Layer',
    'Secure REST API Gateway',
    'Azure Cloud Bot Engine & Services',
    'Persistent Municipal Case Database',
  ],
  'KomPublic Municipality Case Management': [
    'React Client with Redux Toolkit Store',
    'Shared API Data Caching Layer',
    'RESTful Gateway (Danish Municipal Services)',
    'Enterprise Backend Services',
    'Municipal Case Tracking Database',
  ],
  'Activate Everyware Chatbot': [
    'React Flow Interactive Canvas UI',
    'Custom Node & Edge State Machine',
    'Conditional Branching & Logic Engine',
    'Node.js REST API Backend',
    'Flow Definition & Dialogue Store',
  ],
};

const ArchitectureFlow: React.FC<ArchitectureFlowProps> = ({ project }) => {
  const flow = useMemo(() => {
    if (project && architectureFlows[project.title]) {
      return architectureFlows[project.title];
    }
    return [
      'Presentation Layer (React 19 + TypeScript)',
      'State & Caching Layer (Redux Toolkit)',
      'Secure Identity & API Gateway (Azure AD)',
      'Business Logic Microservices (Node.js)',
      'Data Persistence & Cloud Storage',
    ];
  }, [project]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center py-6 w-full"
    >
      <div className="w-full max-w-xl space-y-2">
        {flow.map((layer, index) => {
          const isLast = index === flow.length - 1;
          const nodeNumber = String(index + 1).padStart(2, '0');

          return (
            <div key={index} className="flex flex-col items-center">
              {/* Architecture Node Box */}
              <motion.div
                variants={itemVariants}
                className="w-full border border-border-primary bg-bg-secondary p-4 flex items-center justify-between hover:bg-bg-primary transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-2xs font-bold text-accent">
                    NODE // {nodeNumber}
                  </span>
                  <span className="font-serif text-sm sm:text-base font-bold text-text-primary">
                    {layer}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-text-muted font-bold uppercase hidden sm:inline">
                  {index === 0 ? 'INGRESS' : isLast ? 'DATA STORE' : 'PROCESSING'}
                </span>
              </motion.div>

              {/* Connecting Hairline Flow Rule */}
              {!isLast && (
                <div className="flex flex-col items-center my-1.5 text-text-muted">
                  <div className="w-px h-5 bg-border-primary" />
                  <ArrowDown size={13} className="text-accent -mt-1" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ArchitectureFlow;
