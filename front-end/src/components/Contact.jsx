import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiSend, FiGithub, FiLinkedin, FiInstagram, FiMail, FiPhone, FiCheck, FiLoader } from "react-icons/fi";

const easeOut = [0.16, 1, 0.3, 1];
const spring = { type: "spring", stiffness: 200, damping: 15 };

const socialLinks = [
  { name: "GitHub", icon: <FiGithub size={22} />, href: "https://github.com/jayavgune18", color: "hover:text-gray-300 hover:border-gray-400/30" },
  { name: "LinkedIn", icon: <FiLinkedin size={22} />, href: "https://www.linkedin.com/in/jay-avgune-1316b323a/", color: "hover:text-blue-400 hover:border-blue-400/30" },
  { name: "Instagram", icon: <FiInstagram size={22} />, href: "https://www.instagram.com/jay.avgune", color: "hover:text-pink-400 hover:border-pink-400/30" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

export default function Contact() {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    emailjs
      .sendForm("service_oy89oay", "template_n3jkqyj", form.current, {
        publicKey: "dq0aee7luMmW4hzxQ",
      })
      .then(
        () => {
          setSending(false);
          setSent(true);
          form.current.reset();
          setTimeout(() => setSent(false), 3000);
        },
        (err) => {
          setSending(false);
          setError("Failed to send. Please try again or email me directly.");
          console.log("FAILED...", err.text);
        }
      );
  };

  return (
    <section id="contact" className="section-spacing relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-outfit mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
          />
          <p className="text-lg text-white/40 max-w-2xl mx-auto font-inter">
            Have a project in mind? Let's build something great together.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Left Column */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.div
              className="glass-panel p-8"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3
                className="text-2xl font-bold font-outfit text-white mb-6"
                whileHover={{ x: 3 }}
              >
                Let's talk about <span className="text-gradient">everything</span>
              </motion.h3>
              <p className="text-white/50 font-inter leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out!
              </p>

              <div className="space-y-4">
                {[
                  { icon: <FiMail size={20} />, label: "Email", value: "avgunejay@gmail.com", href: "mailto:avgunejay@gmail.com", color: "bg-neon-cyan/10 text-neon-cyan" },
                  { icon: <FiPhone size={20} />, label: "Phone", value: "+91 8788190123", href: "tel:+918788190123", color: "bg-neon-purple/10 text-neon-purple" },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    className="flex items-center gap-4 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center`}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <p className="text-xs text-white/30 font-inter">{item.label}</p>
                      <a href={item.href} className="text-sm text-white/70 hover:text-neon-cyan transition-colors">
                        {item.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="glass-panel p-8"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-sm font-medium text-white/40 mb-5 uppercase tracking-wider font-inter">
                Connect with me
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-3 px-5 py-3 rounded-xl glass-panel border border-white/5 text-white/50 ${social.color} transition-all`}
                    whileHover={{ scale: 1.06, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span whileHover={{ rotate: 10 }}>{social.icon}</motion.span>
                    <span className="text-sm font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div variants={itemVariants}>
            <motion.div
              className="glass-panel p-8"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                {[
                  { label: "Your Name", name: "name", type: "text", placeholder: "John Doe" },
                  { label: "Your Email", name: "email", type: "email", placeholder: "john@example.com" },
                ].map((field) => (
                  <motion.div
                    key={field.name}
                    className="space-y-2"
                    whileFocus={{ scale: 1.01 }}
                  >
                    <label className="text-xs text-white/30 font-medium uppercase tracking-wider font-inter">
                      {field.label}
                    </label>
                    <motion.input
                      type={field.type}
                      name={field.name}
                      required
                      className="w-full px-5 py-3.5 bg-white/[0.03] border border-white/5 rounded-xl text-white placeholder:text-white/20 font-inter text-sm focus:outline-none focus:border-neon-cyan/30 focus:bg-white/[0.05] transition-all"
                      placeholder={field.placeholder}
                      whileFocus={{ scale: 1.01, borderColor: "rgba(6, 182, 212, 0.3)" }}
                    />
                  </motion.div>
                ))}

                <div className="space-y-2">
                  <label className="text-xs text-white/30 font-medium uppercase tracking-wider font-inter">
                    Your Message
                  </label>
                  <motion.textarea
                    name="message"
                    rows="5"
                    required
                    className="w-full px-5 py-3.5 bg-white/[0.03] border border-white/5 rounded-xl text-white placeholder:text-white/20 font-inter text-sm focus:outline-none focus:border-neon-cyan/30 focus:bg-white/[0.05] transition-all resize-none"
                    placeholder="Tell me about your project..."
                    whileFocus={{ scale: 1.01, borderColor: "rgba(6, 182, 212, 0.3)" }}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={sending || sent}
                  className="w-full group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-bg font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] active:scale-[0.98] disabled:opacity-70"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {sending ? (
                    <>
                      <FiLoader className="animate-spin" size={20} />
                      Sending...
                    </>
                  ) : sent ? (
                    <motion.span
                      className="flex items-center gap-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={spring}
                    >
                      <FiCheck size={20} />
                      Sent Successfully!
                    </motion.span>
                  ) : (
                    <>
                      Send Message
                      <FiSend size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </motion.button>

                {error && (
                  <motion.p
                    className="text-sm text-red-400 text-center mt-2"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {error}
                  </motion.p>
                )}
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}