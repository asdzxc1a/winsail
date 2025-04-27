"use client";
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

import { FC, ReactNode, ComponentType } from 'react';

type ProgressiveHydrateProps = {
  importComponent: () => Promise<{ default: ComponentType<any> }>;
  placeholder: ReactNode;
  rootMargin?: string;
};

const ProgressiveHydrate: FC<ProgressiveHydrateProps> = ({ importComponent, placeholder, rootMargin = '200px' }) => {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin });
  const [Component, setComponent] = useState<ComponentType<any> | null>(null);

  useEffect(() => {
    if (inView && !Component) {
      importComponent().then((mod) => setComponent(() => mod.default));
    }
  }, [inView, Component, importComponent]);

  return (
    <div ref={ref}>
      {Component ? <Component /> : placeholder}
    </div>
  );
};

export default ProgressiveHydrate;
