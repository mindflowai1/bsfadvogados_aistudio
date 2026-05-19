/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Differentials } from './components/Differentials';
import { Timeline } from './components/Timeline';
import { Team } from './components/Team';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="font-sans text-text-base selection:bg-brand-gold/30 selection:text-white">
      <Header />
      <Hero />
      <Differentials />
      <Timeline />
      <Team />
      <Testimonials />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
