import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { Clients } from '../components/Clients';
import { CaseStudies } from '../components/CaseStudies';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';

export function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <CaseStudies />
      <Clients />
      <Testimonials />
      <Contact />
    </>
  );
}
