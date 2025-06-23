import React from "react";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

export function OptimizedImage({ src, alt, className, ...props }: OptimizedImageProps) {
  // Extract filename without extension
  const baseUrl = src.replace(/\.(png|jpg|jpeg)$/i, "");
  const extension = src.match(/\.(png|jpg|jpeg)$/i)?.[0] || ".png";
  
  return (
    <picture>
      <source srcSet={`${baseUrl}.webp`} type="image/webp" />
      <source srcSet={src} type={`image/${extension.slice(1)}`} />
      <img src={src} alt={alt} className={className} {...props} />
    </picture>
  );
} 