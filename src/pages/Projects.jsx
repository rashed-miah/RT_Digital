import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="section projects-page-shell">
      <div className="section-heading center-heading project-list-header">
        <p className="section-kicker">FEATURED PROJECTS</p>
        <h2>Work We’ve Built</h2>
        <p>
          From e-commerce stores to learning platforms and business websites, we
          build digital experiences around the unique needs of each business.
        </p>
      </div>

      <div className="project-list-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-list-card">
            <img src={project.image} alt={project.title} />

            <div className="project-list-body">
              <span className="project-list-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.shortDescription}</p>

              <div className="project-list-tags">
                {project.technologies.map((tech) => (
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
    </section>
  );
}
