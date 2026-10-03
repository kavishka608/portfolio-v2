import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';

const items = [
  {
    year: '2025 – Present',
    title: 'BSc (Hons) Software Engineering | Undergraduate',
    place: 'NSBM Green University',
    desc: 'Third-year undergraduate studying core software engineering subjects including algorithms, databases, software design, REST APIs, and full stack development.',
  },
  {
    year: '2023',
    title: 'Diploma in Computer Applications',
    place: 'Digitec - Negombo',
    desc: 'Comprehensive diploma covering computer fundamentals, office applications, and practical IT skills.',
  },
  {
    year: '2020 – 2022',
    title: 'GCE Advanced Level — Technology Stream',
    place: 'Jeyaraj Fernando Pulle M.V, Negombo',
    desc: 'Studied Engineering Technology (S), ICT (C), and Science for Technology (C), building strong analytical and logical thinking skills.',
  },
];

const certs = [
  {
    issuer: 'University of Moratuwa & DP Education',
    items: [
      {
        title: 'Python for Beginners',
        desc: 'Covered fundamentals of Python programming, problem solving, and scripting — strengthening the foundation for backend and data-related development.',
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeader tag="Background" title="Experience & Education" />

      <div className="timeline">
        {items.map((it, i) => (
          <FadeIn key={it.title} delay={i * 80}>
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

      <div className="certs-block">
        <h3 className="certs-title">Certifications</h3>
        {certs.map((c, i) => (
          <FadeIn key={c.issuer} delay={i * 80}>
            <div className="cert-item">
              <p className="cert-issuer">{c.issuer}</p>
              {c.items.map((it) => (
                <div key={it.title} className="cert-card">
                  <h4>{it.title}</h4>
                  <p>{it.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}