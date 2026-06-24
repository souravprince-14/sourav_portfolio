import { ExperienceItem, ProjectItem, SkillCategory, EducationItem, Profile } from './type';

export const PROFILE: Profile = {
  name: "Sourav Prince",
  title: "GenAI Engineer & Backend Developer",
  email: "princesourav1425@gmail.com",
  phone: "+91 6204881615",
  summary: "AI Engineer and GenAI Task Force member with hands-on experience in designing, developing, and deploying production-grade Generative AI solutions and Proof-of-Concepts (PoCs). Strong background in backend development using Python, Flask, and FastAPI, with expertise in LLM integrations, RAG pipelines, prompt engineering, and document intelligence. Experienced in cloud-native deployments on Microsoft Azure, CI/CD automation, and building scalable, secure APIs in cross-functional enterprise environments.",
  image: "https://avatars.githubusercontent.com/u/150000000?v=4",
  social: {
    github: "https://github.com/souravprince-14",
    linkedin: "https://linkedin.com/in/souravprince-14"
  }
};

export const CV_URL = "/Sourav_Prince.pdf";

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "EY GDS",
    role: "Analyst",
    period: "Aug 2023 – Present",
    location: "Noida, India",
    description: [
      "Backend & AI Application Development: Designed and developed scalable backend services and AI-powered applications using Python, Flask, and FastAPI, deployed on Microsoft Azure.",
      "Generative AI Integrations: Built REST APIs integrated with OpenAI GPT and enterprise AI workflows for document verification, summarization, intelligent query processing, and business automation use cases.",
      "Release Engineering & Production Delivery: Managed end-to-end release activities including CI/CD pipeline support, pre-production validation, security scan approvals, deployment readiness, and production release coordination for enterprise applications.",
      "Cross-functional Stakeholder Collaboration: Worked closely with product, QA, UAT, and InfoSec teams to incorporate testing feedback, address compliance and security requirements, and ensure smooth delivery of production-ready solutions.",
      "Engineering Practices: Performed code reviews, mentored junior developers, and followed secure coding and quality engineering practices across the development lifecycle."
    ]
  },
  {
    company: "Chegg India",
    role: "Subject Matter Expert",
    period: "Nov 2021 – Jul 2023",
    location: "Remote (Tutor)",
    description: [
      "Problem Solving: Provided high-quality solutions for advanced mathematics and calculus with clear explanations."
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
    {
    title: "Automated Business Reporting",
    subtitle: "AI-Powered Cost Analytics Platform - EY GDS",
    period: "2024",
    technologies: ["Python", "AI", "Analytics Automation", "ThinkCell", "Excel", "PowerPoint"],
    points: [
      "Data Normalization & Matching: Built an AI-assisted analytics solution for workforce and spend datasets with taxonomy mapping, normalization, and vector-based similarity matching.",
      "Savings Analysis: Developed workflows to identify optimization opportunities and generate structured cost-saving insights from mapped enterprise datasets for business stakeholders.",
      "Automated Reporting: Implemented Excel and PowerPoint report-generation pipelines with ThinkCell-based visualizations for executive-ready business reporting."
    ]
  },
  {
    title: "AI-Powered Resume Matcher Application",
    subtitle: "Generative AI / NLP / Full-Stack Python",
    period: "2025",
    technologies: ["Python", "Streamlit", "Google Gemini", "PyPDF2", "NLP", "Prompt Engineering"],
    points: [
      "Resume Intelligence Engine: Designed and developed an AI-powered web application to analyze resumes against job descriptions using Google Gemini LLMs, generating match scores, missing keywords, and ATS-friendly improvement recommendations.",
      "Document Validation & Parsing: Implemented secure resume upload handling with MIME-type validation, PDF/TXT text extraction using PyPDF2, and LLM-based classification to detect and reject non-resume documents automatically.",
      "Prompt Engineering & Evaluation: Engineered structured prompts to ensure consistent, deterministic analysis outputs in Markdown with scoring, keyword gap analysis, and actionable bullet-point rewrites.",
      // "User Experience & State Management: Built an interactive Streamlit UI with real-time feedback, button state control, loading indicators, and error handling to ensure a smooth user experience.",
      // "Production-Ready Design: Applied modular architecture, environment-based configuration (.env), and defensive validation patterns aligned with production-grade GenAI application development."
    ]
  },
  {
    title: "Financial Intelligence & Research Assistant Platform",
    subtitle: "EY GDS",
    period: "2024 – Present",
    technologies: ["Python", "OpenAI", "LangChain", "Azure AI", "Cognitive Search", "RAG", "Diffbot"],
    points: [
      "EDGAR Q&A Platform: Developed Retrieval-Augmented Generation (RAG) capabilities over SEC filings enabling semantic search, contextual retrieval, and question answering using OpenAI, LangChain, and Azure Cognitive Search.",
      "Capital IQ (CapIQ) Integration: Built backend APIs and data retrieval services integrating S&P Capital IQ financial datasets to provide company financials, market intelligence, and investment research insights.",
      "Diffbot Intelligence Service: Developed and maintained APIs leveraging Diffbot for company intelligence, entity extraction, knowledge graph enrichment, and automated information retrieval workflows.",
      "Financial Research Assistant: Implemented conversational AI capabilities aggregating information from multiple enterprise and external sources including EDGAR, CapIQ, and Diffbot through a unified chatbot experience."
    ]
  },
  {
    title: "Automated Information Extraction System",
    subtitle: "EY GDS",
    period: "2025",
    technologies: ["Python", "NLP", "SpaCy", "PyMuPDF", "pdfplumber", "Tkinter", "pandas"],
    points: [
      "PDF Parsing Engine: Built extraction pipeline using PyMuPDF, pdfplumber, and SpaCy.",
      "NER + Regex Automation: Captured product names, specs, vendor details using NLP and rule-based methods.",
      "UI + Reporting: Developed Tkinter batch-processing dashboard with Excel export using pandas and openpyxl."
    ]
  },
  {
    title: "Proof of Concepts (PoCs)",
    subtitle: "EY GDS (Research & Innovation)",
    period: "2024",
    technologies: ["Python", "RAGAS", "RAG Evaluation", "Table Extraction", "Excel Automation"],
    points: [
      "RAGAS Evaluation Framework: Conducted proof-of-concept implementation of RAGAS to evaluate Retrieval-Augmented Generation (RAG) pipelines using metrics such as Faithfulness, Answer Relevancy, Context Precision, and Context Recall for assessing LLM response quality.",
      "PDF Table Extraction Automation: Developed a proof-of-concept solution for extracting structured tabular data from PDF documents and automatically generating Excel outputs using Python-based parsing and data transformation workflows."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    name: "Programming Languages",
    // skills: ["Python", "SQL", "C", "C++"]
    skills: ["Python", "SQL"]
  },
  {
    name: "Backend & APIs",
    skills: ["Flask", "FastAPI"]
  },
  {
    name: "Generative AI & LLMs",
    skills: ["OpenAI API", "Google Gemini", "LangChain", "Prompt Engineering", "RAG", "Embeddings"]
  },
  {
    name: "NLP & Document AI",
    skills: ["PDF Parsing (PyPDF2, PyMuPDF, pdfplumber)", "Text Classification", "Regex", "SpaCy"]
  },
  {
    name: "Databases & Vector Stores",
    skills: ["MySQL", "Azure SQL", "Vector Indexing", "Semantic Search"]
  },
  {
    name: "Cloud / DevOps",
    skills: ["Azure Web Apps", "Azure Functions", "Azure Storage", "Azure APIM", "Azure Key Vault", "GitHub Actions", "CI/CD Pipelines"]
  },
  {
    name: "UI & Reporting",
    skills: ["Streamlit", "Tkinter", "ThinkCell", "Excel/PowerPoint Automation"]
  },
  // {
  //   name: "System Design & Engineering Practices",
  //   skills: ["LLM Pipelines", "Microservices Architecture", "Error Handling", "Logging", "Performance Optimization"]
  // }
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