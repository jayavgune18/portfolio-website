import { motion } from "framer-motion";
import { FiGithub, FiGitBranch, FiStar, FiUsers, FiTrendingUp, FiAlertCircle } from "react-icons/fi";
import { useGitHubStats } from "../hooks/useGitHubStats";

const easeOut = [0.16, 1, 0.3, 1];
const springNum = { type: "spring", stiffness: 180, damping: 16 };

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

function StatCard({ label, value, icon, accent, index }) {
  return (
    <motion.div
      variants={itemVariants}
      className="glass-panel p-6 flex items-center gap-4 group cursor-default"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <motion.div
        className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${accent}`}
        whileHover={{ scale: 1.2, rotate: 8 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {icon}
      </motion.div>
      <div>
        <motion.p
          className="text-2xl font-bold font-outfit text-white"
          initial={{ opacity: 0, scale: 0.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ ...springNum, delay: 0.3 + index * 0.1 }}
        >
          {value ?? "—"}
        </motion.p>
        <p className="text-sm text-white/40 font-inter">{label}</p>
      </div>
    </motion.div>
  );
}

export default function GitHubStats() {
  const { repos, stars, followers, loading, error } = useGitHubStats();

  const stats = [
    { label: "Public Repositories", value: repos, icon: <FiGitBranch size={22} />, accent: "text-neon-cyan" },
    { label: "Stars Earned", value: stars, icon: <FiStar size={22} />, accent: "text-yellow-400" },
    { label: "Followers", value: followers, icon: <FiUsers size={22} />, accent: "text-neon-blue" },
    {
      label: "Contributions (est.)",
      value: loading ? "..." : repos ? `${repos * 10}+` : "—",
      icon: <FiTrendingUp size={22} />,
      accent: "text-green-400",
    },
  ];

  if (error) {
    return (
      <section id="github" className="section-spacing relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-outfit mb-4">
              GitHub <span className="text-gradient">Statistics</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full mb-6" />
          </motion.div>
          <motion.div
            className="glass-panel p-8 text-center max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
            >
              <FiAlertCircle className="mx-auto mb-4 text-yellow-400" size={32} />
            </motion.div>
            <p className="text-white/60 font-inter">GitHub API rate limit reached. Stats will appear once the limit resets.</p>
            <motion.a
              href="https://github.com/jayavgune18"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-full glass-panel text-white/70 hover:text-white hover:border-neon-cyan/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub size={18} />
              View GitHub Profile
            </motion.a>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="github" className="section-spacing relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-outfit mb-4">
            GitHub <span className="text-gradient">Statistics</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
          />
          <p className="text-lg text-white/40 max-w-2xl mx-auto font-inter">
            Live data from my GitHub profile — repositories, stars, and activity.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} />
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6, ease: easeOut }}
        >
          <motion.a
            href="https://github.com/jayavgune18"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-panel text-white/60 hover:text-white hover:border-neon-cyan/30 transition-all font-inter"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
          >
            <FiGithub size={18} />
            View Full GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}