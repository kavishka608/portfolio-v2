import { useState } from 'react';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import { ArrowUpRightIcon } from './Icons';

const projects = [
  {
    title: 'NexaERP',
    subtitle: 'Enterprise Resource Planning',
    bullets: [
      'Contributed to an 11-module ERP system with Java, Spring Boot, React, and PostgreSQL.',
      'Developed the HR & Payroll module: employee, leave, salary, and payroll management.',
      'Implemented RESTful APIs, JWT authentication, and role-based access control.',
      'Collaborated on module integration, DB migrations, debugging, and Git workflows.',
    ],
    stack: 'Java · Spring Boot · React · PostgreSQL · JWT',
    link: 'https://github.com/kavishka608',
    images: ['/projects/nexaerp.jpeg'],
    color: '#dbe3ec',
  },
  {
    title: 'NextStep',
    subtitle: 'University Management Platform',
    bullets: [
      'Built responsive React.js interfaces for students to search past exam papers.',
      'Integrated frontend components with backend REST services.',
      'Collaborated on planning, testing, and debugging for better performance.',
    ],
    stack: 'React.js · REST API · Team Project',
    link: 'https://github.com/kavishka608/NextStep.git',
    images: ['/projects/nextstep.jpeg'],
    color: '#dfe6dd',
  },
  {
    title: 'SpareHubLK',
    subtitle: 'Automotive Parts E-commerce',
    bullets: [
      'Developed and deployed a full-stack e-commerce platform for automotive parts.',
      'Used PHP & MySQL for product listings, user management, and search features.',
      'Optimized database queries and focused on a user-friendly interface.',
    ],
    stack: 'PHP · MySQL · JavaScript',
    link: 'https://github.com/kavishka608',
    images: ['/projects/sparehub.jpeg'],
    color: '#e8dfd0',
  },
  {
    title: 'HirePath AI',
    subtitle: 'AI-Powered Recruitment Platform',
    bullets: [
      'Built a recruiter management subsystem with 9 RESTful APIs using ASP.NET Core 8.',
      'Implemented Repository Pattern and Service Layer following SOLID principles.',
      'Designed database models for Companies, Departments, Jobs, and JobSkills.',
      'Documented all endpoints with Swagger and worked in a 5-member Agile team.',
    ],
    stack: 'ASP.NET Core 8 · C# · EF Core · SQL Server · Swagger',
    link: 'https://github.com/kavishka608/HirePath',
    images: ['/projects/hirepath.jpeg'],
    color: '#dfe6dd',
  },
  {
    title: 'HomeCraft',
    subtitle: 'Home Services Booking Platform',
    bullets: [
      'Built a full-stack platform with Node.js, Express, PostgreSQL, and React.',
      'Implemented 20+ RESTful APIs with JWT authentication.',
      'Designed a 7-table PostgreSQL schema including Users, Pros, Projects, Bids.',
      'Built bidding system, professional search, and rating/review functionality.',
    ],
    stack: 'Node.js · Express · PostgreSQL · React · JWT',
    link: 'https://github.com/kavishka608/homecraft-backend',
    images: ['/projects/homecraft.jpeg'],
    color: '#e8dfd0',
  },

    {
    title: 'NSBMDAYS',
    subtitle: 'University Digital Platform',
    bullets: [
      'Designed a university digital platform prototype integrating academic and student services using Figma.',
      'Applied HCI principles to design user flows, information architecture, navigation, and accessible interfaces.',
      'Conducted usability-focused design and iterated interfaces based on user needs and feedback.',
    ],
    stack: 'Figma · HCI · UI/UX · Prototyping · Wireframing · Usability',
    link: 'https://www.figma.com/', // ← replace with your Figma link
    images: ['/projects/nsbmdays.jpeg'],
    color: '#dfe6dd',
  },
];

function ProjectCarousel({ images, title, color }) {
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;

  const next = (e) => { e.preventDefault(); setIndex((i) => (i + 1) % images.length); };
  const prev = (e) => { e.preventDefault(); setIndex((i) => (i - 1 + images.length) % images.length); };

  return (
    <div className="project-mockup" style={{ background: color }}>
      <div className="mockup-bar"><span /><span /><span /></div>
      <div className="mockup-body">
        <img src={images[index]} alt={`${title} screenshot ${index + 1}`} loading="lazy" />
      </div>
      {hasMultiple && (
        <>
          <button className="carousel-btn prev" onClick={prev} aria-label="Previous">‹</button>
          <button className="carousel-btn next" onClick={next} aria-label="Next">›</button>
          <div className="carousel-dots">
            {images.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === index ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); setIndex(i); }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section alt">
      <SectionHeader
        tag="My Portfolio"
        title="Selected Projects"
        desc="Applications I have built and contributed to, alongside interface designs focused on real user needs."
      />
      <div className="projects-list">
        {projects.map((p, i) => (
          <FadeIn key={p.title} delay={i * 80}>
            <div className="project-row">
              <ProjectCarousel images={p.images} title={p.title} color={p.color} />
              <div className="project-info">
                <span className="project-num">
                  {String(i + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </span>
                <h3>{p.title}</h3>
                <p className="project-sub">{p.subtitle}</p>
                <ul className="project-bullets">
                  {p.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                <p className="project-stack">{p.stack}</p>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View on GitHub <ArrowUpRightIcon size={16} />
                </a>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}