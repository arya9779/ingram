import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote:
      "Ingram Consulting Group transformed our leadership development program. Their deep understanding of government organizational dynamics and hands-on coaching approach delivered results beyond our expectations.",
    author: 'Senior Executive',
    position: 'Federal Government Agency',
    rating: 5,
  },
  {
    quote:
      "The team's expertise in strategic planning was instrumental in aligning our organization's vision with actionable goals. Their facilitation skills brought our leadership team together like never before.",
    author: 'Program Director',
    position: 'Healthcare Organization',
    rating: 5,
  },
  {
    quote:
      "Outstanding consulting experience. They understood our diversity and inclusion challenges and provided training that made a real, lasting impact on our organizational culture.",
    author: 'HR Director',
    position: 'Nonprofit Organization',
    rating: 5,
  },
  {
    quote:
      "Professional, knowledgeable, and results-driven. ICG has been an invaluable partner in developing our team's capacity and building resilient leadership throughout our agency.",
    author: 'Division Chief',
    position: 'Federal Agency',
    rating: 5,
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/10 rounded-full text-sky-300 text-sm font-medium">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            What Our Clients Say
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-xl">
            <div className="absolute top-6 left-6 text-slate-100">
              <Quote size={64} fill="currentColor" />
            </div>

            <div className="relative z-10">
              <div className="flex mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-amber-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              <p className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </p>

              <div>
                <p className="font-heading font-semibold text-slate-900">{testimonials[currentIndex].author}</p>
                <p className="text-slate-500 text-sm">{testimonials[currentIndex].position}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="text-white" size={20} />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="text-white" size={20} />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentIndex ? 'w-8 bg-sky-400' : 'w-2 bg-white/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
