import { Link } from "react-router-dom";
import emon from "../assets/emon.jpg";
import rashed from "../assets/rashed (2).jpg";
import milon from "../assets/milon.png";
import shihad from "../assets/shihad.jpg";
import anis from "../assets/anis.jpg";
import saruar from "../assets/saruar.jpg";
const teamMembers = [
  {
    name: "Md. Rashed Miah",
    role: "Founder & Web Developer",
    image: rashed,
  },
  {
    name: "Nuruzzaman Emon",
    role: "WordPress Technical Lead",
    image: emon,
  },
  {
    name: "Anisul Haque",
    role: "Lead WordPress Developer",
    image: anis,
  },
  {
    name: "Shihad Hasan",
    role: "Senior WordPress Developer",
    image: shihad,
  },
  {
    name: "Golam Saruar",
    role: "WordPress Developer",
    image: saruar,
  },

  {
    name: "Milon Mondol",
    role: "WordPress Developer",
    image: milon,
  },
];

export default function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-inner">
          <div className="about-hero-copy">
            <p className="about-kicker">ABOUT RT DIGITAL</p>
            <h1>We Build Digital Experiences Around Your Business.</h1>
            <p className="about-subheading">
              RT Digital is a web development agency focused on creating
              WordPress websites using elementor or other page builders that
              help businesses build a strong online presence, connect with their
              audience and grow with confidence.
            </p>

            <div className="about-hero-actions">
              <Link to="/contact" className="about-primary-btn">
                Start a Project
              </Link>
              <Link to="/projects" className="about-secondary-btn">
                Explore Our Work
              </Link>
            </div>
          </div>

          <div className="about-hero-panel">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
              alt="Creative team planning a digital project"
              className="about-hero-image"
            />
          </div>
        </div>
      </section>

      <section className="brand-showcase about-section">
        <div className="brand-panel">
          <div className="brand-mark" aria-label="RT Digital brand mark">
            RT
          </div>

          <div className="brand-copy">
            <p className="section-kicker">OUR STORY</p>
            <h2>Why RT Digital?</h2>
            <p>
              We started RT Digital with a simple belief — every business
              deserves a website built around its own identity, goals and
              audience. From the first idea to the final launch, we work closely
              with our clients to create digital experiences that are visually
              engaging, functional, responsive and easy to manage.
            </p>
          </div>
        </div>

        <div className="brand-points about-story-points">
          <div className="brand-point about-story-point">
            <span>01</span>
            <strong>Built Around Your Business. Not Just a Template.</strong>
          </div>
          <div className="brand-point about-story-point">
            <span>02</span>
            <strong>
              We take time to understand your business, audience and goals.
            </strong>
          </div>
          <div className="brand-point about-story-point">
            <span>03</span>
            <strong>
              We design experiences that are engaging, responsive and easy to
              manage.
            </strong>
          </div>
        </div>
      </section>

      <section className="about-vision">
        <div className="about-vision-layout">
          <div className="about-vision-image-frame">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85"
              alt="A team working together to plan a business strategy"
              className="about-vision-image"
            />
            <div className="about-vision-image-note">
              <span>OUR DIRECTION</span>
              <strong>Built for lasting growth.</strong>
            </div>
          </div>

          <div className="about-section-header about-vision-copy">
            <p className="about-kicker">OUR VISION</p>
            <h2>Building Long-Term Digital Partnerships.</h2>
            <div className="about-vision-box">
              <p>
                Our vision is to become a trusted digital partner for businesses
                looking to build, improve and grow their online presence.
              </p>
              <p>
                As technology and businesses continue to evolve, we want to
                create solutions that remain useful, scalable and relevant for
                the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-team-section">
        <div className="about-team-heading">
          <p className="about-kicker">THE PEOPLE BEHIND THE WORK</p>
          <h2>A Team Built to Make Things Work Better.</h2>
          <p>
            Thoughtful people, strong craft and a shared commitment to building
            better digital experiences.
          </p>
        </div>

        <div className="team-member-grid">
          {teamMembers.map((member) => (
            <article
              className={`team-member-card${member.featured ? " team-member-card-founder" : ""}`}
              key={member.name}
            >
              <div className="team-member-photo-frame">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  className="team-member-photo"
                  loading="lazy"
                  decoding="async"
                />
                {member.featured && (
                  <span className="team-member-founder-badge">FOUNDER</span>
                )}
              </div>
              <div className="team-member-copy">
                <h3>{member.name}</h3>
                <p className="team-member-role">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="project-cta-band">
        <div className="project-cta-content">
          <h2>Have a Business Idea? Let’s Build It.</h2>
          <p>
            Tell us about your business and what you want to achieve. We'll help
            turn your idea into a website built specifically for you.
          </p>
          <div className="project-cta-actions">
            <Link to="/contact" className="project-cta-primary">
              Start Your Project
            </Link>
            <Link to="/contact" className="project-cta-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
