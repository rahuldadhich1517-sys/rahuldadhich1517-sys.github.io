export interface AIProject {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  architecture: string[];
  category: 'llm' | 'rag' | 'agents' | 'automation' | 'apis';
  featured?: boolean;
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
  status?: 'completed' | 'in-progress' | 'research';
}

export const aiProjects: AIProject[] = [
  {
    id: 'ai-1',
    title: 'LLM Content Generation Pipeline',
    description: 'A tool built with OpenAI and Node.js for drafting articles, blogs, and technical documentation.',
    longDescription:
      'A practical backend pipeline for generating draft content with language models. Handles prompt formatting, model parameter tuning, response validation, and Redis caching for faster repeat requests.',
    technologies: ['OpenAI API', 'Node.js', 'TypeScript', 'Redis', 'PostgreSQL'],
    architecture: ['API Gateway', 'LLM Service', 'Cache Layer', 'Database'],
    category: 'llm',
    featured: true,
    githubUrl: '#',
    demoUrl: '#',
    status: 'completed',
  },
  {
    id: 'ai-2',
    title: 'Retrieval-Augmented Generation System',
    description: 'Document QA tool that pairs vector search with language models to answer questions accurately from local files.',
    longDescription:
      'RAG pipeline that parses custom PDF and markdown documents, generates vector embeddings, and performs semantic search using Pinecone and LangChain to give precise answers.',
    technologies: ['LangChain', 'Pinecone', 'OpenAI', 'Express', 'React'],
    architecture: ['Vector Database', 'Semantic Search', 'LLM Integration', 'Frontend UI'],
    category: 'rag',
    featured: true,
    githubUrl: '#',
    demoUrl: '#',
    status: 'completed',
  },
  {
    id: 'ai-3',
    title: 'Autonomous AI Agent Framework',
    description: 'Multi-agent setup that breaks down complex requests into steps, calls external tools, and summarizes results.',
    longDescription:
      'A lightweight agent architecture where specialized agents coordinate to plan steps, execute API and database queries, and return synthesized output.',
    technologies: ['LangChain', 'OpenAI', 'Node.js', 'TypeScript', 'FastAPI'],
    architecture: ['Agent Core', 'Tool Integration', 'Memory System', 'Execution Engine'],
    category: 'agents',
    featured: true,
    githubUrl: '#',
    demoUrl: '#',
    status: 'completed',
  },
  {
    id: 'ai-4',
    title: 'Workflow Automation Engine',
    description: 'Automation tool that translates plain English task descriptions into runnable background jobs.',
    longDescription:
      'Engine that interprets natural language instructions, generates structured step-by-step workflows, and runs them asynchronously with full error tracking.',
    technologies: ['Node.js', 'TypeScript', 'Express', 'PostgreSQL', 'Redis'],
    architecture: ['Workflow Parser', 'Execution Engine', 'Event System', 'Database'],
    category: 'automation',
    featured: false,
    githubUrl: '#',
    demoUrl: '#',
    status: 'in-progress',
  },
  {
    id: 'ai-5',
    title: 'Multi-Modal AI API Integration',
    description: 'Unified API wrapper standardizing calls across OpenAI, Google, and Azure vision and audio services.',
    longDescription:
      'A simple service layer that normalizes requests and responses across multiple AI providers, making it easy to swap models or combine vision and speech in one project.',
    technologies: ['OpenAI Vision', 'Google APIs', 'Azure Cognitive', 'Node.js', 'TypeScript'],
    architecture: ['API Gateway', 'Provider Router', 'Response Normalizer', 'Cache'],
    category: 'apis',
    featured: false,
    githubUrl: '#',
    demoUrl: '#',
    status: 'in-progress',
  },
  {
    id: 'ai-6',
    title: 'AI-Powered Code Assistant',
    description: 'A developer helper that uses project context to suggest code snippets and explain tricky bugs.',
    longDescription:
      'A lightweight in-editor assistant that scans project structure, interprets developer intent, and provides context-aware suggestions over WebSockets.',
    technologies: ['OpenAI Codex', 'React', 'Express', 'PostgreSQL', 'WebSocket'],
    architecture: ['Code Parser', 'Context Analyzer', 'LLM Integration', 'Real-time API'],
    category: 'llm',
    featured: false,
    githubUrl: '#',
    demoUrl: '#',
    status: 'research',
  },
];

export const getAIProjectById = (id: string): AIProject | undefined => {
  return aiProjects.find((project) => project.id === id);
};

export const getAIProjectsByCategory = (
  category: 'llm' | 'rag' | 'agents' | 'automation' | 'apis'
): AIProject[] => {
  return aiProjects.filter((project) => project.category === category);
};

export const getFeaturedAIProjects = (): AIProject[] => {
  return aiProjects.filter((project) => project.featured).slice(0, 3);
};

export const getAICategories = () => [
  { id: 'llm', label: 'LLM', description: 'Large Language Models' },
  { id: 'rag', label: 'RAG', description: 'Retrieval-Augmented Generation' },
  { id: 'agents', label: 'Agents', description: 'AI Agents' },
  { id: 'automation', label: 'Automation', description: 'AI Automation' },
  { id: 'apis', label: 'APIs', description: 'AI APIs' },
];
