import { Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import ParticleField from "./components/ui/ParticleField";
import CursorFollower from "./components/ui/CursorFollower";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import GitHubStats from "./components/GitHubStats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import { ThemeProvider } from "./hooks/useTheme";

function App() {
  return (
    <ThemeProvider>
      <Helmet>
        <html className="dark" />
        <meta name="description" content="Full Stack Developer specializing in MERN stack. Building modern, performant web applications with React, Node.js, and MongoDB. Open to full-time opportunities." />
      </Helmet>
      <div className="relative min-h-screen">
        <ParticleField />
        <CursorFollower />
        <ScrollProgress />
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <GitHubStats />
          <Contact />
        </main>

        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;