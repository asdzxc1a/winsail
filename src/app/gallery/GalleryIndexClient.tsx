"use client";
import Sunset from '@/content/gallery/sunset.mdx';
import Waves from '@/content/gallery/waves.mdx';
import Beach from '@/content/gallery/beach.mdx';
import { useState } from 'react';

const gallery = [
  { title: 'Sunset Surf', Component: Sunset },
  { title: 'Riding the Waves', Component: Waves },
  { title: 'Beach Bliss', Component: Beach },
];

export default function GalleryIndexClient() {
  const [selected, setSelected] = useState(0);
  const SelectedComponent = gallery[selected].Component;

  return (
    <div className="prose mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Gallery</h1>
      <nav className="mb-8 flex gap-4">
        {gallery.map((item, idx) => (
          <button
            key={item.title}
            className={`px-4 py-2 rounded ${selected === idx ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setSelected(idx)}
          >
            {item.title}
          </button>
        ))}
      </nav>
      <SelectedComponent />
    </div>
  );
}
