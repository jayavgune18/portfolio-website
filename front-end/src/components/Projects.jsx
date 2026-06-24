import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiFolder, FiChevronRight } from "react-icons/fi";
import SpotlightCard from "./ui/SpotlightCard";

const easeOut = [0.16, 1, 0.3, 1];
const spring = { type: "spring", stiffness: 200, damping: 16 };

const categories = ["All", "Full Stack", "AI/ML", "Web App"];

const projects = [
  {
    id: 1,
    title: "AI-Based Reconciliation System",
    description:
      "Automated financial transaction matching using Levenshtein Distance, Jaro-Winkler, and N-Gram Similarity algorithms. Features fraud detection, JWT authentication, RBAC, and automated PDF/Excel report generation.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "RBAC", "AI"],
    category: "Full Stack",
    github: "https://github.com/jayavgune18/Ai-Based-reconciliation-system",
    live: "https://ai-based-reconciliation-system-frontend.onrender.com",
    color: "from-neon-cyan to-neon-blue",
    features: [
      "Fuzzy matching algorithms",
      "Fraud detection engine",
      "JWT Authentication",
      "Role-Based Access Control",
      "PDF & Excel Reports",
    ],
  },
  {
    id: 2,
    title: "AI Expense Receipt Scanner",
    description:
      "Full-stack expense management platform with OCR receipt scanning, AI-powered duplicate detection, analytics dashboard, Docker Compose deployment, and email notifications.",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&q=80",
    tags: ["React.js", "Node.js", "MongoDB", "OCR", "Docker", "Cloudinary", "Tailwind CSS"],
    category: "AI/ML",
    github: "https://github.com/jayavgune18/AI-Expense-Receipt-Scanner",
    live: "#",
    color: "from-neon-purple to-neon-pink",
    features: [
      "OCR receipt scanning",
      "Expense analytics dashboard",
      "AI duplicate detection",
      "Email notifications",
      "Docker Compose deployment",
    ],
  },
  {
    id: 3,
    title: "GitHub Profile Detective",
    description:
      "Real-time GitHub analytics application that retrieves repositories, followers, stars, and profile insights using the GitHub REST API with optimized API handling and a responsive UI.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    tags: ["React.js", "GitHub API", "REST API", "JavaScript", "Tailwind CSS"],
    category: "Web App",
    github: "https://github.com/jayavgune18/gitHub-Profile-Detective",
    live: "https://githubprofile-detective.netlify.app",
    color: "from-neon-pink to-neon-purple",
    features: [
      "Real-time GitHub data",
      "Profile analytics",
      "Repository insights",
      "Fast API fetching",
      "Responsive UI",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const featureReveal = {
  hidden: { opacity: 0, x: -10 },
  visible: (i) => ({
    opacity: 1, x: 0,
    transition: { delay: 0.4 + i * 0.05, duration: 0.3, ease: easeOut },
  }),
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-spacing relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-outfit mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
          />
          <p className="text-lg text-white/40 max-w-2xl mx-auto font-inter">
            Real-world applications that showcase my skills and passion for building great software.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium font-inter transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 text-white border border-neon-cyan/30"
                  : "glass-panel text-white/50 hover:text-white hover:border-white/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.92 }}
              layout
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeCategory}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="group relative"
                variants={cardVariants}
                layout
                whileHover={{ y: -10, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <SpotlightCard spotlightColor={`${project.color.split(" ")[1] || "#06b6d4"}15`} size={350}>
                  <div className="glass-panel overflow-hidden project-card">
                    {/* Spotlight Gradient Overlay */}
                    <motion.div
                      className="absolute -inset-20 opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 50% 0%, ${project.color.split(" ")[1] || "#06b6d4"}, transparent 60%)`,
                      }}
                    />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <motion.span
                        className="px-3 py-1 text-[10px] font-medium rounded-full glass-panel text-white/60 border border-white/10 uppercase tracking-wider inline-block"
                        whileHover={{ scale: 1.08 }}
                      >
                        {project.category}
                      </motion.span>
                    </div>

                    {/* Project Image */}
                    <div className="relative h-52 overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.12 }}
                        transition={{ duration: 0.7, ease: easeOut }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/40 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6 relative z-10">
                      <div className="flex items-start justify-between mb-3">
                        <motion.h3
                          className="text-xl font-bold font-outfit text-white"
                          whileHover={{ x: 3 }}
                        >
                          <span className="bg-gradient-to-r from-white via-white to-white bg-[length:200%_100%] group-hover:bg-gradient-to-r group-hover:from-neon-cyan group-hover:to-neon-purple bg-clip-text group-hover:text-transparent transition-all duration-500">
                            {project.title}
                          </span>
                        </motion.h3>
                        <motion.div whileHover={{ rotate: 15, scale: 1.2 }}>
                          <FiFolder className="text-white/20 group-hover:text-neon-cyan transition-colors flex-shrink-0 mt-1" size={20} />
                        </motion.div>
                      </div>

                      <p className="text-sm text-white/50 leading-relaxed mb-4 line-clamp-2 font-inter">
                        {project.description}
                      </p>

                      {/* Features */}
                      {project.features && (
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-1.5">
                            {project.features.map((feat, i) => (
                              <motion.span
                                key={i}
                                className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-white/[0.03] border border-white/[0.06] text-white/40 inline-flex items-center gap-1"
                                variants={featureReveal}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.06)" }}
                              >
                                <FiChevronRight size={8} className="text-neon-cyan/60" />
                                {feat}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <motion.span
                            key={tag}
                            className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-white/[0.03] border border-white/[0.06] text-white/40"
                            whileHover={{ y: -1, scale: 1.05, backgroundColor: "rgba(255,255,255,0.06)" }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-4 py-2 text-xs text-white/50 hover:text-white rounded-lg hover:bg-white/5 transition-all border border-transparent hover:border-white/10"
                          whileHover={{ scale: 1.05, x: 2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiGithub size={15} />
                          GitHub
                        </motion.a>
                        {project.live && project.live !== "#" && (
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-4 py-2 text-xs text-white rounded-lg bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 hover:from-neon-cyan/30 hover:to-neon-purple/30 transition-all border border-white/5 hover:border-neon-cyan/20"
                            whileHover={{ scale: 1.05, x: 2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FiExternalLink size={15} />
                            Live Demo
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}