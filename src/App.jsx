import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar/navbar.jsx";
import Footer from "./component/footer/footer.jsx";

import Home from "./component/Home/home.jsx";
import About from "./component/About/about.jsx";
import Skills from "./component/skillls/skills.jsx";
import Project from "./component/Project/project.jsx";
import Contact from "./component/Contact/contact.jsx";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
