import { Metadata } from 'next';
import hero from '../data/hero.json';
import services from '../data/services.json';
import { destinations } from '../data/destinations';
import Link from 'next/link';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import PressRibbon from './components/PressRibbon';
import ExperienceGrid from './components/ExperienceGrid';
import Destinations from './components/Destinations';
import GalleryMasonry from './components/GalleryMasonry';
import TestimonialSlider from './components/TestimonialSlider';
import LeadForm from './components/LeadForm';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: hero.title,
    description: hero.subtitle,
  };
}

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <PressRibbon />
      <section className="py-16 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Experiences</h2>
        <ExperienceGrid />
      </section>
      <section className="py-16 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Destinations</h2>
        <Destinations />
      </section>
      <section className="py-16 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Gallery</h2>
        <GalleryMasonry />
      </section>
      <section className="py-16 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <TestimonialSlider />
      </section>
      <section className="py-16 px-8 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <LeadForm />
      </section>
    </>
  );
}
