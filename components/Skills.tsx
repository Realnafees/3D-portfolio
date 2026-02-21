"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    id: 1,
    title: "Frameworks & Languages",
    icon: "💻",
    skills: [
      "React.js",
      "Next.js",
      "React Native",
      "Redux",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML",
      "CSS",
      "SCSS",
      "Tailwind",
      "Micro frontend",
    ],
  },
  {
    id: 2,
    title: "Libraries & Tools",
    icon: "🔧",
    skills: [
      "Redux",
      "Context API",
      "GraphQL",
      "Apollo Client",
      "Material-UI",
      "Jest",
      "React Testing Library",
      "Google Maps",
      "CleverTap",
      "Mixpanel",
    ],
  },
  {
    id: 3,
    title: "Build & Deployment",
    icon: "⚙️",
    skills: [
      "Webpack",
      "npm",
      "Yarn",
      "CI/CD (Jenkins)",
      "Agile/Scrum",
      "System Design",
      "CDN",
    ],
  },
  {
    id: 4,
    title: "Performance & SEO",
    icon: "⚡",
    skills: [
      "PWA",
      "Performance Optimization",
      "Lighthouse",
      "React Profiler",
      "SEO",
      "SSR",
      "SSG",
    ],
  },
  {
    id: 5,
    title: "Tools & Platforms",
    icon: "🛠️",
    skills: [
      "Git",
      "GitHub",
      "Bitbucket",
      "Postman",
      "VS Code",
      "Chrome DevTools",
      "Azure",
      "AWS",
      "Figma",
      "Zeplin",
      "Xcode",
      "Jira",
    ],
  },
  {
    id: 6,
    title: "Core Competencies",
    icon: "🧠",
    skills: [
      "Data Structures & Algorithms",
      "LLD",
      "HLD",
      "SDLC",
      "Performance Optimization",
      "System Design",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Skills() {
  return (
    <section className="min-h-screen bg-dark-secondary py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A comprehensive toolkit of modern technologies and methodologies
            that power my development approach.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              className="group glassmorphism p-6 hover:bg-white/10 transition-all duration-500 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-400/30 hover:border-cyan-400/70 group-hover:border-cyan-400 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
