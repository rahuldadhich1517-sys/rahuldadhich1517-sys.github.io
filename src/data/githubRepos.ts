export interface GitHubRepo {
  id: string;
  name: string;
  description: string;
  language: string;
  stars?: number;
  forks?: number;
  topics: string[];
  url: string;
  liveUrl?: string;
  image?: string;
  featured: boolean;
  category: "Frontend" | "Backend" | "Full Stack" | "Tool" | "Library" | "Other";
  year?: number;
}

export const githubRepos: GitHubRepo[] = [
  {
    id: "repo-1",
    name: "portfolio",
    description: "Personal portfolio website - React + TypeScript + Tailwind CSS. Features multi-page routing, project showcase, GitHub repositories display, and Instagram Reels integration.",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    topics: ["react", "typescript", "tailwind", "portfolio", "vite"],
    url: "https://github.com/rahuldadhich1517-sys/rahuldadhich1517-sys.github.io",
    liveUrl: "https://rahuldadhich.dev",
    featured: true,
    category: "Full Stack",
    year: 2026,
  },
  {
    id: "repo-2",
    name: "react-components-library",
    description: "Reusable React components library built with TypeScript. Includes animated counters, skill grids, project cards, and more. Production-ready and fully typed.",
    language: "TypeScript",
    topics: ["react", "components", "typescript", "library"],
    url: "https://github.com/rahuldadhich1517-sys/react-components-library",
    featured: true,
    category: "Library",
    year: 2025,
  },
  {
    id: "repo-3",
    name: "mern-ecommerce",
    description: "Full-stack e-commerce platform built with MERN stack. Features product management, cart functionality, payment integration, and admin dashboard.",
    language: "JavaScript",
    topics: ["mern", "react", "nodejs", "express", "mongodb", "ecommerce"],
    url: "https://github.com/rahuldadhich1517-sys/mern-ecommerce",
    featured: true,
    category: "Full Stack",
    year: 2024,
  },
  {
    id: "repo-4",
    name: "ai-chatbot-assistant",
    description: "AI-powered chatbot built with React and OpenAI API. Features conversation history, context awareness, and responsive design.",
    language: "TypeScript",
    topics: ["react", "openai", "ai", "chatbot", "typescript"],
    url: "https://github.com/rahuldadhich1517-sys/ai-chatbot-assistant",
    featured: true,
    category: "Frontend",
    year: 2024,
  },
  {
    id: "repo-5",
    name: "task-management-app",
    description: "Task management application with drag-and-drop interface, real-time updates, and persistent storage.",
    language: "TypeScript",
    topics: ["react", "typescript", "task-management", "ui"],
    url: "https://github.com/rahuldadhich1517-sys/task-management-app",
    featured: false,
    category: "Frontend",
    year: 2024,
  },
  {
    id: "repo-6",
    name: "node-rest-api",
    description: "RESTful API built with Node.js and Express. Includes authentication, database integration, and comprehensive error handling.",
    language: "JavaScript",
    topics: ["nodejs", "express", "rest-api", "backend"],
    url: "https://github.com/rahuldadhich1517-sys/node-rest-api",
    featured: false,
    category: "Backend",
    year: 2023,
  },
];

export const getFeaturedRepos = (): GitHubRepo[] => {
  return githubRepos.filter((repo) => repo.featured);
};

export const getReposByCategory = (
  category: GitHubRepo["category"]
): GitHubRepo[] => {
  return githubRepos.filter((repo) => repo.category === category);
};

export const getRepoByName = (name: string): GitHubRepo | undefined => {
  return githubRepos.find((repo) => repo.name === name);
};
