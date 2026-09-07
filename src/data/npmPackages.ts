export interface NPMPackage {
  id: string;
  name: string;
  description: string;
  version: string;
  npmUrl: string;
  githubUrl?: string;
  downloads?: number;
  category: "UI" | "Utility" | "Animation" | "Data" | "DevTools" | "Other";
  tags: string[];
  featured: boolean;
  author: string;
  year?: number;
  keywords?: string[];
}

export const npmPackages: NPMPackage[] = [
  {
    id: "npm-1",
    name: "react-scroll-animator",
    description: "Lightweight React component for scroll-triggered animations. Fully typed with TypeScript and zero dependencies.",
    version: "1.2.0",
    npmUrl: "https://www.npmjs.com/package/react-scroll-animator",
    githubUrl: "https://github.com/rahuldadhich1517-sys/react-scroll-animator",
    downloads: 2400,
    category: "Animation",
    tags: ["react", "animation", "scroll", "intersection-observer"],
    featured: true,
    author: "Rahul Dadhich",
    year: 2024,
    keywords: ["scroll", "animation", "observer", "react"],
  },
  {
    id: "npm-2",
    name: "tailwind-utilities",
    description: "Extended Tailwind CSS utilities plugin. Adds custom animations, gradients, and spacing utilities.",
    version: "2.1.0",
    npmUrl: "https://www.npmjs.com/package/tailwind-utilities",
    githubUrl: "https://github.com/rahuldadhich1517-sys/tailwind-utilities",
    downloads: 1800,
    category: "UI",
    tags: ["tailwind", "css", "utilities", "plugin"],
    featured: true,
    author: "Rahul Dadhich",
    year: 2024,
    keywords: ["tailwind", "css", "utilities"],
  },
  {
    id: "npm-3",
    name: "data-validation-core",
    description: "Robust data validation library for TypeScript. Supports complex schemas with type inference.",
    version: "1.5.2",
    npmUrl: "https://www.npmjs.com/package/data-validation-core",
    githubUrl: "https://github.com/rahuldadhich1517-sys/data-validation-core",
    downloads: 950,
    category: "Utility",
    tags: ["validation", "typescript", "schema", "data"],
    featured: true,
    author: "Rahul Dadhich",
    year: 2023,
    keywords: ["validation", "schema", "typescript"],
  },
  {
    id: "npm-4",
    name: "lazy-image-loader",
    description: "Lightweight image lazy loading component with blur-up effect and progressive loading.",
    version: "1.0.5",
    npmUrl: "https://www.npmjs.com/package/lazy-image-loader",
    downloads: 640,
    category: "UI",
    tags: ["image", "lazy-loading", "performance", "react"],
    featured: false,
    author: "Rahul Dadhich",
    year: 2023,
    keywords: ["image", "lazy", "performance"],
  },
  {
    id: "npm-5",
    name: "api-client-wrapper",
    description: "Type-safe API client wrapper for Fetch API. Built-in caching, retry logic, and request/response interceptors.",
    version: "0.8.1",
    npmUrl: "https://www.npmjs.com/package/api-client-wrapper",
    downloads: 420,
    category: "Utility",
    tags: ["api", "fetch", "typescript", "client"],
    featured: false,
    author: "Rahul Dadhich",
    year: 2023,
    keywords: ["api", "fetch", "client"],
  },
];

export const getFeaturedPackages = (): NPMPackage[] => {
  return npmPackages.filter((pkg) => pkg.featured);
};

export const getPackagesByCategory = (
  category: NPMPackage["category"]
): NPMPackage[] => {
  return npmPackages.filter((pkg) => pkg.category === category);
};

export const getPackageByName = (name: string): NPMPackage | undefined => {
  return npmPackages.find((pkg) => pkg.name === name);
};

export const getInstallCommand = (packageName: string): string => {
  return `npm install ${packageName}`;
};

export const getYarnCommand = (packageName: string): string => {
  return `yarn add ${packageName}`;
};
