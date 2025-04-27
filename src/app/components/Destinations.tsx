"use client";
import { destinations } from "../../data/destinations";
import { useInView } from "@/lib/useInView";
import { useMediaQuery } from "usehooks-ts";

export default function Destinations() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  return (
    <div
      ref={ref}
      className="flex gap-6 overflow-x-auto snap-x py-8 px-2 scrollbar-hide"
      style={{ scrollSnapType: "x mandatory" }}
    >
      {destinations.map((d) => (
        <div
          key={d.slug}
          className="min-w-[220px] h-40 bg-white dark:bg-gray-900 rounded-lg shadow-md flex flex-col items-center justify-center snap-center border border-border px-4"
        >
          <span className="font-bold text-xl mb-2">{d.name}</span>
          <span className="text-gray-500">{d.slug}</span>
        </div>
      ))}
    </div>
  );
}
