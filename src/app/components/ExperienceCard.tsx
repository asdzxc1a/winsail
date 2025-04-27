"use client";
import Image from "next/image";
import Link from "next/link";

interface ExperienceCardProps {
  image: string;
  title: string;
  link: string;
}

export default function ExperienceCard({ image, title, link }: ExperienceCardProps) {
  return (
    <Link href={link} className="block rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform bg-background border border-border">
      <div className="relative w-full h-48">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <span className="text-blue-600 hover:underline">Learn more →</span>
      </div>
    </Link>
  );
}
