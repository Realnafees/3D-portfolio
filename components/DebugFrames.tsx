"use client";

import { useEffect, useState } from "react";

export default function DebugFrames() {
  const [frameInfo, setFrameInfo] = useState<
    {
      sample: string;
      exists: boolean;
    }[]
  >([]);

  useEffect(() => {
    const checkFrames = async () => {
      const frames = [];

      // Check first 3 frames
      for (let i = 0; i < 3; i++) {
        const paddedIndex = String(i).padStart(3, "0");
        const url = `/sequence/frame_${paddedIndex}_delay-0.067s.webp`;

        try {
          const response = await fetch(url, { method: "HEAD" });
          frames.push({
            sample: url,
            exists: response.ok,
          });
        } catch (e) {
          frames.push({
            sample: url,
            exists: false,
          });
        }
      }

      setFrameInfo(frames);
    };

    checkFrames();
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-dark-secondary border border-white/20 rounded p-4 text-xs text-gray-300 max-w-xs z-50 font-mono">
      <p className="font-bold mb-2">Frame Debug Info:</p>
      {frameInfo.map((info, i) => (
        <div
          key={i}
          className={info.exists ? "text-green-400" : "text-red-400"}
        >
          {info.exists ? "✓" : "✗"} {info.sample}
        </div>
      ))}
    </div>
  );
}
