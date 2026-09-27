import { useEffect, useState } from 'react';
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowUpRightIcon } from './Icons';

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const year = new Date().getFullYear();

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Top row: brand + nav + social */}
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">KD<span>.</span></a>
            <p className="footer-tagline">
              Building clean, modern web experiences.
            </p>
          </div>

          <div className="footer-nav">
            <h4>Navigate</h4>
            <ul>
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-links">
              <a
                href="https://github.com/kavishka608"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <GitHubIcon size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/kavishka-dewduni/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href="mailto:kavishkadewduni@gmail.com"
                aria-label="Email"
              >
                <MailIcon size={18} />
              </a>
            </div>
            <a
              href="/Kavishka-Dewduni-Resume.pdf"
              download
              className="footer-resume"
            >
              Download Resume <ArrowUpRightIcon size={14} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom row: copyright + back to top */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} <strong>Kavishka Dewduni</strong>. All rights reserved.
          </p>
          <p className="footer-made">
            Designed &amp; built with <span className="heart">♥</span> using React
          </p>
          <button
            className={`back-to-top ${showTop ? 'visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            ↑ Top
          </button>
        </div>
      </div>
    </footer>
  );
}