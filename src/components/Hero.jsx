import { DownloadIcon } from './Icons';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-tag">Third-year Software Engineering Undergraduate</p>
        <h1>
          Kavishka
          <br />
          <span className="gradient">Dewduni</span>
        </h1>
        <p className="hero-desc">
          Software Engineering undergraduate at NSBM Green University, passionate
          about building real-world solutions through clean, purposeful code.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View My Work</a>
          <a
            href="/Kavishka-Dewduni-Resume.pdf"
            download
            className="btn secondary with-icon"
          >
            <DownloadIcon /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}