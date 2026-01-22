import { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  useEffect(() => {
    const elements = document.querySelectorAll(".contact-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_oy89oay",
      "template_n3jkqyj",
      form.current,
      { publicKey: "dq0aee7luMmW4hzxQ" }
    ).then(
      () => alert("Message sent successfully!"),
      (error) => console.log("FAILED...", error.text)
    );
  };

  return (
    <section className="bg-black text-light d-flex align-items-center py-5 min-vh-100">
      <div className="container">
        {/* ✅ Added gy-5 for vertical spacing */}
        <div className="row gx-5 gy-5 align-items-center">

          {/* LEFT: Info */}
          <div className="col-lg-5 contact-item delay-1 mb-5 mb-lg-0 text-center text-lg-start">
            <h2 className="text-info fw-bold mb-4">Get in Touch!</h2>

            <p className="text-secondary fs-5 mb-4">
              Let’s transform ideas into clean, modern web solutions. I’m excited
              to collaborate on innovative projects.
            </p>

            <div className="fs-5 mb-4">
              <p className="mb-2">📞 +91 8788190123</p>
              <p className="mb-0">✉️ avgunejay@gmail.com</p>
            </div>

            <div className="d-flex justify-content-center justify-content-lg-start gap-4 fs-3 mt-3">
              <a
                href="https://www.instagram.com/jay.avgune"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light social-icon instagram contact-item delay-2"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/in/jay-avgune-1316b323a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light social-icon linkedin contact-item delay-3"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/jayavgune18"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light social-icon github contact-item delay-4"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="col-lg-7 contact-item delay-2 pt-3 pt-lg-0">
            <h6 className="text-info fs-4 fw-semibold mb-2 text-center text-lg-start">
              What’s next?
            </h6>

            <h1 className="display-5 fw-bold mb-4 text-center text-lg-start">
              Let’s Build Something Great
            </h1>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="mx-auto mx-lg-0"
              style={{ maxWidth: "640px" }}
            >
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control form-control-lg bg-secondary bg-opacity-25 border-0 text-white contact-item delay-2"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control form-control-lg bg-secondary bg-opacity-25 border-0 text-white contact-item delay-3"
                  placeholder="Your email"
                  required
                />
              </div>

              <div className="mb-4">
                <textarea
                  name="message"
                  rows="5"
                  className="form-control form-control-lg bg-secondary bg-opacity-25 border-0 text-white contact-item delay-4"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="btn btn-info btn-lg px-5 contact-item delay-4 text-dark d-lg-inline-block d-inline"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
