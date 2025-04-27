// Minimal, tree-shakeable hook (≈500 B gzipped)
import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>(
  options: IntersectionObserverInit = { rootMargin: "0px", threshold: 0.15 }
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, options);
    io.observe(ref.current);
    return () => io.disconnect();
  }, [options]);

  return { ref, inView };
}
