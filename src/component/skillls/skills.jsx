import { useEffect } from "react";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import tailwind from "../../assets/tailwind.svg";
import bootstrap from "../../assets/bootstrap.svg";
import javascript from "../../assets/javascript.svg";
import react from "../../assets/react.svg";
import nodejs from "../../assets/nodejs.svg";
import express from "../../assets/expressjs.svg";
import mongodb from "../../assets/mongodb.svg";
import mysql from "../../assets/mysql.svg";
import "./skills.css";

export default function Skills() {
const skillCategories = [
  {
    title: "Front-end",
    skills: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "JavaScript", icon: javascript },
      { name: "Tailwind", icon: tailwind },
      { name: "Bootstrap", icon: bootstrap },
      { name: "React", icon: react },
    ],
  },
  {
    title: "Back-end",
    skills: [
      { name: "Node.js", icon: nodejs },
      { name: "Express.js", icon: express },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: mongodb },
      { name: "MySQL", icon: mysql },
    ],
  },
];

  useEffect(() => {
    const boxes = document.querySelectorAll(".skill-box");
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

    boxes.forEach((box) => observer.observe(box));
    return () => observer.disconnect();
  }, []);

  const handleHover = (e) => {
    e.currentTarget.classList.add("hovered");
  };

  return (
    <section id="skills" className="bg-black text-light py-5">
      <div className="container">
        <h2 className="text-info fw-semibold mb-5">Skills</h2>

        {skillCategories.map((category) => (
          <div key={category.title} className="mb-5">
            <h4 className="text-secondary mb-4">{category.title}</h4>

            <div className="row g-4 justify-content-center justify-content-md-start">
              {category.skills.map((skill, i) => (
                <div key={skill.name} className="col-6 col-sm-4 col-md-3 col-lg-2 text-center" >
                  <div className={`skill-box delay-${i}`} onMouseEnter={handleHover} >
                    <div className="skill-logo-wrapper"
                      style={{
                        background:
                          skill.name === "Express.js" ? "#ffffff" : "transparent",
                        padding: skill.name === "Express.js" ? "10px" : "0",
                      }}>
                      <img src={skill.icon} alt={skill.name} style={{ width: "60px", height: "60px" }} />
                    </div>
                    <p className="mb-0 small text-white mt-2">{skill.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
