export interface NPMPackage {
  id: string;
  name: string;
  description: string;
  version: string;
  npmUrl: string;
  githubUrl?: string;
  downloads?: number;
  category: "String" | "Data" | "Utility" | "Other";
  tags: string[];
  featured: boolean;
  author: string;
  year?: number;
  keywords?: string[];
  tools?: string[];
}

export const npmPackages: NPMPackage[] = [
  {
    id: "npm-1",
    name: "stringkit-utils",
    description: "A comprehensive utility library for string manipulation and transformation. Includes advanced string operations, pattern matching, formatting utilities, case conversion, and more. Built with TypeScript for complete type safety.",
    version: "1.0.0",
    npmUrl: "https://www.npmjs.com/package/stringkit-utils",
    githubUrl: "https://github.com/rahuldadhich1517-sys/stringkit-utils",
    downloads: 1200,
    category: "String",
    tags: ["string", "utility", "typescript", "formatting", "manipulation"],
    featured: true,
    author: "Rahul Dadhich",
    year: 2026,
    tools: ["TypeScript", "Node.js", "Jest", "Webpack", "npm"],
    keywords: ["string", "utility", "helper", "formatting"],
  },
  {
    id: "npm-2",
    name: "data-transform-toolkit",
    description: "Powerful toolkit for data transformation and conversion. Transform between multiple data formats, validate schemas, manipulate complex data structures with ease. Features comprehensive type definitions and validation.",
    version: "1.0.0",
    npmUrl: "https://www.npmjs.com/package/data-transform-toolkit",
    githubUrl: "https://github.com/rahuldadhich1517-sys/data-transform-toolkit",
    downloads: 950,
    category: "Data",
    tags: ["data", "transformation", "conversion", "typescript", "schema"],
    featured: true,
    author: "Rahul Dadhich",
    year: 2026,
    tools: ["TypeScript", "Node.js", "Zod", "Babel", "npm"],
    keywords: ["data", "transform", "convert", "schema"],
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