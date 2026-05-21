/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Differentials } from './components/Differentials';
import { About } from './components/About';
import { Team } from './components/Team';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="font-sans text-text-base selection:bg-brand-gold/30 selection:text-white">
      <Header />
      <Hero />
      <Differentials />
      <About />
      <Team />
      <Testimonials />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
