"use client";

interface HeroClientProps {
  title: string;
  subtitle: string;
  cta: { label: string; href: string };
}

export default function HeroClient({ title, subtitle, cta }: HeroClientProps) {
  return (
    <section className="prose mx-auto py-16 text-center">
      <h1 className="text-5xl font-bold mb-4">{title}</h1>
      <p className="text-xl mb-8">{subtitle}</p>
      <a href={cta.href} className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
        {cta.label}
      </a>
    </section>
  );
}
