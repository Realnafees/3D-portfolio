"use client";

import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import DebugFrames from "@/components/DebugFrames";

export default function Home() {
  return (
    <main className="bg-dark">
      <DebugFrames />

      {/* Scrollytelling Section */}
      <ScrollyCanvas />
      <Overlay />

      {/* Projects Section */}
      <Projects />

      {/* Experience Section */}
      <Experience />

      {/* Skills Section */}
      <Skills />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="bg-dark-secondary border-t border-white/10 py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* About */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-white">About</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Senior Frontend Developer passionate about building
                high-performance digital experiences. 13+ years of experience
                with 15M+ downloads across multiple platforms.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: "Projects", href: "#projects" },
                  { name: "Experience", href: "#experience" },
                  { name: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-white">
                Get in Touch
              </h4>
              <p className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors cursor-pointer text-sm">
                hello@nafeeskhan.com
              </p>
              <p className="text-gray-400 text-sm mt-3">
                Available for freelance projects and full-time opportunities
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">
                © 2025 Nafees Khan. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-4 md:mt-0">
                Crafted with Next.js 14, Canvas & Framer Motion
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
