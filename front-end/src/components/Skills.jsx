import { motion } from "framer-motion";
import {
  SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiJavascript,
  SiExpress, SiHtml5, SiCss3, SiMysql, SiGit, SiGithub,
} from "react-icons/si";
import { FaCode, FaServer, FaDatabase, FaLaptopCode, FaTools, FaJava } from "react-icons/fa";
import SpotlightCard from "./ui/SpotlightCard";

const easeOut = [0.16, 1, 0.3, 1];
const spring = { type: "spring", stiffness: 200, damping: 18 };

const skillCategories = [
  {
    title: "Frontend", icon: <FaLaptopCode size={18} />,
    color: "from-neon-cyan to-blue-400", glow: "rgba(6,182,212,0.15)",
    skills: [
      { name: "React.js", icon: <SiReact size={24} /> },
      { name: "JavaScript (ES6+)", icon: <SiJavascript size={24} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={24} /> },
      { name: "HTML5", icon: <SiHtml5 size={24} /> },
      { name: "CSS3", icon: <SiCss3 size={24} /> },
    ],
  },
  {
    title: "Backend", icon: <FaServer size={18} />,
    color: "from-neon-purple to-neon-pink", glow: "rgba(99,102,241,0.15)",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs size={24} /> },
      { name: "Express.js", icon: <SiExpress size={24} /> },
      { name: "REST APIs", icon: <FaServer size={24} /> },
    ],
  },
  {
    title: "Database", icon: <FaDatabase size={18} />,
    color: "from-neon-pink to-neon-purple", glow: "rgba(167,139,250,0.15)",
    skills: [
      { name: "MongoDB", icon: <SiMongodb size={24} /> },
      { name: "MySQL", icon: <SiMysql size={24} /> },
    ],
  },
  {
    title: "Languages", icon: <FaCode size={18} />,
    color: "from-neon-blue to-neon-cyan", glow: "rgba(59,130,246,0.15)",
    skills: [
      { name: "Java", icon: <FaJava size={24} /> },
      { name: "JavaScript", icon: <SiJavascript size={24} /> },
    ],
  },
  {
    title: "Tools & Platforms", icon: <FaTools size={18} />,
    color: "from-neon-blue to-neon-pink", glow: "rgba(59,130,246,0.15)",
    skills: [
      { name: "Git", icon: <SiGit size={24} /> },
      { name: "GitHub", icon: <SiGithub size={24} /> },
      { name: "VS Code", icon: <FaCode size={24} /> },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const badgeReveal = {
  hidden: { opacity: 0, scale: 0.6, y: 10 },
  visible: (i) => ({
    opacity: 1, scale: 1, y: 0,
    transition: { ...spring, delay: 0.15 + i * 0.06 },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="section-spacing relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-outfit mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
          />
          <p className="text-lg text-white/40 max-w-2xl mx-auto font-inter">
            Technologies and tools I've worked with to build real-world applications.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <SpotlightCard spotlightColor={category.glow} size={350}>
                <div className="glass-panel p-6 group relative overflow-hidden">
                  <div
                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle, ${category.glow}, transparent)` }}
                  />

                  <div className="relative z-10 flex items-center gap-3 mb-5">
                    <motion.div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white`}
                      whileHover={{ scale: 1.2, rotate: 8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-lg font-bold font-outfit text-white">{category.title}</h3>
                  </div>

                  <div className="relative z-10 flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.span
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-white/60 text-sm font-inter cursor-default"
                        variants={badgeReveal}
                        custom={i}
                        whileHover={{ y: -3, scale: 1.08, backgroundColor: "rgba(255,255,255,0.08)" }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.span
                          className="text-white/50"
                          whileHover={{ rotate: 10 }}
                        >
                          {skill.icon}
                        </motion.span>
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}