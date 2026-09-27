import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';

const projects = [
  {
    title: 'NextStep',
    subtitle: 'University Management Platform',
    desc: 'Web platform allowing university students to access and search past exam papers efficiently. Built responsive interfaces with React.js and collaborated on frontend-backend integration.',
    tags: ['React.js', 'REST API', 'Team Project'],
    link: 'https://github.com/kavishka608/NextStep.git',
  },
  {
    title: 'SpareHubLK',
    subtitle: 'Automotive E-commerce',
    desc: 'Full-stack e-commerce platform for automotive parts. Used PHP & MySQL for product listings, user management, and search — focused on UX and optimized database queries.',
    tags: ['PHP', 'MySQL', 'JavaScript'],
    link: 'https://github.com/kavishka608',
  },
  {
    title: 'HirePath AI',
    subtitle: 'Recruitment Platform',
    desc: 'Recruiter module for an AI-powered recruitment platform. Built 9 RESTful APIs using ASP.NET Core 8, C#, EF Core, applying Repository Pattern and SOLID principles.',
    tags: ['ASP.NET Core', 'C#', 'SQL Server'],
    link: 'https://github.com/kavishka608/HirePath',
  },
  {
    title: 'HomeCraft',
    subtitle: 'Home Services Booking',
    desc: 'Full-stack platform connecting homeowners with construction professionals. 20+ RESTful APIs with JWT auth, PostgreSQL database, and React frontend.',
    tags: ['Node.js', 'PostgreSQL', 'React'],
    link: 'https://github.com/kavishka608/homecraft-backend',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeader tag="03. Projects" title="Things I've Built" />
      <div className="projects-grid">
        {projects.map((p, i) => (
          <FadeIn key={p.title} delay={i * 100}>
            <a href={p.link} target="_blank" rel="noreferrer" className="project-card">
              <div className="project-header">
                <span className="folder">📁</span>
                <span className="arrow">↗</span>
              </div>
              <h3>{p.title}</h3>
              <p className="project-sub">{p.subtitle}</p>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}