"use client";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-black">
      <video
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
        autoPlay
        loop
        muted
        playsInline
        onCanPlayThrough={() => setVideoLoaded(true)}
        poster="/hero-fallback.jpg"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      {/* Blur fallback image while video loads */}
      <div className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}>
        <Image
          src="/hero-fallback.jpg"
          alt="Hero fallback"
          fill
          priority
          placeholder="blur"
          blurDataURL="/hero-fallback-blur.jpg"
          className="object-cover"
        />
      </div>
      {/* Overlay content here if needed */}
    </div>
  );
}
