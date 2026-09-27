import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';

const items = [
  {
    year: '2025 – Present',
    title: 'BSc (Hons) Software Engineering',
    place: 'NSBM Green University, Sri Lanka',
    desc: 'Undergraduate program focused on software engineering, algorithms, web development, and system design.',
  },
  {
    year: '2020 – 2022',
    title: 'G.C.E Advanced Level – Technology Stream',
    place: 'Jeyaraj Fernando Pulle M.V, Negombo',
    desc: 'Engineering Technology (S), ICT (C), Science for Technology (C).',
  },
  {
    year: '2026',
    title: 'Python for Beginners',
    place: 'University of Moratuwa & DP Education',
    desc: 'Completed online Python fundamentals course covering variables, data types, control structures, and functions.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section alt">
      <SectionHeader tag="04. Experience" title="Education & Certifications" />
      <div className="timeline">
        {items.map((it, i) => (
          <FadeIn key={it.title} delay={i * 100}>
            <div className="timeline-item">
              <span className="timeline-dot" />
              <div className="timeline-content">
                <p className="timeline-year">{it.year}</p>
                <h3>{it.title}</h3>
                <p className="timeline-place">{it.place}</p>
                <p className="timeline-desc">{it.desc}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}