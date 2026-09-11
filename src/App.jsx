import { useMemo, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  ArrowRight,
  Award,
  BarChart3,
  BriefcaseBusiness,
  Cpu,
  Database,
  ExternalLink,
  FileText,
  Layers,
  Mail,
  Sparkles,
} from 'lucide-react';
import heroImage from './assets/hero.png';
import './App.css';

const profile = {
  name: 'Swagat Datta Mazumder',
  headline: 'Data analyst, AI builder, and product-minded problem solver.',
  location: 'India',
  email: 'mailto:swagat@example.com',
  resume: '#',
  github: 'https://github.com/SWAGATDATTAMAZUMDER',
  linkedin: 'https://www.linkedin.com/in/swagat-datta-mazumder-6001b5219/',
};

const focusAreas = [
  {
    icon: BarChart3,
    title: 'Data Analytics',
    text: 'Python, SQL, Tableau, Excel, EDA, dashboards, and business-facing insights.',
  },
  {
    icon: Cpu,
    title: 'AI Building',
    text: 'LLM apps, prompt engineering, automation agents, RAG exploration, and API-first prototypes.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Product Implementation',
    text: 'Enterprise SaaS configuration, UAT, workflow debugging, and translating requirements into logic.',
  },
];

const projects = [
  {
    title: 'Reprise AI Flashcard Engine',
    category: 'AI',
    metric: 'SM-2 spaced repetition',
    summary:
      'A 3-stage active recall tool built with Next.js and the Claude API. It turns uploaded documents into intelligent flashcard decks using a spaced repetition flow similar to Anki.',
    tags: ['Claude API', 'Next.js', 'Prompt Engineering', 'LocalStorage'],
    liveLink: 'https://reprise-recall-engine.vercel.app/',
    repoLink: profile.github,
  },
  {
    title: 'Job Search Agent',
    category: 'AI',
    metric: 'LLM automation',
    summary:
      'A Python-based job search automation agent using the Gemini API to filter, score, and surface relevant openings from multiple job boards.',
    tags: ['Python', 'Gemini API', 'LangChain', 'Automation'],
    repoLink: profile.github,
  },
  {
    title: 'Netflix Content Strategy EDA',
    category: 'Data',
    metric: 'Streaming trends',
    summary:
      'Exploratory analysis of Netflix content data using Pandas and Matplotlib to identify genre patterns, regional gaps, and release timing signals.',
    tags: ['Pandas', 'Matplotlib', 'Python', 'EDA', 'Kaggle'],
    repoLink: profile.github,
  },
  {
    title: 'Tableau Executive Dashboard',
    category: 'Data',
    metric: 'Business intelligence',
    summary:
      'A BI dashboard concept for tracking performance metrics with drill-down views across time, region, and product dimensions.',
    tags: ['Tableau', 'SQL', 'Data Visualization', 'KPIs'],
    repoLink: profile.github,
  },
  {
    title: 'HighRadius Product Consulting',
    category: 'Product',
    metric: 'Enterprise SaaS',
    summary:
      'Configured order-to-cash and EIPP workflows, supported UAT cycles, debugged product behavior, and translated client requirements into implementation logic.',
    tags: ['SQL', 'UAT', 'SaaS', 'Client Communication'],
  },
];

const certifications = [
  'HackerRank Problem Solving Basic',
  'HackerRank Problem Solving Intermediate',
  'HackerRank SQL Basic, Intermediate, Advanced',
  'HackerRank Python',
  'AWS Cloud Foundations',
  'Kaggle Python and Pandas',
  'Data Analyst Bootcamp',
  'Data Science Fundamentals',
  'Leadership and Management, University of Illinois Urbana-Champaign',
  'McKinsey Forward Program',
];

const filters = ['All', 'AI', 'Data', 'Product'];

function Nav() {
  return (
    <header className="site-nav">
      <a className="brand" href="#top" aria-label="Go to top">
        SDM
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#credentials">Credentials</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">Data Analytics | AI Systems | Product Implementation</p>
        <h1>{profile.name}</h1>
        <p className="hero-lede">{profile.headline}</p>
        <p className="hero-support">
          A portfolio for the full version of the profile: practical data work, AI prototypes,
          enterprise product experience, certifications, and the ongoing pivot into roles where
          analytics and AI meet real business problems.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#work">
            View work <ArrowRight size={16} />
          </a>
          <a className="button secondary" href={profile.resume}>
            Resume <FileText size={16} />
          </a>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <img src={heroImage} alt="" />
        <div className="signal-card top-card">
          <Sparkles size={18} />
          AI builder
        </div>
        <div className="signal-card bottom-card">
          <Database size={18} />
          Data analyst
        </div>
      </div>
    </section>
  );
}

function FocusAreas() {
  return (
    <section className="section focus-section" aria-labelledby="focus-heading">
      <div className="section-heading">
        <p className="eyebrow">What I bring</p>
        <h2 id="focus-heading">Three connected strengths</h2>
      </div>
      <div className="focus-grid">
        {focusAreas.map(({ icon: Icon, title, text }) => (
          <article className="info-card" key={title}>
            <Icon size={22} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Work() {
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleProjects = useMemo(
    () => projects.filter((project) => activeFilter === 'All' || project.category === activeFilter),
    [activeFilter],
  );

  return (
    <section id="work" className="section" aria-labelledby="work-heading">
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 id="work-heading">A broader body of proof than a resume can hold</h2>
        </div>
        <div className="filter-group" aria-label="Project filters">
          {filters.map((filter) => (
            <button
              className={activeFilter === filter ? 'filter-button active' : 'filter-button'}
              key={filter}
              onClick={() => setActiveFilter(filter)}
              type="button"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      <div className="project-grid">
        {visibleProjects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-topline">
              <span>{project.category}</span>
              <strong>{project.metric}</strong>
            </div>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <div className="tag-row">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="card-actions">
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noreferrer">
                  Live <ExternalLink size={14} />
                </a>
              )}
              {project.repoLink && (
                <a href={project.repoLink} target="_blank" rel="noreferrer">
                  GitHub <FaGithub size={14} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-heading">
      <div className="section-heading">
        <p className="eyebrow">About</p>
        <h2 id="about-heading">The story so far</h2>
      </div>
      <div className="story-panel">
        <p>
          I started my career as a Product Consultant at HighRadius, a fintech SaaS company,
          where I worked in the order-to-cash and EIPP domain. My work involved configuring
          enterprise software, debugging workflows, supporting UAT, and turning messy business
          requirements into structured product logic.
        </p>
        <p>
          That experience made the pivot into data and AI feel natural. I had already been working
          across product behavior, SQL-backed investigation, client communication, and business
          process logic. Now I am building deeper skill in Python, SQL, Tableau, analytics, and LLM
          tooling so I can work closer to data-driven product and AI use cases.
        </p>
        <p>
          I am looking for roles where analytical rigor and product thinking belong in the same
          room: Data Analyst, AI Builder, Product Analyst, or implementation-heavy roles that value
          technical curiosity and business context.
        </p>
      </div>
    </section>
  );
}

function Credentials() {
  return (
    <section id="credentials" className="section credentials-section" aria-labelledby="credentials-heading">
      <div className="section-heading">
        <p className="eyebrow">Credentials</p>
        <h2 id="credentials-heading">Certifications and learning signals</h2>
      </div>
      <div className="credential-list">
        {certifications.map((certification) => (
          <div className="credential-item" key={certification}>
            <Award size={17} />
            <span>{certification}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div>
        <p className="eyebrow">Contact</p>
        <h2 id="contact-heading">Open to Data Analyst, AI Builder, and Product-focused roles.</h2>
      </div>
      <div className="contact-actions">
        <a className="button primary" href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn <FaLinkedin size={16} />
        </a>
        <a className="button secondary" href={profile.github} target="_blank" rel="noreferrer">
          GitHub <FaGithub size={16} />
        </a>
        <a className="button secondary" href={profile.email}>
          Email <Mail size={16} />
        </a>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FocusAreas />
        <Work />
        <About />
        <Credentials />
        <Contact />
      </main>
      <footer className="footer">
        <span>{profile.name}</span>
        <span>
          Built as a living portfolio, not a one-page resume. <Layers size={14} />
        </span>
      </footer>
    </>
  );
}
