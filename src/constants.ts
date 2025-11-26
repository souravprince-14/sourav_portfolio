import { ExperienceItem, ProjectItem, SkillCategory, EducationItem, Profile } from './type';

export const PROFILE: Profile = {
  name: "Sourav Prince",
  title: "AI Engineer & Backend Developer",
  email: "princesourav1425@gmail.com",
  phone: "+91 6204881615",
  summary: "AI Engineer with experience in backend development, Generative AI systems, and cloud-native deployments. Skilled in Python, Flask, FastAPI, Azure, system design, CI/CD, and secure API engineering. Strong ability to build scalable production-grade solutions and collaborate with cross-functional teams.",
  image: "https://avatars.githubusercontent.com/u/150000000?v=4",
  social: {
    github: "https://github.com/souravprince-14",
    linkedin: "https://linkedin.com/in/souravprince-14"
  }
};

export const CV_URL = "https://drive.google.com/file/d/1VA0LhijDvxq0ftffGn1NRCJaPZptEiYF/view?usp=sharing";

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "EY GDS",
    role: "Analyst",
    period: "Aug 2023 – Present",
    location: "Noida, India",
    description: [
      "Backend Microservices Development: End to End Development of scalable backend services using Python, Flask, and FastAPI hosted on Microsoft Azure.",
      "Generative AI Integrations: Built REST APIs integrated with OpenAI GPT for automated summarization, intelligent document verification, and query processing.",
      "Engineering Leadership: Mentored junior developers, performed code reviews, and enforced secure coding standards.",
      "CI/CD Automation: Implemented GitHub Actions pipelines improving deployment and testing efficiency.",
      "Cross-functional Collaboration: Worked with product, data, and QA teams to define architecture and deliver production releases."
    ]
  },
  {
    company: "Chegg India",
    role: "Subject Matter Expert",
    period: "Nov 2021 – Jul 2023",
    location: "Remote",
    description: [
      "Problem Solving: Provided high-quality solutions for advanced mathematics and calculus with clear explanations."
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "End-to-End Generative AI Application",
    subtitle: "GEN-AI Applications at EY GDS",
    period: "2024 – Present",
    technologies: ["Python", "Azure", "OpenAI", "LangChain", "RAG"],
    points: [
      "RAG-based Conversational AI: Architected a Retrieval-Augmented Generation (RAG) system leveraging GPT (OpenAI), Azure Cognitive Search, and embeddings for intelligent document retrieval.",
      "Advanced Retrieval Techniques: Implemented contextual compression, multi-index merging, and priority-based chunk retrieval (CLIPPER-style) to optimize context-aware responses.",
      "Automated Document Pipeline: Developed a pipeline with LangChain handling multi-format ingestion, semantic chunking, vector indexing, and large-file summarization.",
      "Insights & Theming: Built theme extraction and strategic insights generation for M&A analysis and business intelligence.",
      "Production Deployment: Deployed a production-ready solution with streaming responses, token management, and Azure Application Insights monitoring."
    ]
  },
  {
    title: "Automated Information Extraction System",
    subtitle: "Independent Project",
    period: "Python Automation / NLP",
    technologies: ["Python", "NLP", "Spacy", "PyMuPDF", "Tkinter"],
    points: [
      "PDF Parsing Engine: Built extraction pipeline using PyMuPDF, pdfplumber, and SpaCy.",
      "NER + Regex Automation: Captured product names, specs, vendor details using NLP and rule-based methods.",
      "UI + Reporting: Developed Tkinter batch-processing dashboard with Excel export using pandas and openpyxl."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    name: "Programming",
    skills: ["Python", "SQL", "C", "C++"]
  },
  {
    name: "Frameworks",
    skills: ["Flask", "FastAPI", "LangChain"]
  },
  {
    name: "Databases",
    skills: ["MySQL", "Azure SQL"]
  },
  {
    name: "Cloud / DevOps",
    skills: ["Azure Web App", "Azure Storage", "Azure Functions", "GitHub Actions", "CI/CD"]
  },
  {
    name: "AI / ML",
    skills: ["OpenAI API", "Generative AI", "RAG", "LLM Pipelines", "Embeddings"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "Kalinga Institute of Industrial Technology",
    degree: "B.Tech in Information Technology",
    details: "CGPA: 8.68",
    period: "2019 – 2023"
  },
  {
    institution: "Sushant Public School",
    degree: "Intermediate (PCM)",
    details: "77%",
    period: "2016 – 2018"
  },
  {
    institution: "St. Karen’s High School",
    degree: "Matriculation",
    details: "CGPA: 8.4",
    period: "2015 – 2016"
  }
];