import { motion } from "framer-motion";
import { FiUser, FiTarget, FiZap, FiAward, FiBookOpen } from "react-icons/fi";
import SpotlightCard from "./ui/SpotlightCard";

const easeOut = [0.16, 1, 0.3, 1];
const spring = { type: "spring", stiffness: 150, damping: 20 };

const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const popIn = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { ...spring, delay: 0.2 + i * 0.1 },
  }),
};

const educationData = [
  {
    year: "2024 - 2027",
    title: "Bachelor of Engineering (B.E.) in Computer Science Engineering",
    institution: "Dr. D Y Patil Technical Campus, Varale-Talegaon",
    description: "Maintaining a 9.00 SGPA. Focusing on software engineering, data structures, algorithms, and full-stack development.",
  },
  {
    year: "2022 - 2024",
    title: "Diploma in Computer Engineering",
    institution: "K V N Naik Institute of Engineering Education & Research",
    description: "Graduated with 80.57%. Built a strong foundation in mathematics and computer science fundamentals.",
  },
];

const stats = [
  { value: "3", label: "Projects Completed" },
  { value: "50+", label: "LeetCode Problems Solved" },
  { value: "12+", label: "Technologies Learned" },
];

const achievements = [
  { text: "4+ Real-world Projects", color: "bg-neon-cyan" },
  { text: "MERN Stack Development Experience", color: "bg-neon-purple" },
  { text: "Active LeetCode Solver", color: "bg-neon-pink" },
];

function StatCounter({ value, label, delay }) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, ease: easeOut }}
    >
      <motion.div
        className="text-4xl md:text-5xl font-bold font-outfit mb-1"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ ...spring, delay: delay + 0.2 }}
      >
        <span className="text-gradient">{value}</span>
      </motion.div>
      <p className="text-white/50 font-inter text-sm">{label}</p>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-spacing relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* ─── Section Header ─── */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-outfit mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
          />
          <p className="text-lg text-white/40 max-w-2xl mx-auto font-inter">
            A quick look at who I am, what I do, and what drives me.
          </p>
        </motion.div>

        {/* ─── Bento Grid ─── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Main Bio Card */}
          <motion.div
            className="lg:col-span-2"
            variants={slideLeft}
          >
            <SpotlightCard spotlightColor="rgba(6, 182, 212, 0.08)" size={400}>
              <div className="glass-panel p-8 md:p-10 relative overflow-hidden group">
                <motion.div
                  className="absolute top-0 right-0 w-72 h-72 bg-neon-cyan/5 rounded-full blur-[100px] -z-10"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative z-10">
                  <motion.div
                    className="flex items-center gap-3 mb-6"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-neon-cyan/10 flex items-center justify-center"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FiUser className="text-neon-cyan" size={22} />
                    </motion.div>
                    <h3 className="text-xl font-bold font-outfit text-white">Who I Am</h3>
                  </motion.div>
                  <p className="text-lg text-white/70 leading-relaxed font-inter mb-6">
                    I'm a passionate <span className="text-neon-cyan font-semibold">Computer Science</span> student
                    and <span className="text-neon-purple font-semibold">Full-Stack Developer</span> with a deep love for
                    building things that live on the internet. I specialize in creating
                    modern, performant web applications using the <span className="text-white/90 font-medium">MERN stack</span>,
                    with a strong foundation in computer science principles.
                  </p>
                  <p className="text-base text-white/50 font-inter">
                    I believe in writing clean, maintainable code and creating experiences
                    that users love. Currently exploring cloud technologies and
                    system design.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Stat Counters */}
          <motion.div
            className="glass-panel p-8 relative overflow-hidden group"
            variants={slideRight}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-neon-pink/5"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative z-10 space-y-6">
              {stats.map((stat, i) => (
                <div key={stat.label}>
                  <StatCounter {...stat} delay={0.3 + i * 0.15} />
                  {i < stats.length - 1 && (
                    <motion.div
                      className="w-full h-px bg-white/5 mt-4"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Small Cards Row */}
          {[
            {
              icon: <FiZap size={22} />,
              title: "What I Do",
              desc: "Build modern web apps with React, Node.js, and MongoDB. Focused on performance, accessibility, and great UX.",
              accent: "bg-neon-cyan/10",
              iconColor: "text-neon-cyan",
            },
            {
              icon: <FiTarget size={22} />,
              title: "My Approach",
              desc: "Clean code, continuous learning, and attention to detail. I write maintainable solutions that scale.",
              accent: "bg-neon-purple/10",
              iconColor: "text-neon-purple",
            },
            {
              icon: <FiAward size={22} />,
              title: "Achievements",
              desc: null,
              accent: "bg-neon-pink/10",
              iconColor: "text-neon-pink",
              isAchievement: true,
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              className="glass-panel p-8 group"
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className={`w-12 h-12 rounded-xl ${card.accent} flex items-center justify-center mb-5`}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className={card.iconColor}>{card.icon}</span>
              </motion.div>
              <h3 className="text-xl font-bold font-outfit text-white mb-3">{card.title}</h3>
              {card.desc && (
                <p className="text-white/50 font-inter leading-relaxed text-sm">{card.desc}</p>
              )}
              {card.isAchievement && (
                <ul className="text-white/50 font-inter text-sm space-y-2">
                  {achievements.map((item, j) => (
                    <motion.li
                      key={item.text}
                      className="flex items-center gap-2"
                      variants={popIn}
                      custom={j}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <motion.span
                        className={`w-1.5 h-1.5 rounded-full ${item.color} flex-shrink-0`}
                        whileHover={{ scale: 2 }}
                      />
                      {item.text}
                    </motion.li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}

          {/* Education Timeline Card */}
          <motion.div
            className="lg:col-span-2 glass-panel p-8"
            variants={slideLeft}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="flex items-center gap-3 mb-8"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="w-10 h-10 rounded-xl bg-neon-purple/10 flex items-center justify-center"
                whileHover={{ rotate: 15 }}
              >
                <FiBookOpen className="text-neon-purple" size={18} />
              </motion.div>
              <h3 className="text-xl font-bold font-outfit text-white">Education</h3>
            </motion.div>

            <div className="space-y-6">
              {educationData.map((edu, idx) => (
                <motion.div
                  key={idx}
                  className="relative pl-8 border-l border-white/5 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.6, ease: easeOut }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="absolute left-[-4.5px] top-1 w-2 h-2 rounded-full bg-white/10"
                    whileHover={{ scale: 2.5, backgroundColor: "rgba(6, 182, 212, 1)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  <motion.span
                    className="text-xs text-neon-cyan font-medium tracking-wider inline-block"
                    whileHover={{ x: 3 }}
                  >
                    {edu.year}
                  </motion.span>
                  <h4 className="text-base font-bold text-white mt-1">{edu.title}</h4>
                  <p className="text-sm text-white/50">{edu.institution}</p>
                  <p className="text-sm text-white/30 mt-1">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}