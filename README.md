# 🎬 Scrollytelling Portfolio

A high-end, interactive personal portfolio featuring scroll-linked canvas animations.

## ✨ Features

- **Scroll-Linked Canvas Animation**: 120-frame sequence synchronized to scroll position
- **Parallax Text Overlays**: Gradient text elements with staggered entrance animations
- **Glass-Morphism Design**: Modern UI with backdrop blur and subtle gradients
- **High-Performance Rendering**: Canvas-based animation (no video tags)
- **Responsive Design**: Mobile and desktop optimized
- **Framer Motion Integration**: Smooth, performant animations

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Rendering**: HTML5 Canvas

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main page (components assembly)
│   └── globals.css          # Global styles & Tailwind imports
├── components/
│   ├── ScrollyCanvas.tsx    # Canvas animation component
│   ├── Overlay.tsx          # Parallax text overlays
│   └── Projects.tsx         # Project showcase grid
├── lib/
│   └── frameLoader.ts       # Frame preloading utilities
├── sequence/                # Your image sequence (120 WebP frames)
├── public/                  # Static assets
└── package.json            # Dependencies
```

## 🎯 How It Works

### ScrollyCanvas

- Preloads all 120 frames on mount
- Uses Framer Motion's `useScroll` hook to track scroll position
- Maps scroll progress (0-1) to frame index (0-119)
- Renders current frame to canvas with `drawImage()` maintaining aspect ratio
- Parent container height is 500vh for a long, cinematic scroll experience

### Overlay

- Three distinct text sections appear at different scroll positions
- Uses `useTransform` to create parallax effects
- Opacity and position animations tied to scroll progress
- Gradient text for modern aesthetic

### Projects

- Glass-morphism cards with hover effects
- Scroll-triggered animations using `whileInView`
- Responsive grid (1 column mobile, 2 columns desktop)
- Modern CTA buttons with motion effects

## 🎨 Customization

### Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  dark: '#121212',        // Background
  'dark-secondary': '#1a1a1a',
  accent: '#ffffff',
}
```

### Frame Count

In `components/ScrollyCanvas.tsx`:

```typescript
const FRAME_COUNT = 120; // Change if you have fewer frames
const SECTION_HEIGHT = "500vh"; // Adjust scroll length
```

### Frame Naming

Update `lib/frameLoader.ts` if your frames have a different naming convention:

```typescript
img.src = `${baseUrl}/frame_${paddedIndex}_delay-0.067s.webp`;
```

## 📊 Performance Tips

1. **Image Preloading**: All frames load upfront, prevent stutter during scroll
2. **Canvas Rendering**: Much more performant than DOM-based animations
3. **useMotionValueEvent**: Efficient scroll listener without re-renders
4. **Next.js Optimization**: Built-in Image optimization (though we use Canvas here)

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

```bash
npm run build
# Deploy the .next directory
```

## 📝 Notes

- Ensure your frame images are WebP format for optimal compression
- Frames should be named `frame_000.webp` through `frame_119.webp`
- The dark background (#121212) matches the video frames for seamless blending
- ScrollyCanvas must be a client component due to Framer Motion hooks

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Scroll](https://www.framer.com/motion/use-scroll/)
- [Tailwind CSS](https://tailwindcss.com)
- [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

---

Built with ❤️ for high-performance web experiences.
