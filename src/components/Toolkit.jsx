import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';

const tools = [
  { name: 'VS Code',        desc: 'Code Editor' },
  { name: 'Git',            desc: 'Version Control' },
  { name: 'Postman',        desc: 'API Testing' },
  { name: 'Android Studio', desc: 'Mobile Development' },
  { name: 'GitHub',         desc: 'Code Collaboration' },
  { name: 'IntelliJ IDEA',  desc: 'Development Environment' },
  { name: 'MySQL',          desc: 'Database' },
  { name: 'Swagger',        desc: 'API Documentation' },
];

export default function Toolkit() {
  return (
    <section id="toolkit" className="section">
      <SectionHeader
        tag="My Toolkit"
        title="Behind every build."
        desc="My everyday tools for writing code, testing ideas, and turning projects into working applications."
      />
      <div className="toolkit-grid">
        {tools.map((t, i) => (
          <FadeIn key={t.name} delay={i * 60}>
            <div className="tool-card">
              <h4>{t.name}</h4>
              <p>{t.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}