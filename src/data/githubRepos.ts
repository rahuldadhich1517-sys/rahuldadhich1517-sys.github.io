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
  category: "Frontend" | "Backend" | "Full Stack" | "Library" | "Data Analytics";
  year?: number;
}

export const githubRepos: GitHubRepo[] = [
  {
    id: "repo-1",
    name: "Portfolio Website",
    description: "Personal portfolio website - React + TypeScript + Tailwind CSS. Features multi-page routing, project showcase, GitHub repositories display, and Instagram Reels integration.",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    topics: ["react", "typescript", "tailwind", "portfolio", "vite"],
    url: "https://github.com/rahuldadhich1517-sys/rahuldadhich1517-sys.github.io",
    liveUrl: "https://rahuldadhich.dev",
    featured: true,
    category: "Frontend",
    year: 2026,
  },
  {
    id: "repo-2",
    name: "Developer Job Market Analytics",
    description: "Analytics dashboard for tracking developer job market trends and insights.",
    language: "Python, Numpy, Pandas, Matplotlib, ReactJs",
    topics: ["react", "analytics", "data", "python", "dashboard"],
    url: "https://github.com/rahuldadhich1517-sys/developer-job-market-analytics",
    featured: true,
    category: "Data Analytics",
    year: 2026,
  },
  {
    id: "repo-3",
    name: "AI ChatGPT3 Website",
    description: "A website which shows only frontend. Built with ReactJs.",
    language: "HTML, CSS, JavaScript, ReactJs",
    topics: ["react", "HTML", "CSS", "javascript"],
    url: "https://github.com/rahuldadhich1517-sys/AI-ChatGPT3-Website",
    featured: true,
    category: "Frontend",
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
