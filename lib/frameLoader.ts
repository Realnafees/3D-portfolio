// Utility to preload all frames for scroll animation
export const preloadFrames = async (
  frameCount: number,
  baseUrl: string = '/sequence'
): Promise<HTMLImageElement[]> => {
  const loadFrame = (index: number): Promise<HTMLImageElement> => {
    return new Promise((resolve) => {
      const img = new Image();
      const paddedIndex = String(index).padStart(3, '0');
      const frameUrl = `${baseUrl}/frame_${paddedIndex}_delay-0.067s.webp`;
      
      // Set crossOrigin before src
      img.crossOrigin = 'anonymous';
      img.loading = 'eager';
      
      const timeout = setTimeout(() => {
        console.warn(`⏱ Frame ${index} load timeout`);
        resolve(img);
      }, 5000);

      img.onload = () => {
        clearTimeout(timeout);
        if (img.width > 0 && img.height > 0) {
          console.log(`✓ Loaded frame ${index} (${img.width}x${img.height})`);
        } else {
          console.error(`✗ Frame ${index} has invalid dimensions`);
        }
        resolve(img);
      };

      img.onerror = () => {
        clearTimeout(timeout);
        console.error(`✗ Failed to load frame ${index}: ${frameUrl}`);
        resolve(img);
      };

      img.src = frameUrl;
    });
  };

  console.log(`Starting to preload ${frameCount} frames from ${baseUrl}...`);
  
  // Load all frames in parallel
  const framePromises = Array.from({ length: frameCount }, (_, i) => loadFrame(i));
  const images = await Promise.all(framePromises);

  const validFrames = images.filter(img => img.width > 0 && img.height > 0);
  console.log(`✓ Image preloading complete: ${validFrames.length}/${frameCount} frames loaded successfully`);
  
  return images;
};

// Draw image to canvas maintaining aspect ratio
export const drawImageToCanvas = (
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  canvas: HTMLCanvasElement
) => {
  // Validate image is loaded and not broken
  if (!img || !img.width || !img.height) {
    console.warn('Invalid image - cannot draw to canvas');
    return;
  }

  const canvasAspect = canvas.width / canvas.height;
  const imgAspect = img.width / img.height;

  let drawWidth = canvas.width;
  let drawHeight = canvas.height;
  let offsetX = 0;
  let offsetY = 0;

  if (imgAspect > canvasAspect) {
    drawWidth = canvas.height * imgAspect;
    offsetX = (canvas.width - drawWidth) / 2;
  } else {
    drawHeight = canvas.width / imgAspect;
    offsetY = (canvas.height - drawHeight) / 2;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
};
