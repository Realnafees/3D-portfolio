"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Freedo - Two-Wheeler Rental App",
    category: "Mobile & Web",
    image: "🚲",
    description:
      "Complete frontend revamp of customer and admin portals for Hero MotoCorp's rental platform with 5L+ downloads. Delivered 35% performance improvement through optimized architecture.",
    tags: ["React.js", "Redux", "TypeScript", "Material-UI"],
    links: [
      { label: "Live Demo", href: "https://freedo.rentals/" },
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.heerofreedo",
      },
    ],
    highlights: ["35% performance boost", "5L+ downloads", "Multi-platform"],
  },
  {
    id: 2,
    title: "Chalo App Admin Panel",
    category: "Web Dashboard",
    image: "📊",
    description:
      "Built comprehensive admin panel UI from scratch for public transportation app management, featuring real-time data visualization and advanced analytics capabilities.",
    tags: ["React.js", "JavaScript", "CSS3"],
    highlights: [
      "Real-time data viz",
      "Scalable architecture",
      "Admin dashboard",
    ],
  },
  {
    id: 3,
    title: "Floom App",
    category: "Mobile Application",
    image: "💬",
    description:
      "Created reusable React Native UI components and deployed on both Play Store and App Store with real-time messaging capabilities and seamless user experience.",
    tags: ["React Native", "Expo", "Redux"],
    links: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=app.goplus.in.myapplication",
      },
    ],
    highlights: [
      "Cross-platform",
      "Real-time messaging",
      "Multi-store deployment",
    ],
  },
  {
    id: 4,
    title: "Raga Therapy App",
    category: "Healthcare Mobile",
    image: "🎵",
    description:
      "Built from scratch using React Native for music therapy and wellness with audio streaming and personalized recommendations based on user preferences.",
    tags: ["React Native", "Audio Streaming", "Redux"],
    highlights: ["Music therapy", "Audio streaming", "Personalized UX"],
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

export default function Projects() {
  return (
    <section className="min-h-screen bg-dark py-24 px-4 md:px-8">
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
              Featured Work
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A selection of projects that showcase my expertise in building
            high-performance, visually stunning digital experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group glassmorphism p-6 md:p-8 hover:bg-white/10 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-500">
                  {project.image}
                </div>

                {/* Content */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-cyan-400 text-sm font-semibold mb-2">
                        {project.category}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-500">
                        {project.title}
                      </h3>
                    </div>
                    <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10 group-hover:border-cyan-400/50 transition-colors duration-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                {project.highlights && (
                  <div className="mb-6 space-y-1">
                    {project.highlights.map((highlight) => (
                      <p
                        key={highlight}
                        className="text-sm text-cyan-300/80 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                        {highlight}
                      </p>
                    ))}
                  </div>
                )}

                {/* Links */}
                {project.links && project.links.length > 0 && (
                  <div className="flex gap-3 mb-6">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 text-xs font-semibold text-cyan-400 border border-cyan-400/50 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 text-center"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}

                {/* CTA */}
                {!project.links || project.links.length === 0 ? (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-500 group-hover:scale-105"
                  >
                    View Case Study
                  </motion.button>
                ) : null}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to create something
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              extraordinary together?
            </span>
          </h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-dark font-bold rounded-lg hover:shadow-xl transition-all duration-500 hover:shadow-white/20"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
