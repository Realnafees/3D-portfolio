"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter, ExternalLink } from "lucide-react";

export default function Contact() {
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:hello@nafeeskhan.com",
      color: "text-cyan-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "text-blue-400",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      color: "text-white",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com",
      color: "text-sky-400",
    },
  ];

  return (
    <section
      className="min-h-screen bg-dark py-24 px-4 md:px-8 flex items-center"
      id="contact"
    >
      <div className="max-w-3xl mx-auto w-full">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-20" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
              Let's Build
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Something Amazing
            </span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            I'm always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say hi,
            feel free to reach out!
          </p>

          {/* Primary CTA */}
          <motion.a
            href="mailto:hello@nafeeskhan.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-500 mb-16"
          >
            Get in Touch
            <ExternalLink className="w-5 h-5" />
          </motion.a>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative"
                  title={link.label}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-4 glassmorphism rounded-full border border-white/10 group-hover:border-cyan-400/50 transition-all duration-500">
                    <Icon
                      className={`w-6 h-6 ${link.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Floating cards with stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
        >
          {[
            { number: "13+", label: "Years Experience" },
            { number: "15M+", label: "App Downloads" },
            { number: "35%+", label: "Performance Gains" },
            { number: "100%", label: "Dedication" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="glassmorphism p-4 text-center group hover:bg-white/10 transition-all duration-500"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
