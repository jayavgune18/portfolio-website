export default function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-4">
      <div className="container">

        {/* About / Info */}
        <p className="mb-2">
          Jay Avgune – Aspiring Full-Stack Developer. Passionate about building responsive, user-friendly web applications and learning new technologies.
        </p>

        {/* Contact Info */}
        <p className="mb-2">
          Email: <a href="#" className="text-info text-decoration-none"> avgunejay@gmail.com</a> | Phone: +91-8788190123
        </p>

        {/* Quick Links */}
        <p className="mb-2">
          Home | About | Skills | Projects | Contact
        </p>

        {/* Copyright */}
        <p className="small text-secondary mb-0">
          © 2025 Jay Avgune. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
