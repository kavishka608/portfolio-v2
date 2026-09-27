import FadeIn from './FadeIn';

export default function SectionHeader({ tag, title, desc }) {
  return (
    <FadeIn>
      <p className="section-tag">{tag}</p>
      <h2 className="section-title">{title}</h2>
      {desc && <p className="section-desc">{desc}</p>}
    </FadeIn>
  );
}