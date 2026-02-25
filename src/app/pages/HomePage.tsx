import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { Clients } from '../components/Clients';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';

export function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <About />
      <Clients />
      <Testimonials />
      <Contact />
    </>
  );
}
