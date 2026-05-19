import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { About } from './components/sections/About';
import { ClaimStrip } from './components/sections/ClaimStrip';
import { ContactSection } from './components/sections/ContactSection';
import { EventTypes } from './components/sections/EventTypes';
import { Gallery } from './components/sections/Gallery';
import { Hero } from './components/sections/Hero';
import { Logistics } from './components/sections/Logistics';
import { Packages } from './components/sections/Packages';
import { Process } from './components/sections/Process';
import { ValueSection } from './components/sections/ValueSection';

export function App() {
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
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
