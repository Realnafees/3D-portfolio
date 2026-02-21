"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Section 1: Top of scroll (0%)
  const opacity1 = useTransform(scrollY, [0, 500, 1500], [1, 1, 0]);
  const y1 = useTransform(scrollY, [0, 500, 1500], [0, -30, -100]);

  // Section 2: Middle (30%)
  const opacity2 = useTransform(scrollY, [1000, 1500, 2500], [0, 1, 1]);
  const x2 = useTransform(scrollY, [1000, 1500, 2500], [-100, 0, 50]);

  // Section 3: End (60%)
  const opacity3 = useTransform(scrollY, [2000, 2500, 3500], [0, 1, 1]);
  const x3 = useTransform(scrollY, [2000, 2500, 3500], [100, 0, -50]);

  return (
    <div
      ref={containerRef}
      style={{ height: "500vh" }}
      className="fixed inset-0 pointer-events-none"
    >
      {/* Section 1: Hero Text */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex items-center justify-center z-20"
      >
        <div className="text-center px-4">
          <motion.h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent leading-tight">
            Nafees Khan
          </motion.h1>
          <motion.p className="text-xl md:text-2xl text-gray-400 font-light">
            Senior Frontend Developer & Creative Technologist
          </motion.p>
        </div>
      </motion.div>

      {/* Section 2: Left-aligned text */}
      <motion.div
        style={{ opacity: opacity2, x: x2 }}
        className="absolute inset-0 flex items-center justify-start pl-8 md:pl-16 z-20"
      >
        <div className="max-w-md">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 text-white">
            Building
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              pixel-perfect products
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            13+ years of experience shipping apps with 15M+ downloads
          </p>
        </div>
      </motion.div>

      {/* Section 3: Right-aligned text */}
      <motion.div
        style={{ opacity: opacity3, x: x3 }}
        className="absolute inset-0 flex items-center justify-end pr-8 md:pr-16 z-20"
      >
        <div className="max-w-md text-right">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 text-white">
            Performance
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              meets artistry
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            35%+ performance improvements across every product
          </p>
        </div>
      </motion.div>
    </div>
  );
}
