import { useEffect, useMemo, useState } from 'react';

type AdaptiveImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  fallbackFrom?: string;
  fallbackTo?: string;
};

const DEFAULT_FROM = '#f1f5f9';
const DEFAULT_TO = '#e2e8f0';

const clamp = (value: number, min = 0, max = 255) => Math.min(max, Math.max(min, value));

const mix = (base: number, target: number, amount: number) =>
  Math.round(base + (target - base) * amount);

const rgbToHex = (r: number, g: number, b: number) =>
  `#${[r, g, b].map((value) => clamp(value).toString(16).padStart(2, '0')).join('')}`;

export default function AdaptiveImage({
  src,
  alt,
  className,
  imageClassName,
  fallbackFrom = DEFAULT_FROM,
  fallbackTo = DEFAULT_TO,
}: AdaptiveImageProps) {
  const [colors, setColors] = useState({ from: fallbackFrom, to: fallbackTo });

  const computedImageClassName = useMemo(
    () => `w-full h-full object-contain ${imageClassName ?? ''}`.trim(),
    [imageClassName]
  );

  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.decoding = 'async';
    img.src = src;

    img.onload = () => {
      if (cancelled) return;
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      if (!context) return;

      const sampleSize = 32;
      canvas.width = sampleSize;
      canvas.height = sampleSize;
      context.drawImage(img, 0, 0, sampleSize, sampleSize);
      const { data } = context.getImageData(0, 0, sampleSize, sampleSize);

      let r = 0;
      let g = 0;
      let b = 0;
      let count = 0;

      for (let i = 0; i < data.length; i += 4) {
        const alpha = data[i + 3];
        if (alpha < 128) continue;
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
        count += 1;
      }

      if (count === 0) return;
      r = Math.round(r / count);
      g = Math.round(g / count);
      b = Math.round(b / count);

      const lighter = rgbToHex(mix(r, 255, 0.45), mix(g, 255, 0.45), mix(b, 255, 0.45));
      const darker = rgbToHex(mix(r, 0, 0.25), mix(g, 0, 0.25), mix(b, 0, 0.25));

      setColors({ from: lighter, to: darker });
    };

    img.onerror = () => {
      if (!cancelled) {
        setColors({ from: fallbackFrom, to: fallbackTo });
      }
    };

    return () => {
      cancelled = true;
    };
  }, [src, fallbackFrom, fallbackTo]);

  return (
    <div
      className={`relative overflow-hidden ${className ?? ''}`.trim()}
      style={{
        background: `linear-gradient(135deg, ${colors.from}, ${colors.to})`,
      }}
    >
      <img src={src} alt={alt} className={computedImageClassName} />
    </div>
  );
}
