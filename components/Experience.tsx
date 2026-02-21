"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const experiences = [
  {
    id: 1,
    period: "Nov 2023 - Present",
    company: "Hero MotoCorp Ltd.",
    position: "Senior Frontend Developer",
    project: "Freedo - Two-Wheeler Rental Application (5L+ downloads)",
    highlights: [
      "Led complete frontend revamp of customer and admin portals from scratch",
      "Delivered 35% improvement in page load times through optimized architecture",
      "Built scalable UI using React.js, Redux, TypeScript, and Material-UI",
      "App deployment on App Store & Play Store with 5L+ active users",
    ],
  },
  {
    id: 2,
    period: "Oct 2020 - Nov 2023",
    company: "Daffodil Software Pvt. Ltd.",
    position: "Frontend Developer/React Developer",
    project: "Chalo App (10L+ downloads), Floom App",
    highlights: [
      "Built admin panels and customer dashboards for transportation management",
      "Developed React Native components for iOS & Android apps",
      "Integrated real-time messaging and push notifications",
      "Collaborated with design and backend teams in Agile environment",
    ],
  },
  {
    id: 3,
    period: "Jun 2020 - Sep 2020",
    company: "Geeks Inventor Pvt. Ltd.",
    position: "Frontend Developer (Internship)",
    project: "E-commerce & Content Management Systems",
    highlights: [
      "Built responsive web interfaces using React.js and HTML5",
      "Implemented CSS animations and micro-interactions",
      "Fixed bugs and optimized component performance",
      "Participated in code reviews and knowledge sharing sessions",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Experience() {
  return (
    <section className="min-h-screen bg-dark py-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
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
              Experience
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            A timeline of my professional journey building world-class products.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline dot and line */}
              <div className="absolute -left-8 top-2 flex flex-col items-center">
                <div className="w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full border-4 border-dark shadow-lg shadow-cyan-400/50" />
                {index < experiences.length - 1 && (
                  <div className="w-0.5 h-32 bg-gradient-to-b from-cyan-400/50 to-cyan-400/0 mt-2" />
                )}
              </div>

              {/* Content Card */}
              <motion.div
                whileHover={{ x: 10 }}
                className="ml-8 glassmorphism p-6 md:p-8 hover:bg-white/10 transition-all duration-500 overflow-hidden group"
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Period Badge */}
                  <div className="inline-block mb-4">
                    <span className="text-xs px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 font-semibold">
                      {exp.period}
                    </span>
                  </div>

                  {/* Company & Position */}
                  <div className="mb-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {exp.company}
                    </h3>
                    <p className="text-cyan-400 font-semibold text-lg">
                      {exp.position}
                    </p>
                  </div>

                  {/* Project */}
                  {exp.project && (
                    <p className="text-gray-300 text-sm mb-4 px-3 py-2 rounded bg-white/5 border border-white/10">
                      <span className="font-semibold">Project:</span>{" "}
                      {exp.project}
                    </p>
                  )}

                  {/* Highlights */}
                  <div className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {highlight}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 mb-6">
            Want to collaborate or learn more about my experience?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-500"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
