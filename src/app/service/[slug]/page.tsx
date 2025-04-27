import services from '@/data/services.json';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Service {
  slug: string;
  name: string;
  price: string;
  description: string;
}

interface Params {
  slug: string;
}

export async function generateStaticParams(): Promise<Params[]> {
  return services.map((service: Service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const service = services.find((s: Service) => s.slug === params.slug);
  return {
    title: service?.name || 'Service',
    description: service?.description || '',
  };
}

export default function ServicePage({ params }: { params: Params }) {
  const service = services.find((s: Service) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <div className="max-w-2xl mx-auto py-16 px-8">
      <h1 className="text-3xl font-bold">{service.name}</h1>
      <p className="mt-4">{service.description}</p>
      <p className="mt-2 text-lg font-semibold">{service.price}</p>
    </div>
  );
}
