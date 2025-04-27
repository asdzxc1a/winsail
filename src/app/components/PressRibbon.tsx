"use client";
import { useRef, useEffect } from "react";
import { useInView } from "@/lib/useInView";
import { useMediaQuery } from "usehooks-ts";

const logos = [
  "/logo1.svg",
  "/logo2.svg",
  "/logo3.svg",
  "/logo4.svg",
  // Add more logo paths as needed
];

export default function PressRibbon() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!inView || reducedMotion) return;
    const marquee = marqueeRef.current;
    if (!marquee) return;
    marquee.animate(
      [
        { transform: "translateX(0%)" },
        { transform: "translateX(-50%)" },
      ],
      {
        duration: 15000,
        iterations: Infinity,
        easing: "linear",
      }
    );
  }, [inView, reducedMotion]);

  return (
    <div ref={ref} className="w-full overflow-hidden bg-muted py-2 border-b border-border">
      <div ref={marqueeRef} className="flex gap-8 whitespace-nowrap">
        {logos.concat(logos).map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Brand logo"
            className="h-8 w-auto object-contain inline-block"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}
