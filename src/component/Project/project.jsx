import { useEffect } from "react";
import "./project.css";
import GitHubSearchFinder from "../../assets/GitHubSearchFinder.png";
import MusicAcademy from "../../assets/Music-Academy.png";
import portfolioWebsite from "../../assets/portfolio-website.png";
import noteApp from "../../assets/jay.png";

export default function Project() {
  const projects = [
    { id: 1, title: "Music Academy", description: "A modern music academy website showcasing courses, instructors, and programs with a responsive and engaging design.", tech: ["HTML", "CSS", "JavaScript"], image: MusicAcademy, link: "https://music-academy-website.netlify.app/" },
    { id: 2, title: "Portfolio Website", description: "A modern personal portfolio website to showcase projects, skills, and contact details with smooth animations and responsive design.", tech: ["html", "css", "javascript", "React", "Bootstrap", "EmailJS"], image: portfolioWebsite, link: "https://jay-avgune.netlify.app/" },
    { id: 3, title: "GitHub Search Finder", description: "Manage patient appointments efficiently.", tech: ["HTML", "CSS", "JavaScript", "React"], image: GitHubSearchFinder, link: "https://githubprofile-detective.netlify.app/" },
    { id: 4, title: "Note App", description: "Easily create, view, and manage your notes.", tech: ["HTML", "CSS", "JavaScript", "Tailwind", "React"], image: noteApp, link: "https://notes-app-easy.netlify.app/" }
  ];

  useEffect(() => {
    const cards = document.querySelectorAll(".project-card-tilt");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if(entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="bg-black text-light py-5">
      <div className="container">
        <h2 className="text-info fw-bold text-center mb-5">My Projects</h2>

        <div className="row g-4">
          {projects.map((proj, index) => {
            const slideClass = index % 2 === 0 ? "slide-left" : "slide-right";
            return (
              <div key={proj.id} className="col-12 col-md-6">
                <div className={`card bg-secondary bg-opacity-10 border-0 shadow-lg project-card-tilt ${slideClass}`}>
                  <div className="row g-0 align-items-center">
                    <div className="col-md-6">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="img-fluid rounded-start w-100"
                        style={{ height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="card-body text-start">
                        <h3 className="card-title text-info fw-semibold">{proj.title}</h3>
                        <p className="card-text text-secondary">{proj.description}</p>
                        <div className="mb-3">
                          {proj.tech.map((t, i) => (
                            <span key={i} className="badge bg-info text-dark me-2 mb-2">
                              {t}
                            </span>
                          ))}
                        </div>
                        <a href={proj.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-info">
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
