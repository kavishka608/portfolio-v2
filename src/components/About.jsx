import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import { LocationIcon, GraduationIcon, BriefcaseIcon } from './Icons';
import profileImg from '../assets/profile.jpeg';

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeader tag="01. About Me" title="Who I Am" />
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
            <div className="about-info-list">
              <div className="info-row">
                <LocationIcon />
                <div>
                  <strong>Location</strong>
                  <p>Kochchikade, Sri Lanka</p>
                </div>
              </div>
              <div className="info-row">
                <GraduationIcon />
                <div>
                  <strong>Study</strong>
                  <p>BSc (Hons) Software Engineering</p>
                </div>
              </div>
              <div className="info-row">
                <BriefcaseIcon />
                <div>
                  <strong>Status</strong>
                  <p>Open to Internships</p>
                </div>
              </div>
            </div>
            <div className="about-stats">
              <div><strong>4+</strong><span>Projects</span></div>
              <div><strong>5+</strong><span>Technologies</span></div>
              <div><strong>1+</strong><span>Years Coding</span></div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}