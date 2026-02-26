import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Clients } from '../components/Clients';
import { CaseStudies } from '../components/CaseStudies';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Clients />
      <CaseStudies />
      <Testimonials />
      <Contact />
    </>
  );
}
