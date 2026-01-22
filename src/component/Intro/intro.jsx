import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import profile from "../../assets/profile.png"

import "./intro.css";

export default function Intro() {
  const divRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const fadeUpStyle = (delay = 0) => ({
    animation: "fadeUp 1s ease forwards",
    animationDelay: `${delay}s`,
    opacity: 0,
  });

  return (
    <section className="bg-black text-light min-vh-100 d-flex align-items-center py-5">
      <div className="container">
        <div className="row align-items-center gy-5">

          {/* LEFT CONTENT */}
          <div className="col-lg-7 col-md-12">
            <span
              className="text-info fw-bold fs-5 d-block mb-2"
              style={fadeUpStyle(0.1)}
            >
              Hi, my name is
            </span>

            <h1
              className="fw-bold display-3 text-white"
              style={fadeUpStyle(0.3)}
            >
              Jay Avgune
            </h1>

            <h2 className="fw-semibold text-secondary display-6 typing">
              Building the web, better.
            </h2>

            <p
              className="fs-5 text-light-emphasis my-4"
              style={fadeUpStyle(0.8)}
            >
              Aspiring full-stack developer focused on building accessible,
              user-friendly, and impactful web experiences.
            </p>

            <NavLink
              to="/contact"
              className="btn btn-outline-info btn-lg px-4"
            >
              Get In Touch
            </NavLink>
          </div>

          {/* RIGHT CARD */}
          <div className=" right-card col-lg-4 col-md-10 d-flex justify-content-center rounded-4">
            <div
              ref={divRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setVisible(true)}
              onMouseLeave={() => setVisible(false)}
              className="profile-card position-relative rounded-4 overflow-hidden"
            >
              {/* CARD CONTENT */}
              <div className="card-inner text-center">
                <img
                  src={profile}
                  alt="Profile"
                  className="rounded-circle mb-2 "
                />

                <h3 className="text-white fw-bold mb-1">Jay Avgune</h3>
                <p className="text-info fw-medium mb-3">FullStack Developer</p>

                <p className="text-secondary small px-3 mb-3">
                  Passionate about clean UI, performance-focused web apps, and
                  modern JavaScript frameworks.
                </p>

                {/* SOCIAL ICONS */}
                <div className="d-flex justify-content-center gap-4 fs-3 mt-3">
                  <a
                    href="https://www.instagram.com/jay.avgune"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light social-icon instagram"
                  >
                    <FaInstagram />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/jay-avgune-1316b323a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light social-icon linkedin"
                  >
                    <FaLinkedin />
                  </a>

                  <a
                    href="https://github.com/jayavgune18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light social-icon github"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
