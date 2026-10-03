import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import profileImg from '../assets/profile.jpeg';

const stats = [
  { value: '3rd', label: 'Year Undergraduate' },
  { value: '5+',  label: 'Projects Built' },
 
  { value: '10+', label: 'Technologies Learned' },
];

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeader tag="About Me" title="Passionate about building things." />
      <FadeIn>
        <div className="about-grid">
          <div className="about-photo">
            <div className="photo-circle">
              <img src={profileImg} alt="Kavishka Dewduni" />
            </div>
            <h3 className="photo-name">Kavishka Dewduni</h3>
            <p className="photo-role">Software Engineering Student</p>
          </div>
          <div className="about-text">
            <p>
              Third-year <strong>Software Engineering undergraduate</strong> at
              NSBM Green University, passionate about software development, web
              technologies, and problem solving.
            </p>
            <p>
              Experienced in <strong>Java, Spring Boot, React, ASP.NET Core, PHP,
              SQL, RESTful APIs, and database development</strong> through academic
              and personal projects.
            </p>
            <p>
              A fast learner with strong analytical, debugging, and teamwork skills,
              eager to gain industry experience and contribute to real-world IT
              projects.
            </p>
          </div>
        </div>

        <div className="about-stats-row">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 80}>
              <div className="about-stat-card">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}