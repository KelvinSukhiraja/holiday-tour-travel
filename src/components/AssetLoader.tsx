import { useEffect, useMemo, useState } from "react";
import { Loader } from "./Loader";
import { useAssetLoader } from "../hooks/useAssetLoader";

interface AssetLoaderProps {
  images?: string[];
  videos?: string[];
  fonts?: string[];
  minimumLoadTime?: number;
  children: React.ReactNode;
}

export function AssetLoader({
  images,
  videos,
  fonts,
  minimumLoadTime = 800,
  children,
}: AssetLoaderProps) {
  const hasExplicitAssets = useMemo(() => {
    return Boolean(
      (images && images.length) ||
        (videos && videos.length) ||
        (fonts && fonts.length)
    );
  }, [images, videos, fonts]);

  const { isLoading: hookLoading } = useAssetLoader(
    hasExplicitAssets
      ? { images, videos, fonts, minimumLoadTime }
      : { images: [], videos: [], fonts: [], minimumLoadTime }
  );

  const [isWindowLoaded, setIsWindowLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    if (hasExplicitAssets) return; // Hook handles loading

    if (document.readyState === "complete") {
      setIsWindowLoaded(true);
      return;
    }

    const handleLoad = () => setIsWindowLoaded(true);
    window.addEventListener("load", handleLoad, { once: true });
    return () => window.removeEventListener("load", handleLoad);
  }, [hasExplicitAssets]);

  const isLoading = hasExplicitAssets ? hookLoading : !isWindowLoaded;

  useEffect(() => {
    if (!isLoading) {
      // Trigger exit animation
      setAnimateOut(true);
    }
  }, [isLoading]);

  const handleComplete = () => {
    setShowLoader(false);
  };

  return (
    <>
      {showLoader && (
        <Loader animateOut={animateOut} onComplete={handleComplete} />
      )}
      {children}
    </>
  );
}
