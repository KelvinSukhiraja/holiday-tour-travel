import { useState, useEffect } from "react";

interface AssetLoaderOptions {
  images?: string[];
  videos?: string[];
  fonts?: string[];
  minimumLoadTime?: number; // Minimum time to show loader (in ms)
}

interface LoadingState {
  isLoading: boolean;
  progress: number;
  loadedAssets: number;
  totalAssets: number;
}

export const useAssetLoader = (options: AssetLoaderOptions = {}) => {
  const {
    images = [],
    videos = [],
    fonts = [],
    minimumLoadTime = 1000,
  } = options;

  const [loadingState, setLoadingState] = useState<LoadingState>({
    isLoading: true,
    progress: 0,
    loadedAssets: 0,
    totalAssets: images.length + videos.length + fonts.length,
  });

  const [startTime] = useState(Date.now());

  useEffect(() => {
    const loadAssets = async () => {
      const promises: Promise<void>[] = [];

      // Load images
      images.forEach((src) => {
        promises.push(
          new Promise<void>((resolve) => {
            const img = new Image();
            img.onload = () => {
              setLoadingState((prev) => ({
                ...prev,
                loadedAssets: prev.loadedAssets + 1,
                progress: ((prev.loadedAssets + 1) / prev.totalAssets) * 100,
              }));
              resolve();
            };
            img.onerror = () => {
              console.warn(`Failed to load image: ${src}`);
              setLoadingState((prev) => ({
                ...prev,
                loadedAssets: prev.loadedAssets + 1,
                progress: ((prev.loadedAssets + 1) / prev.totalAssets) * 100,
              }));
              resolve();
            };
            img.src = src;
          })
        );
      });

      // Load videos
      videos.forEach((src) => {
        promises.push(
          new Promise<void>((resolve) => {
            const video = document.createElement("video");
            video.oncanplaythrough = () => {
              setLoadingState((prev) => ({
                ...prev,
                loadedAssets: prev.loadedAssets + 1,
                progress: ((prev.loadedAssets + 1) / prev.totalAssets) * 100,
              }));
              resolve();
            };
            video.onerror = () => {
              console.warn(`Failed to load video: ${src}`);
              setLoadingState((prev) => ({
                ...prev,
                loadedAssets: prev.loadedAssets + 1,
                progress: ((prev.loadedAssets + 1) / prev.totalAssets) * 100,
              }));
              resolve();
            };
            video.src = src;
            video.load();
          })
        );
      });

      // Load fonts
      fonts.forEach((fontFamily) => {
        promises.push(
          new Promise<void>((resolve) => {
            if (document.fonts) {
              document.fonts
                .load(`16px ${fontFamily}`)
                .then(() => {
                  setLoadingState((prev) => ({
                    ...prev,
                    loadedAssets: prev.loadedAssets + 1,
                    progress:
                      ((prev.loadedAssets + 1) / prev.totalAssets) * 100,
                  }));
                  resolve();
                })
                .catch(() => {
                  console.warn(`Failed to load font: ${fontFamily}`);
                  setLoadingState((prev) => ({
                    ...prev,
                    loadedAssets: prev.loadedAssets + 1,
                    progress:
                      ((prev.loadedAssets + 1) / prev.totalAssets) * 100,
                  }));
                  resolve();
                });
            } else {
              // Fallback for browsers without FontFace API
              setLoadingState((prev) => ({
                ...prev,
                loadedAssets: prev.loadedAssets + 1,
                progress: ((prev.loadedAssets + 1) / prev.totalAssets) * 100,
              }));
              resolve();
            }
          })
        );
      });

      // Wait for all assets to load
      await Promise.all(promises);

      // Ensure minimum loading time
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minimumLoadTime - elapsedTime);

      if (remainingTime > 0) {
        await new Promise((resolve) => setTimeout(resolve, remainingTime));
      }

      setLoadingState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    };

    loadAssets();
  }, [images, videos, fonts, minimumLoadTime, startTime]);

  return loadingState;
};
