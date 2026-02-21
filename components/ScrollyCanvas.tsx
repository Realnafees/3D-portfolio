"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { preloadFrames, drawImageToCanvas } from "@/lib/frameLoader";

const FRAME_COUNT = 120;
const SECTION_HEIGHT = "500vh";

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollY } = useScroll();

  // Preload frames
  useEffect(() => {
    const loadFrames = async () => {
      const images = await preloadFrames(FRAME_COUNT);

      // Validate we have valid frames
      const validImages = images.filter(
        (img) => img.width > 0 && img.height > 0,
      );

      if (validImages.length === 0) {
        console.error("❌ No valid frames loaded!");
        return;
      }

      imagesRef.current = images;
      setIsLoaded(true);

      // Draw first valid frame
      const firstValidImg = validImages[0] || images[0];
      if (canvasRef.current && firstValidImg && firstValidImg.width > 0) {
        const ctx = canvasRef.current.getContext("2d");
        if (ctx) {
          drawImageToCanvas(ctx, firstValidImg, canvasRef.current);
        }
      }
    };

    loadFrames();
  }, []);

  // Handle scroll for frame update
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!containerRef.current || !canvasRef.current || !isLoaded) return;

    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.clientHeight;
    const windowHeight = window.innerHeight;

    // Calculate scroll progress (0 to 1) within the 500vh container
    // Scrollable range: from containerTop to (containerTop + containerHeight - windowHeight)
    const scrollStart = containerTop;
    const scrollEnd = containerTop + containerHeight - windowHeight;
    const scrollRange = scrollEnd - scrollStart;

    const scrollPosition = latest - scrollStart;
    const scrollProgress = Math.max(
      0,
      Math.min(1, scrollRange > 0 ? scrollPosition / scrollRange : 0),
    );

    // Map progress to frame index
    const frameIndex = Math.floor(scrollProgress * (FRAME_COUNT - 1));
    const clampedIndex = Math.max(0, Math.min(FRAME_COUNT - 1, frameIndex));

    // Draw current frame
    if (imagesRef.current[clampedIndex]) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        drawImageToCanvas(
          ctx,
          imagesRef.current[clampedIndex],
          canvasRef.current,
        );
      }
    }
  });

  useEffect(() => {
    // Set canvas size on mount and window resize
    const resizeCanvas = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ height: SECTION_HEIGHT }}
      className="relative"
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-dark">
        {/* Loading state */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-dark z-50">
            <div className="text-center">
              <div className="w-12 h-12 border-2 border-gray-700 border-t-white rounded-full animate-spin mx-auto mb-4" />
              <p className="text-gray-400 text-sm">Loading experience...</p>
            </div>
          </div>
        )}

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
          style={{ display: isLoaded ? "block" : "none" }}
        />
      </div>
    </div>
  );
}
