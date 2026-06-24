import { motion } from "framer-motion";
import { FiBriefcase, FiAward, FiStar, FiCalendar } from "react-icons/fi";

const easeOut = [0.16, 1, 0.3, 1];
const springPop = { type: "spring", stiffness: 250, damping: 15 };
const springBounce = { type: "spring", stiffness: 400, damping: 12 };

const experiences = [
  {
    type: "internship",
    title: "MERN Stack Developer Intern",
    organization: "SaiKet Systems",
    period: "Feb 2026 — Mar 2026",
    description:
      "Built reusable UI components and resolved complex frontend issues to improve usability and development efficiency.",
    highlights: [
      "Built 8+ reusable UI components using HTML5, CSS3, and JavaScript, reducing development time by 30%.",
      "Resolved 15+ frontend issues through systematic testing and managed deployment workflows using Git.",
      "Achieved consistent rendering across mobile, tablet, and desktop devices.",
    ],
  },
  {
    type: "certification",
    title: "Delta - Full Stack Web Development",
    organization: "Certification Course",
    period: "2025",
    description:
      "Built responsive web applications using the MERN Stack (MongoDB, Express.js, React.js, Node.js).",
  },
  {
    type: "certification",
    title: "Alpha - Data Structures & Algorithms",
    organization: "Certification Course",
    period: "2024",
    description:
      "Practiced problem-solving, time complexity analysis, and implementation of core data structures using Java.",
  },
];

const timelineVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const typeIcons = {
  internship: <FiBriefcase size={15} />,
  certification: <FiAward size={15} />,
  achievement: <FiStar size={15} />,
};

const typeColors = {
  internship: "bg-neon-cyan/10 text-neon-cyan",
  certification: "bg-neon-purple/10 text-neon-purple",
  achievement: "bg-neon-pink/10 text-neon-pink",
};

export default function Experience() {
  return (
    <section id="experience" className="section-spacing relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-outfit mb-4">
            Experience & <span className="text-gradient">Achievements</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
          />
          <p className="text-lg text-white/40 max-w-2xl mx-auto font-inter">
            My professional journey, certifications, and key accomplishments.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            className="relative"
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Growing timeline line */}
            <motion.div
              className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-transparent"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: easeOut }}
              style={{ originY: 0 }}
            />

            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                className="relative pl-20 pb-12 last:pb-0"
                variants={itemVariants}
              >
                {/* Spring-loaded timeline dot */}
                <motion.div
                  className="absolute left-[26px] top-1 w-[15px] h-[15px] rounded-full bg-dark-bg border-2 border-neon-cyan flex items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ ...springBounce, delay: idx * 0.12 + 0.3 }}
                  whileHover={{ scale: 2, borderColor: "#a78bfa" }}
                >
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-neon-cyan"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>

                {/* Card */}
                <motion.div
                  className="glass-panel p-6 group hover:border-neon-cyan/20 transition-all duration-300"
                  whileHover={{ y: -6, x: 6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <motion.div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${typeColors[exp.type]}`}
                      whileHover={{ scale: 1.3, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {typeIcons[exp.type]}
                    </motion.div>
                    <span className="text-xs font-medium text-white/30 uppercase tracking-wider">
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-outfit text-white mb-1">{exp.title}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-neon-cyan/80">{exp.organization}</span>
                    <span className="text-white/20">·</span>
                    <div className="flex items-center gap-1 text-xs text-white/30">
                      <FiCalendar size={12} />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-sm text-white/50 leading-relaxed mb-3 font-inter">
                    {exp.description}
                  </p>

                  {exp.highlights && (
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-2 text-xs text-white/40 font-inter"
                          initial={{ opacity: 0, x: -15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1, duration: 0.4, ease: easeOut }}
                        >
                          <motion.span
                            className="w-1.5 h-1.5 rounded-full bg-neon-cyan/50 mt-1.5 flex-shrink-0"
                            whileHover={{ scale: 2.5, backgroundColor: "rgba(6, 182, 212, 1)" }}
                            transition={{ type: "spring", stiffness: 400 }}
                          />
                          {h}
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}