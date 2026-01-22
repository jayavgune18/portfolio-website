import "./navbar.css";
import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaLaptopCode, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { SiReact } from "react-icons/si";

export default function Navbar() {
  const navItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaUser /> },
    { name: "Skills", path: "/skills", icon: <FaLaptopCode /> },
    { name: "Project", path: "/project", icon: <FaProjectDiagram /> },
  ];
  return (
    <nav className="navbar navbar-expand-lg bg-black navbar-dark sticky-top px-3 nav-unique">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand fw-bold fs-1 logo-glow"> W. </NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-5 nav-hover-scope">
            {navItems.map((item) => (
              <li key={item.name} className="nav-item d-flex align-items-center gap-4">
                <NavLink to={item.path} end={item.name === "Home"} className="nav-link nav-focus d-flex align-items-center gap-2">
                  {item.icon} {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <NavLink to="/contact" className="btn fw-bold px-4 contact-btn" > Contact </NavLink>
        </div>
      </div>
    </nav>
  );
}
