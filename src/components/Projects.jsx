import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import { FolderIcon, ArrowUpRightIcon } from './Icons';

const projects = [
  {
    title: 'NextStep',
    subtitle: 'University Management Platform',
    desc: 'Web platform allowing university students to access and search past exam papers efficiently. Built responsive interfaces with React.js and collaborated on frontend-backend integration.',
    stack: 'React.js · REST API · Team Project',
    link: 'https://github.com/kavishka608/NextStep.git',
    color: '#8fa8bf',
  },
  {
    title: 'SpareHubLK',
    subtitle: 'Automotive Parts E-commerce',
    desc: 'Full-stack e-commerce platform for automotive parts. Used PHP & MySQL for product listings, user management, and search — focused on UX and optimized database queries.',
    stack: 'PHP · MySQL · JavaScript',
    link: 'https://github.com/kavishka608',
    color: '#a8bfa1',
  },
  {
    title: 'HirePath AI',
    subtitle: 'AI-Powered Recruitment Platform',
    desc: 'Recruiter management subsystem with 9 RESTful APIs. Built using Repository Pattern, Service Layer and SOLID principles. Includes job search, dashboard statistics and proper database relationships.',
    stack: 'ASP.NET Core 8 · C# · Entity Framework · SQL Server · Swagger',
    link: 'https://github.com/kavishka608/HirePath',
    color: '#8fa8bf',
  },
  {
    title: 'HomeCraft',
    subtitle: 'Home Services Booking Platform',
    desc: 'Full-stack platform connecting homeowners with construction professionals. 20+ RESTful APIs with JWT authentication, PostgreSQL database, and responsive React frontend with bidding and review features.',
    stack: 'Node.js · Express · PostgreSQL · React · JWT',
    link: 'https://github.com/kavishka608/homecraft-backend',
    color: '#a8bfa1',
  },
];

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
              <div className="project-mockup" style={{ background: p.color }}>
                <div className="mockup-bar">
                  <span /><span /><span />
                </div>
                <div className="mockup-body">
                  <div className="mockup-inner">
                    <h4>{p.title}</h4>
                    <div className="mockup-line w80" />
                    <div className="mockup-line accent w60" />
                    <div className="mockup-line w70" />
                  </div>
                </div>
              </div>
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