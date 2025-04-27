"use client";
import Masonry from "react-masonry-css";
import Image from "next/image";

const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  // Add more images as needed
];

export default function GalleryMasonry() {
  return (
    <Masonry
      breakpointCols={{ default: 3, 900: 2, 600: 1 }}
      className="flex gap-4"
      columnClassName="flex flex-col gap-4"
    >
      {images.map((src, i) => (
        <div key={i} className="relative w-full h-64 rounded-lg overflow-hidden border border-border bg-background">
          <Image src={src} alt="Gallery" fill className="object-cover" />
        </div>
      ))}
    </Masonry>
  );
}
