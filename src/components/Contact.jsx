import { useState } from 'react';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import { MailIcon, LinkedInIcon, GitHubIcon, LocationIcon, CheckIcon } from './Icons';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
  };

  return (
    <section id="contact" className="section">
      <SectionHeader
        tag="05. Contact"
        title="Let's Connect"
        desc="Have an opportunity, project, or just want to say hi? I'd love to hear from you."
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
            <a href="https://www.linkedin.com/in/kavishka-dewduni/" target="_blank" rel="noreferrer" className="contact-item">
              <LinkedInIcon />
              <div>
                <strong>LinkedIn</strong>
                <p>kavishka-dewduni</p>
              </div>
            </a>
            <a href="https://github.com/kavishka608" target="_blank" rel="noreferrer" className="contact-item">
              <GitHubIcon />
              <div>
                <strong>GitHub</strong>
                <p>kavishka608</p>
              </div>
            </a>
            <div className="contact-item">
              <LocationIcon />
              <div>
                <strong>Location</strong>
                <p>Kochchikade, Sri Lanka</p>
              </div>
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