import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="project-detail-shell">
        <div className="project-detail-empty">
          <h1>Project not found</h1>
          <Link to="/projects" className="primary-btn">
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="project-detail-shell">
      <div className="project-detail-header">
        <div>
          <p className="section-kicker">CASE STUDY</p>
          <h1>{project.title}</h1>
          <p className="project-category">{project.category}</p>
        </div>

        <Link to="/projects" className="secondary-btn project-back-link">
          ← Back to Projects
        </Link>
      </div>

      <div className="project-detail-banner">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="project-detail-body">
        <div className="project-detail-copy">
          <div className="project-detail-section">
            <h2>Project Overview</h2>
            <p>{project.description}</p>
          </div>

          <div className="project-detail-section">
            <h2>The Challenge</h2>
            <p>{project.challenge}</p>
          </div>

          <div className="project-detail-section">
            <h2>Our Solution</h2>
            <p>{project.solution}</p>
          </div>
        </div>

        <aside className="project-detail-sidebar">
          <div className="project-side-block">
            <h3>Key Features</h3>
            <ul>
              {project.features.map((feature) => (
                <li key={feature}>✓ {feature}</li>
              ))}
            </ul>
          </div>

          <div className="project-side-block">
            <h3>Technologies</h3>
            <div className="tech-list">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="primary-btn project-live-btn"
          >
            Visit Live Website →
          </a>
        </aside>
      </div>
    </section>
  );
}
