import { useState } from 'react';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import {
  MailIcon,
  LinkedInIcon,
  GitHubIcon,
  LocationIcon,
  CheckIcon,
} from './Icons';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
  };

  return (
    <section id="contact" className="section alt">
      <SectionHeader
        tag="Get in touch"
        title="Let's Connect"
        desc="I'm open to internship opportunities, collaborations, and interesting projects. Feel free to reach out — I'll get back to you as soon as I can."
      />
      <div className="contact-grid">
        <FadeIn>
          <div className="contact-info">
            <a href="mailto:kavishkadewduni@gmail.com" className="contact-item">
              <MailIcon />
              <div>
                <strong>Email</strong>
                <p>kavishkadewduni@gmail.com</p>
              </div>
            </a>
            <div className="contact-item">
              <LocationIcon />
              <div>
                <strong>Location</strong>
                <p>Kochchikade, Sri Lanka</p>
              </div>
            </div>
            <div className="contact-item">
              <CheckIcon />
              <div>
                <strong>Availability</strong>
                <p>Open to internships</p>
              </div>
            </div>
            <div className="contact-social-block">
              <p className="contact-social-label">Find me on</p>
              <div className="contact-socials">
                <a href="https://github.com/kavishka608" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <GitHubIcon size={20} />
                </a>
                <a href="https://www.linkedin.com/in/kavishka-dewduni/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <LinkedInIcon size={20} />
                </a>
                <a href="mailto:kavishkadewduni@gmail.com" aria-label="Email">
                  <MailIcon size={20} />
                </a>
              </div>
              <p className="contact-note">I typically respond within 24–48 hours.</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <form className="contact-form" onSubmit={handleSubmit}>
            {sent && (
              <div className="form-success">
                <CheckIcon /> Thanks! I'll get back to you soon.
              </div>
            )}
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required />
            <button type="submit" className="btn primary">Send Message</button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}