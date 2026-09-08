export interface ContentReel {
  id: string;
  title: string;
  description: string;
  videoUrl: string; // Local video file in public folder
  thumbnail?: string;
  date: string;
  category: "Development" | "Tutorial" | "Design" | "Career" | "Motivation" | "Other";
  tags: string[];
  featured: boolean;
  duration?: string;
  views?: number;
}

export const reels: ContentReel[] = [
  {
    id: "reel-1",
    title: "React Hooks Deep Dive",
    description: "Quick tutorial on custom React hooks. Build your own hooks for reusable logic and component state management.",
    videoUrl: "/videos/reel-1.mp4",
    date: "2026-08-15",
    category: "Tutorial",
    tags: ["react", "hooks", "javascript", "tutorial"],
    featured: true,
    duration: "0:45",
    views: 2400,
  },
  {
    id: "reel-2",
    title: "TypeScript Tips & Tricks",
    description: "5 TypeScript patterns that will level up your code. Advanced type inference techniques and best practices.",
    videoUrl: "/videos/reel-2.mp4",
    date: "2026-08-10",
    category: "Development",
    tags: ["typescript", "javascript", "coding", "tips"],
    featured: true,
    duration: "1:15",
    views: 3200,
  },
  {
    id: "reel-3",
    title: "Building a Portfolio Website",
    description: "Behind-the-scenes look at building this portfolio. Tech stack: React, TypeScript, Tailwind CSS, and modern tooling.",
    videoUrl: "/videos/reel-3.mp4",
    date: "2026-08-01",
    category: "Development",
    tags: ["portfolio", "web-dev", "react", "design"],
    featured: true,
    duration: "1:30",
    views: 5100,
  },
  {
    id: "reel-4",
    title: "My Developer Journey",
    description: "Sharing my path from learning to becoming a full-stack developer. 2+ years of growth, challenges, and achievements.",
    videoUrl: "/videos/reel-4.mp4",
    date: "2026-07-20",
    category: "Career",
    tags: ["career", "motivation", "journey", "dev"],
    featured: true,
    duration: "2:00",
    views: 4800,
  },
];

export const getFeaturedReels = (): ContentReel[] => {
  return reels.filter((reel) => reel.featured);
};

export const getReelsByCategory = (
  category: ContentReel["category"]
): ContentReel[] => {
  return reels.filter((reel) => reel.category === category);
};

export const getReelsByTag = (tag: string): ContentReel[] => {
  return reels.filter((reel) =>
    reel.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
  );
};

export const getAllCategories = (): ContentReel["category"][] => {
  const categories = new Set(reels.map((reel) => reel.category));
  return Array.from(categories);
};

export const getAllTags = (): string[] => {
  const tags = new Set(reels.flatMap((reel) => reel.tags));
  return Array.from(tags).sort();
};
