// src/hooks/useAssetLoader.ts
import { useState, useEffect } from "react";

export const useAssetLoader = (assetUrls: string[]) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let loadedCount = 0;
    const totalAssets = assetUrls.length;

    if (totalAssets === 0) {
      setIsLoaded(true);
      setProgress(100);
      return;
    }

    const updateProgress = () => {
      loadedCount++;
      const currentProgress = Math.round((loadedCount / totalAssets) * 100);
      setProgress(currentProgress);

      if (loadedCount === totalAssets) {
        // Use a small timeout to ensure the 100% state is visible briefly
        setTimeout(() => setIsLoaded(true), 500);
      }
    };

    assetUrls.forEach((url) => {
      const isImage = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(url);
      const isVideo = /\.(mp4|webm|ogg)$/i.test(url);

      if (isImage) {
        const img = new Image();
        img.src = url;
        img.onload = updateProgress;
        img.onerror = updateProgress; // Count errors as "loaded" to not block the app
      } else if (isVideo) {
        const video = document.createElement("video");
        video.src = url;
        video.oncanplaythrough = updateProgress;
        video.onerror = updateProgress;
      } else {
        // If it's not an image or video, consider it "loaded"
        updateProgress();
      }
    });
  }, [assetUrls]);

  return { isLoaded, progress };
};
