"use client";
import { Metadata } from 'next';
import Sunset from '@/content/gallery/sunset.mdx';


export default function GalleryPage() {
  return (
    <section className="prose mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Sunset Surf</h1>
      <Sunset />
    </section>
  );
}
