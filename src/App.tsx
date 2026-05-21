import { useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { About } from './components/sections/About';
import { ClaimStrip } from './components/sections/ClaimStrip';
import { ContactSection } from './components/sections/ContactSection';
import { FaqSection } from './components/sections/FaqSection';
import { EventTypes } from './components/sections/EventTypes';
import { Gallery } from './components/sections/Gallery';
import { Hero } from './components/sections/Hero';
import { Logistics } from './components/sections/Logistics';
import { Packages } from './components/sections/Packages';
import { Process } from './components/sections/Process';
import { ValueSection } from './components/sections/ValueSection';
import { StructuredData } from './components/seo/StructuredData';
import { CookieConsent } from './components/ui/CookieConsent';
import { scrollToElement } from './lib/dom';

export function App() {
  useEffect(() => {
    const scrollHashIntoView = () => {
      const rawHash = window.location.hash.replace(/^#/, '');
      let hash = '';
      try {
        hash = rawHash ? decodeURIComponent(rawHash) : '';
      } catch {
        hash = rawHash;
      }
      if (!hash) return;
      const target = document.getElementById(hash);
      if (target) scrollToElement(target, 'auto');
    };

    let timeout: number | undefined;
    const frame = window.requestAnimationFrame(() => {
      scrollHashIntoView();
      timeout = window.setTimeout(scrollHashIntoView, 350);
    });

    return () => {
      window.cancelAnimationFrame(frame);
      if (timeout) window.clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ClaimStrip />
        <About />
        <Process />
        <Packages />
        <EventTypes />
        <Logistics />
        <ValueSection />
        <Gallery />
        <FaqSection />
        <ContactSection />
      </main>
      <StructuredData />
      <Footer />
      <CookieConsent />
    </>
  );
}
