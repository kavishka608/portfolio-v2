import { useState } from 'react';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import { ArrowUpRightIcon } from './Icons';

const projects = [
  {
    title: 'NextStep',
    subtitle: 'University Management Platform',
    desc: 'Web platform allowing university students to access and search past exam papers efficiently. Built responsive interfaces with React.js and collaborated on frontend-backend integration.',
    stack: 'React.js · REST API · Team Project',
    link: 'https://github.com/kavishka608/NextStep.git',
    images: ['/projects/Nextstep1.jpeg', '/projects/Nextstep2.png'],
    color: '#8fa8bf',
  },
  {
    title: 'SpareHubLK',
    subtitle: 'Automotive Parts E-commerce',
    desc: 'Full-stack e-commerce platform for automotive parts. Used PHP & MySQL for product listings, user management, and search — focused on UX and optimized database queries.',
    stack: 'PHP · MySQL · JavaScript',
    link: 'https://github.com/kavishka608',
    images: ['/projects/Sparehub1.jpeg', '/projects/Sparehub2.jpeg'],
    color: '#a8bfa1',
  },
  {
    title: 'HirePath AI',
    subtitle: 'AI-Powered Recruitment Platform',
    desc: 'Recruiter management subsystem with 9 RESTful APIs. Built using Repository Pattern, Service Layer and SOLID principles. Includes job search, dashboard statistics and proper database relationships.',
    stack: 'ASP.NET Core 8 · C# · Entity Framework · SQL Server · Swagger',
    link: 'https://github.com/kavishka608/HirePath',
    images: ['/projects/Hirepath1.png', '/projects/Hirepath2.png'],
    color: '#8fa8bf',
  },
  {
    title: 'HomeCraft',
    subtitle: 'Home Services Booking Platform',
    desc: 'Full-stack platform connecting homeowners with construction professionals. 20+ RESTful APIs with JWT authentication, PostgreSQL database, and responsive React frontend with bidding and review features.',
    stack: 'Node.js · Express · PostgreSQL · React · JWT',
    link: 'https://github.com/kavishka608/homecraft-backend',
    images: ['/projects/homecraft-1.png', '/projects/homecraft-2.png'],
    color: '#a8bfa1',
  },
];

function ProjectCarousel({ images, title, color }) {
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;

  const next = (e) => {
    e.preventDefault();
    setIndex((i) => (i + 1) % images.length);
  };
  const prev = (e) => {
    e.preventDefault();
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  return (
    <div className="project-mockup" style={{ background: color }}>
      <div className="mockup-bar">
        <span /><span /><span />
      </div>
      <div className="mockup-body">
        <img
          src={images[index]}
          alt={`${title} screenshot ${index + 1}`}
          loading="lazy"
        />
      </div>

      {hasMultiple && (
        <>
          <button
            className="carousel-btn prev"
            onClick={prev}
            aria-label="Previous screenshot"
          >
            ‹
          </button>
          <button
            className="carousel-btn next"
            onClick={next}
            aria-label="Next screenshot"
          >
            ›
          </button>
          <div className="carousel-dots">
            {images.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === index ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setIndex(i);
                }}
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
    <section id="projects" className="section">
      <SectionHeader
        tag="Projects"
        title="Things I've Built"
        desc="A selection of projects where I applied development fundamentals to useful user experiences."
      />
      <div className="projects-list">
        {projects.map((p, i) => (
          <FadeIn key={p.title} delay={i * 80}>
            <div className="project-row">
              <ProjectCarousel images={p.images} title={p.title} color={p.color} />
              <div className="project-info">
                <span className="project-num">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3>{p.title}</h3>
                <p className="project-sub">{p.subtitle}</p>
                <p className="project-stack">{p.stack}</p>
                <p className="project-desc">{p.desc}</p>
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