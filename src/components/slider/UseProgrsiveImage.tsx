import { useEffect, useState } from "react";

interface ProgressiveImageHook {
  (src: string): string | null;
}

const useProgressiveImage: ProgressiveImageHook = (src) => {
  const [sourceLoaded, setSourceLoaded] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setSourceLoaded(src);

    return () => {
      // Ważne: Zabezpieczenie przed wyciekaniem pamięci
      img.onload = null;
    };
  }, [src]);

  return sourceLoaded;
};

export default useProgressiveImage;
