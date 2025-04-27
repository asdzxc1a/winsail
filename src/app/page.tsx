import { Metadata } from 'next';
import hero from '../data/hero.json';
import services from '../data/services.json';
import { destinations } from '../data/destinations';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: hero.title,
    description: hero.subtitle,
  };
}

export default function Home() {
  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center p-8">
        <h1 className="text-5xl font-bold">{hero.title}</h1>
        <p className="mt-4 text-lg text-center max-w-2xl">{hero.subtitle}</p>
        <a
          href={hero.ctaLink}
          className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500"
        >
          {hero.ctaText}
        </a>
      </section>
      <section className="py-16 px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Our Packages</h2>
        <ul className="space-y-4">
          {services.map((s) => (
            <li key={s.slug}>
              <Link href={`/service/${s.slug}`} className="text-blue-600 hover:underline">
                {s.name}
              </Link> — {s.price}
            </li>
          ))}
        </ul>
      </section>
      <section className="py-16 px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Destinations</h2>
        <ul className="space-y-2">
          {destinations.map((d) => (
            <li key={d.slug}>{d.name}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
