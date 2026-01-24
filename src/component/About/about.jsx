import { useEffect } from "react";
import "./about.css";

export default function About() {

  useEffect(() => {
    const elements = document.querySelectorAll(".about-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.25 }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="bg-black text-light py-5">
      <div className="container">

        <h2 className="fw-bold text-info mb-4 about-item delay-1">
          About Me
        </h2>

        <p className="fs-5 text-secondary lh-lg mb-4 about-item delay-2" style={{ maxWidth: "900px" }}>
          Hello! I’m Jay Avgune, a Computer Science student and an enthusiastic fresher
          with a strong passion for software development. I enjoy building clean,
          responsive, and user-friendly web applications using HTML, CSS, JavaScript,
          and React.js. During my academic journey, I have developed several real-world
          projects such as a Music Academy Website, a GitHub Profile Search Finder,
          a Notes Application, and a responsive Portfolio Website.
        </p>

        <p className="fs-5 text-secondary lh-lg about-item delay-3" style={{ maxWidth: "900px" }}>
          I am a quick learner, a team player, and motivated to take on challenges in
          real-world applications. My goal is to become a skilled Full-Stack Developer
          and build meaningful, user-friendly applications that make a positive impact.
        </p>

      </div>
    </section>
  );
}
