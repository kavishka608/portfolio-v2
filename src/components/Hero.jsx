import useTypewriter from '../hooks/useTypewriter';

export default function Hero() {
  const typed = useTypewriter([
    'Software Engineer',
    'React Developer',
    'Full-Stack Enthusiast',
    'Problem Solver',
  ]);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-tag">👋 Hello, I'm</p>
        <h1>Kavishka <span className="gradient">Dewduni</span></h1>
        <h2 className="typewriter">
          {typed}<span className="cursor">|</span>
        </h2>
        <p className="hero-desc">
          Undergraduate Software Engineering student passionate about building
          clean, modern, and performant web applications.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View My Work</a>
          <a href="#contact" className="btn secondary">Get In Touch</a>
        </div>
      </div>
    </section>
  );
}