export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface ProjectItem {
  title: string;
  subtitle: string;
  period: string;
  technologies: string[];
  points: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  details: string;
  period: string;
}

export interface Profile {
  name: string;
  title: string;
  email: string;
  phone: string;
  summary: string;
  image: string;
  social: {
    linkedin?: string;
    github?: string;
  };
}