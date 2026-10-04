import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const services = [
  {
    icon: "🖥️",
    title: "WordPress Website Development",
    description:
      "Professional WordPress websites built around your business requirements.",
  },
  {
    icon: "🎨",
    title: "Custom Website Design",
    description:
      "Clean, modern and responsive designs created to match your brand identity.",
  },
  {
    icon: "🛒",
    title: "WooCommerce Development",
    description:
      "Powerful online stores with product management, checkout and payment functionality.",
  },
  {
    icon: "⚙️",
    title: "WordPress Customization",
    description:
      "Theme, plugin, functionality and third-party integration customization for specific business needs.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description: "We learn about your business, services, customers and goals.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We structure the website, content and functionality around your business needs.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We design and develop a responsive WordPress website with the right tools and technologies.",
  },
  {
    number: "04",
    title: "Launch",
    description: "We test, optimize and prepare your website for launch.",
  },
  {
    number: "05",
    title: "Grow",
    description: "We provide support and improvements as your business grows.",
  },
];

const reasons = [
  {
    title: "Business-Focused",
    description:
      "We build around your business instead of forcing your business into a template.",
  },
  {
    title: "Custom Approach",
    description:
      "Every website is planned according to the client's brand, audience and requirements.",
  },
  {
    title: "Modern & Responsive",
    description:
      "Your website will look and work smoothly across desktop, tablet and mobile devices.",
  },
  {
    title: "Scalable Solutions",
    description: "We build websites that can evolve as your business grows.",
  },
  {
    title: "Clear Communication",
    description:
      "We keep you involved throughout the development process and provide regular project updates.",
  },
];

const trustStats = [
  { value: "2+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "5+", label: "Team Members" },
  { value: "Regular", label: "Project Updates" },
];

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">WORDPRESS WEB DESIGN &amp; DEVELOPMENT</p>
          <h1>We Build Websites That Fit Your Business.</h1>
          <p className="subheading">
            We create WordPress websites designed around your business, your
            audience, and your goals — not just another ready-made template.
          </p>

          <div className="hero-actions">
            <Link to="/contact" className="primary-btn">
              Start a Project
            </Link>
            <Link to="/projects" className="secondary-btn">
              View Our Projects
            </Link>
          </div>

          <p className="trust-text">
            WordPress Websites • Elementor Pro • Responsive Design Solutions
          </p>
        </div>

        <div
          className="hero-visual"
          aria-label="RT Digital website strategy preview"
        >
          <div className="dashboard-card main-card">
            <div className="card-header">
              <span className="dot dot-purple" />
              <span className="dot dot-blue" />
              <span className="dot dot-slate" />
            </div>

            <div className="stat-row">
              <div>
                <span className="mini-label">Growth</span>
                <strong>+128%</strong>
              </div>
              <div className="trend-pill">Business-first</div>
            </div>

            <div className="chart-bars" aria-hidden="true">
              <span style={{ height: "36%" }} />
              <span style={{ height: "54%" }} />
              <span style={{ height: "68%" }} />
              <span style={{ height: "82%" }} />
              <span style={{ height: "100%" }} />
              <span style={{ height: "92%" }} />
            </div>

            <div className="feature-list">
              <div>
                <span className="feature-bullet" />
                WordPress websites
              </div>
              <div>
                <span className="feature-bullet" />
                Conversion-focused layout
              </div>
              <div>
                <span className="feature-bullet" />
                Built for your audience
              </div>
            </div>
          </div>

          <div className="floating-card small-card top-card">
            <span className="card-label">Strategy</span>
            <strong>Brand. Build. Grow.</strong>
          </div>

          <div className="floating-card small-card bottom-card">
            <span className="card-label">Launch Ready</span>
            <strong>Responsive • Fast • SEO-friendly</strong>
          </div>
        </div>
      </section>

      <section className="hero-stats" aria-label="RT Digital at a glance">
        <div className="hero-stats-inner">
          {trustStats.map(({ value, label }) => (
            <div className="hero-stat" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="brand-showcase">
        <div className="brand-panel">
          <div className="brand-mark" aria-label="RT Digital brand mark">
            RT
          </div>

          <div className="brand-copy">
            <p className="section-kicker">OUR DIFFERENCE</p>
            <h2>Strategy. Design. Growth.</h2>
            <p>
              RT Digital helps businesses turn their online presence into a
              clear growth engine. We blend strategy, design, and WordPress
              expertise to create websites that build trust, communicate value,
              and support real business goals.
            </p>
          </div>
        </div>

        <div className="brand-points">
          <div className="brand-point">
            <span>01</span>
            <strong>Business-first strategy</strong>
          </div>
          <div className="brand-point">
            <span>02</span>
            <strong>Conversion-focused design</strong>
          </div>
          <div className="brand-point">
            <span>03</span>
            <strong>Built to scale with your business</strong>
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="section-heading center-heading">
          <p className="section-kicker">WHAT WE DO</p>
          <h2>Your Business. Your Brand. Your Website.</h2>
          <p>
            Every business is different. That’s why we don’t believe in
            one-size-fits-all websites. We understand your business, identify
            what your customers need, and build a website that represents your
            brand and supports your goals.
          </p>
        </div>

        <div className="card-grid services-grid">
          {services.map(({ icon, title, description }) => (
            <article key={title} className="info-card service-card">
              <div className="card-icon" aria-hidden="true">
                {icon}
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section">
        <div className="section-heading center-heading">
          <p className="section-kicker">OUR PROCESS</p>
          <h2>How We Turn Your Idea Into a Website</h2>
        </div>

        <div className="process-grid">
          {processSteps.map(({ number, title, description }) => (
            <article key={number} className="process-card">
              <span className="process-number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>

        <div className="brand-tagline">Brand. Build. Grow.</div>
      </section>

      <section className="section reasons-section">
        <div className="section-heading center-heading">
          <p className="section-kicker">WHY RT DIGITAL</p>
          <h2>Why Build With RT Digital?</h2>
        </div>

        <div className="card-grid reasons-grid">
          {reasons.map(({ title, description }) => (
            <article key={title} className="info-card reason-card">
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section featured-projects-section">
        <div className="section-heading center-heading">
          <p className="section-kicker">FEATURED PROJECTS</p>
          <h2>Work We’ve Built</h2>
          <p>
            From e-commerce stores to learning platforms and business websites,
            we build digital experiences around the unique needs of each
            business.
          </p>
        </div>

        <div className="featured-projects-grid">
          {projects.slice(0, 6).map((project) => (
            <article key={project.id} className="feature-project-card">
              <img src={project.image} alt={project.title} />

              <div className="feature-project-content">
                <span className="project-category-tag">{project.category}</span>
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.shortDescription}</p>

                <div className="project-tech-tags">
                  {project.technologies.slice(0, 2).map((tech) => (
                    <span key={`${project.id}-${tech}`}>{tech}</span>
                  ))}
                </div>

                <Link to={`/projects/${project.slug}`} className="project-link">
                  View Project →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="featured-projects-footer">
          <Link to="/projects" className="view-all-link">
            View All Projects →
          </Link>
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
    </div>
  );
}
