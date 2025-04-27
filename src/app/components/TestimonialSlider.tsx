"use client";

import dynamic from "next/dynamic";
import { useInView } from "@/lib/useInView";
import { useMediaQuery } from "usehooks-ts"; // tiny util

export default function TestimonialSlider() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  // Only load Swiper once the block is actually onscreen
  const Swiper = inView
    ? dynamic(() => import("swiper/react").then(m => m.Swiper), { ssr: false })
    : () => null;

  return (
    <div ref={ref}>
      {inView && (
        <Swiper
          autoplay={reducedMotion ? false : { delay: 6000 }}

          modules={[] /* import only the modules you really need */}
          className="w-full"
        >
          {/* slides… */}
        </Swiper>
      )}
    </div>
  );
}
