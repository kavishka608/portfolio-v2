import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';

const skillGroups = [
  {
    title: 'Programming',
    items: ['Java', 'JavaScript', 'PHP', 'Python', 'SQL', 'C#'],
  },
  {
    title: 'Development',
    items: [
      'React.js',
      'Node.js',
      'Spring Boot',
      'ASP.NET Core',
      'RESTful APIs',
      'HTML5',
      'CSS3',
    ],
  },
  {
    title: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'SQL Server'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Postman', 'Swagger', 'VS Code', 'IntelliJ IDEA', 'Android Studio'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section alt">
      <SectionHeader
        tag="02. Skills"
        title="Skills & Technologies"
        desc="Technologies and tools I use to build full-stack applications, APIs, and database-driven solutions."
      />
      <div className="skills-categories">
        {skillGroups.map((group, i) => (
          <FadeIn key={group.title} delay={i * 80}>
            <div className="skill-category">
              <h3>{group.title}</h3>
              <div className="skill-pills">
                {group.items.map((s) => (
                  <span key={s} className="pill">{s}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}