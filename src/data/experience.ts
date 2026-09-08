export interface ExperienceEntry {
  id: string;
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
  duration?: string;
  location?: string;
  type: "work" | "education" | "achievement";
}

export const experiences: ExperienceEntry[] = [
  {
    id: "exp-1",
    year: "2024 - 2026",
    role: "Web Developer (Full-Stack)",
    company: "Sumedha Softech Pvt. Ltd.",
    description:
      "Built and maintained full-stack production web applications. I improved data-fetching speed and page performance, integrated Microsoft Entra ID (Azure AD) for secure user authentication, and created reusable UI components with React and Redux Toolkit.",

    technologies: [
      "React",
      "Redux Toolkit",
      "JavaScript",
      "TypeScript",
      "Azure Active Directory",
      "Docker",
      "REST APIs",
      "Responsive Design",
    ],

    duration: "April 2024 - April 2026",
    location: "India",
    type: "work",
  },

  {
    id: "exp-2",
    year: "2023",
    role: "Intern Web Developer",
    company: "Aaron Softech Pvt. Ltd.",
    description:
      "Worked as an intern building responsive web apps with the MERN stack (MongoDB, Express, React, Node.js). Collaborated on team projects, created REST API integrations, and practiced version control workflows with Git.",

    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JavaScript",
      "MERN Stack",
      "Responsive Design",
      "Git",
    ],

    duration: "Sep 2023 - Dec 2023",
    location: "India",
    type: "work",
  },
];

export const getExperienceByYear = (
  year: string
): ExperienceEntry | undefined => {
  return experiences.find((exp) => exp.year === year);
};

export const getExperiencesByType = (
  type: "work" | "education" | "achievement"
): ExperienceEntry[] => {
  return experiences.filter((exp) => exp.type === type);
};

export const getWorkExperiences = (): ExperienceEntry[] => {
  return experiences
    .filter((exp) => exp.type === "work")
    .sort((a, b) => {
      const yearA = parseInt(a.year);
      const yearB = parseInt(b.year);

      return yearB - yearA;
    });
};
