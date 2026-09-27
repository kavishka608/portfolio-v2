import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeader tag="01. About Me" title="Who I Am" />
      <FadeIn>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm an undergraduate <strong>Software Engineering student</strong> at
              NSBM Green University with a passion for software development, web
              technologies, and problem-solving.
            </p>
            <p>
              Through academic and personal projects, I've developed strong skills
              in programming, web development, and teamwork. I'm currently seeking
              an internship opportunity to gain industry experience and contribute
              to real-world software projects.
            </p>
            <div className="about-stats">
              <div><strong>4+</strong><span>Projects</span></div>
              <div><strong>5+</strong><span>Technologies</span></div>
              <div><strong>1+</strong><span>Years Coding</span></div>
            </div>
          </div>
          <div className="about-card">
            <div className="avatar">KD</div>
            <p><strong>📍 Location</strong><br />Kochchikade, Sri Lanka</p>
            <p><strong>🎓 Study</strong><br />BSc (Hons) Software Engineering</p>
            <p><strong>💼 Status</strong><br />Open to Internships</p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}