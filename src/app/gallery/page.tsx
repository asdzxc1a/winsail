import { Metadata } from 'next';
import GalleryIndexClient from './GalleryIndexClient';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Photo gallery of our windsurfing adventures.',
};

export default function GalleryPage() {
  return <GalleryIndexClient />;
}
