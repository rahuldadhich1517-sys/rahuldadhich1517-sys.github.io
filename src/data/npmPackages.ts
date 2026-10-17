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
    id: "npm-stringkit-utils",
    name: "stringkit-utils",
    description:
      "A lightweight, dependency-free TypeScript utility library for string and text manipulation.",
    version: "1.1.0",
    npmUrl: "https://www.npmjs.com/package/stringkit-utils",
    githubUrl: "https://github.com/rahuldadhich1517-sys/stringkit-utils",
    category: "String",
    tags: ["string", "text", "formatting", "typescript"],
    featured: true,
    author: "Rahul Dadhich",
    year: 2026,
    keywords: [
      "string",
      "string-utils",
      "text",
      "text-utils",
      "utilities",
      "typescript",
      "javascript",
      "slugify",
      "camelcase",
      "pascalcase",
      "snakecase",
      "kebabcase",
      "truncate",
      "random-string",
      "text-counter",
      "mask",
    ],
    tools: ["TypeScript", "Zero dependencies"],
  },
  {
    id: "npm-data-transform-toolkit",
    name: "data-transform-toolkit",
    description:
      "Production-grade TypeScript toolkit for converting, parsing, validating, and diffing JSON, CSV, Excel, YAML, XML, TOML, HTML, Markdown, SQL, and ENV data.",
    version: "1.3.0",
    npmUrl: "https://www.npmjs.com/package/data-transform-toolkit",
    githubUrl: "https://github.com/rahuldadhich1517-sys/data-transform-toolkit",
    category: "Data",
    tags: ["data", "conversion", "parsing", "validation", "typescript"],
    featured: true,
    author: "Rahul Dadhich",
    year: 2026,
    keywords: [
      "json",
      "csv",
      "excel",
      "xlsx",
      "yaml",
      "xml",
      "toml",
      "markdown",
      "html",
      "sql",
      "env",
      "ini",
      "ndjson",
      "plist",
      "protobuf",
      "converter",
      "parser",
      "serializer",
      "diff",
      "data-transformation",
      "typescript",
    ],
    tools: ["TypeScript"],
  },
  {
    id: "npm-auth-jwt-toolkit",
    name: "@rahul_dadhich15/auth-jwt-toolkit",
    description:
      "A production-ready, dependency-free TypeScript toolkit for decoding, validating, inspecting, and checking the expiration of JSON Web Tokens (JWTs).",
    version: "0.1.0",
    npmUrl: "https://www.npmjs.com/package/@rahul_dadhich15/auth-jwt-toolkit",
    githubUrl: "https://github.com/rahuldadhich1517-sys/auth-jwt-toolkit",
    category: "Utility",
    tags: ["jwt", "authentication", "token", "typescript"],
    featured: true,
    author: "Rahul Dadhich",
    year: 2026,
    keywords: [
      "jwt",
      "jwt-decode",
      "jwt-decoder",
      "jwt-validator",
      "jwt-inspector",
      "jwt-expiry",
      "json-web-token",
      "token",
      "auth",
      "authentication",
      "claims",
      "base64url",
      "typescript",
      "zero-dependencies",
    ],
    tools: ["TypeScript", "Zero dependencies"],
  },
  {
    id: "npm-datetime-kit",
    name: "@rahul_dadhich15/datetime-kit",
    description:
      "A lightweight, dependency-free TypeScript toolkit for date, time, timezone, and scheduling utilities.",
    version: "1.1.1",
    npmUrl: "https://www.npmjs.com/package/@rahul_dadhich15/datetime-kit",
    githubUrl: "https://github.com/rahuldadhich1517-sys/date-time-kit",
    category: "Utility",
    tags: ["date", "time", "timezone", "scheduling", "typescript"],
    featured: true,
    author: "Rahul Dadhich",
    year: 2026,
    keywords: [
      "date",
      "time",
      "datetime",
      "date-utils",
      "time-utils",
      "timezone",
      "timestamp",
      "cron",
      "cron-parser",
      "cron-humanize",
      "cron-next",
      "scheduling",
      "business-days",
      "countdown",
      "date-duration",
      "days-until",
      "discord-timestamp",
      "hours-calculate",
      "ics-generate",
      "iso8601-duration",
      "holidays-lookup",
      "world-clock",
      "typescript",
      "javascript",
      "utilities",
    ],
    tools: ["TypeScript", "Zero dependencies"],
  },
  {
    id: "npm-id-toolkit",
    name: "@rahul_dadhich15/id-toolkit",
    description:
      "A lightweight, dependency-free TypeScript toolkit for UUIDs, short IDs, NanoIDs, ULIDs, secure tokens, random numbers, strings, words, names, and usernames.",
    version: "1.1.0",
    npmUrl: "https://www.npmjs.com/package/@rahul_dadhich15/id-toolkit",
    githubUrl: "https://github.com/rahuldadhich1517-sys/id-toolkit",
    category: "Utility",
    tags: ["uuid", "id", "random", "token", "typescript"],
    featured: true,
    author: "Rahul Dadhich",
    year: 2026,
    keywords: [
      "uuid",
      "uuid-v4",
      "uuid-v7",
      "uuid-generator",
      "uuid-validator",
      "short-id",
      "secure-id",
      "nanoid",
      "ulid",
      "random-number",
      "random-string",
      "random-word",
      "random-name",
      "business-name",
      "username-generator",
      "id-generator",
      "identifier",
      "random-id",
      "crypto",
      "typescript",
      "javascript",
      "utilities",
    ],
    tools: ["TypeScript", "Zero dependencies"],
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
