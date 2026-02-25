import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote:
      "ConsultingRam transformed our business operations completely. Their strategic insights and hands-on approach delivered results beyond our expectations.",
    author: 'Sarah Johnson',
    position: 'CEO, TechCorp Industries',
    rating: 5,
  },
  {
    quote:
      "The team's expertise in digital transformation was instrumental in our 300% revenue growth. Highly recommend their services.",
    author: 'Michael Chen',
    position: 'Founder, Innovation Labs',
    rating: 5,
  },
  {
    quote:
      "Outstanding consulting experience. They understood our challenges and provided actionable solutions that made a real impact.",
    author: 'Emily Rodriguez',
    position: 'COO, Global Retail Solutions',
    rating: 5,
  },
  {
    quote:
      "Professional, knowledgeable, and results-driven. ConsultingRam has been an invaluable partner in our growth journey.",
    author: 'David Thompson',
    position: 'VP Strategy, FinanceHub',
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-white rounded-full text-purple-600 text-sm">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            What Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-8 left-8 text-blue-100">
              <Quote size={80} fill="currentColor" />
            </div>

            <div className="relative z-10">
              <div className="flex mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </p>

              <div>
                <p className="text-lg mb-1">{testimonials[currentIndex].author}</p>
                <p className="text-gray-600">{testimonials[currentIndex].position}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="text-gray-700" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="text-gray-700" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'
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
