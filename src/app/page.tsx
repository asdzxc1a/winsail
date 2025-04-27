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
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center min-h-[70vh] bg-black text-white text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg">The Art of Unforgettable Events</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 opacity-90">Experience the pinnacle of adult event planning, where every detail is curated for distinction, delight, and discretion. We bring your boldest visions to life with world-class creativity, flawless execution, and an unwavering commitment to privacy.</p>
        <a href="#lead-form" className="inline-block bg-white text-black px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-neutral-200 transition">Request a Private Consultation</a>
      </section>

      {/* ABOUT / VALUE PROPOSITION */}
      <section className="bg-background py-20 px-6 md:px-0">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Bespoke Events for the Discerning Few</h2>
          <p className="text-lg md:text-xl opacity-80">At [Your Brand], we specialize in designing and producing extraordinary experiences for clients who demand the exceptional. From lavish private parties and immersive themed nights to exclusive destination celebrations, our team orchestrates every moment with artistry and precision.<br/><br/>We believe your event should be as unique as you are. That’s why we offer a fully tailored approach—handling everything from venue selection and entertainment to gourmet catering, immersive décor, and seamless logistics. All you have to do is enjoy the magic.</p>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="py-20 px-6 md:px-0 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-lg">
            <div>
              <h3 className="font-semibold text-xl mb-2">Luxury Adult Parties</h3>
              <p>Curated evenings, themed galas, and unforgettable celebrations.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Exclusive Experiences</h3>
              <p>Private concerts, immersive performances, and world-class entertainment.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Destination Events</h3>
              <p>From penthouse soirées to secluded villas and exotic retreats.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Discreet Service</h3>
              <p>Total privacy and confidentiality for you and your guests.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 md:px-0 bg-background">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Us</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
            <li><span className="font-semibold">Unrivalled Creativity:</span> Our designers and planners transform ideas into realities beyond your imagination.</li>
            <li><span className="font-semibold">Attention to Detail:</span> Every element, from lighting to guest experience, is meticulously crafted.</li>
            <li><span className="font-semibold">Global Reach:</span> Based in [Your City], available worldwide for clients who expect the best.</li>
            <li><span className="font-semibold">Trusted by the Elite:</span> Our work is recognized by industry leaders and a loyal, discreet clientele.</li>
          </ul>
        </div>
      </section>

      {/* EXPERIENCE GRID (as visual showcase) */}
      <section className="py-20 px-6 md:px-0 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Signature Experiences</h2>
        <ExperienceGrid />
      </section>

      {/* DESTINATIONS (visual slider) */}
      <section className="py-20 px-6 md:px-0 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Destinations</h2>
        <Destinations />
      </section>

      {/* GALLERY (masonry) */}
      <section className="py-20 px-6 md:px-0 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
        <GalleryMasonry />
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 md:px-0 max-w-6xl mx-auto bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
        <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
        <div className="max-w-2xl mx-auto mb-8">
          <blockquote className="italic text-xl mb-4">“Every expectation was exceeded. The night was pure magic.”</blockquote>
          <div className="text-right text-lg font-semibold">— Private Client, Monaco</div>
        </div>
        <div className="max-w-2xl mx-auto mb-8">
          <blockquote className="italic text-xl mb-4">“A seamless, spectacular event. We felt like royalty.”</blockquote>
          <div className="text-right text-lg font-semibold">— Corporate Guest, London</div>
        </div>
        <TestimonialSlider />
      </section>

      {/* CTA / LEAD FORM */}
      <section id="lead-form" className="py-20 px-6 md:px-0 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Ready to create your next unforgettable event?</h2>
        <p className="text-lg text-center mb-8">Contact us for a confidential consultation and let’s make your vision a reality.</p>
        <LeadForm />
      </section>

      {/* FOOTER / SOCIAL PROOF */}
      <footer className="py-10 text-center text-gray-500 text-sm">
        As featured in <span className="font-semibold">Vogue</span>, <span className="font-semibold">Tatler</span>, and <span className="font-semibold">Forbes</span>. Proud member of <span className="font-semibold">[Industry Association]</span>, trusted by the world’s most discerning hosts.
      </footer>
    </>
  );
}
