import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import useInView from '../hooks/useInView';

const skillGroups = [
  {
    title: 'Programming Languages',
    items: [
      { name: 'JavaScript', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'PHP', level: 75 },
      { name: 'Python', level: 70 },
      { name: 'SQL', level: 78 },
    ],
  },
  {
    title: 'Web & Frameworks',
    items: [
      { name: 'React.js', level: 85 },
      { name: 'Node.js', level: 75 },
      { name: 'Spring Boot', level: 68 },
      { name: 'HTML/CSS', level: 90 },
    ],
  },
];

function SkillBar({ name, level }) {
  const [ref, inView] = useInView(0.4);
  return (
    <div ref={ref} className="skill-bar">
      <div className="skill-label">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="skill-track">
        <div
          className="skill-fill"
          style={{ width: inView ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section alt">
      <SectionHeader tag="02. Skills" title="What I Work With" />
      <div className="skills-grid">
        {skillGroups.map((group, i) => (
          <FadeIn key={group.title} delay={i * 100}>
            <div className="skill-group">
              <h3>{group.title}</h3>
              {group.items.map((s) => (
                <SkillBar key={s.name} name={s.name} level={s.level} />
              ))}
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={200}>
        <div className="tools">
          <h3>Developer Tools</h3>
          <div className="tool-tags">
            {['VS Code', 'IntelliJ IDEA', 'Git', 'GitHub', 'Postman', 'Figma', 'Android Studio'].map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}