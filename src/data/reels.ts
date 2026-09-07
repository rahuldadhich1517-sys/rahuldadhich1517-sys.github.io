export interface InstagramReel {
  id: string;
  title: string;
  description: string;
  instagramUrl: string;
  thumbnail?: string;
  date: string;
  category: "Development" | "Tutorial" | "Design" | "Career" | "Motivation" | "Other";
  tags: string[];
  featured: boolean;
}

export const reels: InstagramReel[] = [
  {
    id: "reel-1",
    title: "React Hooks Deep Dive",
    description: "Quick tutorial on custom React hooks. Build your own hooks for reusable logic.",
    instagramUrl: "https://instagram.com/rahul_dadhich.dev",
    date: "2026-08-15",
    category: "Tutorial",
    tags: ["react", "hooks", "javascript", "tutorial"],
    featured: true,
  },
  {
    id: "reel-2",
    title: "TypeScript Tips & Tricks",
    description: "5 TypeScript patterns that will level up your code. Advanced type inference techniques.",
    instagramUrl: "https://instagram.com/rahul_dadhich.dev",
    date: "2026-08-10",
    category: "Development",
    tags: ["typescript", "javascript", "coding", "tips"],
    featured: true,
  },
  {
    id: "reel-3",
    title: "Building a Portfolio Website",
    description: "Behind-the-scenes look at building this portfolio. Tech stack: React, TypeScript, Tailwind CSS.",
    instagramUrl: "https://instagram.com/rahul_dadhich.dev",
    date: "2026-08-01",
    category: "Development",
    tags: ["portfolio", "web-dev", "react", "design"],
    featured: true,
  },
  {
    id: "reel-4",
    title: "CSS Grid Mastery",
    description: "Master CSS Grid with practical examples. From basics to advanced layouts.",
    instagramUrl: "https://instagram.com/rahul_dadhich.dev",
    date: "2026-07-28",
    category: "Tutorial",
    tags: ["css", "grid", "design", "frontend"],
    featured: false,
  },
  {
    id: "reel-5",
    title: "My Developer Journey",
    description: "Sharing my path from learning to becoming a full-stack developer. 2 years of growth.",
    instagramUrl: "https://instagram.com/rahul_dadhich.dev",
    date: "2026-07-20",
    category: "Career",
    tags: ["career", "motivation", "journey", "dev"],
    featured: true,
  },
  {
    id: "reel-6",
    title: "Performance Optimization",
    description: "Optimizing React apps for speed. Techniques that reduced bundle size by 40%.",
    instagramUrl: "https://instagram.com/rahul_dadhich.dev",
    date: "2026-07-15",
    category: "Development",
    tags: ["performance", "optimization", "react", "speed"],
    featured: false,
  },
];

export const getFeaturedReels = (): InstagramReel[] => {
  return reels.filter((reel) => reel.featured);
};

export const getReelsByCategory = (
  category: InstagramReel["category"]
): InstagramReel[] => {
  return reels.filter((reel) => reel.category === category);
};

export const getReelsByTag = (tag: string): InstagramReel[] => {
  return reels.filter((reel) =>
    reel.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
  );
};

export const getAllCategories = (): InstagramReel["category"][] => {
  const categories = new Set(reels.map((reel) => reel.category));
  return Array.from(categories);
};

export const getAllTags = (): string[] => {
  const tags = new Set(reels.flatMap((reel) => reel.tags));
  return Array.from(tags).sort();
};
